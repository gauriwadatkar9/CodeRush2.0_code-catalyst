"""
Procedures routes — AI-suggested mitigation procedures and operator decisions.
"""
from fastapi import APIRouter

from models.schemas import ProceduresResponse, ProcedureDecisionRequest, ProcedureDecisionResponse
from services.procedure_service import procedure_service

router = APIRouter(prefix="/api/procedures", tags=["Procedures"])


@router.get("", response_model=ProceduresResponse, summary="Get suggested procedures")
async def get_procedures() -> ProceduresResponse:
    """
    Returns AI-suggested mitigation procedures (linked to anomalies) with
    step-by-step checklists, shown on the Procedures page.
    """
    return procedure_service.get_procedures()


@router.post(
    "/{procedure_id}/decision",
    response_model=ProcedureDecisionResponse,
    summary="Approve or reject a procedure",
)
async def set_procedure_decision(
    procedure_id: str, payload: ProcedureDecisionRequest
) -> ProcedureDecisionResponse:
    """
    Records an operator's approve/reject decision for a given procedure.
    Decision state is held in memory for this reference implementation —
    swap in a persistent store for production use.
    """
    return procedure_service.set_decision(procedure_id, payload.decision)
