import { Eye, RotateCw, DownloadCloud, Sun } from 'lucide-react'

const typeConfig = {
  observation: { icon: Eye, color: 'text-cyan-accent', bg: 'bg-cyan-accent/10', border: 'border-cyan-accent/30', label: 'Observation' },
  rotation: { icon: RotateCw, color: 'text-blue-accent', bg: 'bg-blue-accent/10', border: 'border-blue-accent/30', label: 'Rotation' },
  downlink: { icon: DownloadCloud, color: 'text-violet-400', bg: 'bg-violet-400/10', border: 'border-violet-400/30', label: 'Downlink' },
  solar: { icon: Sun, color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/30', label: 'Solar Charging' },
}

export default function Timeline({ events }) {
  return (
    <div className="relative">
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-accent/40 via-white/10 to-transparent" />
      <ul className="space-y-4">
        {events.map((event) => {
          const config = typeConfig[event.type]
          const Icon = config.icon
          return (
            <li key={event.id} className="relative flex gap-4 group">
              <div className={`relative z-10 w-10 h-10 rounded-xl border ${config.border} ${config.bg} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105`}>
                <Icon className={`w-4.5 h-4.5 ${config.color}`} strokeWidth={1.75} />
              </div>
              <div className="flex-1 card p-4 card-hover">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-data text-sm text-cyan-accent">{event.time}</span>
                    <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border ${config.border} ${config.bg} ${config.color}`}>
                      {config.label}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono-data">{event.duration}</span>
                </div>
                <p className="mt-2 text-sm text-slate-200 font-medium">{event.title}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
