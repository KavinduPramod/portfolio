import Section from './Section'
import { toolbox } from '../data'

export default function Toolbox() {
  return (
    <Section id="toolbox" eyebrow="05 · TOOLBOX" title="What I reach for">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {toolbox.map((group) => (
          <div
            key={group.group}
            className="rounded-2xl border p-6"
            style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
          >
            <h3 className="font-mono text-xs tracking-widest" style={{ color: 'var(--accent)' }}>
              {group.group.toUpperCase()}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
