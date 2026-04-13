import { useState } from 'react'
import { getBoissonsIllustration } from './illustrations'

const BG       = '#f7f2e8'
const CARD_BG  = '#fffef9'
const ACCENT   = '#2ebdb1'
const GOLD     = '#d4950a'
const TEXT     = '#1a3830'
const TEXT_MID = 'rgba(26,56,48,0.55)'
const TEXT_DIM = 'rgba(26,56,48,0.35)'
const BORDER   = 'rgba(46,189,177,0.14)'
const FONT     = '"Playfair Display", Georgia, serif'
const UI       = '"DM Sans", sans-serif'

export default function BoissonsGrid({ entries, filterId, onSelect, isMobile, onMenuOpen }) {
  const [search, setSearch] = useState('')

  const q       = search.trim().toLowerCase()
  const visible = q
    ? entries.filter((e) =>
        [e.title, e.titleBase, e.category].filter(Boolean).some((s) => s.toLowerCase().includes(q))
      )
    : entries

  return (
    <div style={{ height: '100%', overflowY: 'auto', background: BG, display: 'flex', flexDirection: 'column' }}>

      {/* ── Tiki beach bar banner ── */}
      <TikiBanner isMobile={isMobile} onMenuOpen={onMenuOpen} count={visible.length} q={q} />

      {/* ── Content ── */}
      <div style={{ flex: 1, padding: isMobile ? '1.5rem 1rem 3rem' : '1.75rem 3rem 3rem' }}>

        {/* Search */}
        <div style={{ marginBottom: '1.75rem', position: 'relative', maxWidth: '320px' }}>
          {/* Coconut-eye search icon */}
          <svg
            style={{ position: 'absolute', left: '0.65rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
            width="16" height="16" viewBox="0 0 20 20" fill="none"
          >
            <circle cx="8" cy="8" r="5.5" stroke="rgba(26,56,48,0.32)" strokeWidth="1.5" fill="rgba(141,110,99,0.12)" />
            <circle cx="6.8" cy="7.2" r="0.9" fill="rgba(26,56,48,0.38)" />
            <circle cx="9.4" cy="7.2" r="0.9" fill="rgba(26,56,48,0.38)" />
            <circle cx="8.1" cy="9.6" r="0.9" fill="rgba(26,56,48,0.38)" />
            <line x1="12.3" y1="12.3" x2="17.5" y2="17.5" stroke="rgba(26,56,48,0.32)" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="15.2" cy="15.2" r="0.7" fill="rgba(141,110,99,0.3)" />
          </svg>
          <input
            type="text" placeholder="Rechercher un cocktail..."
            value={search} onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%', fontFamily: UI, fontSize: '0.8rem', color: TEXT,
              background: 'rgba(46,189,177,0.06)',
              border: '1px solid rgba(46,189,177,0.18)', borderRadius: '999px',
              padding: '0.45rem 0.75rem 0.45rem 2.1rem', outline: 'none',
              transition: 'border-color 0.15s',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'rgba(46,189,177,0.45)')}
            onBlur={(e)  => (e.target.style.borderColor = 'rgba(46,189,177,0.18)')}
          />
          {search && (
            <button onClick={() => setSearch('')} style={{
              position: 'absolute', right: '0.6rem', top: '50%', transform: 'translateY(-50%)',
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '0.7rem', color: TEXT_DIM, padding: '0.1rem 0.2rem',
            }}>✕</button>
          )}
        </div>

        {/* Empty search state */}
        {visible.length === 0 && q && (
          <p style={{ fontFamily: FONT, fontStyle: 'italic', fontSize: '1.1rem', color: TEXT_DIM }}>Aucun résultat pour « {q} »</p>
        )}

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '1.25rem' }}>
          {visible.map((entry) => (
            <CocktailCard key={entry.id} entry={entry} onClick={() => onSelect(entry.id)} />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Tiki Banner ─────────────────────────────────────────────────────────────

function TikiBanner({ isMobile, onMenuOpen, count, q }) {
  return (
    <div style={{
      position: 'relative', overflow: 'hidden', flexShrink: 0,
      background: 'linear-gradient(150deg, #1a3530 0%, #204038 55%, #172e2a 100%)',
      minHeight: isMobile ? '140px' : '164px',
    }}>
      {/* ── SVG scene ── */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        viewBox="0 0 900 164"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Rattan / weave texture */}
          <pattern id="bRattan" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
            <line x1="0" y1="7" x2="7" y2="0" stroke="#c8a96e" strokeWidth="1.2" />
            <line x1="7" y1="14" x2="14" y2="7" stroke="#c8a96e" strokeWidth="1.2" />
            <line x1="7" y1="0" x2="14" y2="7" stroke="#9e7b45" strokeWidth="1" />
            <line x1="0" y1="7" x2="7" y2="14" stroke="#9e7b45" strokeWidth="1" />
          </pattern>
        </defs>
        {/* Rattan overlay */}
        <rect width="900" height="164" fill="url(#bRattan)" opacity="0.048" />
        {/* Stars / dots */}
        {[[60,18],[140,30],[290,12],[420,22],[560,15],[680,28],[810,10],[870,35],
          [200,44],[370,38],[490,48],[740,40]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r={i%3===0?1.2:0.8} fill="white" opacity={0.15+i*0.02} />
        ))}

        {/* ── Tiki torch — left (scaled to 75%) ── */}
        <g transform="translate(310,164) scale(0.75) translate(-65,-164)">
          <rect x="62" y="52" width="6" height="90" rx="3" fill="#8d6e63" opacity="0.8" />
          <rect x="63.5" y="52" width="2" height="90" rx="1" fill="#bcaaa4" opacity="0.3" />
          <path d="M 54 52 Q 65 44 76 52 L 73 62 Q 65 58 57 62 Z" fill="#6d4c41" opacity="0.85" />
          <path d="M 65 28 Q 60 36 58 44 Q 62 40 65 46 Q 68 40 72 44 Q 70 36 65 28 Z" fill="#f9a825" opacity="0.9" />
          <path d="M 65 34 Q 62 40 61 46 Q 64 42 65 48 Q 66 42 69 46 Q 68 40 65 34 Z" fill="#ffee58" opacity="0.7" />
        </g>

        {/* ── Palm tree — right side (scaled to 78%) ── */}
        <g transform="translate(842,164) scale(0.78) translate(-842,-164)">
          <path d="M 820 164 Q 824 140 828 115 Q 832 88 836 68 Q 839 52 842 40" stroke="#5d4037" strokeWidth="7" fill="none" strokeLinecap="round" />
          <path d="M 820 164 Q 824 140 828 115 Q 832 88 836 68 Q 839 52 842 40" stroke="#8d6e63" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.35" />
          <path d="M 842 40 Q 818 34 800 44 Q 815 42 842 48 Z" fill="#2e7d32" opacity="0.72" />
          <path d="M 842 40 Q 822 18 812 8  Q 826 26 844 46 Z" fill="#388e3c" opacity="0.68" />
          <path d="M 842 40 Q 844 16 852 4  Q 848 22 845 44 Z" fill="#43a047" opacity="0.65" />
          <path d="M 842 40 Q 864 18 876 10 Q 860 28 845 44 Z" fill="#388e3c" opacity="0.68" />
          <path d="M 842 40 Q 875 30 892 36 Q 866 38 843 48 Z" fill="#2e7d32" opacity="0.62" />
          <circle cx="838" cy="50" r="5" fill="#4e342e" opacity="0.8" />
          <circle cx="848" cy="46" r="4" fill="#5d4037" opacity="0.75" />
        </g>

        {/* ── Second smaller palm — far right edge (scaled to 78%) ── */}
        <g transform="translate(900,164) scale(0.78) translate(-900,-164)">
          <path d="M 900 164 Q 898 135 896 105 Q 893 75 890 55" stroke="#4e342e" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.5" />
          <path d="M 890 55 Q 872 48 860 55 Q 873 53 890 61 Z" fill="#1b5e20" opacity="0.45" />
          <path d="M 890 55 Q 870 38 862 30 Q 875 44 892 59 Z" fill="#1b5e20" opacity="0.42" />
          <path d="M 890 55 Q 906 40 912 32 Q 898 46 892 59 Z" fill="#1b5e20" opacity="0.42" />
        </g>

        {/* ── Tiki mask — large, colorized, center-right ── */}
        <g opacity="0.2" transform="translate(580,35) scale(0.44)">
          {/* Face */}
          <ellipse cx="100" cy="112" rx="56" ry="72" stroke="#5dd4ca" strokeWidth="3" fill="#f4d03f" fillOpacity="0.14" />
          {/* Eyes */}
          <rect x="58" y="80" width="32" height="22" rx="3" stroke="#5dd4ca" strokeWidth="2.5" fill="#5dd4ca" fillOpacity="0.22" />
          <rect x="110" y="80" width="32" height="22" rx="3" stroke="#5dd4ca" strokeWidth="2.5" fill="#5dd4ca" fillOpacity="0.22" />
          {/* Nose */}
          <path d="M 100 112 L 88 132 L 112 132 Z" stroke="#f4d03f" strokeWidth="2" fill="#f4d03f" fillOpacity="0.2" />
          {/* Teeth / mouth */}
          <rect x="62" y="140" width="76" height="28" rx="4" stroke="#5dd4ca" strokeWidth="2.5" fill="#5dd4ca" fillOpacity="0.1" />
          <line x1="79" y1="140" x2="79" y2="168" stroke="#5dd4ca" strokeWidth="2" />
          <line x1="96" y1="140" x2="96" y2="168" stroke="#5dd4ca" strokeWidth="2" />
          <line x1="120" y1="140" x2="120" y2="168" stroke="#5dd4ca" strokeWidth="2" />
          {/* Headdress */}
          <rect x="80" y="52" width="40" height="24" rx="4" stroke="#f4c542" strokeWidth="2.5" fill="#f4c542" fillOpacity="0.22" />
        </g>

        {/* ── Hibiscus flower — mid-left ── */}
        {[0,72,144,216,288].map((deg, i) => {
          const rad = (deg * Math.PI) / 180
          const px = 200 + Math.cos(rad) * 18
          const py = 82 + Math.sin(rad) * 18
          return <ellipse key={i} cx={px} cy={py} rx="9" ry="5"
            fill="#e87a5a" opacity="0.18"
            transform={`rotate(${deg},${px},${py})`} />
        })}
        <circle cx="200" cy="82" r="5" fill="#f4c542" opacity="0.22" />

        {/* ── Cocktail glass silhouette — center ── */}
        <g opacity="0.07" transform="translate(430, 50)">
          <path d="M 0 0 L 20 46 L 40 0 Z" stroke="#5dd4ca" strokeWidth="2" fill="none" />
          <line x1="20" y1="46" x2="20" y2="68" stroke="#5dd4ca" strokeWidth="2" />
          <line x1="10" y1="68" x2="30" y2="68" stroke="#5dd4ca" strokeWidth="2" />
        </g>

        {/* ── Waves at the bottom ── */}
        <path d="M 0 148 C 60 138 120 155 180 148 C 240 141 300 155 360 148 C 420 141 480 155 540 148 C 600 141 660 155 720 148 C 780 141 840 152 900 148 L 900 164 L 0 164 Z"
          fill="#5dd4ca" opacity="0.1" />
        <path d="M 0 155 C 50 148 100 160 150 155 C 200 150 250 160 300 155 C 350 150 400 160 450 155 C 500 150 550 160 600 155 C 650 150 700 160 750 155 C 800 150 860 158 900 155 L 900 164 L 0 164 Z"
          fill="#5dd4ca" opacity="0.14" />
      </svg>

      {/* ── Text content ── */}
      <div style={{ position: 'relative', zIndex: 1, padding: isMobile ? '1.5rem 1.25rem 1.2rem' : '1.75rem 3rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {isMobile && (
          <button
            onClick={onMenuOpen}
            style={{
              fontFamily: UI, fontSize: '1.1rem', color: '#5dd4ca',
              background: 'rgba(93,212,202,0.12)', border: '1px solid rgba(93,212,202,0.25)',
              borderRadius: '8px', cursor: 'pointer', padding: '0.28rem 0.55rem',
              lineHeight: 1, flexShrink: 0,
            }}
          >≡</button>
        )}
        <div>
          <p style={{ fontFamily: UI, fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(93,212,202,0.55)', marginBottom: '0.4rem' }}>
            Bar Tiki
          </p>
          <h2 style={{ fontFamily: FONT, fontStyle: 'italic', fontWeight: 400, fontSize: isMobile ? '1.55rem' : '1.85rem', color: '#e8f7f5', lineHeight: 1.2, marginBottom: '0.3rem' }}>
            {q ? `Résultats pour « ${q} »` : 'Cocktails & Boissons'}
          </h2>
          <p style={{ fontFamily: UI, fontSize: '0.72rem', color: 'rgba(232,247,245,0.45)' }}>
            {count} recette{count > 1 ? 's' : ''} à la carte
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Cocktail card ────────────────────────────────────────────────────────────

function CocktailCard({ entry, onClick }) {
  const Ill = getBoissonsIllustration(entry.illustration)

  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', flexDirection: 'column',
        textAlign: 'left', padding: 0,
        background: CARD_BG,
        border: `1px solid ${BORDER}`,
        borderRadius: '14px', overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        boxShadow: '0 2px 10px rgba(26,56,48,0.06)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = '0 8px 28px rgba(26,56,48,0.12)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(26,56,48,0.06)'
      }}
    >
      {/* Illustration */}
      <div style={{
        height: '140px', flexShrink: 0,
        background: '#f5e8d0', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
      }}>
        {Ill ? (
          <div style={{ width: '120px', height: '120px' }}>
            <Ill />
          </div>
        ) : (
          <span style={{ fontSize: '2.8rem' }}>🍹</span>
        )}
        {entry.tags && entry.tags.some(t => t.includes('°')) && (
          <span style={{
            position: 'absolute', top: '0.6rem', left: '0.75rem',
            fontFamily: UI, fontSize: '0.58rem', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.08em',
            color: GOLD, background: 'rgba(255,255,255,0.82)',
            borderRadius: '999px', padding: '0.15rem 0.5rem',
          }}>
            {entry.tags.find(t => t.includes('°'))}
          </span>
        )}
      </div>

      {/* Text */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0.9rem 1.1rem 1rem' }}>
        <span style={{
          display: 'inline-block', alignSelf: 'flex-start',
          fontFamily: UI, fontSize: '0.6rem', fontWeight: 500,
          textTransform: 'uppercase', letterSpacing: '0.1em',
          color: ACCENT, background: 'rgba(46,189,177,0.1)',
          borderRadius: '999px', padding: '0.15rem 0.5rem', marginBottom: '0.5rem',
        }}>
          {(entry.tags && entry.tags.some(t => t.includes('°'))) ? 'Liqueur' : 'Cocktail'}
        </span>
        <p style={{ fontFamily: FONT, fontSize: '0.95rem', color: TEXT, lineHeight: 1.35, marginBottom: '0.2rem' }}>
          {entry.titleBase}
        </p>
        {entry.titleItalic && (
          <p style={{ fontFamily: FONT, fontStyle: 'italic', fontSize: '0.88rem', color: ACCENT, lineHeight: 1.3 }}>
            {entry.titleItalic}
          </p>
        )}
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', gap: '0.45rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
          {entry.time      && <Meta label={entry.time} />}
          {entry.difficulty && <Meta label={entry.difficulty} />}
          {entry.servings != null && <Meta label={`${entry.servings} pers.`} />}
        </div>
      </div>
    </button>
  )
}

function Meta({ label }) {
  return (
    <span style={{
      fontFamily: UI, fontSize: '0.68rem',
      color: TEXT_MID, background: 'rgba(46,189,177,0.07)',
      borderRadius: '999px', padding: '0.2rem 0.55rem',
    }}>
      {label}
    </span>
  )
}
