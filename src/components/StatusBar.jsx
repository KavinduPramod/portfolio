import { profile } from '../data'

const items = [
  "STATUS: OPEN TO REMOTE WORK",
  `LOCATION: ${profile.location.toUpperCase()}`,
  "UPTIME: 3+ YEARS IN PRODUCTION",
  "BUILD: PASSING",
]

export default function StatusBar() {
  const track = [...items, ...items]
  return (
    <div
      className="w-full overflow-hidden border-b text-[11px] tracking-wide"
      style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border)' }}
      aria-hidden="true"
    >
      <div className="flex w-max animate-ticker font-mono py-1.5">
        {track.map((item, i) => (
          <span key={i} className="flex items-center gap-2 px-4" style={{ color: 'var(--text-muted)' }}>
            <span
              className="inline-block h-1.5 w-1.5 rounded-full pulse-dot"
              style={{ background: 'var(--success)' }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
