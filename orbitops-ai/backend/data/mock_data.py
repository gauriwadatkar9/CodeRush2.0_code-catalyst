"""
Static mock data for the OrbitOps AI backend.

This stands in for a real telemetry database / mission planning system.
Replace with actual data-access logic (DB queries, external APIs, etc.)
when wiring up a production data source.
"""

MISSION_INFO = {
    "name": "Europa Clipper Relay — ORB-7",
    "status": "Nominal",
    "simTime": "T+ 214d 06h 41m",
    "orbit": "Europa Orbit Insertion, Rev 118",
    "currentActivity": "High-gain antenna downlink — telemetry batch 118-C",
}

STAT_CARDS = [
    {
        "id": "battery",
        "label": "Battery",
        "value": 87,
        "unit": "%",
        "trend": "+0.4%",
        "trendDirection": "up",
        "status": "nominal",
    },
    {
        "id": "temperature",
        "label": "Core Temperature",
        "value": -12,
        "unit": "°C",
        "trend": "-1.1°C",
        "trendDirection": "down",
        "status": "nominal",
    },
    {
        "id": "storage",
        "label": "Onboard Storage",
        "value": 62,
        "unit": "%",
        "trend": "+3.2%",
        "trendDirection": "up",
        "status": "warning",
    },
    {
        "id": "comm",
        "label": "Comm Link",
        "value": 98,
        "unit": "% SNR",
        "trend": "stable",
        "trendDirection": "flat",
        "status": "nominal",
    },
]

TIMELINE_EVENTS = [
    {"id": 1, "time": "06:00", "title": "Observation Window — Ganymede Flyby Prep", "type": "observation", "duration": "45 min"},
    {"id": 2, "time": "06:50", "title": "Attitude Rotation — Target Lock", "type": "rotation", "duration": "12 min"},
    {"id": 3, "time": "07:15", "title": "Solar Array Charging Cycle", "type": "solar", "duration": "90 min"},
    {"id": 4, "time": "09:00", "title": "Downlink Window — DSN Goldstone", "type": "downlink", "duration": "35 min"},
    {"id": 5, "time": "09:45", "title": "Observation — Europa Surface Scan", "type": "observation", "duration": "60 min"},
    {"id": 6, "time": "11:00", "title": "Attitude Rotation — Sun Point Safe", "type": "rotation", "duration": "8 min"},
    {"id": 7, "time": "11:20", "title": "Downlink Window — DSN Canberra", "type": "downlink", "duration": "40 min"},
    {"id": 8, "time": "13:30", "title": "Solar Array Charging Cycle", "type": "solar", "duration": "75 min"},
]

ANOMALIES = [
    {
        "id": "AN-118",
        "title": "Battery discharge rate anomaly",
        "description": "Discharge rate exceeded nominal envelope by 4.2% during eclipse phase, consistent with degraded cell efficiency.",
        "severity": "high",
        "confidence": 92,
        "detectedAt": "T+214d 04h 12m",
        "subsystem": "Power",
        "status": "investigating",
    },
    {
        "id": "AN-117",
        "title": "Thermal sensor drift — Panel B",
        "description": "Sensor B-3 reporting values 1.8°C below cross-validated array average over last 6 samples.",
        "severity": "medium",
        "confidence": 78,
        "detectedAt": "T+213d 22h 40m",
        "subsystem": "Thermal",
        "status": "monitoring",
    },
    {
        "id": "AN-116",
        "title": "Storage write latency spike",
        "description": "SSD write latency briefly spiked to 340ms during telemetry batch compression, above 200ms threshold.",
        "severity": "low",
        "confidence": 65,
        "detectedAt": "T+213d 15h 05m",
        "subsystem": "Storage",
        "status": "resolved",
    },
    {
        "id": "AN-115",
        "title": "Comm link SNR dip",
        "description": "Signal-to-noise ratio briefly dipped to 82% during high-gain antenna slew, recovered within 90 seconds.",
        "severity": "medium",
        "confidence": 71,
        "detectedAt": "T+212d 19h 51m",
        "subsystem": "Communications",
        "status": "resolved",
    },
    {
        "id": "AN-114",
        "title": "Reaction wheel vibration signature",
        "description": "Wheel 2 exhibiting minor high-frequency vibration signature outside baseline, magnitude still within safety margin.",
        "severity": "high",
        "confidence": 88,
        "detectedAt": "T+211d 08h 27m",
        "subsystem": "Attitude Control",
        "status": "investigating",
    },
]

