"""
Mission service — dashboard and planner business logic.
"""
from data.mock_data import MISSION_INFO, STAT_CARDS, TIMELINE_EVENTS
from models.schemas import DashboardResponse, MissionInfo, PlannerResponse, StatCard, TimelineEvent
from utils.logger import get_logger

logger = get_logger(__name__)


class MissionService:
    """Provides mission overview, stat cards, and planner timeline data."""

    def get_dashboard(self) -> DashboardResponse:
        logger.debug("Building dashboard response")
        mission = MissionInfo(**MISSION_INFO)
        stats = [StatCard(**card) for card in STAT_CARDS]
        return DashboardResponse(mission=mission, stats=stats)

    def get_planner(self) -> PlannerResponse:
        logger.debug("Building planner response")
        events = [TimelineEvent(**event) for event in TIMELINE_EVENTS]
        return PlannerResponse(events=events)


mission_service = MissionService()
