"""
Replay service — mission event playback for fault-to-recovery scenarios.
"""
from data.mock_data import REPLAY_EVENTS
from models.schemas import ReplayEvent, ReplayResponse
from utils.logger import get_logger

logger = get_logger(__name__)


class ReplayService:
    """Provides mission event replay sequences."""

    def get_replay(self) -> ReplayResponse:
        logger.debug("Fetching replay events")
        return ReplayResponse(events=[ReplayEvent(**event) for event in REPLAY_EVENTS])


replay_service = ReplayService()
