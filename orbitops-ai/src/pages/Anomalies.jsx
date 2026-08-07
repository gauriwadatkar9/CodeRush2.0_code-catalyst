import { useState, useMemo } from 'react'
import { AlertTriangle } from 'lucide-react'
import AlertCard from '../components/AlertCard.jsx'
import { anomalies } from '../data/telemetry.js'

const filters = ['all', 'high', 'medium', 'low']

export default function Anomalies() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = useMemo(
    () => (activeFilter === 'all' ? anomalies : anomalies.filter((a) => a.severity === activeFilter)),
    [activeFilter]
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-space-700/60 border border-white/5 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-cyan-accent" strokeWidth={1.75} />
            </div>
            <h1 className="font-display text-2xl font-bold text-white tracking-tight">Anomaly Detection</h1>
          </div>
          <p className="text-sm text-slate-400 mt-2 ml-[52px]">AI-flagged deviations across spacecraft subsystems</p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider border transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-cyan-accent/10 text-cyan-accent border-cyan-accent/30 shadow-glow'
                  : 'text-slate-500 border-white/5 hover:text-slate-300 hover:border-white/10'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filtered.map((anomaly) => (
          <AlertCard key={anomaly.id} {...anomaly} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="card p-12 text-center text-slate-500">No anomalies match this filter.</div>
      )}
    </div>
  )
}
