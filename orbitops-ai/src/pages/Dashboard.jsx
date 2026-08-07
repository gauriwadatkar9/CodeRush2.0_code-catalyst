import { Satellite, Signal, Activity, Gauge } from 'lucide-react'
import StatCard from '../components/StatCard.jsx'
import { mission, statCards } from '../data/mission.js'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Mission header */}
      <div className="card p-6 md:p-8 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-cyan-accent/10 blur-3xl" />
        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">{mission.status}</span>
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">{mission.name}</h1>
            <p className="text-sm text-slate-400 mt-2 font-mono-data">{mission.orbit}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-space-700/50 border border-white/5">
              <Gauge className="w-5 h-5 text-cyan-accent" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Sim Time</p>
                <p className="text-sm font-mono-data text-slate-200 mt-0.5">{mission.simTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-space-700/50 border border-white/5">
              <Satellite className="w-5 h-5 text-blue-accent" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Spacecraft</p>
                <p className="text-sm font-mono-data text-slate-200 mt-0.5">ORB-7 Clipper Relay</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {statCards.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>

      {/* Current activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 card card-hover p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-space-700/60 border border-white/5 flex items-center justify-center">
              <Activity className="w-5 h-5 text-cyan-accent" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Current Activity</p>
              <h2 className="font-display text-lg font-semibold text-white">{mission.currentActivity}</h2>
            </div>
          </div>
          <div className="relative h-2 rounded-full bg-space-700 overflow-hidden">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-accent to-blue-accent" />
          </div>
          <div className="flex justify-between mt-2 text-xs text-slate-500 font-mono-data">
            <span>Batch 118-C</span>
            <span>66% complete</span>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {['Attitude: Locked', 'Payload: Idle', 'Thermal: Nominal', 'Nav: GPS+Star Tracker', 'Uplink: Standby', 'Autonomy: Level 3'].map((item) => (
              <div key={item} className="px-3 py-2.5 rounded-lg bg-space-700/40 border border-white/5 text-xs text-slate-400 font-mono-data">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="card card-hover p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-space-700/60 border border-white/5 flex items-center justify-center">
              <Signal className="w-5 h-5 text-blue-accent" strokeWidth={1.75} />
            </div>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Ground Station Status</p>
          </div>
          <div className="space-y-3 flex-1">
            {[
              { name: 'DSN Goldstone', status: 'Tracking', color: 'emerald' },
              { name: 'DSN Canberra', status: 'Standby', color: 'amber' },
              { name: 'DSN Madrid', status: 'Offline', color: 'slate' },
            ].map((station) => (
              <div key={station.name} className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-space-700/40 border border-white/5">
                <span className="text-sm text-slate-300">{station.name}</span>
                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  station.color === 'emerald' ? 'text-emerald-400 bg-emerald-400/10' :
                  station.color === 'amber' ? 'text-amber-400 bg-amber-400/10' : 'text-slate-500 bg-slate-500/10'
                }`}>
                  {station.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
