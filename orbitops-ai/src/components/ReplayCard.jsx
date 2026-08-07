import { Rocket, ShieldAlert, ScanSearch, FileCheck2, UserCheck, CheckCircle2 } from 'lucide-react'

const typeConfig = {
  start: { icon: Rocket, color: 'text-cyan-accent', bg: 'bg-cyan-accent/10', border: 'border-cyan-accent/30' },
  fault: { icon: ShieldAlert, color: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/30' },
  detection: { icon: ScanSearch, color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/30' },
  suggestion: { icon: FileCheck2, color: 'text-blue-accent', bg: 'bg-blue-accent/10', border: 'border-blue-accent/30' },
  approval: { icon: UserCheck, color: 'text-violet-400', bg: 'bg-violet-400/10', border: 'border-violet-400/30' },
  recovery: { icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/30' },
}

export default function ReplayCard({ event, index, isLast }) {
  const config = typeConfig[event.type]
  const Icon = config.icon

  return (
    <div className="relative flex gap-5">
      <div className="flex flex-col items-center">
        <div className={`w-11 h-11 rounded-xl border ${config.border} ${config.bg} flex items-center justify-center shrink-0 shadow-glow z-10`}>
          <Icon className={`w-5 h-5 ${config.color}`} strokeWidth={1.75} />
        </div>
        {!isLast && <div className="flex-1 w-px bg-gradient-to-b from-white/15 to-transparent my-1" />}
      </div>
      <div className={`card card-hover p-4 md:p-5 mb-6 flex-1`}>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500">Event {String(index + 1).padStart(2, '0')}</span>
          <span className="text-xs font-mono-data text-cyan-accent">{event.timestamp}</span>
        </div>
        <h3 className="text-base font-display font-semibold text-slate-100 mt-1.5">{event.title}</h3>
        <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">{event.description}</p>
      </div>
    </div>
  )
}
