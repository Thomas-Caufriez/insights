import { useState, useEffect } from 'react'
import { tradingCategories } from './data'
import { useIsMobile } from '../hooks/useIsMobile'

const BG         = '#09000f'
const CARD       = '#0e0018'
const CARD_HOV   = '#160025'
const NEON_GREEN = '#00ff88'
const NEON_PINK  = '#ff2d78'
const NEON_CYAN  = '#00f5ff'
const NEON_PURP  = '#c44fff'
const ACCENT     = NEON_CYAN
const TEXT       = '#f5e6ff'
const TEXT_DIM   = 'rgba(245,230,255,0.4)'
const BORDER     = 'rgba(196,79,255,0.15)'
const FONT       = '"Plus Jakarta Sans", sans-serif'
const MONO       = '"Space Mono", monospace'

const SESSIONS = [
  { name: 'Sydney',    timezone: 'Australia/Sydney',  openUTC: 22, closeUTC: 7  },
  { name: 'Tokyo',     timezone: 'Asia/Tokyo',         openUTC: 0,  closeUTC: 9  },
  { name: 'Francfort', timezone: 'Europe/Berlin',      openUTC: 7,  closeUTC: 16 },
  { name: 'Londres',   timezone: 'Europe/London',      openUTC: 8,  closeUTC: 17 },
  { name: 'New York',  timezone: 'America/New_York',   openUTC: 13, closeUTC: 22 },
]

const RULES = [
  "Ne risque jamais plus de 2% de ton capital par trade.",
  "Ne trade pas contre la tendance principale.",
  "Coupe tes pertes rapidement. Laisse courir tes gains.",
  "Les émotions sont ton pire ennemi. Respecte ton plan.",
  "Attends la confirmation avant d'entrer en position.",
  "Le marché a toujours raison. Ton analyse peut avoir tort.",
  "Ne chase pas un trade manqué. Un autre arrivera.",
  "Un trade sans stop loss n'est pas un trade, c'est un pari.",
]

function isSessionOpen(o, c) {
  const h = new Date().getUTCHours() + new Date().getUTCMinutes() / 60
  if (o > c) return h >= o || h < c
  return h >= o && h < c
}

function getLocalTime(tz) {
  return new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: tz }).format(new Date())
}

const labelSt = {
  fontFamily: FONT,
  fontSize: '0.7rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: `${NEON_CYAN}99`,
  marginBottom: '0.5rem',
}

