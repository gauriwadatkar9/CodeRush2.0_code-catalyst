"""
Telemetry routes — battery, temperature, and storage time-series data.
"""
from fastapi import APIRouter

from models.schemas import TelemetryResponse
from services.telemetry_service import telemetry_service

router = APIRouter(prefix="/api/telemetry", tags=["Telemetry"])


@router.get("", response_model=TelemetryResponse, summary="Get telemetry streams")
async def get_telemetry() -> TelemetryResponse:
    """
    Returns time-series battery, temperature, and storage telemetry for
    the charts on the Telemetry page. Backed by the telemetry simulator.
    """
    return telemetry_service.get_telemetry()
