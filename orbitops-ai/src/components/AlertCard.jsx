import { AlertTriangle, AlertOctagon, AlertCircle, Clock, Cpu, CheckCircle2, Eye, Search } from 'lucide-react'

const severityConfig = {
  high: { icon: AlertOctagon, color: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/30', barColor: 'bg-red-400' },
  medium: { icon: AlertTriangle, color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/30', barColor: 'bg-amber-400' },
  low: { icon: AlertCircle, color: 'text-cyan-accent', bg: 'bg-cyan-accent/10', border: 'border-cyan-accent/30', barColor: 'bg-cyan-accent' },
}

const statusConfig = {
  investigating: { icon: Search, label: 'Investigating', color: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/20' },
  monitoring: { icon: Eye, label: 'Monitoring', color: 'text-cyan-accent', bg: 'bg-cyan-accent/10 border-cyan-accent/20' },
  resolved: { icon: CheckCircle2, label: 'Resolved', color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20' },
}

export default function AlertCard({ id, title, description, severity, confidence, detectedAt, subsystem, status }) {
  const sev = severityConfig[severity]
  const SevIcon = sev.icon
  const stat = statusConfig[status]
  const StatIcon = stat.icon

  return (
    <div className="card card-hover p-5 relative overflow-hidden">
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${sev.barColor}`} />
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-xl border ${sev.border} ${sev.bg} flex items-center justify-center shrink-0`}>
            <SevIcon className={`w-5 h-5 ${sev.color}`} strokeWidth={1.75} />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono-data text-slate-500">{id}</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">{subsystem}</span>
            </div>
            <h3 className="text-sm font-semibold text-slate-100 mt-1">{title}</h3>
          </div>
        </div>
        <span className={`flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${stat.bg} ${stat.color}`}>
          <StatIcon className="w-3 h-3" />
          {stat.label}
        </span>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed mt-3">{description}</p>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5 flex-wrap gap-3">
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <Clock className="w-3.5 h-3.5" />
          <span className="font-mono-data">{detectedAt}</span>
        </div>
        <div className="flex items-center gap-2 min-w-[140px]">
          <Cpu className="w-3.5 h-3.5 text-slate-500" />
          <div className="flex-1 h-1.5 rounded-full bg-space-700 overflow-hidden">
            <div
              className={`h-full rounded-full ${sev.barColor} transition-all duration-700`}
              style={{ width: `${confidence}%` }}
            />
          </div>
          <span className="text-xs font-mono-data text-slate-400">{confidence}%</span>
        </div>
      </div>

      <span className={`inline-block mt-3 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border ${sev.border} ${sev.bg} ${sev.color}`}>
        {severity} severity
      </span>
    </div>
  )
}
