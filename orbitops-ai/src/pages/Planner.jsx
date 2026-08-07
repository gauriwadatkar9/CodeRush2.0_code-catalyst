import { CalendarClock, Eye, RotateCw, DownloadCloud, Sun } from 'lucide-react'
import Timeline from '../components/Timeline.jsx'
import { timelineEvents } from '../data/mission.js'

const legend = [
  { type: 'observation', label: 'Observation', icon: Eye, color: 'text-cyan-accent', bg: 'bg-cyan-accent/10', border: 'border-cyan-accent/30' },
  { type: 'rotation', label: 'Rotation', icon: RotateCw, color: 'text-blue-accent', bg: 'bg-blue-accent/10', border: 'border-blue-accent/30' },
  { type: 'downlink', label: 'Downlink', icon: DownloadCloud, color: 'text-violet-400', bg: 'bg-violet-400/10', border: 'border-violet-400/30' },
  { type: 'solar', label: 'Solar Charging', icon: Sun, color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/30' },
]

export default function Planner() {
  const counts = timelineEvents.reduce((acc, e) => {
    acc[e.type] = (acc[e.type] || 0) + 1
    return acc
  }, {})

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-space-700/60 border border-white/5 flex items-center justify-center">
              <CalendarClock className="w-5 h-5 text-cyan-accent" strokeWidth={1.75} />
            </div>
            <h1 className="font-display text-2xl font-bold text-white tracking-tight">Mission Planner</h1>
          </div>
          <p className="text-sm text-slate-400 mt-2 ml-[52px]">Autonomous scheduling for observation, attitude, and comm windows</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {legend.map((item) => (
          <div key={item.type} className="card p-4 flex items-center gap-3">
            <div className={`w-9 h-9 rounded-lg border ${item.border} ${item.bg} flex items-center justify-center shrink-0`}>
              <item.icon className={`w-4 h-4 ${item.color}`} />
            </div>
            <div>
              <p className="text-xs text-slate-500">{item.label}</p>
              <p className="text-lg font-display font-semibold text-white">{counts[item.type] || 0}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-5 md:p-7">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-lg font-semibold text-white">Today's Mission Timeline</h2>
          <span className="text-xs font-mono-data text-slate-500">Sol 214 · UTC</span>
        </div>
        <Timeline events={timelineEvents} />
      </div>
    </div>
  )
}
