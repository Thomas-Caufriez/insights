import { tradingEntries, tradingCategories } from '../data/tradingData'

const ACCENT = '#00d4aa'
const ACCENT_DIM = 'rgba(0,212,170,0.35)'
const BORDER = 'rgba(0,212,170,0.08)'
const TEXT_MUTED = 'rgba(205,214,224,0.3)'

export default function TradingSidebar({ filterId, onFilter, onHome, isMobile, onClose }) {
  const totalCount = tradingEntries.length

  return (
    <aside style={{
      width: '220px',
      flexShrink: 0,
      background: '#07090d',
      borderRight: `1px solid ${BORDER}`,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflowY: 'auto',
    }}>

      {/* Brand */}
      <div style={{
        padding: '1.25rem 1.5rem',
        borderBottom: `1px solid ${BORDER}`,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      }}>
        <div style={{ flex: 1 }}>
          <button
            onClick={onHome}
            style={{
              display: 'block',
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '0.6rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: TEXT_MUTED,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              marginBottom: '0.85rem',
              transition: 'color 0.12s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT_DIM)}
            onMouseLeave={(e) => (e.currentTarget.style.color = TEXT_MUTED)}
          >
            ← Insights
          </button>
          <p style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            color: '#cdd6e0',
            fontSize: '1.5rem',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
          }}>
            TRADING
          </p>
          <p style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 300,
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            color: ACCENT,
            opacity: 0.7,
            marginTop: '0.2rem',
          }}>
            Marchés & Stratégies
          </p>
        </div>
        {isMobile && (
          <button
            onClick={onClose}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: TEXT_MUTED, fontSize: '1rem', lineHeight: 1,
              padding: '0.1rem', flexShrink: 0, marginLeft: '0.5rem',
            }}
          >
            ✕
          </button>
        )}
      </div>

      {/* Nav */}
      <nav style={{ padding: '1rem 0.75rem', flex: 1 }}>
        <FilterButton
          label="Tout"
          count={totalCount}
          active={!filterId}
          onClick={() => onFilter(null)}
        />

        <div style={{ height: '1px', background: BORDER, margin: '0.75rem 0.5rem' }} />

        {tradingCategories.map((cat) => (
          <FilterButton
            key={cat.id}
            label={cat.label}
            count={cat.entryIds.length}
            active={filterId === cat.id}
            onClick={() => onFilter(cat.id)}
          />
        ))}
      </nav>
    </aside>
  )
}

function FilterButton({ label, count, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '0.35rem 0.6rem',
        borderRadius: '3px',
        border: 'none',
        borderLeft: active ? `2px solid ${ACCENT}` : '2px solid transparent',
        background: active ? 'rgba(0,212,170,0.06)' : 'transparent',
        cursor: 'pointer',
        textAlign: 'left',
        marginBottom: '2px',
        transition: 'all 0.12s',
      }}
      onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = 'rgba(0,212,170,0.03)' }}
      onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = 'transparent' }}
    >
      <span style={{
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: 500,
        fontSize: '0.72rem',
        letterSpacing: '0.04em',
        color: active ? ACCENT : TEXT_MUTED,
        transition: 'color 0.12s',
      }}>
        {label}
      </span>
      <span style={{
        fontFamily: '"Space Mono", monospace',
        fontSize: '0.6rem',
        color: active ? 'rgba(0,212,170,0.5)' : 'rgba(205,214,224,0.18)',
      }}>
        {count}
      </span>
    </button>
  )
}
