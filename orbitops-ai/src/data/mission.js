export const mission = {
  name: "Europa Clipper Relay — ORB-7",
  status: "Nominal",
  simTime: "T+ 214d 06h 41m",
  orbit: "Europa Orbit Insertion, Rev 118",
  currentActivity: "High-gain antenna downlink — telemetry batch 118-C",
}

export const statCards = [
  {
    id: "battery",
    label: "Battery",
    value: 87,
    unit: "%",
    trend: "+0.4%",
    trendDirection: "up",
    status: "nominal",
  },
  {
    id: "temperature",
    label: "Core Temperature",
    value: -12,
    unit: "°C",
    trend: "-1.1°C",
    trendDirection: "down",
    status: "nominal",
  },
  {
    id: "storage",
    label: "Onboard Storage",
    value: 62,
    unit: "%",
    trend: "+3.2%",
    trendDirection: "up",
    status: "warning",
  },
  {
    id: "comm",
    label: "Comm Link",
    value: 98,
    unit: "% SNR",
    trend: "stable",
    trendDirection: "flat",
    status: "nominal",
  },
]

export const timelineEvents = [
  { id: 1, time: "06:00", title: "Observation Window — Ganymede Flyby Prep", type: "observation", duration: "45 min" },
  { id: 2, time: "06:50", title: "Attitude Rotation — Target Lock", type: "rotation", duration: "12 min" },
  { id: 3, time: "07:15", title: "Solar Array Charging Cycle", type: "solar", duration: "90 min" },
  { id: 4, time: "09:00", title: "Downlink Window — DSN Goldstone", type: "downlink", duration: "35 min" },
  { id: 5, time: "09:45", title: "Observation — Europa Surface Scan", type: "observation", duration: "60 min" },
  { id: 6, time: "11:00", title: "Attitude Rotation — Sun Point Safe", type: "rotation", duration: "8 min" },
  { id: 7, time: "11:20", title: "Downlink Window — DSN Canberra", type: "downlink", duration: "40 min" },
  { id: 8, time: "13:30", title: "Solar Array Charging Cycle", type: "solar", duration: "75 min" },
]
