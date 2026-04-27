"""
Flask API — ISMR Best Model
Serves the trained Top-5 Sequential Baseline → Fine-tuned MLPRegressor.

Artifacts are downloaded automatically from Hugging Face Hub on first startup
and cached locally by the huggingface_hub library.

Set your repo via the environment variable:
  HF_REPO_ID  — default: "YOUR_HF_USERNAME/ismr-mlp-predictor"
  HF_TOKEN    — optional, only needed if the repo is private

Next.js usage example:
  POST /predict
  Content-Type: application/json
  Body: {
    "monthly_data": [
      {"year": 1999, "month": 10, "n": 0.5, "An": 0.1, "A": 0.3, "Io": -0.2},
      ...  // 12 rows: Oct(t-1)–Sep(t)
    ],
    "target_year": 2000
  }
"""

import os
import json
import traceback
import warnings
warnings.filterwarnings("ignore")

import numpy as np
import joblib
import torch
import torch.nn as nn

from flask import Flask, request, jsonify
from flask_cors import CORS
from huggingface_hub import hf_hub_download

# ── Hugging Face repo (override via environment variables) ────────────────────
HF_REPO_ID = os.getenv("HF_REPO_ID", "pranathitaddi/ismr-predictor")
HF_TOKEN   = os.getenv("HF_TOKEN", None)   # only needed for private repos

# ── Filenames as they exist inside the HF repo ───────────────────────────────
MODEL_FILENAME    = "top5_seq_finetuned_best_model.pth"
X_SCALER_FILENAME = "sim_x_scaler.pkl"
Y_SCALER_FILENAME = "sim_y_scaler.pkl"
METADATA_FILENAME = "metadata.json"

# ── Feature columns expected in request (real-data column names) ──────────────
# Matches SIM_TO_REAL mapping: Nino3.4→n, Atlantic Nino→An, AMO→A, IOD→Io
FEATURE_COLS = ["n", "An", "A", "Io"]

# Month window used during training: Oct(t-1) … Sep(t)
MONTH_SEQUENCE = [
    ("Oct_prev", -1, 10),
    ("Nov_prev", -1, 11),
    ("Dec_prev", -1, 12),
    ("Jan",       0,  1),
    ("Feb",       0,  2),
    ("Mar",       0,  3),
    ("Apr",       0,  4),
    ("May",       0,  5),
    ("Jun",       0,  6),
    ("Jul",       0,  7),
    ("Aug",       0,  8),
    ("Sep",       0,  9),
]

INPUT_DIM = len(MONTH_SEQUENCE) * len(FEATURE_COLS)   # 12 × 4 = 48

# ── Model architecture (must match training) ──────────────────────────────────
class MLPRegressor(nn.Module):
    def __init__(self, input_dim: int = INPUT_DIM):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(input_dim, 128), nn.ReLU(), nn.Dropout(0.10),
            nn.Linear(128, 64),        nn.ReLU(), nn.Dropout(0.10),
            nn.Linear(64, 32),         nn.ReLU(),
            nn.Linear(32, 1),
        )

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.net(x)


# ── Load artifacts at startup ─────────────────────────────────────────────────
DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

def _hf_download(filename: str) -> str:
    """
    Download a single file from HF Hub and return its local cached path.
    Uses HF_TOKEN if set (required for private repos).
    """
    print(f"[startup] Downloading from HF Hub: {HF_REPO_ID}/{filename}")
    local_path = hf_hub_download(
        repo_id=HF_REPO_ID,
        filename=filename,
        token=HF_TOKEN,
    )
    print(f"[startup]   → cached at: {local_path}")
    return local_path


def load_artifacts():
    """Download model weights and scalers from HF Hub, then load them."""

    model_path    = _hf_download(MODEL_FILENAME)
    x_scaler_path = _hf_download(X_SCALER_FILENAME)
    y_scaler_path = _hf_download(Y_SCALER_FILENAME)

    print(f"[startup] Loading model weights ...")
    model = MLPRegressor(input_dim=INPUT_DIM).to(DEVICE)
    state = torch.load(model_path, map_location=DEVICE)
    model.load_state_dict(state)
    model.eval()
    print(f"[startup] Model loaded OK  | device={DEVICE}")

    x_scaler = joblib.load(x_scaler_path)
    y_scaler = joblib.load(y_scaler_path)
    print(f"[startup] Scalers loaded OK")

    # metadata.json is optional — don't crash if it's missing from the repo
    metadata = {}
    try:
        meta_path = _hf_download(METADATA_FILENAME)
        with open(meta_path) as f:
            metadata = json.load(f)
        print(f"[startup] Metadata loaded OK")
    except Exception:
        print(f"[startup] No metadata.json found in repo — skipping (optional)")

    return model, x_scaler, y_scaler, metadata


try:
    MODEL, X_SCALER, Y_SCALER, METADATA = load_artifacts()
    print(f"[startup] ✓ All artifacts ready")
except Exception as exc:
    MODEL = X_SCALER = Y_SCALER = None
    METADATA = {}
    print(f"\n[startup] ✗ Could not load model artifacts")
    print(f"[startup]   Repo      : {HF_REPO_ID}")
    print(f"[startup]   Error type: {type(exc).__name__}")
    print(f"[startup]   Error msg : {exc}")
    print(f"[startup]   Full traceback:")
    traceback.print_exc()
    print()


