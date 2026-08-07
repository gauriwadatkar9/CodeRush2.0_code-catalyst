import { Activity, BatteryMedium, Thermometer, Database } from 'lucide-react'
import TelemetryChart from '../components/TelemetryChart.jsx'
import { batterySeries, temperatureSeries, storageSeries } from '../data/telemetry.js'

export default function Telemetry() {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-space-700/60 border border-white/5 flex items-center justify-center">
            <Activity className="w-5 h-5 text-cyan-accent" strokeWidth={1.75} />
          </div>
          <h1 className="font-display text-2xl font-bold text-white tracking-tight">Telemetry Streams</h1>
        </div>
        <p className="text-sm text-slate-400 mt-2 ml-[52px]">Live spacecraft subsystem trends over the last 12 hours</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <div className="card card-hover p-5 md:p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <BatteryMedium className="w-4 h-4 text-cyan-accent" />
              <h2 className="font-display font-semibold text-slate-100">Battery Level</h2>
            </div>
            <span className="text-xs font-mono-data text-slate-500">% charge</span>
          </div>
          <TelemetryChart data={batterySeries} dataKey="battery" unit="%" color="#22d3ee" label="Battery" />
        </div>

        <div className="card card-hover p-5 md:p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-blue-accent" />
              <h2 className="font-display font-semibold text-slate-100">Core Temperature</h2>
            </div>
            <span className="text-xs font-mono-data text-slate-500">°C</span>
          </div>
          <TelemetryChart data={temperatureSeries} dataKey="temperature" unit="°C" color="#3b82f6" label="Temperature" />
        </div>

        <div className="card card-hover p-5 md:p-6 xl:col-span-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-violet-400" />
              <h2 className="font-display font-semibold text-slate-100">Onboard Storage</h2>
            </div>
            <span className="text-xs font-mono-data text-slate-500">% used</span>
          </div>
          <TelemetryChart data={storageSeries} dataKey="storage" unit="%" color="#a78bfa" label="Storage" />
        </div>
      </div>
    </div>
  )
}
