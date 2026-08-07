import { Check, X, Clock3 } from 'lucide-react'

const statusDisplay = {
  pending: { label: 'Awaiting Review', color: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/20', icon: Clock3 },
  approved: { label: 'Approved', color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20', icon: Check },
  rejected: { label: 'Rejected', color: 'text-red-400', bg: 'bg-red-400/10 border-red-400/20', icon: X },
}

export default function ApprovalBox({ status, onApprove, onReject }) {
  const display = statusDisplay[status]
  const StatusIcon = display.icon

  if (status !== 'pending') {
    return (
      <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border ${display.bg} ${display.color} text-sm font-semibold w-fit`}>
        <StatusIcon className="w-4 h-4" />
        {display.label}
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <button
        onClick={onApprove}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-sm font-semibold hover:bg-emerald-400/20 hover:shadow-glow transition-all duration-200 active:scale-95"
      >
        <Check className="w-4 h-4" />
        Approve
      </button>
      <button
        onClick={onReject}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-400/10 border border-red-400/30 text-red-400 text-sm font-semibold hover:bg-red-400/20 transition-all duration-200 active:scale-95"
      >
        <X className="w-4 h-4" />
        Reject
      </button>
      <span className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${display.bg} ${display.color}`}>
        <StatusIcon className="w-3 h-3" />
        {display.label}
      </span>
    </div>
  )
}