# ── Feature builder ───────────────────────────────────────────────────────────
def build_feature_vector(monthly_data: list[dict], target_year: int) -> np.ndarray:
    """
    Constructs the 48-dimensional feature vector from a list of monthly records.

    Each record must contain: year, month, n, An, A, Io

    Returns shape (1, 48) float32 array ready for the scaler.
    Raises ValueError with a descriptive message on missing / invalid data.
    """
    lookup: dict[tuple[int, int], dict] = {}
    for rec in monthly_data:
        try:
            key = (int(rec["year"]), int(rec["month"]))
        except (KeyError, TypeError, ValueError) as e:
            raise ValueError(f"Each record must have integer 'year' and 'month' fields: {e}")
        lookup[key] = rec

    features: list[float] = []

    for label, year_offset, month in MONTH_SEQUENCE:
        src_year = target_year + year_offset
        key = (src_year, month)

        if key not in lookup:
            raise ValueError(
                f"Missing monthly record for year={src_year}, month={month} "
                f"(needed for window slot '{label}')."
            )

        rec = lookup[key]
        for col in FEATURE_COLS:
            val = rec.get(col)
            if val is None:
                raise ValueError(
                    f"Record for year={src_year}, month={month} is missing field '{col}'."
                )
            try:
                fval = float(val)
            except (TypeError, ValueError):
                raise ValueError(
                    f"Field '{col}' for year={src_year}, month={month} must be numeric."
                )
            if np.isnan(fval):
                raise ValueError(
                    f"Field '{col}' for year={src_year}, month={month} is NaN."
                )
            features.append(fval)

    return np.array(features, dtype=np.float32).reshape(1, -1)


# ── Flask app ─────────────────────────────────────────────────────────────────
app = Flask(__name__)
CORS(app)   # allow requests from Next.js dev server / production origin


@app.route("/health", methods=["GET"])
def health():
    """Liveness probe — returns 200 when the model is loaded."""
    if MODEL is None:
        return jsonify({"status": "error", "message": "Model not loaded"}), 503
    return jsonify({"status": "ok", "device": DEVICE, "repo": HF_REPO_ID}), 200


@app.route("/info", methods=["GET"])
def info():
    """Returns model metadata stored alongside the saved checkpoint."""
    return jsonify(METADATA), 200


@app.route("/predict", methods=["POST"])
def predict():
    """
    Predict annual Indian Summer Monsoon Rainfall (ISMR) for a given year.

    Request body (JSON):
    {
      "target_year": 2000,
      "monthly_data": [
        {"year": 1999, "month": 10, "n": 0.5, "An": 0.1, "A": 0.3, "Io": -0.2},
        {"year": 1999, "month": 11, "n": 0.4, "An": 0.0, "A": 0.2, "Io": -0.1},
        {"year": 1999, "month": 12, "n": 0.3, "An": 0.1, "A": 0.1, "Io":  0.0},
        {"year": 2000, "month":  1, "n": 0.2, "An": 0.2, "A": 0.0, "Io":  0.1},
        ... (continue through month 9 of target_year)
      ]
    }

    Response (JSON):
    {
      "target_year": 2000,
      "prediction": 856.3,   // predicted ISMR in mm
      "unit": "mm"
    }
    """
    if MODEL is None:
        return jsonify({"error": "Model not loaded. Check server logs."}), 503

    body = request.get_json(silent=True)
    if not body:
        return jsonify({"error": "Request body must be valid JSON."}), 400

    # ── Validate inputs ───────────────────────────────────────────────────────
    target_year  = body.get("target_year")
    monthly_data = body.get("monthly_data")

    if target_year is None:
        return jsonify({"error": "Missing required field: 'target_year'."}), 400
    if not isinstance(monthly_data, list) or len(monthly_data) == 0:
        return jsonify({"error": "Missing or empty 'monthly_data' list."}), 400

    try:
        target_year = int(target_year)
    except (TypeError, ValueError):
        return jsonify({"error": "'target_year' must be an integer."}), 400

    # ── Build features ────────────────────────────────────────────────────────
    try:
        X_raw = build_feature_vector(monthly_data, target_year)
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 422

    # ── Scale → infer → inverse-scale ────────────────────────────────────────
    try:
        X_scaled  = X_SCALER.transform(X_raw).astype(np.float32)
        tensor_in = torch.tensor(X_scaled, dtype=torch.float32).to(DEVICE)

        with torch.no_grad():
            pred_scaled = MODEL(tensor_in).cpu().numpy().reshape(-1)

        prediction = float(
            Y_SCALER.inverse_transform(pred_scaled.reshape(-1, 1)).reshape(-1)[0]
        )
    except Exception as exc:
        traceback.print_exc()
        return jsonify({"error": f"Inference error: {exc}"}), 500

    return jsonify({
        "target_year": target_year,
        "prediction":  round(prediction, 4),
        "unit":        "mm",
    }), 200


# ── Entry point ───────────────────────────────────────────────────────────────
if __name__ == "__main__":
    port  = int(os.getenv("PORT", 5328))
    debug = os.getenv("FLASK_DEBUG", "false").lower() == "true"
    app.run(host="0.0.0.0", port=port, debug=debug)