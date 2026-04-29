import os
import signal
import time as _time


def _free_port_early(port: int) -> None:
    my_pid = os.getpid()
    hex_port = format(port, "04X")
    inodes: set = set()

    for path in ("/proc/net/tcp", "/proc/net/tcp6"):
        try:
            with open(path) as f:
                for line in f.readlines()[1:]:
                    parts = line.split()
                    if len(parts) > 9 and parts[1].split(":")[1] == hex_port:
                        inodes.add(parts[9])
        except FileNotFoundError:
            continue

    for pid_entry in os.listdir("/proc"):
        if not pid_entry.isdigit():
            continue
        pid = int(pid_entry)
        if pid == my_pid:
            continue
        fd_dir = f"/proc/{pid}/fd"
        try:
            for fd in os.listdir(fd_dir):
                try:
                    target = os.readlink(f"{fd_dir}/{fd}")
                    if target.startswith("socket:[") and target[8:-1] in inodes:
                        os.kill(pid, signal.SIGKILL)
                        break
                except OSError:
                    continue
        except OSError:
            continue

    _time.sleep(1)


if __name__ == "__main__":
    _free_port_early(int(os.getenv("FLASK_PORT", 5328)))

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

HF_REPO_ID = os.getenv("HF_REPO_ID", "pranathitaddi/ismr-predictor")
HF_TOKEN   = os.getenv("HF_TOKEN", None)

FEATURE_COLS = ["n", "An", "A", "Io"]

FEATURE_TO_SHAPLEY_KEY = {"n": "nino", "An": "anino", "A": "amo", "Io": "iod"}

MONTH_SEQUENCE = [
    ("Oct_prev", -1, 10), ("Nov_prev", -1, 11), ("Dec_prev", -1, 12),
    ("Jan",       0,  1), ("Feb",       0,  2), ("Mar",       0,  3),
    ("Apr",       0,  4), ("May",       0,  5), ("Jun",       0,  6),
    ("Jul",       0,  7), ("Aug",       0,  8), ("Sep",       0,  9),
]

INPUT_DIM = len(MONTH_SEQUENCE) * len(FEATURE_COLS)  # 48
DEVICE    = "cuda" if torch.cuda.is_available() else "cpu"
_IG_STEPS = int(os.getenv("IG_STEPS", 50))


class MLPRegressor(nn.Module):
    def __init__(self, input_dim: int = INPUT_DIM):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(input_dim, 128), nn.ReLU(), nn.Dropout(0.10),
            nn.Linear(128, 64),        nn.ReLU(), nn.Dropout(0.10),
            nn.Linear(64, 32),         nn.ReLU(),
            nn.Linear(32, 1),
        )

    def forward(self, x):
        return self.net(x)


def load_artifacts():
    def dl(filename):
        return hf_hub_download(repo_id=HF_REPO_ID, filename=filename, token=HF_TOKEN)

    model = MLPRegressor().to(DEVICE)
    model.load_state_dict(torch.load(dl("top5_seq_finetuned_best_model.pth"), map_location=DEVICE))
    model.eval()

    x_scaler = joblib.load(dl("sim_x_scaler.pkl"))
    y_scaler = joblib.load(dl("sim_y_scaler.pkl"))

    metadata = {}
    try:
        with open(dl("metadata.json")) as f:
            metadata = json.load(f)
    except Exception:
        pass

    return model, x_scaler, y_scaler, metadata


try:
    MODEL, X_SCALER, Y_SCALER, METADATA = load_artifacts()
except Exception:
    MODEL = X_SCALER = Y_SCALER = None
    METADATA = {}
    traceback.print_exc()


def integrated_gradients(model, x_scaled, n_steps=_IG_STEPS):
    x_scaled = x_scaled.to(DEVICE)
    baseline = torch.zeros_like(x_scaled)
    delta    = x_scaled - baseline

    alphas       = torch.linspace(1.0 / n_steps, 1.0, n_steps, device=DEVICE)
    interpolated = (baseline + alphas.view(-1, 1, 1) * delta.unsqueeze(0)).squeeze(1)
    interpolated.requires_grad_(True)

    model(interpolated).sum().backward()

    avg_grads = interpolated.grad.detach().mean(dim=0)
    return (avg_grads * delta.squeeze(0)).cpu().numpy()


def aggregate_ig(attrs_48):
    col_sums = attrs_48.reshape(len(MONTH_SEQUENCE), len(FEATURE_COLS)).sum(axis=0)
    result = {FEATURE_TO_SHAPLEY_KEY[col]: float(col_sums[i]) for i, col in enumerate(FEATURE_COLS)}
    result.update({"nao": 0.0, "pdo": 0.0, "ismr": 0.0})
    return result


