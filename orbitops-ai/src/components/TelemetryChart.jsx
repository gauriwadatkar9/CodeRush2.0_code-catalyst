import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

function CustomTooltip({ active, payload, label, unit }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-space-900/95 border border-cyan-accent/30 rounded-lg px-3 py-2 shadow-glow backdrop-blur-sm">
        <p className="text-[11px] text-slate-400 font-mono-data mb-1">{label}</p>
        <p className="text-sm font-semibold text-cyan-accent font-mono-data">
          {payload[0].value}
          {unit}
        </p>
      </div>
    )
  }
  return null
}

export default function TelemetryChart({ data, dataKey, unit = '', color = '#22d3ee', label }) {
  const gradientId = `gradient-${dataKey}`

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 12, left: -12, bottom: 0 }}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.4} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
          <XAxis
            dataKey="time"
            tick={{ fill: '#64748b', fontSize: 11, fontFamily: 'JetBrains Mono' }}
            axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
            tickLine={false}
            interval={3}
          />
          <YAxis
            tick={{ fill: '#64748b', fontSize: 11, fontFamily: 'JetBrains Mono' }}
            axisLine={false}
            tickLine={false}
            width={40}
          />
          <Tooltip content={<CustomTooltip unit={unit} />} />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: color, stroke: '#03060d', strokeWidth: 2 }}
            name={label}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
