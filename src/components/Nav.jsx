import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '../ThemeContext'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#research', label: 'Research' },
  { href: '#toolbox', label: 'Toolbox' },
  { href: '#activities', label: 'Activities' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur transition-colors"
      style={{
        borderColor: 'var(--border)',
        background: scrolled ? 'color-mix(in srgb, var(--bg) 85%, transparent)' : 'transparent',
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#top" className="font-display text-sm font-semibold tracking-tight">
          kavindu<span style={{ color: 'var(--accent)' }}>.</span>cc.cd
        </a>

        <ul className="hidden items-center gap-7 font-mono text-[13px] md:flex" style={{ color: 'var(--text-muted)' }}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-[var(--text)]">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle color theme"
            className="rounded-full border p-2 transition-colors hover:opacity-80"
            style={{ borderColor: 'var(--border)' }}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="rounded-full border p-2 md:hidden"
            style={{ borderColor: 'var(--border)' }}
          >
            {open ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul
          className="flex flex-col gap-1 border-t px-5 py-3 font-mono text-sm md:hidden"
          style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2"
                style={{ color: 'var(--text-muted)' }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
