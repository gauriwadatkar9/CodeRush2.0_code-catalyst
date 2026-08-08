"""
Dashboard routes — mission overview and stat cards.
"""
from fastapi import APIRouter

from models.schemas import DashboardResponse
from services.mission_service import mission_service

router = APIRouter(prefix="/api/dashboard", tags=["Dashboard"])


@router.get("", response_model=DashboardResponse, summary="Get dashboard overview")
async def get_dashboard() -> DashboardResponse:
    """
    Returns mission info (name, status, sim time, current activity) plus
    the battery / temperature / storage / comm-link stat cards shown on
    the Dashboard page.
    """
    return mission_service.get_dashboard()
