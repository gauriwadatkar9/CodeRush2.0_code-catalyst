import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  CalendarClock,
  Activity,
  AlertTriangle,
  ListChecks,
  History,
  Orbit,
} from 'lucide-react'

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/planner', label: 'Planner', icon: CalendarClock },
  { to: '/telemetry', label: 'Telemetry', icon: Activity },
  { to: '/anomalies', label: 'Anomalies', icon: AlertTriangle },
  { to: '/procedures', label: 'Procedures', icon: ListChecks },
  { to: '/replay', label: 'Replay', icon: History },
]

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 border-r border-white/5 bg-space-950/80 backdrop-blur-md sticky top-0 h-screen">
      <div className="flex items-center gap-3 px-6 h-20 border-b border-white/5">
        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-accent/20 to-blue-accent/20 border border-cyan-accent/30 shadow-glow">
          <Orbit className="w-5 h-5 text-cyan-accent" strokeWidth={2} />
        </div>
        <div>
          <p className="font-display font-semibold text-white text-lg leading-none tracking-tight">OrbitOps</p>
          <p className="text-[11px] text-cyan-accent/70 font-mono-data tracking-widest mt-1">AI CONTROL</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
        <p className="px-3 text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold mb-3">Mission Ops</p>
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-cyan-accent/10 text-cyan-accent shadow-glow border border-cyan-accent/20'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-white/5 border border-transparent'
              }`
            }
          >
            <Icon className="w-4 h-4 shrink-0" strokeWidth={2} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 mx-3 mb-4 rounded-xl bg-space-800/60 border border-white/5">
        <div className="flex items-center gap-2 mb-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <p className="text-xs font-semibold text-emerald-400">Link Active</p>
        </div>
        <p className="text-[11px] text-slate-500 leading-relaxed">DSN Goldstone · 34m antenna · RTLT 43min 12s</p>
      </div>
    </aside>
  )
}
