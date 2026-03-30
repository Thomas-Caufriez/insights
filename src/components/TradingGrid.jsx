import { useState } from 'react'
import { tradingCategories } from '../data/tradingData'

const ACCENT   = '#00e5b8'
const BG       = '#0d1117'
const CARD_BG  = '#0f1623'
const CARD_HOV = '#131d2e'
const TEXT     = '#d1d8e8'
const TEXT_DIM = 'rgba(209,216,232,0.4)'
const BORDER   = 'rgba(255,255,255,0.06)'
const FONT     = '"Plus Jakarta Sans", sans-serif'
const MONO     = '"Space Mono", monospace'

export default function TradingGrid({ entries, filterId, onSelect, isMobile, onBack }) {
  const [search, setSearch] = useState('')
  const [subId,  setSubId]  = useState(null)

  const currentCat    = tradingCategories.find((c) => c.id === filterId)
  const subcategories = currentCat?.subcategories || []
  const color         = currentCat?.color || ACCENT

  const q       = search.trim().toLowerCase()
  const filtered = subId ? entries.filter((e) => e.subcategoryId === subId) : entries
  const visible  = q
    ? filtered.filter((e) => [e.title, e.subtitle, e.market].filter(Boolean).some((s) => s.toLowerCase().includes(q)))
    : filtered

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: BG }}>

      {/* Header */}
      <div style={{
        padding: isMobile ? '0.9rem 1.25rem' : '0.9rem 2rem',
        borderBottom: `1px solid ${BORDER}`,
        flexShrink: 0,
        display: 'flex', alignItems: 'center', gap: '0.75rem',
      }}>
        <button
          onClick={onBack}
          style={{
            fontFamily: FONT, fontSize: '0.7rem', fontWeight: 500,
            color: TEXT_DIM, background: 'none', border: 'none',
            cursor: 'pointer', padding: 0, transition: 'color 0.12s', flexShrink: 0,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = TEXT)}
          onMouseLeave={(e) => (e.currentTarget.style.color = TEXT_DIM)}
        >
          ← Trading
        </button>

        <div style={{ width: '1px', height: '14px', background: BORDER, flexShrink: 0 }} />

        <span style={{ fontFamily: FONT, fontWeight: 800, fontSize: '0.85rem', color }}>
          {currentCat?.label}
        </span>
        <span style={{ fontFamily: FONT, fontSize: '0.72rem', color: TEXT_DIM }}>
          {currentCat?.fullLabel}
        </span>
      </div>

      {/* Sub-nav (if subcategories exist) */}
      {subcategories.length > 0 && (
        <div style={{
          display: 'flex', gap: 0,
          borderBottom: `1px solid ${BORDER}`,
          paddingLeft: isMobile ? '1.25rem' : '2rem',
          flexShrink: 0, overflowX: 'auto',
        }}>
          <SubTab label="Tout" active={!subId} color={color} onClick={() => setSubId(null)} />
          {subcategories.map((sub) => (
            <SubTab key={sub.id} label={sub.label} active={subId === sub.id} color={color} onClick={() => setSubId(sub.id)} />
          ))}
        </div>
      )}

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: isMobile ? '1.5rem 1.25rem' : '2rem' }}>

        {/* Title + search row */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem',
        }}>
          <div>
            <h2 style={{ fontFamily: FONT, fontSize: '1.5rem', fontWeight: 800, color: TEXT, lineHeight: 1, marginBottom: '0.3rem' }}>
              {visible.length === 0 && q ? 'Aucun résultat' : currentCat?.fullLabel}
            </h2>
            <p style={{ fontFamily: MONO, fontSize: '0.6rem', color: `${color}88` }}>
              {visible.length} fiche{visible.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div style={{ position: 'relative', width: isMobile ? '100%' : '260px' }}>
            <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', fontSize: '0.8rem', color: TEXT_DIM, pointerEvents: 'none' }}>⌕</span>
            <input
              type="text" placeholder="Rechercher..."
              value={search} onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%', boxSizing: 'border-box',
                fontFamily: FONT, fontSize: '0.8rem', color: TEXT,
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${BORDER}`, borderRadius: '10px',
                padding: '0.42rem 0.75rem 0.42rem 2rem', outline: 'none',
                transition: 'border-color 0.15s',
              }}
              onFocus={(e) => (e.target.style.borderColor = `${color}55`)}
              onBlur={(e)  => (e.target.style.borderColor = BORDER)}
            />
            {search && (
              <button onClick={() => setSearch('')} style={{
                position: 'absolute', right: '0.6rem', top: '50%', transform: 'translateY(-50%)',
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '0.7rem', color: TEXT_DIM, padding: '0.1rem 0.2rem',
              }}>✕</button>
            )}
          </div>
        </div>

        {/* Empty state */}
        {visible.length === 0 && !q && (
          <div style={{ marginTop: '3rem' }}>
            <p style={{ fontFamily: FONT, fontSize: '1.1rem', fontWeight: 700, color: 'rgba(209,216,232,0.1)', marginBottom: '0.4rem' }}>Bientôt disponible</p>
            <p style={{ fontFamily: FONT, fontSize: '0.78rem', color: 'rgba(209,216,232,0.07)' }}>Les fiches pour cette catégorie arrivent prochainement.</p>
          </div>
        )}

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1px' }}>
          {visible.map((e) => <TradingCard key={e.id} entry={e} color={color} onClick={() => onSelect(e.id)} />)}
        </div>
      </div>
    </div>
  )
}

function SubTab({ label, active, color, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: FONT, fontSize: '0.78rem', fontWeight: active ? 700 : 400,
        color: active ? color : TEXT_DIM,
        background: 'none', border: 'none',
        borderBottom: `2px solid ${active ? color : 'transparent'}`,
        cursor: 'pointer', padding: '0.65rem 1rem', whiteSpace: 'nowrap',
        transition: 'color 0.12s, border-color 0.12s', flexShrink: 0,
      }}
      onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = TEXT }}
      onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = TEXT_DIM }}
    >
      {label}
    </button>
  )
}

function TradingCard({ entry, color, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', flexDirection: 'column', height: '100%',
        textAlign: 'left', padding: 0,
        background: CARD_BG, border: 'none', borderRadius: 0,
        overflow: 'hidden', cursor: 'pointer', transition: 'background 0.15s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = CARD_HOV }}
      onMouseLeave={(e) => { e.currentTarget.style.background = CARD_BG }}
    >
      {/* Preview */}
      <div style={{
        height: '100px', flexShrink: 0,
        background: '#090d16', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', borderBottom: `1px solid ${BORDER}`,
      }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <defs>
            <pattern id={`g-${entry.id}`} width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="12" r="0.5" fill={color} opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#g-${entry.id})`} />
        </svg>
        <span style={{
          fontFamily: MONO, fontSize: '0.55rem', textTransform: 'uppercase',
          letterSpacing: '0.1em', color, opacity: 0.6,
          position: 'absolute', top: '0.65rem', left: '0.8rem',
        }}>
          {entry.type}
        </span>
        {entry.risk && (
          <span style={{
            fontFamily: FONT, fontSize: '0.6rem', fontWeight: 600,
            color: TEXT_DIM,
            position: 'absolute', bottom: '0.65rem', right: '0.8rem',
          }}>
            {entry.risk}
          </span>
        )}
        <span style={{
          fontFamily: FONT, fontWeight: 800, fontSize: '2.4rem',
          color, opacity: 0.04, userSelect: 'none', position: 'absolute', letterSpacing: '-0.02em',
        }}>
          {entry.title}
        </span>
      </div>

      {/* Text */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0.9rem 1rem' }}>
        <span style={{
          display: 'inline-block', alignSelf: 'flex-start',
          fontFamily: FONT, fontSize: '0.6rem', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.08em',
          color, opacity: 0.75, marginBottom: '0.45rem',
        }}>
          {entry.market}
        </span>
        <p style={{ fontFamily: FONT, fontSize: '1rem', fontWeight: 800, color: TEXT, lineHeight: 1.2, marginBottom: '0.2rem' }}>
          {entry.title}
        </p>
        {entry.subtitle && (
          <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: '0.74rem', color: TEXT_DIM, lineHeight: 1.4 }}>
            {entry.subtitle}
          </p>
        )}
        <div style={{ flex: 1 }} />
        {entry.timeframe && (
          <span style={{
            display: 'inline-block', marginTop: '0.75rem',
            fontFamily: FONT, fontSize: '0.62rem', fontWeight: 600,
            color: TEXT_DIM,
            border: `1px solid ${BORDER}`,
            borderRadius: '99px', padding: '0.2rem 0.6rem',
          }}>
            {entry.timeframe}
          </span>
        )}
      </div>
    </button>
  )
}
