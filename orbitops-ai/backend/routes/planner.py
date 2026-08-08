"""
Planner routes — mission timeline (observation, rotation, downlink, solar).
"""
from fastapi import APIRouter

from models.schemas import PlannerResponse
from services.mission_service import mission_service

router = APIRouter(prefix="/api/planner", tags=["Planner"])


@router.get("", response_model=PlannerResponse, summary="Get mission timeline")
async def get_planner() -> PlannerResponse:
    """
    Returns the scheduled mission timeline events (observation windows,
    attitude rotations, downlink windows, solar charging cycles) shown
    on the Planner page.
    """
    return mission_service.get_planner()
