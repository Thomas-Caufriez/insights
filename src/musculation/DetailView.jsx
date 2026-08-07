import { MuscuExerciseHeader, MuscuExerciseBody } from './ExercisePage'

export default function DetailView({ entry, onBack, isMobile, onMenuOpen }) {
  const hPad = isMobile ? '1rem' : '3.5rem'

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#1c1e22' }}>

      {/* Back bar */}
      <div style={{
        padding: `0.9rem ${hPad}`,
        borderBottom: '1px solid rgba(192,200,212,0.07)',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}>
        {isMobile && (
          <button
            onClick={onMenuOpen}
            style={{
              fontFamily: '"Barlow", sans-serif', fontSize: '1.1rem',
              color: '#c0c8d4', background: 'rgba(192,200,212,0.07)',
              border: '1px solid rgba(192,200,212,0.12)', borderRadius: '3px',
              cursor: 'pointer', padding: '0.28rem 0.55rem', lineHeight: 1, flexShrink: 0,
              transition: 'background 0.12s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(192,200,212,0.12)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(192,200,212,0.07)' }}
          >
            ≡
          </button>
        )}
        <button
          onClick={onBack}
          style={{
            fontFamily: '"Barlow", sans-serif', fontSize: '0.7rem', fontWeight: 500,
            textTransform: 'uppercase', letterSpacing: '0.12em',
            color: '#c0c8d4', background: 'rgba(192,200,212,0.07)',
            border: '1px solid rgba(192,200,212,0.12)', borderRadius: '3px',
            cursor: 'pointer', padding: '0.3rem 0.85rem',
            transition: 'background 0.12s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(192,200,212,0.12)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(192,200,212,0.07)' }}
        >
          ← Retour
        </button>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto' }}>

        {/* Header */}
        <div style={{ padding: isMobile ? '1.75rem 1rem 1.5rem' : '3rem 3.5rem 2rem' }}>
          <div style={{ maxWidth: '860px' }}>
            <MuscuExerciseHeader entry={entry} />
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(192,200,212,0.07)' }} />

        {/* Body */}
        <div style={{ padding: isMobile ? '1.5rem 1rem 3rem' : '2.5rem 3.5rem 4rem' }}>
          <div style={{ maxWidth: '860px' }}>
            <MuscuExerciseBody entry={entry} />
          </div>
        </div>

      </div>
    </div>
  )
}
