import { ArrowUpRight, Users } from 'lucide-react'
import Section from './Section'
import { activities } from '../data'

export default function Activities() {
  return (
    <Section id="activities" eyebrow="06 · ACTIVITIES" title="Showcases and team work">
      <div className="grid gap-6 md:grid-cols-2">
        {activities.map((a) => (
          <div
            key={a.event}
            className="overflow-hidden rounded-2xl border"
            style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
          >
            <div className="aspect-[16/10] w-full overflow-hidden" style={{ background: 'var(--bg-elevated-2)' }}>
              <img src={a.image} alt={`${a.event} showcase`} className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <p className="font-mono text-[11px] tracking-widest" style={{ color: 'var(--accent)' }}>
                {a.event.toUpperCase()} · {a.year}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold">{a.project}</h3>
              <p className="mt-1 flex items-center gap-1.5 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                <Users size={12} /> {a.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {a.description}
              </p>
              <a
                href={a.github}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 font-mono text-xs hover:opacity-80"
                style={{ color: 'var(--teal)' }}
              >
                view repo <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
