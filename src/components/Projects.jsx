import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import Section from './Section'
import { projects } from '../data'

const statusColor = {
  'Research-backed': 'var(--teal)',
  Active: 'var(--success)',
  Stable: 'var(--accent)',
}

export default function Projects() {
  const ordered = [...projects].sort((a, b) => b.priority - a.priority)

  return (
    <Section id="projects" eyebrow="02 · SELECTED PROJECTS" title="Things I've shipped and can talk about at length">
      <div className="grid gap-5 sm:grid-cols-2">
        {ordered.map((p) => (
          <a
            key={p.name}
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all hover:-translate-y-1"
            style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border"
                  style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated-2)' }}
                >
                  <img src={p.logo} alt="" className="h-full w-full object-cover" />
                </div>
                <h3 className="font-display text-lg font-semibold">{p.name}</h3>
              </div>
              <ArrowUpRight
                size={16}
                className="mt-1 shrink-0 opacity-50 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>

            <p className="mb-2 font-mono text-[11px] tracking-wide" style={{ color: 'var(--text-muted)' }}>
              {p.tagline}
            </p>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {p.description}
            </p>

            <div className="mt-auto flex flex-wrap items-center gap-2">
              <span
                className="flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-wide"
                style={{ borderColor: 'var(--border)' }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: statusColor[p.status] }} />
                {p.status.toUpperCase()}
              </span>
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-wide"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-1.5 font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
              <GithubIcon size={12} /> view source
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
