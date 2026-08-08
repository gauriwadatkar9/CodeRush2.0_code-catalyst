"""
OrbitOps AI Backend — FastAPI application entrypoint.

Run with:
    uvicorn main:app --reload
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models.schemas import HealthResponse
from routes import anomalies, dashboard, planner, procedures, replay, telemetry
from utils.config import get_settings
from utils.logger import get_logger

settings = get_settings()
logger = get_logger(__name__)

app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
    description=(
        "Backend API for the OrbitOps AI mission operations dashboard. "
        "Serves mission overview, planner timeline, telemetry streams, "
        "anomaly detections, AI-suggested procedures, and mission replay data."
    ),
)

# ---------------------------------------------------------------------------
# CORS — allow the React (Vite) frontend to call this API.
# ---------------------------------------------------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------------------------------
# Routers
# ---------------------------------------------------------------------------
app.include_router(dashboard.router)
app.include_router(planner.router)
app.include_router(telemetry.router)
app.include_router(anomalies.router)
app.include_router(procedures.router)
app.include_router(replay.router)


@app.get("/", response_model=HealthResponse, tags=["Health"], summary="Health check")
async def root() -> HealthResponse:
    """Basic health check / API status endpoint."""
    return HealthResponse(
        status="ok",
        app_name=settings.app_name,
        version=settings.app_version,
        environment=settings.environment,
    )


@app.get("/api/health", response_model=HealthResponse, tags=["Health"], summary="API health check")
async def health() -> HealthResponse:
    """Health check endpoint under the /api prefix, for load balancers / uptime checks."""
    return HealthResponse(
        status="ok",
        app_name=settings.app_name,
        version=settings.app_version,
        environment=settings.environment,
    )


@app.on_event("startup")
async def on_startup() -> None:
    logger.info("%s v%s starting up (env=%s)", settings.app_name, settings.app_version, settings.environment)
    logger.info("CORS allowed origins: %s", settings.cors_origins_list)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host=settings.host, port=settings.port, reload=settings.debug)
