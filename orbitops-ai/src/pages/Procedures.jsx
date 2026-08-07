import { useState } from 'react'
import { ListChecks, CheckCircle2, XCircle, Clock3 } from 'lucide-react'
import ProcedureCard from '../components/ProcedureCard.jsx'
import { procedures } from '../data/procedures.js'

export default function Procedures() {
  const [statuses, setStatuses] = useState(() =>
    procedures.reduce((acc, p) => {
      acc[p.id] = 'pending'
      return acc
    }, {})
  )

  const handleApprove = (id) => setStatuses((prev) => ({ ...prev, [id]: 'approved' }))
  const handleReject = (id) => setStatuses((prev) => ({ ...prev, [id]: 'rejected' }))

  const counts = Object.values(statuses).reduce(
    (acc, s) => {
      acc[s] += 1
      return acc
    },
    { pending: 0, approved: 0, rejected: 0 }
  )

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-space-700/60 border border-white/5 flex items-center justify-center">
            <ListChecks className="w-5 h-5 text-cyan-accent" strokeWidth={1.75} />
          </div>
          <h1 className="font-display text-2xl font-bold text-white tracking-tight">AI-Suggested Procedures</h1>
        </div>
        <p className="text-sm text-slate-400 mt-2 ml-[52px]">Review and approve autonomous mitigation recommendations</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="card p-4 flex items-center gap-3">
          <Clock3 className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <p className="text-lg font-display font-semibold text-white">{counts.pending}</p>
            <p className="text-xs text-slate-500">Pending</p>
          </div>
        </div>
        <div className="card p-4 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <p className="text-lg font-display font-semibold text-white">{counts.approved}</p>
            <p className="text-xs text-slate-500">Approved</p>
          </div>
        </div>
        <div className="card p-4 flex items-center gap-3">
          <XCircle className="w-5 h-5 text-red-400 shrink-0" />
          <div>
            <p className="text-lg font-display font-semibold text-white">{counts.rejected}</p>
            <p className="text-xs text-slate-500">Rejected</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {procedures.map((procedure) => (
          <ProcedureCard
            key={procedure.id}
            procedure={procedure}
            status={statuses[procedure.id]}
            onApprove={() => handleApprove(procedure.id)}
            onReject={() => handleReject(procedure.id)}
          />
        ))}
      </div>
    </div>
  )
}
