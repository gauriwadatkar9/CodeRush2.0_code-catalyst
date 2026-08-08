"""
Telemetry service — wraps the telemetry simulator and shapes data for the API.
"""
from models.schemas import TelemetryPoint, TelemetryResponse
from simulator.telemetry_simulator import default_simulator
from utils.logger import get_logger

logger = get_logger(__name__)


class TelemetryService:
    """Provides battery, temperature, and storage telemetry series."""

    def __init__(self, simulator=default_simulator):
        self._simulator = simulator

    def get_telemetry(self) -> TelemetryResponse:
        logger.debug("Fetching telemetry snapshot")
        snapshot = self._simulator.snapshot()
        return TelemetryResponse(
            battery=[TelemetryPoint(**point) for point in snapshot["battery"]],
            temperature=[TelemetryPoint(**point) for point in snapshot["temperature"]],
            storage=[TelemetryPoint(**point) for point in snapshot["storage"]],
        )


telemetry_service = TelemetryService()
