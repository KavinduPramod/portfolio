import Section from './Section'
import { bio, journey, asideNote } from '../data'

export default function About() {
  return (
    <Section id="about" eyebrow="01 · ABOUT" title="From building features to owning the lifecycle">
      <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
        <div className="space-y-4 text-[15px] leading-relaxed sm:text-base" style={{ color: 'var(--text-muted)' }}>
          {bio.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div>
          <ol className="relative space-y-8 border-l pl-6" style={{ borderColor: 'var(--border)' }}>
            {journey.map((step, i) => (
              <li key={step.stage} className="relative">
                <span
                  className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 font-mono text-[9px]"
                  style={{ borderColor: 'var(--accent)', background: 'var(--bg)' }}
                >
                </span>
                <p className="font-mono text-[11px] tracking-widest" style={{ color: 'var(--accent)' }}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold">{step.stage}</h3>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <p className="mt-14 border-t pt-6 font-mono text-xs" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
        {asideNote}
      </p>
    </Section>
  )
}