const inputSt = {
  fontFamily: FONT,
  fontSize: '0.82rem',
  fontWeight: 600,
  color: TEXT,
  background: 'rgba(196,79,255,0.05)',
  border: `1px solid ${BORDER}`,
  borderRadius: '8px',
  padding: '0.35rem 0.65rem',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s, box-shadow 0.2s',
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function TradingDashboard({ onSelectCategory, onHome, isMobile }) {
  const isNarrow = useIsMobile(700)

  return (
    <div style={{
      height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden',
      background: BG,
      backgroundImage: `
        linear-gradient(rgba(196,79,255,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(196,79,255,0.04) 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px',
    }}>

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
          textShadow: `0 0 18px ${NEON_PURP}88`,
        }}>
          Trading
        </span>
        <div style={{ width: '70px' }} />
      </div>

      {/* Category nav strip */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '0.6rem',
        padding: isMobile ? '0.85rem 1.25rem' : '0.85rem 2rem',
        borderBottom: `1px solid ${BORDER}`,
        flexShrink: 0,
      }}>
        {tradingCategories.map((cat) => {
          const color      = cat.color || NEON_CYAN
          const hasEntries = cat.entryIds.length > 0
          return (
            <button
              key={cat.id}
              onClick={hasEntries ? () => onSelectCategory(cat.id) : undefined}
              style={{
                fontFamily: FONT, fontSize: '0.95rem', fontWeight: 600,
                color: hasEntries ? color : TEXT_DIM,
                background: 'transparent',
                border: `1px solid ${hasEntries ? `${color}44` : BORDER}`,
                borderRadius: '99px',
                padding: '0.45rem 1.2rem',
                cursor: hasEntries ? 'pointer' : 'default',
                whiteSpace: 'nowrap',
                opacity: hasEntries ? 1 : 0.35,
                transition: 'border-color 0.15s, box-shadow 0.15s, background 0.15s',
              }}
              onMouseEnter={(e) => {
                if (!hasEntries) return
                e.currentTarget.style.borderColor = color
                e.currentTarget.style.boxShadow = `0 0 12px ${color}44`
                e.currentTarget.style.background = `${color}11`
              }}
              onMouseLeave={(e) => {
                if (!hasEntries) return
                e.currentTarget.style.borderColor = `${color}44`
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Scrollable */}
      <div style={{ flex: 1, overflowY: 'auto', padding: isNarrow ? '1.25rem 1.25rem 3rem' : '1.75rem 2rem 3rem' }}>

        {/* Bento — 3 cols, 3 rows */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isNarrow ? '1fr' : 'repeat(3, 1fr)',
          gap: '1px',
          background: BORDER,
          border: `1px solid ${BORDER}`,
          borderRadius: '14px',
          overflow: 'hidden',
        }}>
          {/* Row 1 — market data (prominent) */}
          <div style={{ background: CARD, gridColumn: isNarrow ? '1' : 'span 2' }}><LivePricesWidget /></div>
          <div style={{ background: CARD }}><SessionsWidget /></div>

          {/* Row 2 — secondary info */}
          <div style={{ background: CARD }}><RulesWidget /></div>
          <div style={{ background: CARD }}><NewsletterWidget /></div>
          <div style={{ background: CARD }}><BasicCalcWidget /></div>

          {/* Row 3 — calculators (less prominent) */}
          <div style={{ background: CARD }}><PositionCalcWidget /></div>
          <div style={{ background: CARD, gridColumn: isNarrow ? '1' : 'span 2' }}><RRCalcWidget /></div>
        </div>

      </div>
    </div>
  )
}

// ─── Live prices ──────────────────────────────────────────────────────────────

function LivePricesWidget() {
  const [btc, setBtc]         = useState(null)
  const [eur, setEur]         = useState(null)
  const [loading, setLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState(null)

  async function fetchPrices() {
    try {
      const [btcRes, eurRes] = await Promise.all([
        fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT'),
        fetch('https://api.frankfurter.app/latest?from=EUR&to=USD'),
      ])
      if (!btcRes.ok || !eurRes.ok) throw new Error()
      const btcData = await btcRes.json()
      const eurData = await eurRes.json()
      setBtc({ price: parseFloat(btcData.lastPrice), change: parseFloat(btcData.priceChangePercent) })
      setEur({ rate: eurData.rates.USD })
      setLastUpdate(new Date())
    } catch {
      // keep previous data on error
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPrices()
    const id = setInterval(fetchPrices, 30000)
    return () => clearInterval(id)
  }, [])

  const assets = [
    {
      symbol: 'BTC / USD',
      name: 'Bitcoin',
      price: btc ? `$${btc.price.toLocaleString('en-US', { maximumFractionDigits: 0 })}` : null,
      change: btc?.change ?? null,
      color: '#ff9900',
    },
    {
      symbol: 'EUR / USD',
      name: 'Euro · Dollar',
      price: eur ? eur.rate.toFixed(4) : null,
      change: null,
      note: 'ECB',
      color: NEON_CYAN,
    },
  ]

  return (
    <div style={{ padding: '1.4rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <p style={{ ...labelSt, marginBottom: 0 }}>Marchés</p>
        {lastUpdate && (
          <span style={{ fontFamily: MONO, fontSize: '0.52rem', color: TEXT_DIM }}>
            {getLocalTime('UTC')} UTC
          </span>
        )}
      </div>

      <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
        {assets.map((a) => (
          <div key={a.symbol}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
              <span style={{ fontFamily: FONT, fontSize: '0.68rem', fontWeight: 700, color: a.color, letterSpacing: '0.06em' }}>
                {a.symbol}
              </span>
              {a.note && (
                <span style={{ fontFamily: MONO, fontSize: '0.48rem', color: TEXT_DIM, border: `1px solid ${BORDER}`, borderRadius: '4px', padding: '0.05rem 0.3rem' }}>
                  {a.note}
                </span>
              )}
            </div>
            {loading ? (
              <div style={{ width: '120px', height: '2rem', background: 'rgba(196,79,255,0.07)', borderRadius: '6px' }} />
            ) : (
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                <span style={{ fontFamily: MONO, fontSize: '1.6rem', fontWeight: 700, color: TEXT, letterSpacing: '-0.02em' }}>
                  {a.price ?? '—'}
                </span>
                {a.change != null && (
                  <span style={{
                    fontFamily: FONT, fontSize: '0.85rem', fontWeight: 700,
                    color: a.change >= 0 ? NEON_GREEN : NEON_PINK,
                    textShadow: a.change >= 0 ? `0 0 10px ${NEON_GREEN}66` : `0 0 10px ${NEON_PINK}66`,
                  }}>
                    {a.change >= 0 ? '+' : ''}{a.change.toFixed(2)}%
                  </span>
                )}
              </div>
            )}
            <span style={{ fontFamily: FONT, fontSize: '0.65rem', color: TEXT_DIM }}>{a.name}</span>
          </div>
        ))}
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
      <p style={labelSt}>Statut des marchés</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', marginTop: '0.5rem' }}>
        {SESSIONS.map((s) => {
          const open = isSessionOpen(s.openUTC, s.closeUTC)
          return (
            <div key={s.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                <div style={{
                  width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
                  background: open ? NEON_GREEN : 'rgba(196,79,255,0.2)',
                  boxShadow: open ? `0 0 6px ${NEON_GREEN}, 0 0 14px ${NEON_GREEN}55` : 'none',
                  transition: 'all 0.4s',
                }} />
                <span style={{ fontFamily: FONT, fontSize: '0.82rem', fontWeight: 600, color: open ? TEXT : TEXT_DIM }}>
                  {s.name}
                </span>
              </div>
              <span style={{ fontFamily: MONO, fontSize: '0.75rem', color: open ? TEXT : TEXT_DIM }}>
                {getLocalTime(s.timezone)}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Rotating rules ───────────────────────────────────────────────────────────

function RulesWidget() {
  const [idx, setIdx]         = useState(0)
  const [visible, setVisible] = useState(true)

  const advance = (nextIdx) => {
    setVisible(false)
    setTimeout(() => { setIdx(nextIdx ?? ((i) => (i + 1) % RULES.length)); setVisible(true) }, 300)
  }

  useEffect(() => {
    const id = setInterval(() => advance(), 15000)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      <p style={{ ...labelSt, marginBottom: 0 }}>Règle du moment</p>
      <p style={{
        fontFamily: FONT, fontSize: '0.78rem', fontWeight: 500,
        color: TEXT_DIM, lineHeight: 1.55, fontStyle: 'italic',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s ease',
        margin: 0,
      }}>
        "{RULES[idx]}"
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
          {RULES.map((_, i) => (
            <div
              key={i}
              onClick={() => advance(i)}
              style={{
                width: i === idx ? '10px' : '3px', height: '3px',
                borderRadius: '99px',
                background: i === idx ? NEON_PURP : `${NEON_PURP}33`,
                boxShadow: i === idx ? `0 0 4px ${NEON_PURP}` : 'none',
                transition: 'all 0.4s', cursor: 'pointer',
              }}
            />
          ))}
        </div>
        <button
          onClick={() => advance()}
          style={{
            fontFamily: FONT, fontSize: '0.6rem', color: TEXT_DIM,
            background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: 'color 0.12s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = TEXT)}
          onMouseLeave={(e) => (e.currentTarget.style.color = TEXT_DIM)}
        >
          → suiv.
        </button>
      </div>
    </div>
  )
}

// ─── Newsletter placeholder ───────────────────────────────────────────────────

function NewsletterWidget() {
  return (
    <div style={{
      padding: '1.4rem 1.5rem',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      minHeight: '100px', gap: '0.65rem',
    }}>
      <svg width="30" height="24" viewBox="0 0 30 24" fill="none" style={{ opacity: 0.3 }}>
        <rect x="1" y="1" width="28" height="22" rx="3" stroke={NEON_CYAN} strokeWidth="1.5" />
        <polyline points="1,4 15,14 29,4" stroke={NEON_CYAN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p style={{ fontFamily: FONT, fontSize: '0.78rem', fontWeight: 700, color: TEXT_DIM, textAlign: 'center' }}>
        Newsletter
      </p>
      <p style={{ fontFamily: FONT, fontSize: '0.65rem', color: TEXT_DIM, textAlign: 'center', opacity: 0.6 }}>
        Bientôt disponible
      </p>
    </div>
  )
}

// ─── Basic calculator ─────────────────────────────────────────────────────────

function BasicCalcWidget() {
  const [display, setDisplay]     = useState('0')
  const [prev, setPrev]           = useState(null)
  const [op, setOp]               = useState(null)
  const [expression, setExpression] = useState('')
  const [resetNext, setResetNext] = useState(false)

  function pressDigit(d) {
    if (resetNext) { setDisplay(d); setResetNext(false); return }
    if (display.replace('-', '').replace('.', '').length >= 9) return
    setDisplay(display === '0' ? d : display + d)
  }

  function pressDecimal() {
    if (resetNext) { setDisplay('0.'); setResetNext(false); return }
    if (!display.includes('.')) setDisplay(display + '.')
  }

  function compute(a, b, o) {
    if (o === '+') return a + b
    if (o === '−') return a - b
    if (o === '×') return a * b
    if (o === '÷') return b !== 0 ? a / b : 0
    return b
  }

  function fmt(n) {
    if (!isFinite(n) || isNaN(n)) return '0'
    const s = parseFloat(n.toFixed(8)).toString()
    return s.length > 10 ? parseFloat(n.toPrecision(5)).toString() : s
  }

  function pressOp(nextOp) {
    const cur = parseFloat(display)
    if (prev !== null && !resetNext) {
      const res = fmt(compute(prev, cur, op))
      setDisplay(res); setPrev(parseFloat(res))
      setExpression(`${res} ${nextOp}`)
    } else {
      setPrev(cur)
      setExpression(`${display} ${nextOp}`)
    }
    setOp(nextOp); setResetNext(true)
  }

  function pressEquals() {
    if (op === null || prev === null) return
    const cur = parseFloat(display)
    const res = fmt(compute(prev, cur, op))
    setExpression(`${prev} ${op} ${display} =`)
    setDisplay(res); setPrev(null); setOp(null); setResetNext(true)
  }

  function pressClear() {
    setDisplay('0'); setPrev(null); setOp(null); setResetNext(false)
    setExpression('')
  }

  function pressNegate() {
    if (display === '0') return
    setDisplay(display.startsWith('-') ? display.slice(1) : '-' + display)
  }

  function pressPercent() {
    setDisplay(fmt(parseFloat(display) / 100))
  }

  const btns = [
    { label: 'C',  onPress: pressClear,              type: 'clear' },
    { label: '±',  onPress: pressNegate,              type: 'fn' },
    { label: '%',  onPress: pressPercent,             type: 'fn' },
    { label: '÷',  onPress: () => pressOp('÷'),       type: 'op' },
    { label: '7',  onPress: () => pressDigit('7') },
    { label: '8',  onPress: () => pressDigit('8') },
    { label: '9',  onPress: () => pressDigit('9') },
    { label: '×',  onPress: () => pressOp('×'),       type: 'op' },
    { label: '4',  onPress: () => pressDigit('4') },
    { label: '5',  onPress: () => pressDigit('5') },
    { label: '6',  onPress: () => pressDigit('6') },
    { label: '−',  onPress: () => pressOp('−'),       type: 'op' },
    { label: '1',  onPress: () => pressDigit('1') },
    { label: '2',  onPress: () => pressDigit('2') },
    { label: '3',  onPress: () => pressDigit('3') },
    { label: '+',  onPress: () => pressOp('+'),       type: 'op' },
    { label: '0',  onPress: () => pressDigit('0'),    span: 2 },
    { label: '.',  onPress: pressDecimal },
    { label: '=',  onPress: pressEquals,              type: 'eq' },
  ]

  const btnColor = (type) => {
    if (type === 'clear') return NEON_PINK
    if (type === 'op')    return NEON_PURP
    if (type === 'eq')    return NEON_CYAN
    if (type === 'fn')    return TEXT_DIM
    return TEXT
  }

  const btnBg = (type) => {
    if (type === 'eq') return `${NEON_CYAN}18`
    if (type === 'op') return `${NEON_PURP}10`
    return 'rgba(196,79,255,0.05)'
  }

  const fontSize = display.length > 8 ? '0.9rem' : display.length > 5 ? '1.1rem' : '1.3rem'

  return (
    <div style={{ padding: '1.1rem 1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <p style={labelSt}>Calculatrice</p>
      <div style={{
        background: 'rgba(196,79,255,0.05)', border: `1px solid ${BORDER}`,
        borderRadius: '8px', overflow: 'hidden',
      }}>
        <div style={{ padding: '0.25rem 0.8rem 0', textAlign: 'right', minHeight: '1rem' }}>
          <span style={{ fontFamily: MONO, fontSize: '0.58rem', color: TEXT_DIM }}>
            {expression}
          </span>
        </div>
        <div style={{ padding: '0.1rem 0.8rem 0.35rem', textAlign: 'right' }}>
          <span style={{ fontFamily: MONO, fontSize, color: TEXT, transition: 'font-size 0.1s' }}>
            {display}
          </span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.28rem' }}>
        {btns.map((b, i) => (
          <button
            key={i}
            onClick={b.onPress}
            style={{
              gridColumn: b.span ? `span ${b.span}` : undefined,
              fontFamily: MONO, fontSize: '0.82rem', fontWeight: 600,
              color: btnColor(b.type),
              background: btnBg(b.type),
              border: `1px solid ${b.type === 'eq' ? `${NEON_CYAN}33` : b.type === 'op' ? `${NEON_PURP}22` : BORDER}`,
              borderRadius: '6px',
              padding: '0.42rem 0',
              cursor: 'pointer',
              transition: 'background 0.12s, box-shadow 0.12s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${btnColor(b.type)}22`
              e.currentTarget.style.boxShadow = `0 0 8px ${btnColor(b.type)}33`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = btnBg(b.type)
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {b.label}
          </button>
        ))}
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
        <p style={{ ...labelSt, marginBottom: 0 }}>Taille de position</p>
        <InfoTooltip text="Entrez votre capital total, le % de risque accepté par trade et la distance de votre stop (en %). Calcule la perte maximale et la taille de position correspondante." />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginTop: '0.5rem' }}>
        <CalcField label="Capital (€)" value={capital} onChange={setCapital} />
        <CalcField label="Risque (%)"  value={risk}    onChange={setRisk} />
        <CalcField label="Stop (%)"    value={stop}    onChange={setStop} />
      </div>
      <div style={{ marginTop: '1rem', paddingTop: '0.8rem', borderTop: `1px solid ${BORDER}` }}>
        <ResultRow label="Perte max"    value={valid ? `${maxLoss.toFixed(0)} €` : '—'} danger />
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
  const riskShare = valid ? riskAmt / (riskAmt + rewardAmt) : null

  return (
    <div style={{ padding: '1.4rem 1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
        <p style={{ ...labelSt, marginBottom: 0 }}>Risk / Reward</p>
        <InfoTooltip text="Entrez votre prix d'entrée, votre stop loss et votre objectif de prix. Calcule le ratio risque/récompense et visualise la proportion de chaque côté du trade." />
      </div>

      {/* Inputs side by side (benefits from span 2) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem', marginTop: '0.5rem' }}>
        <CalcField label="Entrée" value={entry}  onChange={setEntry} />
        <CalcField label="Stop"   value={stop}   onChange={setStop} />
        <CalcField label="Cible"  value={target} onChange={setTarget} />
      </div>

      <div style={{ marginTop: '1rem', paddingTop: '0.8rem', borderTop: `1px solid ${BORDER}` }}>
        {valid ? (
          <>
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '0.75rem' }}>
              <ResultRow label="Risque" value={`${riskAmt.toFixed(2)} (${riskPct?.toFixed(1)}%)`}   danger />
              <ResultRow label="Gain"   value={`${rewardAmt.toFixed(2)} (${rewardPct?.toFixed(1)}%)`} positive />
              <ResultRow label="Ratio"  value={`1 : ${rr.toFixed(2)}`} accent />
            </div>
            {/* Visual R/R bar */}
            <div>
              <div style={{ display: 'flex', height: '6px', borderRadius: '99px', overflow: 'hidden', gap: '2px' }}>
                <div style={{
                  width: `${riskShare * 100}%`, minWidth: '4px',
                  background: NEON_PINK, boxShadow: `0 0 6px ${NEON_PINK}`,
                  borderRadius: '99px 0 0 99px',
                }} />
                <div style={{
                  flex: 1,
                  background: NEON_GREEN, boxShadow: `0 0 6px ${NEON_GREEN}`,
                  borderRadius: '0 99px 99px 0',
                }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.3rem' }}>
                <span style={{ fontFamily: FONT, fontSize: '0.6rem', color: `${NEON_PINK}88` }}>
                  {(riskShare * 100).toFixed(0)}% risque
                </span>
                <span style={{ fontFamily: FONT, fontSize: '0.6rem', color: `${NEON_GREEN}88` }}>
                  {((1 - riskShare) * 100).toFixed(0)}% reward
                </span>
              </div>
            </div>
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

// ─── Shared ───────────────────────────────────────────────────────────────────

function InfoTooltip({ text }) {
  const [show, setShow] = useState(false)
  return (
    <div style={{ position: 'relative', display: 'inline-block', flexShrink: 0 }}>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        style={{
          width: '14px', height: '14px', borderRadius: '50%',
          border: `1px solid ${BORDER}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'help',
          fontFamily: MONO, fontSize: '0.52rem', color: TEXT_DIM,
        }}
      >
        ?
      </div>
      {show && (
        <div style={{
          position: 'absolute',
          top: '120%', left: 0,
          background: '#150025',
          border: `1px solid ${BORDER}`,
          borderRadius: '8px',
          padding: '0.65rem 0.8rem',
          width: '200px',
          zIndex: 100,
          boxShadow: `0 4px 24px rgba(0,0,0,0.6), 0 0 0 1px ${BORDER}`,
          pointerEvents: 'none',
        }}>
          <p style={{ fontFamily: FONT, fontSize: '0.72rem', color: TEXT_DIM, lineHeight: 1.55, margin: 0 }}>
            {text}
          </p>
        </div>
      )}
    </div>
  )
}

function CalcField({ label, value, onChange }) {
  return (
    <div>
      <p style={{ ...labelSt, marginBottom: '0.2rem', fontSize: '0.62rem' }}>{label}</p>
      <input
        type="number" inputMode="decimal"
        value={value} onChange={(e) => onChange(e.target.value)}
        style={inputSt}
        onFocus={(e) => { e.target.style.borderColor = `${NEON_CYAN}88`; e.target.style.boxShadow = `0 0 12px ${NEON_CYAN}22` }}
        onBlur={(e)  => { e.target.style.borderColor = BORDER; e.target.style.boxShadow = 'none' }}
      />
    </div>
  )
}

function ResultRow({ label, value, accent, danger, positive }) {
  const color = danger ? NEON_PINK : positive ? NEON_GREEN : accent ? NEON_CYAN : TEXT
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.3rem' }}>
      <span style={{ fontFamily: FONT, fontSize: '0.72rem', fontWeight: 500, color: TEXT_DIM }}>
        {label}
      </span>
      <span style={{ fontFamily: MONO, fontSize: '0.78rem', fontWeight: accent ? 700 : 400, color }}>
        {value}
      </span>
    </div>
  )
}
