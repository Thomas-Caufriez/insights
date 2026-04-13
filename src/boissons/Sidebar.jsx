import { boissonsEntries, boissonsCategories } from './data'

const SB_BG     = '#1e3832'
const ACCENT    = '#5dd4ca'
const ACCENT_DIM = 'rgba(93,212,202,0.35)'
const ACCENT_LOW = 'rgba(93,212,202,0.07)'
const DIVIDER   = 'rgba(93,212,202,0.08)'
const UI        = '"DM Sans", sans-serif'
const FONT      = '"Playfair Display", Georgia, serif'

// ── Nav icons ──────────────────────────────────────────────────────────────────

function IconAll() {
  return (
    <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
      {/* Tiki cocktail glass */}
      <path d="M 4 3 L 10 13 L 16 3 Z" stroke={ACCENT} strokeWidth="1.5" fill={ACCENT} fillOpacity="0.15" strokeLinejoin="round" />
      <line x1="10" y1="13" x2="10" y2="18" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="18" x2="14" y2="18" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
      {/* Straw */}
      <line x1="13" y1="5" x2="16" y2="1" stroke={ACCENT} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

function IconCocktails() {
  return (
    <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
      {/* Shaker body */}
      <rect x="7" y="5" width="6" height="10" rx="2" stroke={ACCENT} strokeWidth="1.5" fill={ACCENT} fillOpacity="0.15" />
      {/* Shaker cap */}
      <rect x="8" y="2" width="4" height="4" rx="1" stroke={ACCENT} strokeWidth="1.5" fill={ACCENT} fillOpacity="0.2" />
      {/* Spout */}
      <circle cx="10" cy="1.5" r="0.8" fill={ACCENT} />
      {/* Lines */}
      <line x1="7.5" y1="9" x2="12.5" y2="9" stroke={ACCENT} strokeWidth="1" opacity="0.5" />
      <line x1="7.5" y1="11.5" x2="12.5" y2="11.5" stroke={ACCENT} strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

function IconLiqueurs() {
  return (
    <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
      {/* Bottle */}
      <path d="M 8 2 L 8 6 Q 5 8 5 12 L 5 17 Q 5 18 6 18 L 14 18 Q 15 18 15 17 L 15 12 Q 15 8 12 6 L 12 2 Z"
        stroke={ACCENT} strokeWidth="1.5" fill={ACCENT} fillOpacity="0.12" strokeLinejoin="round" />
      {/* Neck label */}
      <line x1="8" y1="2" x2="12" y2="2" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
      {/* Liquid fill */}
      <path d="M 5.5 13 Q 5 14 5 15 L 15 15 Q 15 14 14.5 13 Z" fill={ACCENT} fillOpacity="0.3" />
    </svg>
  )
}

const CATEGORY_ICONS = { cocktails: IconCocktails, liqueurs: IconLiqueurs }

export default function BoissonsSidebar({ filterId, onFilter, onHome, isMobile, onClose }) {
  const total = boissonsEntries.length

  return (
    <aside style={{
      width: '220px', flexShrink: 0,
      background: SB_BG,
      borderRight: '1px solid rgba(93,212,202,0.08)',
      display: 'flex', flexDirection: 'column',
      height: '100%', overflowY: 'auto',
    }}>

      {/* Brand */}
      <div style={{
        padding: '1.25rem 1.5rem',
        borderBottom: `1px solid ${DIVIDER}`,
        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
      }}>
        <div style={{ flex: 1 }}>
          <button
            onClick={onHome}
            style={{
              display: 'block',
              fontFamily: UI, fontSize: '0.62rem', letterSpacing: '0.06em',
              color: ACCENT_DIM, background: 'none', border: 'none',
              cursor: 'pointer', padding: 0, marginBottom: '0.75rem',
              transition: 'color 0.12s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
            onMouseLeave={(e) => (e.currentTarget.style.color = ACCENT_DIM)}
          >
            ← Insights
          </button>
          {/* Tiki palm decoration */}
          <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginBottom: '0.4rem', opacity: 0.55 }}>
            <path d="M11 20 Q10 14 11 8 Q12 4 13 2" stroke={ACCENT} strokeWidth="1.4" fill="none" strokeLinecap="round" />
            <path d="M11 8 Q16 4 20 7 Q16 10 11 9 Z" fill={ACCENT} opacity="0.6" />
            <path d="M11 8 Q13 2 17 2 Q15 7 11 9 Z" fill={ACCENT} opacity="0.5" />
            <path d="M11 8 Q6 3 3 6 Q7 10 11 9 Z" fill={ACCENT} opacity="0.5" />
            <ellipse cx="11" cy="20" rx="4" ry="1.2" fill={ACCENT} opacity="0.2" />
          </svg>
          <p style={{
            fontFamily: FONT, fontStyle: 'italic',
            color: ACCENT, fontSize: '1.1rem', lineHeight: 1.3,
          }}>
            Bar<br />Tiki
          </p>
        </div>
        {isMobile && (
          <button
            onClick={onClose}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: ACCENT_DIM, fontSize: '1.1rem', lineHeight: 1,
              padding: '0.1rem', flexShrink: 0, marginLeft: '0.5rem',
            }}
          >
            ✕
          </button>
        )}
      </div>

      {/* Nav */}
      <nav style={{ padding: '1rem 0.75rem', flex: 1 }}>
        <FilterButton label="Tout" count={total} active={!filterId} onClick={() => onFilter(null)} icon={IconAll} />
        <div style={{ height: '1px', background: DIVIDER, margin: '0.75rem 0.5rem' }} />
        {boissonsCategories.filter((c) => c.entryIds.length > 0).map((cat) => {
          const Icon = CATEGORY_ICONS[cat.id] || null
          return (
            <FilterButton
              key={cat.id}
              label={cat.label}
              count={cat.entryIds.length}
              active={filterId === cat.id}
              onClick={() => onFilter(cat.id)}
              bold
              icon={Icon}
            />
          )
        })}
      </nav>
    </aside>
  )
}

function FilterButton({ label, count, active, onClick, bold, icon: Icon }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        width: '100%', padding: '0.35rem 0.6rem',
        borderRadius: '6px', border: 'none',
        background: active ? ACCENT_LOW : 'transparent',
        cursor: 'pointer', textAlign: 'left', marginBottom: '1px',
        transition: 'background 0.12s',
      }}
      onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = 'rgba(93,212,202,0.04)' }}
      onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = 'transparent' }}
    >
      <span style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
        {Icon && (
          <span style={{ opacity: active ? 1 : 0.55, flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <Icon />
          </span>
        )}
        <span style={{
          fontFamily: bold ? UI : '"Lora", serif',
          fontWeight: bold ? 500 : 400,
          fontSize: bold ? '0.75rem' : '0.82rem',
          textTransform: bold ? 'uppercase' : 'none',
          letterSpacing: bold ? '0.1em' : 'normal',
          fontStyle: !bold ? 'italic' : 'normal',
          color: active ? ACCENT : bold ? ACCENT_DIM : 'rgba(180,230,225,0.55)',
        }}>
          {label}
        </span>
      </span>
      <span style={{
        fontFamily: UI, fontSize: '0.65rem',
        color: active ? 'rgba(93,212,202,0.7)' : 'rgba(93,212,202,0.2)',
        background: ACCENT_LOW,
        padding: '0.1rem 0.4rem', borderRadius: '999px',
      }}>
        {count}
      </span>
    </button>
  )
}
