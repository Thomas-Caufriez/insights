import { useIsMobile } from '../hooks/useIsMobile'
import { fromagesCategories } from './data'

const ACCENT   = '#d4a44c'
const BG       = '#110e08'
const CARD     = '#1a1510'
const TEXT     = '#f0e6d3'
const TEXT_DIM = 'rgba(240,230,211,0.45)'
const BORDER   = 'rgba(212,164,76,0.1)'
const FONT     = '"Playfair Display", Georgia, serif'
const UI       = '"DM Sans", sans-serif'
const MONO     = '"Space Grotesk", sans-serif'

const labelSt = {
  fontFamily: UI,
  fontSize: '0.58rem',
  textTransform: 'uppercase',
  letterSpacing: '0.14em',
  color: `rgba(212,164,76,0.55)`,
  marginBottom: '0.5rem',
}

export default function FromagesDashboard({ onSelectCategory, onHome, isMobile }) {
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
          Fromages
        </span>
        <div style={{ width: '70px' }} />
      </div>

      {/* Scrollable */}
      <div style={{ flex: 1, overflowY: 'auto', padding: isNarrow ? '1.25rem 1.25rem 3rem' : '1.75rem 2rem 3rem' }}>

        {/* Bento */}
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
          <div style={{ background: CARD }}><IllustrationWidget /></div>
          <div style={{ background: CARD }}><TemperatureWidget /></div>
          <div style={{ background: CARD }}><PlateauWidget /></div>
          <div style={{ background: '#0e0b06' }}><QuoteWidget /></div>
          <div style={{ background: CARD, gridColumn: isNarrow ? '1' : 'span 2' }}><ConseilWidget /></div>
        </div>

        {/* Categories */}
        <div>
          <p style={{ ...labelSt, marginBottom: '0.9rem', paddingLeft: '0.1rem' }}>Explorer par famille</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isNarrow ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: '1px',
            background: BORDER,
            border: `1px solid ${BORDER}`,
            borderRadius: '14px',
            overflow: 'hidden',
          }}>
            {fromagesCategories.map((cat) => (
              <CategoryTile key={cat.id} cat={cat} onClick={() => onSelectCategory(cat.id)} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

// ─── Illustration ─────────────────────────────────────────────────────────────

function IllustrationWidget() {
  return (
    <div style={{
      padding: '1.4rem 1.5rem',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', minHeight: '140px',
    }}>
      <svg width="100" height="100" viewBox="0 0 100 100" style={{ opacity: 0.75 }}>
        {/* Cheese wheel — full circle */}
        <circle cx="50" cy="50" r="44" fill="none" stroke={ACCENT} strokeWidth="1.5" opacity="0.5" />
        {/* Inner ring */}
        <circle cx="50" cy="50" r="36" fill="none" stroke={ACCENT} strokeWidth="0.7" opacity="0.25" />
        {/* Rind fill */}
        <circle cx="50" cy="50" r="44" fill={ACCENT} opacity="0.06" />
        {/* Holes */}
        <circle cx="38" cy="45" r="3.5" fill={ACCENT} opacity="0.18" />
        <circle cx="55" cy="58" r="2.5" fill={ACCENT} opacity="0.14" />
        <circle cx="62" cy="40" r="3" fill={ACCENT} opacity="0.16" />
        <circle cx="44" cy="60" r="2" fill={ACCENT} opacity="0.12" />
        {/* Wedge cut lines */}
        <line x1="50" y1="50" x2="50" y2="6" stroke={ACCENT} strokeWidth="0.8" opacity="0.3" strokeDasharray="3,3" />
        <line x1="50" y1="50" x2="87" y2="70" stroke={ACCENT} strokeWidth="0.8" opacity="0.3" strokeDasharray="3,3" />
      </svg>
      <p style={{ fontFamily: UI, fontSize: '0.52rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: TEXT_DIM, marginTop: '0.75rem' }}>
        Plateau de fromages
      </p>
    </div>
  )
}

// ─── Température de service ───────────────────────────────────────────────────

function TemperatureWidget() {
  const temps = [
    { famille: 'Pâtes molles',    temp: '16 – 18 °C' },
    { famille: 'Pâtes pressées',  temp: '14 – 16 °C' },
    { famille: 'Bleus',           temp: '16 – 18 °C' },
    { famille: 'Fromages frais',  temp: '8 – 10 °C' },
  ]
  return (
    <div style={{ padding: '1.4rem 1.5rem' }}>
      <p style={labelSt}>Température de service</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', marginTop: '0.5rem' }}>
        {temps.map((t) => (
          <div key={t.famille} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontFamily: UI, fontSize: '0.75rem', color: TEXT_DIM }}>{t.famille}</span>
            <span style={{ fontFamily: MONO, fontSize: '0.78rem', fontWeight: 600, color: ACCENT }}>{t.temp}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Conseil plateau ──────────────────────────────────────────────────────────

function PlateauWidget() {
  const ordre = [
    { n: '1', label: 'Frais & doux' },
    { n: '2', label: 'Pâtes molles' },
    { n: '3', label: 'Pressées' },
    { n: '4', label: 'Chèvres' },
    { n: '5', label: 'Bleus en dernier' },
  ]
  return (
    <div style={{ padding: '1.4rem 1.5rem' }}>
      <p style={labelSt}>Ordre de dégustation</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
        {ordre.map((o) => (
          <div key={o.n} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span style={{
              fontFamily: MONO, fontSize: '0.65rem', fontWeight: 600,
              color: ACCENT, opacity: 0.6, width: '14px', flexShrink: 0,
            }}>{o.n}</span>
            <span style={{ fontFamily: UI, fontSize: '0.78rem', color: TEXT_DIM }}>{o.label}</span>
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
        fontSize: '1rem', color: TEXT, lineHeight: 1.55, marginBottom: '0.6rem',
        opacity: 0.75,
      }}>
        « Comment voulez-vous gouverner un pays qui possède le Samson aux fleurs ? »
      </p>
      <p style={{ fontFamily: UI, fontSize: '0.62rem', color: TEXT_DIM, letterSpacing: '0.04em' }}>
        — Alexandre Delbrouck
      </p>
    </div>
  )
}

// ─── Conseil dégustation ──────────────────────────────────────────────────────

function ConseilWidget() {
  return (
    <div style={{ padding: '1.4rem 1.5rem' }}>
      <p style={labelSt}>Règle d'or du plateau</p>
      <p style={{ fontFamily: FONT, fontStyle: 'italic', fontSize: '1.05rem', fontWeight: 600, color: TEXT, lineHeight: 1.4, marginBottom: '0.6rem' }}>
        Sors toujours tes fromages du réfrigérateur 45 minutes avant de les servir.
      </p>
      <p style={{ fontFamily: UI, fontSize: '0.8rem', color: TEXT_DIM, lineHeight: 1.65, marginBottom: '1rem' }}>
        Le froid masque les arômes volatils et fige les textures. Un fromage servi trop froid est un fromage incompris.
        Idéalement, couvre-les d'un linge légèrement humide pour éviter le dessèchement tout en les laissant respirer.
      </p>
      <div>
        <div style={{ height: '4px', background: 'rgba(212,164,76,0.1)', borderRadius: '99px', overflow: 'hidden' }}>
          <div style={{ width: '45%', height: '100%', background: ACCENT, borderRadius: '99px', opacity: 0.6 }} />
        </div>
        <p style={{ fontFamily: UI, fontSize: '0.52rem', color: `rgba(212,164,76,0.45)`, marginTop: '0.4rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          45 min à température ambiante — minimum
        </p>
      </div>
    </div>
  )
}

// ─── Category tile ────────────────────────────────────────────────────────────

function CategoryTile({ cat, onClick }) {
  const color      = cat.color || ACCENT
  const hasEntries = cat.entryIds.length > 0

  return (
    <button
      onClick={hasEntries ? onClick : undefined}
      style={{
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '1rem 1.15rem 1.1rem', height: '110px',
        background: CARD, border: 'none',
        cursor: hasEntries ? 'pointer' : 'default',
        textAlign: 'left', transition: 'background 0.15s',
        opacity: hasEntries ? 1 : 0.35,
      }}
      onMouseEnter={(e) => { if (hasEntries) e.currentTarget.style.background = '#221a0f' }}
      onMouseLeave={(e) => { e.currentTarget.style.background = CARD }}
    >
      {/* Background glyph */}
      <span style={{
        position: 'absolute', top: '0.5rem', right: '0.9rem',
        fontFamily: FONT, fontStyle: 'italic', fontWeight: 700,
        fontSize: '2.8rem', color, opacity: 0.05, userSelect: 'none', letterSpacing: '-0.02em',
        pointerEvents: 'none',
      }}>
        {cat.label}
      </span>
      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: color, marginBottom: '0.45rem', flexShrink: 0 }} />
      <span style={{ fontFamily: UI, fontWeight: 500, fontSize: '0.88rem', color: TEXT, lineHeight: 1.2, marginBottom: '0.22rem' }}>
        {cat.label}
      </span>
      <span style={{ fontFamily: MONO, fontSize: '0.55rem', color: hasEntries ? color : TEXT_DIM, opacity: hasEntries ? 0.7 : 0.5 }}>
        {cat.entryIds.length} fromage{cat.entryIds.length !== 1 ? 's' : ''}
      </span>
    </button>
  )
}
