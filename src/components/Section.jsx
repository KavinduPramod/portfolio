export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24 ${className}`}>
      {(eyebrow || title) && (
        <div className="mb-10 md:mb-14">
          {eyebrow && (
            <p className="mb-3 font-mono text-xs tracking-widest" style={{ color: 'var(--accent)' }}>
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-display text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
