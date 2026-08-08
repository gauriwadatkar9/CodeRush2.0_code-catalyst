"""
Replay routes — mission event playback (fault injection to recovery).
"""
from fastapi import APIRouter

from models.schemas import ReplayResponse
from services.replay_service import replay_service

router = APIRouter(prefix="/api/replay", tags=["Replay"])


@router.get("", response_model=ReplayResponse, summary="Get mission replay events")
async def get_replay() -> ReplayResponse:
    """
    Returns the ordered mission event sequence (start, fault injected,
    AI detection, procedure suggested, operator approved, recovered)
    shown on the Replay page.
    """
    return replay_service.get_replay()
