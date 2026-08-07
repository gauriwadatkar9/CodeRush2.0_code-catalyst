import { History, Play, RotateCcw } from 'lucide-react'
import { useState } from 'react'
import ReplayCard from '../components/ReplayCard.jsx'
import { replayEvents } from '../data/replay.js'

export default function Replay() {
  const [revealCount, setRevealCount] = useState(replayEvents.length)

  const replayFromStart = () => {
    setRevealCount(0)
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setRevealCount(i)
      if (i >= replayEvents.length) clearInterval(interval)
    }, 350)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-space-700/60 border border-white/5 flex items-center justify-center">
              <History className="w-5 h-5 text-cyan-accent" strokeWidth={1.75} />
            </div>
            <h1 className="font-display text-2xl font-bold text-white tracking-tight">Mission Event Replay</h1>
          </div>
          <p className="text-sm text-slate-400 mt-2 ml-[52px]">Fault-to-recovery training scenario, ORB-7 anomaly response</p>
        </div>

        <button
          onClick={replayFromStart}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent text-sm font-semibold hover:bg-cyan-accent/20 hover:shadow-glow transition-all duration-200 active:scale-95 w-fit"
        >
          <RotateCcw className="w-4 h-4" />
          Replay Sequence
        </button>
      </div>

      <div className="card p-5 md:p-8">
        <div className="flex items-center gap-2 mb-6 text-xs text-slate-500 font-mono-data">
          <Play className="w-3.5 h-3.5 text-cyan-accent" />
          <span>Scenario ID: TR-0412 · Duration 38m</span>
        </div>
        {replayEvents.slice(0, revealCount).map((event, idx) => (
          <ReplayCard key={event.id} event={event} index={idx} isLast={idx === replayEvents.length - 1} />
        ))}
      </div>
    </div>
  )
}
