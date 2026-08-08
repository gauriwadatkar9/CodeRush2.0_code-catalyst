"""
Telemetry simulator.

Generates synthetic time-series spacecraft telemetry (battery, temperature,
storage) using simple sinusoidal + noise models. This stands in for a real
telemetry ingestion pipeline (e.g. DSN downlink parsing, CCSDS packet
decoding) and can be swapped out without changing route/service contracts.
"""
import math
import random
from typing import List

from utils.logger import get_logger

logger = get_logger(__name__)


def _generate_series(
    base: float,
    amplitude: float,
    points: int,
    noise: float = 1.0,
    drift: float = 0.0,
    seed: int | None = None,
) -> List[float]:
    """Generate a smooth pseudo-random series using a sine wave + noise + drift."""
    rng = random.Random(seed)
    values = []
    for i in range(points):
        t = i / points
        wave = math.sin(t * math.pi * 2.4) * amplitude
        jitter = (rng.random() - 0.5) * noise
        value = base + wave + jitter + drift * i
        values.append(round(value, 1))
    return values


def _format_time_labels(points: int) -> List[str]:
    labels = []
    for i in range(points):
        hour = i // 2
        minute = "00" if i % 2 == 0 else "30"
        labels.append(f"{hour:02d}:{minute}")
    return labels


class TelemetrySimulator:
    """Simulates a rolling window of spacecraft telemetry readings."""

    def __init__(self, points: int = 24, seed: int | None = 42):
        self.points = points
        self.seed = seed

    def battery_series(self) -> List[dict]:
        values = _generate_series(base=84, amplitude=6, points=self.points, noise=1.2, drift=0.15, seed=self.seed)
        labels = _format_time_labels(self.points)
        return [
            {"time": t, "value": max(0.0, min(100.0, v))}
            for t, v in zip(labels, values)
        ]

    def temperature_series(self) -> List[dict]:
        values = _generate_series(base=-14, amplitude=5, points=self.points, noise=1.5, drift=-0.05, seed=self.seed)
        labels = _format_time_labels(self.points)
        return [{"time": t, "value": v} for t, v in zip(labels, values)]

    def storage_series(self) -> List[dict]:
        values = _generate_series(base=48, amplitude=3, points=self.points, noise=0.8, drift=0.6, seed=self.seed)
        labels = _format_time_labels(self.points)
        return [
            {"time": t, "value": max(0.0, min(100.0, v))}
            for t, v in zip(labels, values)
        ]

    def snapshot(self) -> dict:
        """Return a full telemetry snapshot across all tracked subsystems."""
        logger.debug("Generating telemetry snapshot (%d points)", self.points)
        return {
            "battery": self.battery_series(),
            "temperature": self.temperature_series(),
            "storage": self.storage_series(),
        }


# Module-level default instance used by services/routes.
default_simulator = TelemetrySimulator()
