export const theme = {
  id: 'musculation',
  label: 'Musculation',
  description: 'Exercices, techniques, routines d\'entraînement.',
  accent: '#c0c8d4',
  glow: '#8fa3bd',
  fg: '#e6ebf2',
  dim: 'rgba(230,235,242,0.55)',
  scrim: 'linear-gradient(100deg, rgba(20,22,26,0.94) 0%, rgba(20,22,26,0.8) 44%, rgba(20,22,26,0.15) 78%, rgba(20,22,26,0) 100%)',
}

export default function Backdrop({ active }) {
  const play = active ? 'running' : 'paused'

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }} aria-hidden="true">
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
      <defs>
        <linearGradient id="mu-bg" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#22262c" />
          <stop offset="55%" stopColor="#1a1d22" />
          <stop offset="100%" stopColor="#101216" />
        </linearGradient>
        <radialGradient id="mu-glow" cx="72%" cy="42%" r="58%">
          <stop offset="0%" stopColor="#8fa3bd" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#8fa3bd" stopOpacity="0" />
        </radialGradient>
        <pattern id="mu-grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M60 0 L0 0 0 60" fill="none" stroke="#c0c8d4" strokeWidth="0.6" opacity="0.14" />
        </pattern>
      </defs>

      <rect width="1440" height="900" fill="url(#mu-bg)" />
      <rect width="1440" height="900" fill="url(#mu-grid)" />
      <rect width="1440" height="900" fill="url(#mu-glow)" />

      {/* Weight plate — large, off-centre, mostly implied */}
      <g opacity="0.9" style={{ animation: 'hp-breathe 11s ease-in-out infinite', animationPlayState: play }}>
        <circle cx="1080" cy="450" r="290" fill="#8fa3bd" opacity="0.035" />
        <circle cx="1080" cy="450" r="290" fill="none" stroke="#c0c8d4" strokeWidth="2" opacity="0.34" />
        <circle cx="1080" cy="450" r="243" fill="none" stroke="#c0c8d4" strokeWidth="1.2" opacity="0.24" />
        <circle cx="1080" cy="450" r="96" fill="none" stroke="#c0c8d4" strokeWidth="2.6" opacity="0.4" />
        <circle cx="1080" cy="450" r="62" fill="none" stroke="#c0c8d4" strokeWidth="1.2" opacity="0.3" />
        {/* Knurl marks around the hub */}
        {Array.from({ length: 24 }, (_, i) => {
          const a = (i / 24) * Math.PI * 2
          return (
            <line
              key={i}
              x1={1080 + Math.cos(a) * 243} y1={450 + Math.sin(a) * 243}
              x2={1080 + Math.cos(a) * 290} y2={450 + Math.sin(a) * 290}
              stroke="#c0c8d4" strokeWidth="1" opacity="0.22"
            />
          )
        })}
      </g>

      {/* The bar, running off both edges */}
      <g>
        <rect x="0" y="441" width="1440" height="18" rx="9" fill="#c0c8d4" opacity="0.2" />
        <rect x="0" y="441" width="1440" height="5" rx="2.5" fill="#e6ebf2" opacity="0.18" />
      </g>

      {/* Measurement scale down the left edge */}
      <g opacity="0.3">
        {Array.from({ length: 19 }, (_, i) => (
          <g key={i}>
            <line
              x1="0" y1={i * 50} x2={i % 5 === 0 ? 34 : 18} y2={i * 50}
              stroke="#c0c8d4" strokeWidth={i % 5 === 0 ? 1.4 : 0.8} opacity="0.35"
            />
          </g>
        ))}
      </g>

      </svg>

      {/* Light shafts — CSS layers rather than rotated full-height SVG rects,
          which were repainting the whole scene every frame. */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            position: 'absolute', top: '-25%', bottom: '-25%', left: 0, right: 0,
            transform: 'rotate(14deg)',
            background: `linear-gradient(90deg, rgba(192,200,212,0) ${40 - i * 3}%, rgba(192,200,212,${0.085 - i * 0.018}) 50%, rgba(192,200,212,0) ${60 + i * 3}%)`,
            animation: `hp-sweep-x ${17 + i * 6}s ease-in-out infinite`,
            animationDelay: `${i * 5}s`,
            animationPlayState: play,
          }}
        />
      ))}
    </div>
  )
}
