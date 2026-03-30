import { useState, useEffect } from 'react'
import { tradingCategories } from '../data/tradingData'
import { useIsMobile } from '../hooks/useIsMobile'

const BG       = '#0d1117'
const CARD     = '#0f1623'
const ACCENT   = '#00e5b8'
const TEXT     = '#d1d8e8'
const TEXT_DIM = 'rgba(209,216,232,0.45)'
const BORDER   = 'rgba(255,255,255,0.06)'
const FONT     = '"Plus Jakarta Sans", sans-serif'
const MONO     = '"Space Mono", monospace'

const SESSIONS = [
  { name: 'Tokyo',    timezone: 'Asia/Tokyo',       openUTC: 0,  closeUTC: 9  },
  { name: 'Londres',  timezone: 'Europe/London',    openUTC: 8,  closeUTC: 17 },
  { name: 'New York', timezone: 'America/New_York', openUTC: 13, closeUTC: 22 },
]

function isSessionOpen(o, c) {
  const h = new Date().getUTCHours() + new Date().getUTCMinutes() / 60
  return h >= o && h < c
}

function getLocalTime(tz) {
  return new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: tz }).format(new Date())
}

const labelSt = {
  fontFamily: MONO,
  fontSize: '0.58rem',
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  color: 'rgba(0,229,184,0.5)',
  marginBottom: '0.5rem',
}

