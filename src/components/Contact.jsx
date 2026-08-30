import { useState } from 'react'
import { Mail, ArrowUpRight, Loader2, Check } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons'
import Section from './Section'
import { profile } from '../data'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)
    data.append('access_key', profile.web3forms)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      const result = await res.json()
      if (result.success) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact" eyebrow="07 · CONTACT" title="Let's talk">
      <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="max-w-md text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Open to remote roles, contract infrastructure work, or just talking shop about deployments
            gone wrong. Fastest way to reach me is email.
          </p>

          <div className="mt-7 space-y-3">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm hover:opacity-80">
              <Mail size={16} style={{ color: 'var(--accent)' }} /> {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm hover:opacity-80">
              <GithubIcon size={16} style={{ color: 'var(--accent)' }} /> {profile.githubHandle}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm hover:opacity-80">
              <LinkedinIcon size={16} style={{ color: 'var(--accent)' }} /> {profile.linkedinHandle}
            </a>
            <a href={profile.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm hover:opacity-80">
              <InstagramIcon size={16} style={{ color: 'var(--accent)' }} /> Instagram
            </a>
          </div>

          <div className="mt-8 flex gap-4">
            <div className="text-center">
              <div className="overflow-hidden rounded-lg border p-1" style={{ borderColor: 'var(--border)' }}>
                <img src="/assets/linkedin-qr.jpeg" alt="LinkedIn QR code" className="h-24 w-24 object-cover" />
              </div>
              <p className="mt-1.5 font-mono text-[10px]" style={{ color: 'var(--text-muted)' }}>LinkedIn</p>
            </div>
            <div className="text-center">
              <div className="overflow-hidden rounded-lg border p-1" style={{ borderColor: 'var(--border)' }}>
                <img src="/assets/insta-qr.jpeg" alt="Instagram QR code" className="h-24 w-24 object-cover" />
              </div>
              <p className="mt-1.5 font-mono text-[10px]" style={{ color: 'var(--text-muted)' }}>Instagram</p>
            </div>
          </div>

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-1.5 rounded-full border px-5 py-2.5 font-mono text-sm hover:opacity-80"
            style={{ borderColor: 'var(--border)' }}
          >
            Download résumé <ArrowUpRight size={13} />
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border p-6 sm:p-8"
          style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border bg-transparent px-3.5 py-2.5 text-sm outline-none"
                style={{ borderColor: 'var(--border)' }}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border bg-transparent px-3.5 py-2.5 text-sm outline-none"
                style={{ borderColor: 'var(--border)' }}
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full resize-none rounded-lg border bg-transparent px-3.5 py-2.5 text-sm outline-none"
                style={{ borderColor: 'var(--border)' }}
              />
            </div>

            {/* Honeypot field: Web3Forms recognizes name="botcheck" and silently
                discards the submission if it's filled in, which real visitors
                never do since it's hidden from view. */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 font-mono text-sm font-medium transition-opacity disabled:opacity-60 cursor-pointer hover:opacity-90"
              style={{ background: 'var(--accent)', color: '#0B0F14' }}
            >
              {status === 'sending' && <Loader2 size={14} className="animate-spin" />}
              {status === 'sent' && <Check size={14} />}
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent' : 'Send message'}
            </button>

            {status === 'error' && (
              <p className="font-mono text-xs" style={{ color: '#F87171' }}>
                Something went wrong. Try emailing directly instead.
              </p>
            )}
          </div>
        </form>
      </div>
    </Section>
  )
}
