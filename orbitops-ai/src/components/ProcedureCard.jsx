import { ListChecks, Cpu, Link2 } from 'lucide-react'
import ApprovalBox from './ApprovalBox.jsx'

const priorityConfig = {
  critical: { color: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/30' },
  moderate: { color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/30' },
  low: { color: 'text-cyan-accent', bg: 'bg-cyan-accent/10', border: 'border-cyan-accent/30' },
}

export default function ProcedureCard({ procedure, status, onApprove, onReject }) {
  const { id, title, linkedAnomaly, priority, aiConfidence, summary, steps } = procedure
  const pri = priorityConfig[priority]

  return (
    <div className={`card p-5 md:p-6 transition-all duration-300 ${status === 'approved' ? 'border-emerald-400/20' : status === 'rejected' ? 'border-red-400/20 opacity-70' : 'card-hover'}`}>
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-space-700/60 border border-white/5 flex items-center justify-center shrink-0">
            <ListChecks className="w-5 h-5 text-cyan-accent" strokeWidth={1.75} />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono-data text-slate-500">{id}</span>
              <span className={`flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border ${pri.border} ${pri.bg} ${pri.color}`}>
                {priority}
              </span>
              <span className="flex items-center gap-1 text-[10px] text-slate-500 font-mono-data">
                <Link2 className="w-3 h-3" /> {linkedAnomaly}
              </span>
            </div>
            <h3 className="text-base font-semibold text-slate-100 mt-1.5 font-display">{title}</h3>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono-data shrink-0">
          <Cpu className="w-3.5 h-3.5 text-cyan-accent" />
          {aiConfidence}% confidence
        </div>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed mt-3">{summary}</p>

      <ol className="mt-4 space-y-2">
        {steps.map((step, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
            <span className="w-5 h-5 rounded-full bg-space-700/80 border border-white/10 flex items-center justify-center text-[10px] font-mono-data text-cyan-accent shrink-0 mt-0.5">
              {idx + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <div className="mt-5 pt-4 border-t border-white/5">
        <ApprovalBox status={status} onApprove={onApprove} onReject={onReject} />
      </div>
    </div>
  )
}
