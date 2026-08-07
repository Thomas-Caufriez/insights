import { FromagesPageHeader, FromagesPageBody } from './Page'
import { useIsMobile } from '../hooks/useIsMobile'

export default function DetailView({ entry, onBack, isMobile }) {
  const hPad = isMobile ? '1rem' : '3.5rem'
  const hidePanel = useIsMobile(1100)

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#110e08' }}>

      {/* Back bar */}
      <div style={{
        padding: `0.9rem ${hPad}`,
        borderBottom: '1px solid rgba(212,164,76,0.1)',
        flexShrink: 0,
        display: 'flex', alignItems: 'center', gap: '0.75rem',
      }}>
        <button
          onClick={onBack}
          style={{
            fontFamily: '"DM Sans", sans-serif', fontSize: '0.72rem', fontWeight: 500,
            letterSpacing: '0.01em',
            color: '#f0e6d3', background: 'rgba(212,164,76,0.07)',
            border: '1px solid rgba(212,164,76,0.15)', borderRadius: '8px',
            cursor: 'pointer', padding: '0.3rem 0.85rem',
            transition: 'background 0.12s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(212,164,76,0.15)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(212,164,76,0.07)' }}
        >
          ← Retour
        </button>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>

        {/* Header row */}
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, minWidth: 0, padding: isMobile ? '1.75rem 1rem 1.25rem' : '3rem 3.5rem 1.5rem' }}>
            <div style={{ maxWidth: '800px' }}>
              <FromagesPageHeader entry={entry} />
            </div>
          </div>
          {!hidePanel && <div style={{ width: '260px', flexShrink: 0 }} />}
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(212,164,76,0.08)' }} />

        {/* Body row */}
        <div style={{ display: 'flex', flex: 1 }}>
          <div style={{ flex: 1, minWidth: 0, padding: isMobile ? '1.25rem 1rem 2rem' : '2rem 3.5rem 3rem' }}>
            <div style={{ maxWidth: '800px' }}>
              <FromagesPageBody entry={entry} />
            </div>
          </div>
          {!hidePanel && <DecorativePanel entry={entry} />}
        </div>

      </div>
    </div>
  )
}

function DecorativePanel({ entry }) {
  const ACCENT = '#d4a44c'
  return (
    <div style={{
      width: '260px', flexShrink: 0,
      position: 'relative',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      minHeight: '300px',
      borderLeft: '1px solid rgba(212,164,76,0.08)',
      background: '#0c0906',
    }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <pattern id="fromagesGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="0.6" fill={ACCENT} opacity="0.12" />
          </pattern>
          <radialGradient id="fromagesGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={ACCENT} stopOpacity="0.07" />
            <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#fromagesGrid)" />
        <rect width="100%" height="100%" fill="url(#fromagesGlow)" />
      </svg>
      <p style={{
        position: 'absolute',
        fontFamily: '"Playfair Display", Georgia, serif',
        fontStyle: 'italic', fontWeight: 700,
        fontSize: '3.5rem', letterSpacing: '-0.02em',
        color: ACCENT, opacity: 0.04,
        userSelect: 'none', textAlign: 'center', padding: '0 1rem',
      }}>
        {entry?.title}
      </p>
    </div>
  )
}
