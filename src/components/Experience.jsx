import { ArrowUpRight } from 'lucide-react'
import Section from './Section'
import { experience } from '../data'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="03 · EXPERIENCE" title="Where the work actually happens">
      <div className="space-y-6">
        {experience.map((job) => (
          <div
            key={job.company}
            className="rounded-2xl border p-6 sm:p-8"
            style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
          >
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
              <div>
                <h3 className="font-display text-xl font-semibold">{job.role}</h3>
                <p className="mt-1 text-sm" style={{ color: 'var(--accent)' }}>
                  {job.company}
                  {job.link && (
                    <a href={job.link} target="_blank" rel="noreferrer" className="ml-2 inline-flex items-center gap-0.5 align-middle text-[11px] opacity-80 hover:opacity-100">
                      {job.note} <ArrowUpRight size={11} />
                    </a>
                  )}
                  {!job.link && job.note && (
                    <span className="ml-2 font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
                      · {job.note}
                    </span>
                  )}
                </p>
              </div>
              <p className="font-mono text-xs shrink-0" style={{ color: 'var(--text-muted)' }}>
                {job.period}
              </p>
            </div>
            <ul className="mt-4 space-y-2">
              {job.points.map((pt, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--accent)' }}>—</span> {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
