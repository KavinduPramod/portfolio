import { ArrowUpRight } from 'lucide-react'
import Section from './Section'
import { research } from '../data'

export default function Research() {
  return (
    <Section id="research" eyebrow="04 · RESEARCH" title="Published research">
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div
          className="rounded-2xl border p-6 sm:p-8"
          style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
        >
          <p className="font-mono text-[11px] tracking-widest" style={{ color: 'var(--teal)' }}>
            {research.venue.toUpperCase()} · {research.location.toUpperCase()}
          </p>
          <h3 className="mt-3 font-display text-xl font-semibold leading-snug sm:text-2xl">
            {research.title}
          </h3>
          <p className="mt-3 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
            Co-authored with {research.coauthor} · {research.affiliation}
          </p>
          <p className="mt-5 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {research.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {research.links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 rounded-full border px-4 py-2 font-mono text-xs transition-colors hover:opacity-80"
                style={{ borderColor: 'var(--border)' }}
              >
                {l.label} <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
        </div>

        <div
          className="overflow-hidden rounded-2xl border"
          style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
        >
          <img src={research.certificate} alt="Conference certificate" className="h-full w-full object-cover" />
        </div>
      </div>
    </Section>
  )
}
