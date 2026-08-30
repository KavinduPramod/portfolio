import { useEffect, useState } from 'react'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { profile } from '../data'
import { profile as profileData } from '../data'

function RoleRotator() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % profileData.roles.length), 2200)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="inline-block min-w-[13ch] font-mono" style={{ color: 'var(--accent)' }}>
      {profileData.roles[i]}
    </span>
  )
}

export default function Hero() {
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setFlipped((f) => !f), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.3fr_0.9fr] md:px-8 md:pb-28 md:pt-20">
      <div>
        <p className="mb-4 font-mono text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>
          {profile.location.toUpperCase()} · AVAILABLE FOR REMOTE WORK
        </p>
        <h1 className="font-display text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          I build the software.
          <br />
          Then I keep it <span style={{ color: 'var(--accent)' }}>alive</span>.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: 'var(--text-muted)' }}>
          Senior Software Engineer working as a <RoleRotator /> — backend systems, cross-platform apps,
          and the production infrastructure that keeps them running.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-full px-5 py-2.5 font-mono text-sm font-medium transition-transform hover:-translate-y-0.5"
            style={{ background: 'var(--accent)', color: '#0B0F14' }}
          >
            View projects
          </a>
          <a
            href={profile.resume}
            download
            rel="noreferrer"
            className="rounded-full border px-5 py-2.5 font-mono text-sm transition-colors hover:opacity-80"
            style={{ borderColor: 'var(--border)' }}
          >
            Download résumé
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4" style={{ color: 'var(--text-muted)' }}>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[var(--text)]">
            <GithubIcon size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[var(--text)]">
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-[var(--text)]">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="flex flex-col items-center gap-3">
          <button
            className="flip-scene h-64 w-52 cursor-pointer sm:h-72 sm:w-60"
            onClick={() => setFlipped((f) => !f)}
            aria-label="Flip profile photo"
          >
            <div className={`flip-card relative h-full w-full ${flipped ? 'is-flipped' : ''}`}>
              <div
                className="flip-face absolute inset-0 overflow-hidden rounded-2xl border"
                style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
              >
                <img src="/assets/profile.png" alt="Kavindu Abeysundara" className="h-full w-full object-cover" />
              </div>
              <div
                className="flip-face flip-face-back absolute inset-0 overflow-hidden rounded-2xl border"
                style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
              >
                <img src="/assets/convocation.png" alt="Kavindu at convocation" className="h-full w-full object-cover" />
              </div>
            </div>
          </button>
          <p className="font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
            tap to flip · profile / convocation
          </p>
        </div>
      </div>
    </section>
  )
}
