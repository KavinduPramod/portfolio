import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t px-5 py-8 md:px-8" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-[11px] sm:flex-row" style={{ color: 'var(--text-muted)' }}>
        <p>© {new Date().getFullYear()} {profile.shortName}</p>
        <p>built with react + tailwind · {profile.site}</p>
      </div>
    </footer>
  )
}
