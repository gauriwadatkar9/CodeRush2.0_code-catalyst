# OrbitOps AI — Backend

Production-ready **FastAPI** backend for the OrbitOps AI mission operations dashboard. Serves mission overview, planner timeline, telemetry streams, anomaly detections, AI-suggested procedures, and mission replay data — all from mock data / a lightweight simulator, ready to be swapped for real data sources later.

## Tech Stack

- **FastAPI** — web framework
- **Uvicorn** — ASGI server
- **Pydantic v2** — request/response validation & schemas
- **pydantic-settings** — environment-based configuration

## Project Structure

```
backend/
 ├── main.py                     # FastAPI app entrypoint, CORS, router registration
 ├── routes/                     # API route handlers (thin — delegate to services)
 │   ├── dashboard.py            # GET /api/dashboard
 │   ├── planner.py              # GET /api/planner
 │   ├── telemetry.py            # GET /api/telemetry
 │   ├── anomalies.py            # GET /api/anomalies
 │   ├── procedures.py           # GET /api/procedures, POST /{id}/decision
 │   └── replay.py                # GET /api/replay
 ├── simulator/
 │   └── telemetry_simulator.py  # Synthetic telemetry time-series generator
 ├── services/                   # Business logic layer
 │   ├── mission_service.py
 │   ├── telemetry_service.py
 │   ├── anomaly_service.py
 │   ├── procedure_service.py
 │   └── replay_service.py
 ├── models/
 │   └── schemas.py              # Pydantic request/response models
 ├── data/
 │   └── mock_data.py            # Static mock data (mission, anomalies, procedures, replay)
 ├── utils/
 │   ├── config.py                # Settings (env vars, CORS origins)
 │   └── logger.py                # Centralized logger
 ├── requirements.txt
 ├── .env.example
 └── .gitignore
```

**Architecture**: routes stay thin and only handle HTTP concerns; all business logic lives in `services/`, which pull from `data/` (static mocks) or `simulator/` (generated time-series). This makes it straightforward to later swap mock data for a real database or telemetry ingestion pipeline without touching route signatures.

## Getting Started

### 1. Create a virtual environment

```bash
cd backend
python -m venv venv
```

Activate it:

- **Windows (PowerShell):** `venv\Scripts\Activate.ps1`
- **macOS / Linux:** `source venv/bin/activate`

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Configure environment variables (optional)

```bash
cp .env.example .env
```

Defaults work out of the box for local development against a Vite frontend on `http://localhost:5173`.

### 4. Run the server

```bash
uvicorn main:app --reload
```

The API will be available at **http://localhost:8000**.

Interactive API docs:
- Swagger UI: **http://localhost:8000/docs**
- ReDoc: **http://localhost:8000/redoc**

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Health check |
| GET | `/api/health` | Health check (API-prefixed) |
| GET | `/api/dashboard` | Mission info + stat cards |
| GET | `/api/planner` | Mission timeline events |
| GET | `/api/telemetry` | Battery, temperature, storage time-series |
| GET | `/api/anomalies` | AI-flagged anomalies (optional `?severity=` filter) |
| GET | `/api/procedures` | AI-suggested mitigation procedures |
| POST | `/api/procedures/{id}/decision` | Approve/reject a procedure (`{"decision": "approved"}`) |
| GET | `/api/replay` | Mission event replay sequence |

## CORS

CORS is configured in `utils/config.py` via the `CORS_ORIGINS` environment variable (comma-separated). By default it allows `http://localhost:5173` and `http://127.0.0.1:5173`, matching the Vite dev server for the OrbitOps AI React frontend. Update `.env` if your frontend runs on a different origin.

## Notes

- All data is currently mock/generated — see `data/mock_data.py` and `simulator/telemetry_simulator.py`. No database is configured.
- Procedure approve/reject decisions are stored in memory (`services/procedure_service.py`) and reset when the server restarts. Replace with a persistent store (Postgres, Redis, etc.) for production.
- No authentication is implemented — add an auth layer (OAuth2, JWT, API keys) before exposing this publicly.

## License

MIT — free to use for personal or commercial projects.
