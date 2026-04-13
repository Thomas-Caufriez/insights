import { useIsMobile } from '../hooks/useIsMobile'
import { boissonsCategories } from './data'
import { TikiMaskIll } from './illustrations'

const BG       = '#061420'
const CARD     = '#091b28'
const CARD2    = '#060f1a'
const ACCENT   = '#00d4b8'
const CORAL    = '#ff7043'
const GOLD     = '#f4c542'
const TEXT     = '#e8f5f3'
const TEXT_DIM = 'rgba(232,245,243,0.42)'
const BORDER   = 'rgba(0,212,184,0.13)'
const FONT     = '"Playfair Display", Georgia, serif'
const UI       = '"DM Sans", sans-serif'
const MONO     = '"Space Grotesk", sans-serif'

const label = {
  fontFamily: UI,
  fontSize: '0.56rem',
  textTransform: 'uppercase',
  letterSpacing: '0.14em',
  color: `rgba(0,212,184,0.5)`,
  marginBottom: '0.55rem',
}

export default function BoissonsDashboard({ onSelectCategory, onHome, isMobile }) {
  const isNarrow = useIsMobile(700)

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: BG }}>

      {/* Top bar */}
      <div style={{
        padding: isMobile ? '0.85rem 1.25rem' : '0.85rem 2rem',
        borderBottom: `1px solid ${BORDER}`,
        flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <button
          onClick={onHome}
          style={{
            fontFamily: UI, fontSize: '0.7rem', fontWeight: 400,
            letterSpacing: '0.02em', color: TEXT_DIM,
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            transition: 'color 0.12s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = TEXT)}
          onMouseLeave={(e) => (e.currentTarget.style.color = TEXT_DIM)}
        >
          ← Insights
        </button>
        <span style={{
          fontFamily: FONT, fontWeight: 700, fontStyle: 'italic',
          fontSize: '1rem', color: TEXT,
        }}>
          Boissons
        </span>
        <div style={{ width: '70px' }} />
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: isNarrow ? '1.25rem 1.25rem 3rem' : '1.75rem 2rem 3rem' }}>

        {/* Bento grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isNarrow ? '1fr' : 'repeat(3, 1fr)',
          gap: '1px',
          background: BORDER,
          border: `1px solid ${BORDER}`,
          borderRadius: '14px',
          overflow: 'hidden',
          marginBottom: '2rem',
        }}>
          <div style={{ background: CARD }}><TikiWidget /></div>
          <div style={{ background: CARD }}><ShakerWidget /></div>
          <div style={{ background: CARD }}><GlassWidget /></div>
          <div style={{ background: CARD2 }}><QuoteWidget /></div>
          <div style={{ background: CARD, gridColumn: isNarrow ? '1' : 'span 2' }}><ConseilWidget /></div>
        </div>

        {/* Categories */}
        <div>
          <p style={{ ...label, marginBottom: '0.9rem', paddingLeft: '0.1rem' }}>Explorer par type</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isNarrow ? '1fr' : 'repeat(2, 1fr)',
            gap: '1px',
            background: BORDER,
            border: `1px solid ${BORDER}`,
            borderRadius: '14px',
            overflow: 'hidden',
          }}>
            {boissonsCategories.map((cat) => (
              <CategoryTile key={cat.id} cat={cat} onClick={() => onSelectCategory(cat.id)} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

// ─── Tiki illustration ────────────────────────────────────────────────────────

function TikiWidget() {
  return (
    <div style={{
      padding: '1.4rem 1.5rem',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', minHeight: '150px',
    }}>
      <div style={{ width: '88px', height: '88px', opacity: 0.7 }}>
        <TikiMaskIll />
      </div>
      <p style={{ fontFamily: UI, fontSize: '0.52rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: TEXT_DIM, marginTop: '0.7rem' }}>
        Tiki Bar
      </p>
    </div>
  )
}

// ─── Technique shaker ─────────────────────────────────────────────────────────

function ShakerWidget() {
  const rows = [
    { label: 'Sec (sans glaçons)', duration: '8 – 10 s', color: CORAL },
    { label: 'Wet (avec glaçons)', duration: '3 – 4 s', color: ACCENT },
    { label: 'Double shake', duration: 'Sec puis wet', color: GOLD },
  ]
  return (
    <div style={{ padding: '1.4rem 1.5rem' }}>
      <p style={label}>Technique shaker</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.72rem', marginTop: '0.3rem' }}>
        {rows.map((r) => (
          <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontFamily: UI, fontSize: '0.74rem', color: TEXT_DIM }}>{r.label}</span>
            <span style={{ fontFamily: MONO, fontSize: '0.76rem', fontWeight: 600, color: r.color }}>{r.duration}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Guide des verres ─────────────────────────────────────────────────────────

function GlassWidget() {
  const rows = [
    { verre: 'Highball', pour: 'Long drinks, Tiki' },
    { verre: 'Old Fashioned', pour: 'Short drinks, sours' },
    { verre: 'Coupe', pour: 'Up drinks, sours mousseux' },
    { verre: 'Shot / Cordial', pour: 'Liqueurs maison' },
  ]
  return (
    <div style={{ padding: '1.4rem 1.5rem' }}>
      <p style={label}>Le bon verre</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.3rem' }}>
        {rows.map((r) => (
          <div key={r.verre} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
            <span style={{ fontFamily: MONO, fontSize: '0.7rem', fontWeight: 600, color: ACCENT, minWidth: '90px', flexShrink: 0 }}>{r.verre}</span>
            <span style={{ fontFamily: UI, fontSize: '0.72rem', color: TEXT_DIM }}>{r.pour}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Citation ─────────────────────────────────────────────────────────────────

function QuoteWidget() {
  return (
    <div style={{ padding: '1.6rem 1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100px' }}>
      <p style={{
        fontFamily: FONT, fontStyle: 'italic', fontWeight: 400,
        fontSize: '1rem', color: TEXT, lineHeight: 1.6, marginBottom: '0.65rem',
        opacity: 0.8,
      }}>
        « A cocktail is the pause button between the sun and the stars. »
      </p>
      <p style={{ fontFamily: UI, fontSize: '0.6rem', color: TEXT_DIM, letterSpacing: '0.04em' }}>
        — Le barman de la plage
      </p>
    </div>
  )
}

// ─── Conseil du bar ───────────────────────────────────────────────────────────

function ConseilWidget() {
  return (
    <div style={{ padding: '1.4rem 1.5rem' }}>
      <p style={label}>Règle d'or du tiki bar</p>
      <p style={{ fontFamily: FONT, fontStyle: 'italic', fontSize: '1.05rem', fontWeight: 600, color: TEXT, lineHeight: 1.4, marginBottom: '0.6rem' }}>
        Goûte toujours avant de servir.
      </p>
      <p style={{ fontFamily: UI, fontSize: '0.8rem', color: TEXT_DIM, lineHeight: 1.65, marginBottom: '1rem' }}>
        Le dosage change avec la marque de rhum, la maturité du citron, la température des glaçons.
        Un bon cocktail, c'est avant tout l'équilibre entre l'acide, le sucré et l'alcool.
        Ajuste à la dernière seconde — le shaker n'a pas de rétropédalage.
      </p>
      <div>
        <div style={{ height: '4px', background: 'rgba(0,212,184,0.1)', borderRadius: '99px', overflow: 'hidden' }}>
          <div style={{ width: '60%', height: '100%', background: ACCENT, borderRadius: '99px', opacity: 0.55 }} />
        </div>
        <p style={{ fontFamily: UI, fontSize: '0.52rem', color: 'rgba(0,212,184,0.42)', marginTop: '0.4rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Acide · Sucré · Fort — dans cet ordre
        </p>
      </div>
    </div>
  )
}

// ─── Category tile ────────────────────────────────────────────────────────────

const CATEGORY_ICONS = {
  cocktails: '🍹',
  liqueurs: '🍋',
}

function CategoryTile({ cat, onClick }) {
  const color      = cat.color || ACCENT
  const hasEntries = cat.entryIds.length > 0

  return (
    <button
      onClick={hasEntries ? onClick : undefined}
      style={{
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '1rem 1.2rem 1.1rem', height: '120px',
        background: CARD, border: 'none',
        cursor: hasEntries ? 'pointer' : 'default',
        textAlign: 'left', transition: 'background 0.15s',
        opacity: hasEntries ? 1 : 0.35,
      }}
      onMouseEnter={(e) => { if (hasEntries) e.currentTarget.style.background = '#0e253a' }}
      onMouseLeave={(e) => { e.currentTarget.style.background = CARD }}
    >
      {/* Background text watermark */}
      <span style={{
        position: 'absolute', top: '0.4rem', right: '0.9rem',
        fontFamily: FONT, fontStyle: 'italic', fontWeight: 700,
        fontSize: '2.8rem', color, opacity: 0.05, userSelect: 'none',
        letterSpacing: '-0.02em', pointerEvents: 'none',
      }}>
        {cat.label}
      </span>
      {/* Wave decoration */}
      <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '40px', opacity: 0.06 }} viewBox="0 0 200 40" preserveAspectRatio="none">
        <path d="M0,20 C50,5 100,35 150,20 S200,5 250,20 L250,40 L0,40 Z" fill={color} />
      </svg>
      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: color, marginBottom: '0.45rem', flexShrink: 0 }} />
      <span style={{ fontFamily: UI, fontWeight: 500, fontSize: '0.9rem', color: TEXT, lineHeight: 1.2, marginBottom: '0.22rem' }}>
        {cat.label}
      </span>
      <span style={{ fontFamily: MONO, fontSize: '0.56rem', color: hasEntries ? color : TEXT_DIM, opacity: hasEntries ? 0.7 : 0.5 }}>
        {cat.entryIds.length} recette{cat.entryIds.length !== 1 ? 's' : ''}
      </span>
    </button>
  )
}