def build_feature_vector(monthly_data, target_year):
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
            raise ValueError(f"Missing record for year={src_year}, month={month} (slot '{label}').")
        rec = lookup[key]
        for col in FEATURE_COLS:
            val = rec.get(col)
            if val is None:
                raise ValueError(f"Record year={src_year}, month={month} missing field '{col}'.")
            try:
                fval = float(val)
            except (TypeError, ValueError):
                raise ValueError(f"Field '{col}' for year={src_year}, month={month} must be numeric.")
            if np.isnan(fval):
                raise ValueError(f"Field '{col}' for year={src_year}, month={month} is NaN.")
            features.append(fval)

    return np.array(features, dtype=np.float32).reshape(1, -1)


def parse_predict_body(body):
    target_year  = body.get("target_year")
    monthly_data = body.get("monthly_data")
    if target_year is None:
        return None, None, "Missing 'target_year'."
    if not isinstance(monthly_data, list) or not monthly_data:
        return None, None, "Missing or empty 'monthly_data'."
    try:
        return int(target_year), monthly_data, None
    except (TypeError, ValueError):
        return None, None, "'target_year' must be an integer."


app = Flask(__name__)

_raw_origins = os.getenv("ALLOWED_ORIGINS", "*")
ALLOWED_ORIGINS = [o.strip() for o in _raw_origins.split(",")] if _raw_origins != "*" else "*"

CORS(app, origins=ALLOWED_ORIGINS, methods=["GET", "POST", "OPTIONS"],
     allow_headers=["Content-Type", "Authorization", "X-Requested-With", "Accept"],
     expose_headers=["Content-Type"], supports_credentials=False, max_age=86400)


@app.before_request
def handle_preflight():
    if request.method == "OPTIONS":
        origin  = request.headers.get("Origin", "*")
        allowed = ALLOWED_ORIGINS
        if allowed == "*" or origin in allowed:
            resp = app.make_default_options_response()
            resp.headers["Access-Control-Allow-Origin"]  = origin if allowed != "*" else "*"
            resp.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
            resp.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization, X-Requested-With, Accept"
            resp.headers["Access-Control-Max-Age"]       = "86400"
            return resp


@app.route("/health")
def health():
    if MODEL is None:
        return jsonify({"status": "error", "message": "Model not loaded"}), 503
    return jsonify({"status": "ok", "device": DEVICE, "repo": HF_REPO_ID})


@app.route("/info")
def info():
    return jsonify(METADATA)


@app.route("/predict", methods=["POST", "OPTIONS"])
def predict():
    if request.method == "OPTIONS":
        return jsonify({}), 204
    if MODEL is None:
        return jsonify({"error": "Model not loaded."}), 503

    body = request.get_json(silent=True)
    if not body:
        return jsonify({"error": "Request body must be valid JSON."}), 400

    target_year, monthly_data, err = parse_predict_body(body)
    if err:
        return jsonify({"error": err}), 400

    try:
        X_raw = build_feature_vector(monthly_data, target_year)
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 422

    try:
        X_scaled = X_SCALER.transform(X_raw).astype(np.float32)
        with torch.no_grad():
            pred_scaled = MODEL(torch.tensor(X_scaled).to(DEVICE)).cpu().numpy().reshape(-1)
        prediction = float(Y_SCALER.inverse_transform(pred_scaled.reshape(-1, 1)).reshape(-1)[0])
    except Exception as exc:
        traceback.print_exc()
        return jsonify({"error": f"Inference error: {exc}"}), 500

    return jsonify({"target_year": target_year, "prediction": round(prediction, 4), "unit": "mm"})


@app.route("/shapley", methods=["POST", "OPTIONS"])
def shapley():
    if request.method == "OPTIONS":
        return jsonify({}), 204
    if MODEL is None:
        return jsonify({"error": "Model not loaded."}), 503

    body = request.get_json(silent=True)
    if not body:
        return jsonify({"error": "Request body must be valid JSON."}), 400

    target_year, monthly_data, err = parse_predict_body(body)
    if err:
        return jsonify({"error": err}), 400

    try:
        X_raw = build_feature_vector(monthly_data, target_year)
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 422

    try:
        X_scaled  = X_SCALER.transform(X_raw).astype(np.float32)
        attrs_48  = integrated_gradients(MODEL, torch.tensor(X_scaled))
        aggregated = aggregate_ig(attrs_48)
    except Exception as exc:
        traceback.print_exc()
        return jsonify({"error": f"Attribution error: {exc}"}), 500

    return jsonify({"target_year": target_year, "shapley": aggregated,
                    "method": "integrated_gradients", "ig_steps": _IG_STEPS})


if __name__ == "__main__":
    import multiprocessing

    port    = int(os.getenv("FLASK_PORT", 5328))
    threads = int(os.getenv("WEB_THREADS", min(max(2, multiprocessing.cpu_count() * 2), 8)))
    app.run(host="0.0.0.0", port=port, threaded=True, use_reloader=False)