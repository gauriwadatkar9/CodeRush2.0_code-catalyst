import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Bell, Search, Menu, X, Orbit, LayoutDashboard, CalendarClock, Activity, AlertTriangle, ListChecks, History } from 'lucide-react'
import { mission } from '../data/mission.js'

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/planner', label: 'Planner', icon: CalendarClock },
  { to: '/telemetry', label: 'Telemetry', icon: Activity },
  { to: '/anomalies', label: 'Anomalies', icon: AlertTriangle },
  { to: '/procedures', label: 'Procedures', icon: ListChecks },
  { to: '/replay', label: 'Replay', icon: History },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 h-20 border-b border-white/5 bg-space-950/70 backdrop-blur-md">
      <div className="h-full flex items-center justify-between gap-4 px-4 md:px-8">
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 rounded-lg border border-white/10 text-slate-300 hover:text-cyan-accent hover:border-cyan-accent/30 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <Orbit className="w-5 h-5 text-cyan-accent" />
          <span className="font-display font-semibold text-white">OrbitOps</span>
        </div>

        <div className="hidden md:flex flex-col">
          <h1 className="font-display text-lg font-semibold text-white tracking-tight">{mission.name}</h1>
          <p className="text-xs text-slate-500 font-mono-data">{mission.orbit}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl bg-space-800/60 border border-white/5 w-64">
            <Search className="w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search telemetry, logs..."
              className="bg-transparent text-sm text-slate-300 placeholder:text-slate-600 outline-none w-full"
            />
          </div>

          <button className="relative p-2.5 rounded-xl bg-space-800/60 border border-white/5 text-slate-300 hover:text-cyan-accent hover:border-cyan-accent/30 transition-colors">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-red-400" />
          </button>

          <div className="flex items-center gap-3 pl-3 border-l border-white/10">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-slate-200 leading-none">Flight Director</p>
              <p className="text-[11px] text-slate-500 mt-1">On Console</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-accent to-blue-accent flex items-center justify-center text-space-950 font-display font-bold text-sm">
              FD
            </div>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-space-950/95 backdrop-blur-md px-4 py-3 space-y-1 animate-fade-in">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive ? 'bg-cyan-accent/10 text-cyan-accent border border-cyan-accent/20' : 'text-slate-400 hover:bg-white/5'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
