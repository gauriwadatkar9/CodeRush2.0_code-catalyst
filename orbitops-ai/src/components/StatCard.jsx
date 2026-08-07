import { BatteryMedium, Thermometer, Database, Radio, ArrowUp, ArrowDown, Minus } from 'lucide-react'

const iconMap = {
  battery: BatteryMedium,
  temperature: Thermometer,
  storage: Database,
  comm: Radio,
}

const statusStyles = {
  nominal: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  warning: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  critical: 'text-red-400 bg-red-400/10 border-red-400/20',
}

const trendIconMap = {
  up: ArrowUp,
  down: ArrowDown,
  flat: Minus,
}

export default function StatCard({ id, label, value, unit, trend, trendDirection, status }) {
  const Icon = iconMap[id] || BatteryMedium
  const TrendIcon = trendIconMap[trendDirection] || Minus

  return (
    <div className="card card-hover p-5 flex flex-col gap-4 relative overflow-hidden group">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-grid-glow pointer-events-none" />
      <div className="flex items-start justify-between relative">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-space-700/60 border border-white/5 flex items-center justify-center">
            <Icon className="w-5 h-5 text-cyan-accent" strokeWidth={1.75} />
          </div>
          <p className="text-sm text-slate-400 font-medium">{label}</p>
        </div>
        <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full border ${statusStyles[status]}`}>
          {status}
        </span>
      </div>

      <div className="relative flex items-end justify-between">
        <p className="font-display text-3xl font-semibold text-white tracking-tight">
          {value}
          <span className="text-lg text-slate-400 ml-1">{unit}</span>
        </p>
        <div className="flex items-center gap-1 text-xs font-mono-data text-slate-400">
          <TrendIcon className="w-3 h-3" />
          <span>{trend}</span>
        </div>
      </div>
    </div>
  )
}
