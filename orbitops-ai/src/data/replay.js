export const replayEvents = [
  {
    id: 1,
    type: "start",
    title: "Mission Start",
    description: "ORB-7 telemetry stream initialized. All systems reporting nominal at mission epoch.",
    timestamp: "T+214d 00h 00m",
  },
  {
    id: 2,
    type: "fault",
    title: "Fault Injected",
    description: "Simulated power bus fault injected on battery bank A discharge circuit for training scenario.",
    timestamp: "T+214d 04h 09m",
  },
  {
    id: 3,
    type: "detection",
    title: "AI Detection",
    description: "Anomaly detection model flagged discharge rate deviation with 92% confidence within 3 minutes.",
    timestamp: "T+214d 04h 12m",
  },
  {
    id: 4,
    type: "suggestion",
    title: "Procedure Suggested",
    description: "AI generated mitigation procedure PR-201 — Battery Discharge Mitigation — for operator review.",
    timestamp: "T+214d 04h 14m",
  },
  {
    id: 5,
    type: "approval",
    title: "Operator Approved",
    description: "Mission operator reviewed and approved PR-201 for execution via ground command uplink.",
    timestamp: "T+214d 04h 21m",
  },
  {
    id: 6,
    type: "recovery",
    title: "Mission Recovered",
    description: "Power bus rerouted successfully. Battery discharge rate returned to nominal envelope.",
    timestamp: "T+214d 04h 38m",
  },
]
