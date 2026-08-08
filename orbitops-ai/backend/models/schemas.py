"""
Pydantic models shared across routes and services.

These mirror the shape of data the React frontend (OrbitOps AI) expects,
so responses can be consumed with minimal transformation on the client.
"""
from typing import List, Optional

from pydantic import BaseModel, Field


# ---------------------------------------------------------------------------
# Dashboard
# ---------------------------------------------------------------------------
class MissionInfo(BaseModel):
    name: str
    status: str
    sim_time: str = Field(alias="simTime")
    orbit: str
    current_activity: str = Field(alias="currentActivity")

    model_config = {"populate_by_name": True}


class StatCard(BaseModel):
    id: str
    label: str
    value: float
    unit: str
    trend: str
    trend_direction: str = Field(alias="trendDirection")
    status: str

    model_config = {"populate_by_name": True}


class DashboardResponse(BaseModel):
    mission: MissionInfo
    stats: List[StatCard]


# ---------------------------------------------------------------------------
# Planner
# ---------------------------------------------------------------------------
class TimelineEvent(BaseModel):
    id: int
    time: str
    title: str
    type: str
    duration: str


class PlannerResponse(BaseModel):
    events: List[TimelineEvent]


# ---------------------------------------------------------------------------
# Telemetry
# ---------------------------------------------------------------------------
class TelemetryPoint(BaseModel):
    time: str
    value: float


class TelemetryResponse(BaseModel):
    battery: List[TelemetryPoint]
    temperature: List[TelemetryPoint]
    storage: List[TelemetryPoint]


# ---------------------------------------------------------------------------
# Anomalies
# ---------------------------------------------------------------------------
class Anomaly(BaseModel):
    id: str
    title: str
    description: str
    severity: str
    confidence: int
    detected_at: str = Field(alias="detectedAt")
    subsystem: str
    status: str

    model_config = {"populate_by_name": True}


class AnomaliesResponse(BaseModel):
    anomalies: List[Anomaly]


# ---------------------------------------------------------------------------
# Procedures
# ---------------------------------------------------------------------------
class Procedure(BaseModel):
    id: str
    title: str
    linked_anomaly: str = Field(alias="linkedAnomaly")
    priority: str
    ai_confidence: int = Field(alias="aiConfidence")
    summary: str
    steps: List[str]

    model_config = {"populate_by_name": True}


class ProceduresResponse(BaseModel):
    procedures: List[Procedure]


class ProcedureDecisionRequest(BaseModel):
    decision: str = Field(description="Either 'approved' or 'rejected'")


class ProcedureDecisionResponse(BaseModel):
    id: str
    status: str
    message: str


# ---------------------------------------------------------------------------
# Replay
# ---------------------------------------------------------------------------
class ReplayEvent(BaseModel):
    id: int
    type: str
    title: str
    description: str
    timestamp: str


class ReplayResponse(BaseModel):
    events: List[ReplayEvent]


# ---------------------------------------------------------------------------
# Health check
# ---------------------------------------------------------------------------
class HealthResponse(BaseModel):
    status: str
    app_name: str
    version: str
    environment: str
