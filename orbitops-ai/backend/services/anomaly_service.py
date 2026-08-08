"""
Anomaly service — AI-flagged deviation records.
"""
from typing import List, Optional

from data.mock_data import ANOMALIES
from models.schemas import Anomaly, AnomaliesResponse
from utils.logger import get_logger

logger = get_logger(__name__)


class AnomalyService:
    """Provides anomaly detection records, optionally filtered by severity."""

    def get_anomalies(self, severity: Optional[str] = None) -> AnomaliesResponse:
        logger.debug("Fetching anomalies (severity filter=%s)", severity)
        records: List[dict] = ANOMALIES
        if severity and severity != "all":
            records = [a for a in ANOMALIES if a["severity"] == severity]
        return AnomaliesResponse(anomalies=[Anomaly(**record) for record in records])


anomaly_service = AnomalyService()