PROCEDURES = [
    {
        "id": "PR-201",
        "title": "Battery Discharge Mitigation",
        "linkedAnomaly": "AN-118",
        "priority": "critical",
        "aiConfidence": 91,
        "summary": "Reduce non-essential payload draw and reroute power to preserve cell health through eclipse phase.",
        "steps": [
            "Suspend non-critical instrument payloads",
            "Reroute auxiliary power bus to battery bank A",
            "Throttle downlink transmit power by 15%",
            "Re-verify state of charge after eclipse exit",
        ],
    },
    {
        "id": "PR-200",
        "title": "Thermal Sensor Cross-Calibration",
        "linkedAnomaly": "AN-117",
        "priority": "moderate",
        "aiConfidence": 76,
        "summary": "Recalibrate Panel B thermal sensor array against redundant sensor cluster to rule out drift.",
        "steps": [
            "Isolate sensor B-3 readings from control loop",
            "Cross-reference against sensor cluster B-1/B-2",
            "Apply calibration offset if drift confirmed",
            "Restore sensor B-3 to control loop",
        ],
    },
    {
        "id": "PR-199",
        "title": "Storage Compression Throttle",
        "linkedAnomaly": "AN-116",
        "priority": "low",
        "aiConfidence": 68,
        "summary": "Lower telemetry batch compression ratio to reduce write latency spikes on primary SSD.",
        "steps": [
            "Reduce compression level from 9 to 6",
            "Increase write buffer allocation by 128MB",
            "Monitor latency over next 3 batches",
        ],
    },
    {
        "id": "PR-198",
        "title": "High-Gain Antenna Slew Profile Adjustment",
        "linkedAnomaly": "AN-115",
        "priority": "moderate",
        "aiConfidence": 74,
        "summary": "Smooth antenna slew acceleration curve to reduce transient SNR degradation during repointing.",
        "steps": [
            "Load revised slew acceleration profile",
            "Validate against next scheduled repoint",
            "Confirm SNR remains above 95% threshold",
        ],
    },
]

REPLAY_EVENTS = [
    {
        "id": 1,
        "type": "start",
        "title": "Mission Start",
        "description": "ORB-7 telemetry stream initialized. All systems reporting nominal at mission epoch.",
        "timestamp": "T+214d 00h 00m",
    },
    {
        "id": 2,
        "type": "fault",
        "title": "Fault Injected",
        "description": "Simulated power bus fault injected on battery bank A discharge circuit for training scenario.",
        "timestamp": "T+214d 04h 09m",
    },
    {
        "id": 3,
        "type": "detection",
        "title": "AI Detection",
        "description": "Anomaly detection model flagged discharge rate deviation with 92% confidence within 3 minutes.",
        "timestamp": "T+214d 04h 12m",
    },
    {
        "id": 4,
        "type": "suggestion",
        "title": "Procedure Suggested",
        "description": "AI generated mitigation procedure PR-201 — Battery Discharge Mitigation — for operator review.",
        "timestamp": "T+214d 04h 14m",
    },
    {
        "id": 5,
        "type": "approval",
        "title": "Operator Approved",
        "description": "Mission operator reviewed and approved PR-201 for execution via ground command uplink.",
        "timestamp": "T+214d 04h 21m",
    },
    {
        "id": 6,
        "type": "recovery",
        "title": "Mission Recovered",
        "description": "Power bus rerouted successfully. Battery discharge rate returned to nominal envelope.",
        "timestamp": "T+214d 04h 38m",
    },
]