const inputSt = {
  fontFamily: FONT,
  fontSize: '0.82rem',
  fontWeight: 600,
  color: TEXT,
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '8px',
  padding: '0.35rem 0.65rem',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'border-color 0.15s',
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function TradingDashboard({ onSelectCategory, onHome, isMobile }) {
  const isNarrow = useIsMobile(700)

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: BG }}>

      {/* Top bar */}
      <div style={{
        padding: isMobile ? '0.85rem 1.25rem' : '0.85rem 2rem',
        borderBottom: `1px solid ${BORDER}`,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <button
          onClick={onHome}
          style={{
            fontFamily: FONT, fontSize: '0.7rem', fontWeight: 500,
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
          fontFamily: FONT, fontWeight: 800,
          fontSize: '0.9rem', letterSpacing: '0.08em',
          color: TEXT,
        }}>
          Trading
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
          <div style={{ background: CARD }}><SessionsWidget /></div>
          <div style={{ background: CARD }}><PositionCalcWidget /></div>
          <div style={{ background: CARD }}><RRCalcWidget /></div>
          <div style={{ background: '#0b0f1a' }}><IllustrationWidget /></div>
          <div style={{ background: CARD, gridColumn: isNarrow ? '1' : 'span 2' }}><RuleWidget /></div>
        </div>

        {/* Categories */}
        <div style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '14px',
          padding: '1rem 1.25rem 1.1rem',
        }}>
          <p style={{ ...labelSt, marginBottom: '0.85rem' }}>Explorer</p>
          <div style={{ display: 'flex', gap: '0.6rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
            {tradingCategories.map((cat) => (
              <CategoryTile key={cat.id} cat={cat} onClick={() => onSelectCategory(cat.id)} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

// ─── Sessions ─────────────────────────────────────────────────────────────────

function SessionsWidget() {
  const [, setTick] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 30000)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ padding: '1.4rem 1.5rem' }}>
      <p style={labelSt}>Sessions de marché</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.75rem' }}>
        {SESSIONS.map((s) => {
          const open = isSessionOpen(s.openUTC, s.closeUTC)
          return (
            <div key={s.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{
                  width: '7px', height: '7px', borderRadius: '50%', flexShrink: 0,
                  background: open ? ACCENT : 'rgba(255,255,255,0.12)',
                  boxShadow: open ? `0 0 8px ${ACCENT}` : 'none',
                  transition: 'all 0.4s',
                }} />
                <span style={{ fontFamily: FONT, fontSize: '0.85rem', fontWeight: 600, color: open ? TEXT : TEXT_DIM }}>
                  {s.name}
                </span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ display: 'block', fontFamily: MONO, fontSize: '0.78rem', color: open ? TEXT : TEXT_DIM }}>
                  {getLocalTime(s.timezone)}
                </span>
                <span style={{
                  fontFamily: FONT, fontSize: '0.58rem', fontWeight: 500,
                  color: open ? ACCENT : TEXT_DIM,
                  letterSpacing: '0.04em',
                }}>
                  {open ? 'Ouvert' : 'Fermé'}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Position calculator ──────────────────────────────────────────────────────

function PositionCalcWidget() {
  const [capital, setCapital] = useState('10000')
  const [risk,    setRisk]    = useState('1')
  const [stop,    setStop]    = useState('2')

  const maxLoss = (parseFloat(capital) * parseFloat(risk)) / 100
  const posSize = maxLoss / (parseFloat(stop) / 100)
  const valid   = !isNaN(posSize) && isFinite(posSize) && posSize > 0

  return (
    <div style={{ padding: '1.4rem 1.5rem' }}>
      <p style={labelSt}>Taille de position</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginTop: '0.5rem' }}>
        <CalcField label="Capital (€)" value={capital} onChange={setCapital} />
        <CalcField label="Risque (%)"  value={risk}    onChange={setRisk} />
        <CalcField label="Stop (%)"    value={stop}    onChange={setStop} />
      </div>
      <div style={{ marginTop: '1rem', paddingTop: '0.8rem', borderTop: `1px solid ${BORDER}` }}>
        <ResultRow label="Perte max"    value={valid ? `${maxLoss.toFixed(0)} €` : '—'} accent />
        <ResultRow label="Position max" value={valid ? `${posSize.toFixed(0)} €` : '—'} />
      </div>
    </div>
  )
}

// ─── R/R calculator ───────────────────────────────────────────────────────────

function RRCalcWidget() {
  const [entry,  setEntry]  = useState('100')
  const [stop,   setStop]   = useState('95')
  const [target, setTarget] = useState('115')

  const e = parseFloat(entry), s = parseFloat(stop), t = parseFloat(target)
  const riskAmt   = e - s
  const rewardAmt = t - e
  const rr        = riskAmt > 0 ? rewardAmt / riskAmt : null
  const riskPct   = e > 0 ? (riskAmt / e) * 100 : null
  const rewardPct = e > 0 ? (rewardAmt / e) * 100 : null
  const valid     = rr !== null && isFinite(rr) && e > s && t > e

  return (
    <div style={{ padding: '1.4rem 1.5rem' }}>
      <p style={labelSt}>Risk / Reward</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginTop: '0.5rem' }}>
        <CalcField label="Entrée" value={entry}  onChange={setEntry} />
        <CalcField label="Stop"   value={stop}   onChange={setStop} />
        <CalcField label="Cible"  value={target} onChange={setTarget} />
      </div>
      <div style={{ marginTop: '1rem', paddingTop: '0.8rem', borderTop: `1px solid ${BORDER}` }}>
        {valid ? (
          <>
            <ResultRow label="Risque" value={`${riskAmt.toFixed(2)}  (${riskPct?.toFixed(1)}%)`}   danger />
            <ResultRow label="Gain"   value={`${rewardAmt.toFixed(2)} (${rewardPct?.toFixed(1)}%)`} />
            <ResultRow label="Ratio"  value={`1 : ${rr.toFixed(2)}`} accent />
          </>
        ) : (
          <p style={{ fontFamily: FONT, fontSize: '0.72rem', color: TEXT_DIM, fontStyle: 'italic' }}>
            Entrée &gt; Stop, Cible &gt; Entrée
          </p>
        )}
      </div>
    </div>
  )
}

// ─── Illustration ─────────────────────────────────────────────────────────────

function IllustrationWidget() {
  const candles = [
    { x: 14, o: 72, c: 82, h: 68, l: 86 },
    { x: 32, o: 80, c: 65, h: 60, l: 84 },
    { x: 50, o: 67, c: 56, h: 50, l: 70 },
    { x: 68, o: 58, c: 68, h: 53, l: 72 },
    { x: 86, o: 65, c: 50, h: 44, l: 68 },
    { x: 104, o: 52, c: 38, h: 32, l: 56 },
    { x: 122, o: 40, c: 28, h: 22, l: 44 },
    { x: 140, o: 30, c: 18, h: 12, l: 34 },
  ]

  return (
    <div style={{
      padding: '1.4rem 1.5rem',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', minHeight: '120px',
    }}>
      <svg width="158" height="90" viewBox="0 0 158 90" style={{ opacity: 0.6 }}>
        {[22, 44, 66, 88].map((y) => (
          <line key={y} x1="0" y1={y} x2="158" y2={y} stroke="rgba(0,229,184,0.07)" strokeWidth="0.5" />
        ))}
        {candles.map((c, i) => {
          const bull  = c.c < c.o
          const color = bull ? ACCENT : '#f4666a'
          const bTop  = Math.min(c.o, c.c)
          const bH    = Math.max(Math.abs(c.o - c.c), 2)
          return (
            <g key={i}>
              <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke={color} strokeWidth="1" opacity="0.55" />
              <rect x={c.x - 5} y={bTop} width="10" height={bH} fill={color} opacity="0.7" rx="1" />
            </g>
          )
        })}
        <polyline
          points="14,72 32,65 50,56 68,54 86,48 104,38 122,28 140,18"
          fill="none" stroke={ACCENT} strokeWidth="1.2" strokeDasharray="4,3" opacity="0.4"
        />
      </svg>
      <p style={{ fontFamily: MONO, fontSize: '0.52rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: TEXT_DIM, marginTop: '0.5rem' }}>
        Price action
      </p>
    </div>
  )
}

// ─── Règle des 2% ─────────────────────────────────────────────────────────────

function RuleWidget() {
  return (
    <div style={{ padding: '1.4rem 1.5rem' }}>
      <p style={labelSt}>Règle des 2%</p>
      <p style={{ fontFamily: FONT, fontSize: '1rem', fontWeight: 700, color: TEXT, lineHeight: 1.4, marginBottom: '0.6rem' }}>
        Ne risquez jamais plus de 2% de votre capital sur un seul trade.
      </p>
      <p style={{ fontFamily: FONT, fontSize: '0.8rem', color: TEXT_DIM, lineHeight: 1.6, marginBottom: '1rem' }}>
        Sur 10 000 €, votre risque max est de 200 € par position. Même après 10 trades perdants d'affilée, il vous reste 80% du capital.
      </p>
      <div>
        <div style={{ height: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '99px', overflow: 'hidden' }}>
          <div style={{ width: '2%', height: '100%', background: ACCENT, borderRadius: '99px' }} />
        </div>
        <p style={{ fontFamily: MONO, fontSize: '0.52rem', color: 'rgba(0,229,184,0.45)', marginTop: '0.4rem', letterSpacing: '0.08em' }}>
          2% du capital — risque max / trade
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
        display: 'flex', flexDirection: 'column', gap: '0.3rem',
        padding: '0.75rem 1.15rem',
        borderRadius: '10px',
        border: `1px solid rgba(255,255,255,0.07)`,
        background: 'rgba(255,255,255,0.02)',
        cursor: hasEntries ? 'pointer' : 'default',
        flexShrink: 0, textAlign: 'left',
        transition: 'border-color 0.15s, background 0.15s',
        opacity: hasEntries ? 1 : 0.35,
      }}
      onMouseEnter={(e) => {
        if (!hasEntries) return
        e.currentTarget.style.borderColor = `${color}55`
        e.currentTarget.style.background  = `${color}0d`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.background  = 'rgba(255,255,255,0.02)'
      }}
    >
      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: color, opacity: hasEntries ? 0.8 : 0.3 }} />
      <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: '0.8rem', color: TEXT, whiteSpace: 'nowrap' }}>
        {cat.label}
      </span>
      <span style={{ fontFamily: MONO, fontSize: '0.56rem', color: hasEntries ? color : TEXT_DIM, opacity: 0.8 }}>
        {cat.entryIds.length} fiche{cat.entryIds.length !== 1 ? 's' : ''}
      </span>
    </button>
  )
}

// ─── Shared ───────────────────────────────────────────────────────────────────

function CalcField({ label, value, onChange }) {
  return (
    <div>
      <p style={{ ...labelSt, marginBottom: '0.2rem', fontSize: '0.54rem' }}>{label}</p>
      <input
        type="number" inputMode="decimal"
        value={value} onChange={(e) => onChange(e.target.value)}
        style={inputSt}
        onFocus={(e) => (e.target.style.borderColor = `${ACCENT}66`)}
        onBlur={(e)  => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
      />
    </div>
  )
}

function ResultRow({ label, value, accent, danger }) {
  const color = danger ? '#f4666a' : accent ? ACCENT : TEXT
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.3rem' }}>
      <span style={{ fontFamily: MONO, fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: TEXT_DIM }}>
        {label}
      </span>
      <span style={{ fontFamily: MONO, fontSize: '0.78rem', fontWeight: accent ? 700 : 400, color }}>
        {value}
      </span>
    </div>
  )
}
