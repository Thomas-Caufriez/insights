import { useState } from 'react'
import { fromagesCategories } from './data'

const ACCENT   = '#d4a44c'
const BG       = '#110e08'
const CARD_BG  = '#1a1510'
const CARD_HOV = '#221a0f'
const TEXT     = '#f0e6d3'
const TEXT_DIM = 'rgba(240,230,211,0.4)'
const BORDER   = 'rgba(212,164,76,0.1)'
const FONT     = '"Playfair Display", Georgia, serif'
const UI       = '"DM Sans", sans-serif'
const MONO     = '"Space Grotesk", sans-serif'

export default function FromagesGrid({ entries, filterId, onSelect, isMobile, onBack }) {
  const [search, setSearch] = useState('')

  const currentCat = fromagesCategories.find((c) => c.id === filterId)
  const color      = currentCat?.color || ACCENT

  const q       = search.trim().toLowerCase()
  const visible = q
    ? entries.filter((e) =>
        [e.title, e.subtitle, e.famille, e.region].filter(Boolean).some((s) => s.toLowerCase().includes(q))
      )
    : entries

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
            fontFamily: UI, fontSize: '0.7rem', fontWeight: 400,
            color: TEXT_DIM, background: 'none', border: 'none',
            cursor: 'pointer', padding: 0, transition: 'color 0.12s', flexShrink: 0,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = TEXT)}
          onMouseLeave={(e) => (e.currentTarget.style.color = TEXT_DIM)}
        >
          ← Fromages
        </button>

        <div style={{ width: '1px', height: '14px', background: BORDER, flexShrink: 0 }} />

        <span style={{ fontFamily: UI, fontWeight: 600, fontSize: '0.85rem', color }}>
          {currentCat?.label}
        </span>
        <span style={{ fontFamily: UI, fontSize: '0.72rem', color: TEXT_DIM }}>
          {currentCat?.fullLabel}
        </span>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: isMobile ? '1.5rem 1.25rem' : '2rem' }}>

        {/* Title + search */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem',
        }}>
          <div>
            <h2 style={{ fontFamily: FONT, fontStyle: 'italic', fontSize: '1.5rem', fontWeight: 700, color: TEXT, lineHeight: 1, marginBottom: '0.3rem' }}>
              {visible.length === 0 && q ? 'Aucun résultat' : currentCat?.fullLabel}
            </h2>
            <p style={{ fontFamily: MONO, fontSize: '0.6rem', color: `${color}88` }}>
              {visible.length} fromage{visible.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div style={{ position: 'relative', width: isMobile ? '100%' : '260px' }}>
            <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', fontSize: '0.8rem', color: TEXT_DIM, pointerEvents: 'none' }}>⌕</span>
            <input
              type="text" placeholder="Rechercher..."
              value={search} onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%', boxSizing: 'border-box',
                fontFamily: UI, fontSize: '0.8rem', color: TEXT,
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
            <p style={{ fontFamily: FONT, fontStyle: 'italic', fontSize: '1.1rem', fontWeight: 700, color: 'rgba(240,230,211,0.08)', marginBottom: '0.4rem' }}>Bientôt disponible</p>
            <p style={{ fontFamily: UI, fontSize: '0.78rem', color: 'rgba(240,230,211,0.05)' }}>Les fromages de cette famille arrivent prochainement.</p>
          </div>
        )}

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1px' }}>
          {visible.map((e) => <FromageCard key={e.id} entry={e} color={color} onClick={() => onSelect(e.id)} />)}
        </div>
      </div>
    </div>
  )
}

function FromageCard({ entry, color, onClick }) {
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
        background: '#0c0906', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', borderBottom: `1px solid ${BORDER}`,
      }}>
        {/* Dot pattern */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <defs>
            <pattern id={`g-${entry.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="0.6" fill={color} opacity="0.18" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#g-${entry.id})`} />
        </svg>
        {/* AOP badge */}
        {entry.aop && (
          <span style={{
            fontFamily: UI, fontSize: '0.55rem', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.1em',
            color, opacity: 0.65,
            position: 'absolute', top: '0.65rem', left: '0.8rem',
          }}>
            AOP
          </span>
        )}
        {/* Region */}
        <span style={{
          fontFamily: UI, fontSize: '0.6rem', fontWeight: 500,
          color: TEXT_DIM,
          position: 'absolute', bottom: '0.65rem', right: '0.8rem',
        }}>
          {entry.region}
        </span>
        {/* Faint title */}
        <span style={{
          fontFamily: FONT, fontStyle: 'italic', fontWeight: 700, fontSize: '2.2rem',
          color, opacity: 0.05, userSelect: 'none', position: 'absolute', letterSpacing: '-0.01em',
        }}>
          {entry.title}
        </span>
      </div>

      {/* Text */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0.9rem 1rem' }}>
        <span style={{
          display: 'inline-block', alignSelf: 'flex-start',
          fontFamily: UI, fontSize: '0.6rem', fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '0.08em',
          color, opacity: 0.7, marginBottom: '0.45rem',
        }}>
          {entry.famille}
        </span>
        <p style={{ fontFamily: FONT, fontStyle: 'italic', fontSize: '1.05rem', fontWeight: 700, color: TEXT, lineHeight: 1.2, marginBottom: '0.2rem' }}>
          {entry.title}
        </p>
        {entry.subtitle && (
          <p style={{ fontFamily: UI, fontWeight: 400, fontSize: '0.74rem', color: TEXT_DIM, lineHeight: 1.4 }}>
            {entry.subtitle}
          </p>
        )}
        <div style={{ flex: 1 }} />
        <span style={{
          display: 'inline-block', marginTop: '0.75rem',
          fontFamily: UI, fontSize: '0.62rem', fontWeight: 500,
          color: TEXT_DIM,
          border: `1px solid ${BORDER}`,
          borderRadius: '99px', padding: '0.2rem 0.6rem',
        }}>
          {entry.lait}
        </span>
      </div>
    </button>
  )
}
