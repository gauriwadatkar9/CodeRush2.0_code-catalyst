function genSeries(base, amplitude, points, noise = 1, drift = 0) {
  const arr = []
  for (let i = 0; i < points; i++) {
    const t = i / points
    const wave = Math.sin(t * Math.PI * 2.4) * amplitude
    const rand = (Math.random() - 0.5) * noise
    const value = base + wave + rand + drift * i
    arr.push({
      time: `${String(Math.floor(i / 2)).padStart(2, "0")}:${i % 2 === 0 ? "00" : "30"}`,
      value: Math.round(value * 10) / 10,
    })
  }
  return arr
}

export const batterySeries = genSeries(84, 6, 24, 1.2, 0.15).map((d) => ({
  time: d.time,
  battery: Math.min(100, Math.max(0, d.value)),
}))

export const temperatureSeries = genSeries(-14, 5, 24, 1.5, -0.05).map((d) => ({
  time: d.time,
  temperature: d.value,
}))

export const storageSeries = genSeries(48, 3, 24, 0.8, 0.6).map((d) => ({
  time: d.time,
  storage: Math.min(100, Math.max(0, d.value)),
}))

export const anomalies = [
  {
    id: "AN-118",
    title: "Battery discharge rate anomaly",
    description: "Discharge rate exceeded nominal envelope by 4.2% during eclipse phase, consistent with degraded cell efficiency.",
    severity: "high",
    confidence: 92,
    detectedAt: "T+214d 04h 12m",
    subsystem: "Power",
    status: "investigating",
  },
  {
    id: "AN-117",
    title: "Thermal sensor drift — Panel B",
    description: "Sensor B-3 reporting values 1.8°C below cross-validated array average over last 6 samples.",
    severity: "medium",
    confidence: 78,
    detectedAt: "T+213d 22h 40m",
    subsystem: "Thermal",
    status: "monitoring",
  },
  {
    id: "AN-116",
    title: "Storage write latency spike",
    description: "SSD write latency briefly spiked to 340ms during telemetry batch compression, above 200ms threshold.",
    severity: "low",
    confidence: 65,
    detectedAt: "T+213d 15h 05m",
    subsystem: "Storage",
    status: "resolved",
  },
  {
    id: "AN-115",
    title: "Comm link SNR dip",
    description: "Signal-to-noise ratio briefly dipped to 82% during high-gain antenna slew, recovered within 90 seconds.",
    severity: "medium",
    confidence: 71,
    detectedAt: "T+212d 19h 51m",
    subsystem: "Communications",
    status: "resolved",
  },
  {
    id: "AN-114",
    title: "Reaction wheel vibration signature",
    description: "Wheel 2 exhibiting minor high-frequency vibration signature outside baseline, magnitude still within safety margin.",
    severity: "high",
    confidence: 88,
    detectedAt: "T+211d 08h 27m",
    subsystem: "Attitude Control",
    status: "investigating",
  },
]
