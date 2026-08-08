"""
Anomalies routes — AI-flagged subsystem deviations.
"""
from typing import Optional

from fastapi import APIRouter, Query

from models.schemas import AnomaliesResponse
from services.anomaly_service import anomaly_service

router = APIRouter(prefix="/api/anomalies", tags=["Anomalies"])


@router.get("", response_model=AnomaliesResponse, summary="Get anomalies")
async def get_anomalies(
    severity: Optional[str] = Query(
        default=None,
        description="Filter by severity: 'high', 'medium', 'low', or omit for all.",
    )
) -> AnomaliesResponse:
    """
    Returns AI-flagged anomalies with severity, confidence, detection time,
    subsystem, and status — shown as alert cards on the Anomalies page.
    """
    return anomaly_service.get_anomalies(severity=severity)
