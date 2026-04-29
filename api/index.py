"""
Flask API — ISMR Best Model
Serves the trained Top-5 Sequential Baseline → Fine-tuned MLPRegressor.

Endpoints
---------
GET  /health   — liveness probe
GET  /info     — model metadata
POST /predict  — predict ISMR (mm) for a target year
POST /shapley  — Integrated Gradients attributions for a given feature vector

Feature attributions are computed with Integrated Gradients (Sundararajan et al.
2017) implemented directly in PyTorch — no third-party explainability library
required, fully compatible with Python 3.13+.

    IG_i(x) = (x_i − x'_i) × ∫₀¹ ∂F(x' + α(x−x')) / ∂x_i  dα

Baseline x' = all-zeros in scaled space = per-feature training mean after
StandardScaler.  Integral approximated with IG_STEPS Riemann steps (default 50).

  HF_REPO_ID  — default: "pranathitaddi/ismr-predictor"
  HF_TOKEN    — optional, only needed if the repo is private
  IG_STEPS    — Riemann steps for the path integral (default: 50)
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

# ── Hugging Face repo ─────────────────────────────────────────────────────────
HF_REPO_ID = os.getenv("HF_REPO_ID", "pranathitaddi/ismr-predictor")
HF_TOKEN   = os.getenv("HF_TOKEN", None)

MODEL_FILENAME    = "top5_seq_finetuned_best_model.pth"
X_SCALER_FILENAME = "sim_x_scaler.pkl"
Y_SCALER_FILENAME = "sim_y_scaler.pkl"
METADATA_FILENAME = "metadata.json"

# ── Feature layout ────────────────────────────────────────────────────────────
FEATURE_COLS = ["n", "An", "A", "Io"]

FEATURE_TO_SHAPLEY_KEY = {
    "n":  "nino",
    "An": "anino",
    "A":  "amo",
    "Io": "iod",
}

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


# ── Model architecture ────────────────────────────────────────────────────────
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


DEVICE = "cuda" if torch.cuda.is_available() else "cpu"


# ── Load artifacts ────────────────────────────────────────────────────────────
def _hf_download(filename: str) -> str:
    print(f"[startup] Downloading from HF Hub: {HF_REPO_ID}/{filename}")
    local_path = hf_hub_download(repo_id=HF_REPO_ID, filename=filename, token=HF_TOKEN)
    print(f"[startup]   -> cached at: {local_path}")
    return local_path


def load_artifacts():
    model_path    = _hf_download(MODEL_FILENAME)
    x_scaler_path = _hf_download(X_SCALER_FILENAME)
    y_scaler_path = _hf_download(Y_SCALER_FILENAME)

    print("[startup] Loading model weights ...")
    model = MLPRegressor(input_dim=INPUT_DIM).to(DEVICE)
    state = torch.load(model_path, map_location=DEVICE)
    model.load_state_dict(state)
    model.eval()
    print(f"[startup] Model loaded OK  | device={DEVICE}")

    x_scaler = joblib.load(x_scaler_path)
    y_scaler = joblib.load(y_scaler_path)
    print("[startup] Scalers loaded OK")

    metadata = {}
    try:
        meta_path = _hf_download(METADATA_FILENAME)
        with open(meta_path) as f:
            metadata = json.load(f)
        print("[startup] Metadata loaded OK")
    except Exception:
        print("[startup] No metadata.json found -- skipping (optional)")

    return model, x_scaler, y_scaler, metadata


try:
    MODEL, X_SCALER, Y_SCALER, METADATA = load_artifacts()
    print("[startup] All artifacts ready")
except Exception as exc:
    MODEL = X_SCALER = Y_SCALER = None
    METADATA = {}
    print(f"\n[startup] Could not load model artifacts")
    print(f"[startup]   Repo      : {HF_REPO_ID}")
    print(f"[startup]   Error type: {type(exc).__name__}")
    print(f"[startup]   Error msg : {exc}")
    traceback.print_exc()


# ── Integrated Gradients (pure PyTorch — zero extra dependencies) ─────────────
_IG_STEPS = int(os.getenv("IG_STEPS", 50))


def integrated_gradients(
    model: nn.Module,
    x_scaled: torch.Tensor,   # (1, 48) float32, already in scaled space
    n_steps: int = _IG_STEPS,
) -> np.ndarray:
    """
    Integrated Gradients attributions (Sundararajan et al., 2017).

    Baseline: all-zeros vector in scaled space.
    After StandardScaler, E[x_scaled] = 0, so zeros == training-set mean --
    the conventional "uninformative" reference point.

    The path integral is approximated by a uniform Riemann sum with n_steps
    points.  All steps are evaluated in a single batched forward+backward
    pass for efficiency.

    Returns
    -------
    attributions : (48,) ndarray
        Completeness holds: sum(attributions) ~= F(x) - F(baseline).
    """
    model.eval()  # freeze Dropout / BatchNorm

    x_scaled = x_scaled.to(DEVICE)
    baseline = torch.zeros_like(x_scaled)          # (1, 48)
    delta    = x_scaled - baseline                  # (1, 48)

    # alpha in {1/n, 2/n, ..., 1}  ->  interpolated: (n_steps, 48)
    alphas = torch.linspace(1.0 / n_steps, 1.0, n_steps, device=DEVICE)
    interpolated = (baseline + alphas.view(-1, 1, 1) * delta.unsqueeze(0)).squeeze(1)
    interpolated.requires_grad_(True)

    output = model(interpolated)      # (n_steps, 1)
    output.sum().backward()           # grad accumulates in interpolated.grad

    avg_grads    = interpolated.grad.detach().mean(dim=0)          # (48,)
    attributions = (avg_grads * delta.squeeze(0)).cpu().numpy()    # (48,)
    return attributions


def aggregate_ig_to_climate_keys(attrs_48: np.ndarray) -> dict:
    """
    Collapse 48-dim attribution vector to per-climate-variable scores.

    Vector layout:  [n_Oct, An_Oct, A_Oct, Io_Oct,  n_Nov, An_Nov, ...]
    Each of the 4 feature columns is summed across all 12 monthly slots so the
    result reflects the net seasonal contribution of each climate driver.
    """
    arr      = attrs_48.reshape(len(MONTH_SEQUENCE), len(FEATURE_COLS))  # (12, 4)
    col_sums = arr.sum(axis=0)                                            # (4,)

    result = {FEATURE_TO_SHAPLEY_KEY[col]: float(col_sums[i])
              for i, col in enumerate(FEATURE_COLS)}
    result["nao"]  = 0.0   # not a model input
    result["pdo"]  = 0.0   # not a model input
    result["ismr"] = 0.0   # the target variable, not a predictor
    return result


# ── Feature builder ───────────────────────────────────────────────────────────
def build_feature_vector(monthly_data: list, target_year: int) -> np.ndarray:
    """Build (1, 48) float32 feature array. Raises ValueError on bad input."""
    lookup = {}
    for rec in monthly_data:
        try:
            key = (int(rec["year"]), int(rec["month"]))
        except (KeyError, TypeError, ValueError) as e:
            raise ValueError(f"Each record must have integer 'year' and 'month': {e}")
        lookup[key] = rec

    features = []
    for label, year_offset, month in MONTH_SEQUENCE:
        src_year = target_year + year_offset
        key = (src_year, month)
        if key not in lookup:
            raise ValueError(
                f"Missing record for year={src_year}, month={month} (slot '{label}')."
            )
        rec = lookup[key]
        for col in FEATURE_COLS:
            val = rec.get(col)
            if val is None:
                raise ValueError(
                    f"Record year={src_year}, month={month} missing field '{col}'."
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

_raw_origins = os.getenv("ALLOWED_ORIGINS", "*")
ALLOWED_ORIGINS = (
    [o.strip() for o in _raw_origins.split(",")]
    if _raw_origins != "*"
    else "*"
)

CORS(
    app,
    origins=ALLOWED_ORIGINS,
    methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization", "X-Requested-With", "Accept"],
    expose_headers=["Content-Type"],
    supports_credentials=False,
    max_age=86400,
)


@app.before_request
def handle_preflight():
    if request.method == "OPTIONS":
        origin  = request.headers.get("Origin", "*")
        allowed = ALLOWED_ORIGINS
        if allowed == "*" or origin in allowed:
            resp = app.make_default_options_response()
            resp.headers["Access-Control-Allow-Origin"]  = origin if allowed != "*" else "*"
            resp.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
            resp.headers["Access-Control-Allow-Headers"] = (
                "Content-Type, Authorization, X-Requested-With, Accept"
            )
            resp.headers["Access-Control-Max-Age"] = "86400"
            return resp


@app.route("/health", methods=["GET"])
def health():
    if MODEL is None:
        return jsonify({"status": "error", "message": "Model not loaded"}), 503
    return jsonify({"status": "ok", "device": DEVICE, "repo": HF_REPO_ID}), 200


@app.route("/info", methods=["GET"])
def info():
    return jsonify(METADATA), 200


@app.route("/predict", methods=["POST", "OPTIONS"])
def predict():
    """
    POST body: { "target_year": 2000, "monthly_data": [...12 records...] }
    Each record: { "year", "month", "n", "An", "A", "Io" }
    Response:   { "target_year": 2000, "prediction": 856.3, "unit": "mm" }
    """
    if request.method == "OPTIONS":
        return jsonify({}), 204
    if MODEL is None:
        return jsonify({"error": "Model not loaded."}), 503

    body = request.get_json(silent=True)
    if not body:
        return jsonify({"error": "Request body must be valid JSON."}), 400

    target_year  = body.get("target_year")
    monthly_data = body.get("monthly_data")

    if target_year is None:
        return jsonify({"error": "Missing 'target_year'."}), 400
    if not isinstance(monthly_data, list) or not monthly_data:
        return jsonify({"error": "Missing or empty 'monthly_data'."}), 400
    try:
        target_year = int(target_year)
    except (TypeError, ValueError):
        return jsonify({"error": "'target_year' must be an integer."}), 400

    try:
        X_raw = build_feature_vector(monthly_data, target_year)
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 422

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


@app.route("/shapley", methods=["POST", "OPTIONS"])
def shapley():
    """
    Compute Integrated Gradients feature attributions.

    Accepts the same body as /predict.
    Returns per-climate-variable attributions summed across all 12 monthly slots.
    Variables not in the model (nao, pdo) and the target (ismr) are 0.

    Response:
    {
      "target_year": 2000,
      "shapley": {
        "nino": -0.34, "anino": 0.12, "amo": 0.28, "iod": 0.07,
        "nao": 0.0, "pdo": 0.0, "ismr": 0.0
      },
      "method": "integrated_gradients",
      "ig_steps": 50
    }
    """
    if request.method == "OPTIONS":
        return jsonify({}), 204
    if MODEL is None:
        return jsonify({"error": "Model not loaded."}), 503

    body = request.get_json(silent=True)
    if not body:
        return jsonify({"error": "Request body must be valid JSON."}), 400

    target_year  = body.get("target_year")
    monthly_data = body.get("monthly_data")

    if target_year is None:
        return jsonify({"error": "Missing 'target_year'."}), 400
    if not isinstance(monthly_data, list) or not monthly_data:
        return jsonify({"error": "Missing or empty 'monthly_data'."}), 400
    try:
        target_year = int(target_year)
    except (TypeError, ValueError):
        return jsonify({"error": "'target_year' must be an integer."}), 400

    try:
        X_raw = build_feature_vector(monthly_data, target_year)
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 422

    try:
        X_scaled  = X_SCALER.transform(X_raw).astype(np.float32)   # (1, 48)
        tensor_in = torch.tensor(X_scaled, dtype=torch.float32)     # CPU for IG

        attrs_48   = integrated_gradients(MODEL, tensor_in, n_steps=_IG_STEPS)
        aggregated = aggregate_ig_to_climate_keys(attrs_48)

    except Exception as exc:
        traceback.print_exc()
        return jsonify({"error": f"Attribution error: {exc}"}), 500

    return jsonify({
        "target_year": target_year,
        "shapley":     aggregated,
        "method":      "integrated_gradients",
        "ig_steps":    _IG_STEPS,
    }), 200


# ── Entry point ───────────────────────────────────────────────────────────────
if __name__ == "__main__":
    import multiprocessing
    from waitress import serve

    port    = int(os.getenv("PORT", 5328))
    default_threads = min(max(2, multiprocessing.cpu_count() * 2), 8)
    threads = int(os.getenv("WEB_THREADS", default_threads))

    print(f"[server] Starting Waitress WSGI server")
    print(f"[server]   host    : 0.0.0.0")
    print(f"[server]   port    : {port}")
    print(f"[server]   threads : {threads}")
    print(f"[server]   device  : {DEVICE}")
    print(f"[server]   ig_steps: {_IG_STEPS}")

    serve(app, host="0.0.0.0", port=port, threads=threads)