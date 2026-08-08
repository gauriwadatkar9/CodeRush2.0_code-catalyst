"""
Procedure service — AI-suggested mitigation procedures and operator decisions.

Decision state (approved/rejected) is kept in memory for this reference
implementation. Swap `_decisions` for a real datastore (e.g. Postgres,
Redis) in production so decisions persist across restarts and instances.
"""
from typing import Dict, Optional

from fastapi import HTTPException

from data.mock_data import PROCEDURES
from models.schemas import Procedure, ProceduresResponse, ProcedureDecisionResponse
from utils.logger import get_logger

logger = get_logger(__name__)

VALID_DECISIONS = {"approved", "rejected", "pending"}


class ProcedureService:
    """Provides AI-suggested procedures and tracks operator approve/reject decisions."""

    def __init__(self):
        self._decisions: Dict[str, str] = {p["id"]: "pending" for p in PROCEDURES}

    def get_procedures(self) -> ProceduresResponse:
        logger.debug("Fetching procedures")
        return ProceduresResponse(procedures=[Procedure(**p) for p in PROCEDURES])

    def get_decision(self, procedure_id: str) -> Optional[str]:
        return self._decisions.get(procedure_id)

    def set_decision(self, procedure_id: str, decision: str) -> ProcedureDecisionResponse:
        if procedure_id not in self._decisions:
            raise HTTPException(status_code=404, detail=f"Procedure '{procedure_id}' not found")

        if decision not in VALID_DECISIONS:
            raise HTTPException(
                status_code=400,
                detail=f"Invalid decision '{decision}'. Must be one of {sorted(VALID_DECISIONS)}",
            )

        self._decisions[procedure_id] = decision
        logger.info("Procedure %s decision set to '%s'", procedure_id, decision)

        return ProcedureDecisionResponse(
            id=procedure_id,
            status=decision,
            message=f"Procedure {procedure_id} marked as {decision}.",
        )


procedure_service = ProcedureService()
