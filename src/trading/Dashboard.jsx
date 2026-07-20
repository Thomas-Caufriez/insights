import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { tradingCategories } from './data'
import { useIsMobile } from '../hooks/useIsMobile'

const NEON_GREEN = '#00ff88'
const NEON_PINK  = '#ff2d78'
const NEON_CYAN  = '#00f5ff'
const NEON_PURP  = '#c44fff'
const TEXT       = '#f5e6ff'
const TEXT_DIM   = 'rgba(245,230,255,0.4)'
const BORDER     = 'rgba(196,79,255,0.15)'

const KZ_TZ = 'America/New_York'
const KILL_ZONES = [
  { name: 'Asia',     localOpen: '20:00', localClose: '00:00', color: '#ff6b9d' },
  { name: 'London',   localOpen: '02:00', localClose: '05:00', color: '#a78bfa' },
  { name: 'New York', localOpen: '07:00', localClose: '10:00', color: NEON_CYAN  },
]


// Returns current time as a decimal hour (e.g. 14.5 = 14:30) in the given IANA timezone.
// Uses Intl.DateTimeFormat — DST is handled automatically by the browser.
function getLocalDecimalTime(timezone, date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone, hour: 'numeric', minute: 'numeric', hour12: false,
  }).formatToParts(date)
  const h = parseInt(parts.find(p => p.type === 'hour')?.value ?? '0') % 24
  const m = parseInt(parts.find(p => p.type === 'minute')?.value ?? '0')
  return h + m / 60
}

function isWeekendLocal(timezone) {
  const day = new Intl.DateTimeFormat('en-US', { timeZone: timezone, weekday: 'short' }).format(new Date())
  return ['Sat', 'Sun'].includes(day)
}

function isSessionOpen(localOpen, localClose, timezone) {
  if (isWeekendLocal(timezone)) return false
  const [oh, om] = localOpen.split(':').map(Number)
  const [ch, cm] = localClose.split(':').map(Number)
  const now   = getLocalDecimalTime(timezone)
  const open  = oh + om / 60
  const close = ch + cm / 60
  if (open > close) return now >= open || now < close
  return now >= open && now < close
}

function getLocalTime(tz) {
  return new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: tz }).format(new Date())
}

const labelCls = 'font-sans text-[0.78rem] font-bold uppercase tracking-[0.08em] text-[#00f5ff99]'

// Fixed decorative grid pattern — kept inline (multi-gradient background)
const GRID_BG = {
  backgroundImage: `
    linear-gradient(rgba(196,79,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(196,79,255,0.04) 1px, transparent 1px)
  `,
  backgroundSize: '40px 40px',
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function TradingDashboard({ onSelectCategory, onHome, isMobile }) {
  const isNarrow = useIsMobile(700)
  const [fearGreed, setFearGreed] = useState(null)
  const [prices, setPrices] = useState(null)

  return (
    <div className="h-full flex flex-col overflow-hidden bg-tr-bg" style={GRID_BG}>

      {/* Top bar */}
      <div className={`${isMobile ? 'px-5' : 'px-8'} py-[0.85rem] border-b border-tr-border flex-shrink-0 flex items-center justify-between`}>
        <button
          onClick={onHome}
          className="font-sans text-[0.7rem] font-medium tracking-[0.02em] text-tr-dim hover:text-tr-text bg-transparent border-none cursor-pointer p-0 transition-colors"
        >
          ← Insights
        </button>
        <span className="font-sans font-extrabold text-[0.9rem] tracking-[0.08em] text-tr-text [text-shadow:0_0_18px_#c44fff88]">
          Trading
        </span>
        <div className="w-[70px]" />
      </div>

      {/* Category nav strip */}
      <div className={`flex justify-center flex-wrap gap-[0.6rem] ${isMobile ? 'px-5' : 'px-8'} py-[0.85rem] border-b border-tr-border flex-shrink-0`}>
        {tradingCategories.map((cat) => {
          const color      = cat.color || NEON_CYAN
          const hasEntries = cat.entryIds.length > 0
          return (
            <button
              key={cat.id}
              onClick={hasEntries ? () => onSelectCategory(cat.id) : undefined}
              style={hasEntries ? { '--c': color, '--c-44': `${color}44` } : undefined}
              className={`font-sans text-[0.95rem] font-semibold bg-transparent border rounded-full px-[1.2rem] py-[0.45rem] whitespace-nowrap transition-[border-color,box-shadow,background] duration-150 ${
                hasEntries
                  ? 'text-[var(--c)] border-[var(--c-44)] cursor-pointer opacity-100'
                  : 'text-tr-dim border-tr-border cursor-default opacity-35'
              }`}
              onMouseEnter={(e) => {
                if (!hasEntries) return
                e.currentTarget.style.borderColor = color
                e.currentTarget.style.boxShadow = `0 0 12px ${color}44`
                e.currentTarget.style.background = `${color}11`
              }}
              onMouseLeave={(e) => {
                if (!hasEntries) return
                e.currentTarget.style.borderColor = ''
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
      <div className={`flex-1 overflow-y-auto ${isNarrow ? 'px-5 pt-5 pb-12' : 'px-8 pt-7 pb-12'}`}>

        {/* Bento — 3 cols, 3 rows */}
        <div className={`grid ${isNarrow ? 'grid-cols-1' : 'grid-cols-3'} gap-px bg-tr-border border border-tr-border rounded-[14px] overflow-hidden`}>
          {/* Row 1 — market data (prominent) */}
          <div className={`bg-tr-card ${isNarrow ? 'col-[1]' : 'col-span-2'}`}><LivePricesWidget onFearGreed={setFearGreed} onPrices={setPrices} /></div>
          <div className="bg-tr-card flex flex-col">
            <SessionsWidget />
            <div className="h-px bg-tr-border flex-shrink-0" />
            <div className="flex-1 overflow-hidden">
              <FearGreedWidget fearGreed={fearGreed} />
            </div>
          </div>

          {/* Row 2 — calendar full width */}
          <div className={`bg-tr-card ${isNarrow ? 'col-[1]' : 'col-span-3'}`}><CalendarWidget /></div>

          {/* Row 3 — calculators */}
          <div className="bg-tr-card"><BasicCalcWidget /></div>
          <div className={`bg-tr-card ${isNarrow ? 'col-[1]' : 'col-span-2'}`}><PositionSizeWidget prices={prices} /></div>

        </div>

      </div>
    </div>
  )
}

// ─── Live prices ──────────────────────────────────────────────────────────────

const BINANCE_INTERVAL = 30
const TD_INTERVAL      = 300
// Clé API TwelveData volontairement laissée ici (projet personnel statique, pas de backend).
// Merci de ne pas surcharger cette clé — quota limité à 800 requêtes/jour.
const TD_KEY           = '96cc1cc4671f46e292207720fc5e4bbf'
const TD_SYMBOLS       = 'EUR/USD,GBP/USD,USD/JPY,QQQ'

function LivePricesWidget({ onFearGreed, onPrices }) {
  const [btc,  setBtc]  = useState(null)
  const [eth,  setEth]  = useState(null)
  const [eur,  setEur]  = useState(null)
  const [gbp,  setGbp]  = useState(null)
  const [jpy,  setJpy]  = useState(null)
  const [qqq,  setQqq]  = useState(null)
  const [flashMap,        setFlashMap]        = useState({})
  const [loadingBinance,  setLoadingBinance]  = useState(true)
  const [loadingTD,       setLoadingTD]       = useState(true)
  const [countdownBinance, setCountdownBinance] = useState(BINANCE_INTERVAL)
  const [countdownTD,      setCountdownTD]      = useState(TD_INTERVAL)
  const [candles, setCandles] = useState({})

  const autoBinanceRef   = useRef(null)
  const autoTDRef        = useRef(null)
  const tickBinanceRef   = useRef(null)
  const tickTDRef        = useRef(null)
  const prevPrices       = useRef({})
  const fetchingBinance  = useRef(false)
  const fetchingTD       = useRef(false)

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes priceUp   { 0% { color: #00ff88; text-shadow: 0 0 18px #00ff8877; } 100% { color: #f5e6ff; text-shadow: none; } }
      @keyframes priceDown { 0% { color: #ff2d78; text-shadow: 0 0 18px #ff2d7877; } 100% { color: #f5e6ff; text-shadow: none; } }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  // Push latest prices up so sibling widgets (position sizer) can reuse them — no extra API calls
  useEffect(() => {
    onPrices?.({
      btc:    btc?.price,
      eth:    eth?.price,
      eurusd: eur?.rate,
      gbpusd: gbp?.price,
      usdjpy: jpy?.price,
      qqq:    qqq?.price,
    })
  }, [btc, eth, eur, gbp, jpy, qqq])

  function triggerFlash(key, newPrice) {
    const prev = prevPrices.current[key]
    if (prev != null && newPrice != null && newPrice !== prev) {
      const dir = newPrice > prev ? 'up' : 'down'
      setFlashMap(f => ({ ...f, [key]: dir }))
      setTimeout(() => setFlashMap(f => ({ ...f, [key]: null })), 900)
    }
    prevPrices.current[key] = newPrice
  }

  async function fetchWithTimeout(url, ms = 8000) {
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), ms)
    try {
      const res = await fetch(url, { signal: ctrl.signal })
      clearTimeout(timer)
      return res
    } catch (e) {
      clearTimeout(timer)
      throw e
    }
  }

  async function fetchBinancePrices() {
    if (fetchingBinance.current) return
    fetchingBinance.current = true
    try {
      const base = import.meta.env.DEV ? '/proxy/binance' : 'https://api.binance.com'
      const [btcRes, ethRes] = await Promise.allSettled([
        fetchWithTimeout(`${base}/api/v3/ticker/24hr?symbol=BTCUSDT`),
        fetchWithTimeout(`${base}/api/v3/ticker/24hr?symbol=ETHUSDT`),
      ])
      const parse = (res, set, key) => {
        if (res.status !== 'fulfilled' || !res.value.ok) return
        res.value.json().then(d => {
          const price = parseFloat(d.lastPrice)
          set({ price, change: parseFloat(d.priceChangePercent), high: parseFloat(d.highPrice), low: parseFloat(d.lowPrice), volume: parseFloat(d.quoteVolume) })
          triggerFlash(key, price)
        }).catch(() => {})
      }
      parse(btcRes, setBtc, 'btc')
      parse(ethRes, setEth, 'eth')
    } finally {
      setLoadingBinance(false)
      fetchingBinance.current = false
    }
  }

  async function fetchTDPrices() {
    if (fetchingTD.current) return
    fetchingTD.current = true
    try {
      const res = await fetchWithTimeout(`https://api.twelvedata.com/quote?symbol=${TD_SYMBOLS}&apikey=${TD_KEY}`)
      if (res.ok) {
        const d = await res.json()
        function parseTD(key) {
          const item = d[key]
          if (!item || item.status === 'error') return null
          const price = parseFloat(item.close)
          const change = parseFloat(item.percent_change)
          return { price: isNaN(price) ? null : price, change: isNaN(change) ? null : change }
        }
        const eur = parseTD('EUR/USD')
        if (eur?.price != null) { setEur({ rate: eur.price, change: eur.change }); triggerFlash('eur', eur.price) }
        const gbp = parseTD('GBP/USD')
        if (gbp?.price != null) { setGbp({ price: gbp.price, change: gbp.change }); triggerFlash('gbp', gbp.price) }
        const jpyData = parseTD('USD/JPY')
        if (jpyData?.price != null) { setJpy({ price: jpyData.price, change: jpyData.change }); triggerFlash('jpy', jpyData.price) }
        const qqqData = parseTD('QQQ')
        if (qqqData?.price != null) { setQqq({ price: qqqData.price, change: qqqData.change }); triggerFlash('qqq', qqqData.price) }
      }
    } finally {
      setLoadingTD(false)
      fetchingTD.current = false
    }
  }

  async function fetchFearGreed() {
    try {
      const res = await fetchWithTimeout('https://api.alternative.me/fng/?limit=1')
      if (res.ok) {
        const d = await res.json()
        const item = d.data?.[0]
        if (item) onFearGreed?.({ value: parseInt(item.value), label: item.value_classification })
      }
    } catch {}
  }

  async function fetchCandles() {
    const base = import.meta.env.DEV ? '/proxy/binance' : 'https://api.binance.com'
    const [btcKlines, ethKlines, tdSeries] = await Promise.allSettled([
      fetchWithTimeout(`${base}/api/v3/klines?symbol=BTCUSDT&interval=4h&limit=8`),
      fetchWithTimeout(`${base}/api/v3/klines?symbol=ETHUSDT&interval=4h&limit=8`),
      fetchWithTimeout(`https://api.twelvedata.com/time_series?symbol=EUR/USD,GBP/USD,USD/JPY,QQQ&interval=4h&outputsize=8&apikey=${TD_KEY}`),
    ])

    const parsed = {}

    const parseKlines = (res, key) => {
      if (res.status !== 'fulfilled' || !res.value.ok) return
      res.value.json().then(data => {
        parsed[key] = data.map(k => ({
          open: parseFloat(k[1]), high: parseFloat(k[2]),
          low: parseFloat(k[3]), close: parseFloat(k[4]),
        }))
        setCandles(prev => ({ ...prev, [key]: parsed[key] }))
      }).catch(() => {})
    }

    parseKlines(btcKlines, 'btc')
    parseKlines(ethKlines, 'eth')

    if (tdSeries.status === 'fulfilled' && tdSeries.value.ok) {
      tdSeries.value.json().then(d => {
        const MAP = { 'EUR/USD': 'eur', 'GBP/USD': 'gbp', 'USD/JPY': 'jpy', 'QQQ': 'qqq' }
        const update = {}
        for (const [sym, key] of Object.entries(MAP)) {
          const series = d[sym]
          if (!series?.values?.length) continue
          update[key] = [...series.values].reverse().map(v => ({
            open: parseFloat(v.open), high: parseFloat(v.high),
            low: parseFloat(v.low), close: parseFloat(v.close),
          }))
        }
        setCandles(prev => ({ ...prev, ...update }))
      }).catch(() => {})
    }
  }

  function startCountdownBinance() {
    clearInterval(tickBinanceRef.current)
    setCountdownBinance(BINANCE_INTERVAL)
    tickBinanceRef.current = setInterval(() => setCountdownBinance(c => Math.max(0, c - 1)), 1000)
  }

  function startCountdownTD() {
    clearInterval(tickTDRef.current)
    setCountdownTD(TD_INTERVAL)
    tickTDRef.current = setInterval(() => setCountdownTD(c => Math.max(0, c - 1)), 1000)
  }


  useEffect(() => {
    let cancelled = false

    fetchBinancePrices().then(() => {
      if (cancelled) return
      startCountdownBinance()
      autoBinanceRef.current = setInterval(() => { fetchBinancePrices(); startCountdownBinance() }, BINANCE_INTERVAL * 1000)
    })

    fetchTDPrices().then(() => {
      if (cancelled) return
      startCountdownTD()
      autoTDRef.current = setInterval(() => { fetchTDPrices(); startCountdownTD() }, TD_INTERVAL * 1000)
    })

    if (!cancelled) fetchFearGreed()
    const candleTimer = setTimeout(() => { if (!cancelled) fetchCandles() }, 15000)

    return () => {
      cancelled = true
      clearTimeout(candleTimer)
      clearInterval(autoBinanceRef.current)
      clearInterval(autoTDRef.current)
      clearInterval(tickBinanceRef.current)
      clearInterval(tickTDRef.current)
    }
  }, [])

  function getMarketStatus(market) {
    if (!market) return null
    const now = new Date()
    const day = now.toLocaleDateString('en-US', { timeZone: market.tz, weekday: 'short' })
    if (['Sat', 'Sun'].includes(day)) return false
    if (market.type === 'forex') {
      if (day === 'Fri') {
        const t = now.toLocaleTimeString('en-US', { timeZone: market.tz, hour12: false, hour: '2-digit', minute: '2-digit' })
        const [h, m] = t.split(':').map(Number)
        return h + m / 60 < 17
      }
      return true
    }
    const t = now.toLocaleTimeString('en-US', { timeZone: market.tz, hour12: false, hour: '2-digit', minute: '2-digit' })
    const [h, m] = t.split(':').map(Number)
    const time = h + m / 60
    return time >= market.open && time < market.close
  }

  const forexAssets = [
    {
      symbol: 'EUR / USD', name: 'Euro - Dollar',
      price: eur?.rate != null ? eur.rate.toFixed(4) : null,
      change: eur?.change ?? null, color: NEON_CYAN, flashKey: 'eur',
      info: [{ label: 'Source', value: 'Twelve Data' }, { label: 'Paire', value: 'EUR/USD spot' }, { label: 'Marché', value: 'Forex' }, { label: 'Refresh', value: '5 min' }, { label: 'Bougies', value: '4h · 8 dernières' }],
      market: { type: 'forex', tz: 'America/New_York' },
    },
    {
      symbol: 'GBP / USD', name: 'Livre sterling - Dollar',
      price: gbp?.price != null ? gbp.price.toFixed(4) : null,
      change: gbp?.change ?? null, color: '#a78bfa', flashKey: 'gbp',
      info: [{ label: 'Source', value: 'Twelve Data' }, { label: 'Paire', value: 'GBP/USD spot' }, { label: 'Marché', value: 'Forex' }, { label: 'Refresh', value: '5 min' }, { label: 'Bougies', value: '4h · 8 dernières' }],
      market: { type: 'forex', tz: 'America/New_York' },
    },
    {
      symbol: 'JPY / USD', name: 'Yen - Dollar',
      price: jpy?.price != null ? (1 / jpy.price).toFixed(6) : null,
      change: jpy?.change != null ? -jpy.change : null, color: '#ff6b9d', flashKey: 'jpy',
      info: [{ label: 'Source', value: 'Twelve Data' }, { label: 'Paire', value: 'USD/JPY inversé' }, { label: 'Marché', value: 'Forex' }, { label: 'Refresh', value: '5 min' }, { label: 'Bougies', value: '4h · 8 dernières' }],
      invertCandles: true,
      market: { type: 'forex', tz: 'America/New_York' },
    },
  ]

  const indicesAssets = [
    {
      symbol: 'NASDAQ 100', name: 'Invesco QQQ Trust',
      price: qqq?.price != null ? `$${parseFloat(qqq.price).toFixed(2)}` : null,
      change: qqq?.change ?? null, color: '#60a5fa', flashKey: 'qqq',
      info: [{ label: 'Source', value: 'Twelve Data' }, { label: 'ETF', value: 'Invesco QQQ Trust' }, { label: 'Indice', value: 'NASDAQ 100' }, { label: 'Bourse', value: 'NYSE' }, { label: 'Refresh', value: '5 min' }, { label: 'Bougies', value: '4h · 8 dernières' }],
      market: { type: 'stock', tz: 'America/New_York', open: 9.5, close: 16 },
    },
  ]

  const cryptoAssets = [
    {
      symbol: 'BTC / USDT', name: 'Bitcoin - Tether',
      price: btc ? `$${btc.price.toLocaleString('en-US', { maximumFractionDigits: 0 })}` : null,
      change: btc?.change ?? null, color: '#ff9900', flashKey: 'btc',
      info: [{ label: 'Source', value: 'Binance' }, { label: 'Paire', value: 'BTC / USDT' }, { label: 'Marché', value: 'Crypto' }, { label: 'Refresh', value: '30s' }, { label: 'Bougies', value: '4h · 8 dernières' }],
    },
    {
      symbol: 'ETH / USDT', name: 'Ethereum - Tether',
      price: eth ? `$${eth.price.toLocaleString('en-US', { maximumFractionDigits: 2 })}` : null,
      change: eth?.change ?? null, color: '#627eea', flashKey: 'eth',
      info: [{ label: 'Source', value: 'Binance' }, { label: 'Paire', value: 'ETH / USDT' }, { label: 'Marché', value: 'Crypto' }, { label: 'Refresh', value: '30s' }, { label: 'Bougies', value: '4h · 8 dernières' }],
    },
  ]


  function fmtTD(s) {
    const m = Math.floor(s / 60)
    const sec = String(s % 60).padStart(2, '0')
    return `${m}:${sec}`
  }

  return (
    <div className="py-[1.4rem] px-[1.75rem] flex flex-col gap-6">

      {/* ── Forex ── */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className={labelCls}>Forex</p>
          <span className="font-jakarta text-[0.62rem] text-tr-dim">Forex · ↻ {fmtTD(countdownTD)}</span>
        </div>
        <AssetGrid columns={3} assets={forexAssets} loading={loadingTD} flashMap={flashMap} getMarketStatus={getMarketStatus} candleData={candles} />
      </div>

      {/* ── Marchés (Indices + Crypto) ── */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className={labelCls}>Marchés</p>
          <div className="flex items-center gap-3">
            <span className="font-jakarta text-[0.62rem] text-tr-dim">NASDAQ · ↻ {fmtTD(countdownTD)}</span>
            <span className="font-jakarta text-[0.62rem] text-tr-dim">Crypto · ↻ {countdownBinance}s</span>
          </div>
        </div>
        <AssetGrid columns={3} assets={[...indicesAssets, ...cryptoAssets]} loading={loadingTD && loadingBinance} flashMap={flashMap} getMarketStatus={getMarketStatus} candleData={candles} />
      </div>

    </div>
  )
}


function FearGreedWidget({ fearGreed }) {
  const getFGColor = (v) => {
    if (v <= 24) return '#ff2d78'
    if (v <= 44) return '#ff7043'
    if (v <= 54) return '#f4c542'
    if (v <= 74) return '#7ec857'
    return '#00ff88'
  }
  if (fearGreed == null) return null

  const FG_FR = { 'Extreme Fear': 'Peur extrême', 'Fear': 'Peur', 'Neutral': 'Neutre', 'Greed': 'Avidité', 'Extreme Greed': 'Avidité extrême' }
  const { value, label } = fearGreed
  const labelFr = FG_FR[label] ?? label
  const color  = getFGColor(value)
  const arcDeg = (value / 100) * 180

  const rad = ((arcDeg - 180) * Math.PI) / 180

  return (
    <div
      className="h-full relative flex flex-col items-center justify-center py-4 px-6 gap-[0.4rem] bg-[var(--c-08)]"
      style={{ '--c': color, '--c-08': `${color}08`, '--c-cc': `${color}cc` }}
    >
      <div className="absolute top-3 right-3">
        <InfoTooltip text={[{ label: 'Source', value: 'Alternative.me' }, { label: 'Échelle', value: '0 – 100' }, { label: '0 – 24', value: 'Peur extrême' }, { label: '25 – 44', value: 'Peur' }, { label: '45 – 54', value: 'Neutre' }, { label: '55 – 74', value: 'Avidité' }, { label: '75 – 100', value: 'Avidité extrême' }]} />
      </div>
      <p className={labelCls}>Cryptos Fear & Greed</p>
      <svg width="100%" viewBox="0 0 120 66" preserveAspectRatio="xMidYMid meet"
        className="overflow-visible max-w-[200px]">
        <path d="M 8 60 A 52 52 0 0 1 112 60" fill="none" stroke="rgba(196,79,255,0.15)" strokeWidth="10" strokeLinecap="round" />
        <path d="M 8 60 A 52 52 0 0 1 112 60"
          fill="none" stroke={color} strokeWidth="10" strokeLinecap="round"
          strokeDasharray={`${arcDeg * (163 / 180)} 400`}
          style={{ filter: `drop-shadow(0 0 5px ${color}88)`, transition: 'stroke-dasharray 0.8s ease' }}
        />
        <circle
          cx={60 + 52 * Math.cos(rad)} cy={60 + 52 * Math.sin(rad)}
          r="7" fill={color}
          style={{ filter: `drop-shadow(0 0 6px ${color})` }}
        />
      </svg>
      <span className="font-jakarta text-[2.2rem] font-extrabold text-[var(--c)] tracking-[-0.03em] leading-none">
        {value}
      </span>
      <span className="font-sans text-[0.88rem] font-semibold text-[var(--c-cc)] tracking-[0.04em]">
        {labelFr}
      </span>
    </div>
  )
}

function fmtHL(v) {
  if (v == null || isNaN(v)) return '—'
  if (v >= 10000) return v.toLocaleString('en-US', { maximumFractionDigits: 0 })
  if (v >= 100)   return v.toFixed(2)
  if (v >= 1)     return v.toFixed(4)
  return v.toFixed(6)
}

function fmtVol(v) {
  if (v == null || isNaN(v) || v === 0) return null
  if (v >= 1e9) return `$${(v / 1e9).toFixed(1)}B`
  if (v >= 1e6) return `$${(v / 1e6).toFixed(0)}M`
  return `$${v.toFixed(0)}`
}

function AssetGrid({ assets, loading, flashMap, getMarketStatus, candleData, columns = 3 }) {
  const isNarrow = useIsMobile(700)
  return (
    <div className="grid gap-[0.7rem]" style={{ gridTemplateColumns: isNarrow ? '1fr' : `repeat(${columns}, 1fr)` }}>
      {assets.map((a) => {
        const displayChange = a.change ?? null
        const open          = a.market ? getMarketStatus(a.market) : null
        const tintColor     = displayChange == null ? null : displayChange >= 0 ? NEON_GREEN : NEON_PINK
        const rawCandles    = candleData?.[a.flashKey]
        const chartCandles  = rawCandles && a.invertCandles
          ? rawCandles.map(c => ({ open: 1/c.open, high: 1/c.low, low: 1/c.high, close: 1/c.close }))
          : rawCandles
        return (
          <div
            key={a.symbol}
            className="rounded-[10px] py-5 px-[1.4rem] flex flex-col gap-3 transition-[background,border-color] duration-[400ms]"
            style={{
              // 2-tone dynamic border (accent left + tint) kept inline
              background: tintColor ? `${tintColor}08` : 'rgba(196,79,255,0.03)',
              border: `1px solid ${tintColor ? `${tintColor}22` : BORDER}`,
              borderLeft: `3px solid ${a.color}`,
            }}
          >
            {/* Header row — symbol + market status dot + info tooltip */}
            <div className="flex items-center gap-[0.4rem]">
              <span
                className="font-sans text-[0.82rem] font-bold text-[var(--sc)] tracking-[0.05em] flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap"
                style={{ '--sc': a.color }}
              >
                {a.symbol}
              </span>
              {open !== null && (
                <span className={`font-sans text-[0.6rem] font-bold tracking-[0.06em] flex items-center gap-[0.2rem] flex-shrink-0 ${open ? 'text-neon-green' : 'text-tr-dim'}`}>
                  <span className={`w-1 h-1 rounded-full ${open ? 'bg-neon-green shadow-[0_0_4px_#00ff88]' : 'bg-[rgba(196,79,255,0.2)]'}`} />
                  {open ? 'OUVERT' : 'FERMÉ'}
                </span>
              )}
              <InfoTooltip text={a.info} />
            </div>

            {/* Price + change */}
            {loading ? (
              <div className="h-8 bg-[rgba(196,79,255,0.07)] rounded-[5px]" />
            ) : (
              <div className="flex items-baseline gap-[0.4rem] flex-wrap">
                <span
                  className="font-jakarta text-[1.75rem] font-bold text-tr-text tracking-[-0.02em]"
                  style={{ animation: flashMap[a.flashKey] ? `price${flashMap[a.flashKey] === 'up' ? 'Up' : 'Down'} 0.9s ease-out forwards` : 'none' }}
                >
                  {a.price ?? '—'}
                </span>
                {displayChange != null && (
                  <span className={`font-sans text-[0.88rem] font-bold ${displayChange >= 0 ? 'text-neon-green [text-shadow:0_0_8px_#00ff8866]' : 'text-neon-pink [text-shadow:0_0_8px_#ff2d7866]'}`}>
                    {displayChange >= 0 ? '+' : ''}{displayChange.toFixed(2)}%
                  </span>
                )}
              </div>
            )}

            {chartCandles && <MiniCandleChart data={chartCandles} />}
          </div>
        )
      })}
    </div>
  )
}

// ─── Sessions ─────────────────────────────────────────────────────────────────

// Converts a local time "HH:MM" from a given IANA timezone to Europe/Brussels,
// accounting for DST of both the source timezone and Brussels.
function toBeTime(timeStr, fromTZ) {
  const [h, m] = timeStr.split(':').map(Number)
  const now = new Date()
  const localNow = getLocalDecimalTime(fromTZ, now)
  const utcNow   = now.getUTCHours() + now.getUTCMinutes() / 60
  const offsetH  = localNow - utcNow
  const utcDec   = ((h + m / 60 - offsetH) % 24 + 24) % 24
  const d = new Date(Date.UTC(
    now.getFullYear(), now.getMonth(), now.getDate(),
    Math.floor(utcDec),
    Math.round((utcDec % 1) * 60),
  ))
  return new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Brussels', hour: '2-digit', minute: '2-digit' }).format(d)
}

function getSessionProgress(localOpen, localClose, timezone) {
  const [oh, om] = localOpen.split(':').map(Number)
  const [ch, cm] = localClose.split(':').map(Number)
  const now      = getLocalDecimalTime(timezone)
  const open     = oh + om / 60
  const close    = ch + cm / 60
  const duration = open > close ? (24 - open) + close : close - open
  const elapsed  = open > close ? (now >= open ? now - open : (24 - open) + now) : now - open
  return Math.min(100, Math.max(0, (elapsed / duration) * 100))
}

function fmtCountdown(hours) {
  const h = Math.floor(Math.abs(hours))
  const m = Math.round((Math.abs(hours) - h) * 60)
  if (h === 0) return `${m}min`
  return m > 0 ? `${h}h${m}min` : `${h}h`
}

function getTimeUntilClose(localClose, timezone) {
  const [ch, cm] = localClose.split(':').map(Number)
  const now   = getLocalDecimalTime(timezone)
  const close = ch + cm / 60
  let r = close - now
  if (r < 0) r += 24
  return fmtCountdown(r)
}

function getTimeUntilOpen(localOpen, timezone) {
  const [oh, om] = localOpen.split(':').map(Number)
  const now  = getLocalDecimalTime(timezone)
  const open = oh + om / 60
  let r = open - now
  if (r < 0) r += 24
  return fmtCountdown(r)
}

function SessionsWidget() {
  const [, setTick] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 30000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="py-5 px-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-[1.1rem]">
        <p className={labelCls}>Kill Zones</p>
        <div className="flex items-center gap-[0.35rem]">
          <span className="font-sans text-[0.65rem] text-[rgba(245,230,255,0.25)] tracking-[0.04em]">UTC+2</span>
          <span className="font-jakarta text-[0.95rem] font-bold text-neon-cyan">
            {getLocalTime('Europe/Brussels')}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[1.4rem]">
        {KILL_ZONES.map(kz => {
          const open     = isSessionOpen(kz.localOpen, kz.localClose, KZ_TZ)
          const progress = open ? getSessionProgress(kz.localOpen, kz.localClose, KZ_TZ) : 0
          const sublabel = open
            ? `ferme dans ${getTimeUntilClose(kz.localClose, KZ_TZ)}`
            : `ouvre dans ${getTimeUntilOpen(kz.localOpen, KZ_TZ)}`
          const beOpen  = toBeTime(kz.localOpen, KZ_TZ)
          const beClose = toBeTime(kz.localClose, KZ_TZ)
          return (
            <div key={kz.name} style={{ '--kc': kz.color, '--kc-99': `${kz.color}99`, '--kc-cc': `${kz.color}cc` }}>
              <div className="flex items-center justify-between gap-2 mb-[0.4rem]">
                <div className="flex items-center gap-[0.55rem]">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0 transition-all duration-[400ms]"
                    style={{
                      background: open ? kz.color : 'rgba(196,79,255,0.2)',
                      boxShadow: open ? `0 0 6px ${kz.color}, 0 0 12px ${kz.color}55` : 'none',
                    }}
                  />
                  <div className="flex flex-col gap-[0.1rem]">
                    <span className={`font-sans text-base font-bold ${open ? 'text-[var(--kc)]' : 'text-tr-dim'}`}>
                      {kz.name}
                    </span>
                    <span className={`font-sans text-[0.75rem] ${open ? 'text-[var(--kc-99)]' : 'text-tr-dim'}`}>
                      {sublabel}
                    </span>
                  </div>
                </div>
                <span className={`font-jakarta text-[0.88rem] font-semibold whitespace-nowrap flex-shrink-0 ${open ? 'text-[var(--kc-cc)]' : 'text-tr-dim'}`}>
                  {beOpen} – {beClose}
                </span>
              </div>
              <div className="h-0.5 bg-[rgba(196,79,255,0.1)] rounded-full overflow-hidden">
                {open && (
                  <div
                    className="h-full rounded-full transition-[width] duration-1000"
                    style={{
                      width: `${progress}%`,
                      background: `linear-gradient(90deg, ${kz.color}55, ${kz.color})`,
                      boxShadow: `0 0 5px ${kz.color}66`,
                    }}
                  />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Economic calendar ────────────────────────────────────────────────────────

const GIST_URL = 'https://gist.githubusercontent.com/Thomas-Caufriez/2074909e9bd9b4bc27ab9884059c2d1b/raw/ff_calendar.json'

const IMPACT_COLOR = { High: NEON_PINK, Medium: '#f4c542', Low: TEXT_DIM }
const CURRENCY_COLOR = {
  USD: '#60a5fa', EUR: NEON_CYAN, GBP: '#a78bfa',
  JPY: '#ff6b9d', CHF: '#34d399', CAD: '#fb923c', AUD: '#fbbf24', NZD: '#4ade80',
}
const CURRENCY_NAME = {
  USD: 'Dollar américain', EUR: 'Euro', GBP: 'Livre sterling',
  JPY: 'Yen japonais', CHF: 'Franc suisse', CAD: 'Dollar canadien',
  AUD: 'Dollar australien', NZD: 'Dollar néo-zélandais',
}

function CalendarWidget() {
  const [events,   setEvents]   = useState([])
  const [loading,  setLoading]  = useState(true)
  const [expanded, setExpanded] = useState(false)
  const [tab,      setTab]      = useState('upcoming')

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(GIST_URL)
        if (!res.ok) return
        const data = await res.json()
        const now = new Date()
        const todayStr = now.toISOString().slice(0, 10)
        const cutoff = new Date(now.getTime() - 3 * 60 * 60 * 1000)
        const todayEvents = data
          .filter(e => e.date.slice(0, 10) === todayStr && new Date(e.date) >= cutoff)
          .sort((a, b) => new Date(a.date) - new Date(b.date))
        setEvents(todayEvents)
      } catch {
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  function fmtTime(dateStr) {
    return new Date(dateStr).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
  }
  function isReleased(e) { return e.actual && e.actual !== '' }
  function isPast(e)     { return new Date(e.date) < new Date() }

  const upcoming = events.filter(e => !isPast(e))
  const past     = events.filter(e => isPast(e)).reverse()
  const preview  = upcoming.slice(0, 5)
  const tabList  = tab === 'upcoming' ? upcoming : tab === 'past' ? past : events

  return (
    <div className="py-5 px-6 flex flex-col gap-[0.85rem]">

      {/* Header */}
      <div className="flex items-center justify-between">
        <p className={`${labelCls} mb-2`}>Calendrier économique</p>
        <div className="flex items-center gap-4">
          {[['High', NEON_PINK, 'Fort'], ['Medium', '#f4c542', 'Modéré'], ['Low', TEXT_DIM, 'Faible']].map(([label, color, desc]) => (
            <div key={label} className="flex items-center gap-[0.3rem]">
              <div className="w-[7px] h-[7px] rounded-sm" style={{ background: color, boxShadow: label === 'High' ? `0 0 5px ${color}88` : 'none' }} />
              <span className="font-sans text-[0.68rem] text-tr-dim">{desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Collapsed — next 5 (masqué si expanded) */}
      {!expanded && loading ? (
        <div className="flex flex-col gap-[0.4rem]">
          {[1,2,3].map(i => <div key={i} className="h-8 bg-[rgba(196,79,255,0.06)] rounded-md" />)}
        </div>
      ) : !expanded && preview.length === 0 ? (
        <p className="font-sans text-[0.82rem] text-tr-dim italic">
          Aucun événement à venir aujourd'hui.
        </p>
      ) : !expanded ? (
        <div className="flex flex-col gap-[0.35rem]">
          {preview.map((e, i) => <EventRow key={i} e={e} fmtTime={fmtTime} isReleased={isReleased} isPast={isPast} />)}
        </div>
      ) : null}

      {/* Expand button */}
      {!loading && events.length > 0 && (
        <button
          onClick={() => setExpanded(x => !x)}
          className="font-sans text-[0.74rem] font-semibold text-tr-dim hover:text-tr-text bg-[rgba(196,79,255,0.05)] hover:bg-[rgba(196,79,255,0.1)] border border-tr-border rounded-lg p-[0.4rem] cursor-pointer transition-colors flex items-center justify-center gap-[0.4rem]"
        >
          <span className={`transition-transform duration-200 inline-block ${expanded ? 'rotate-180' : ''}`}>▾</span>
          {expanded ? 'Réduire' : `Voir tout (${events.length} événements)`}
        </button>
      )}

      {/* Expanded — tabs */}
      {expanded && (
        <div className="flex flex-col gap-[0.65rem]">
          {/* Tabs */}
          <div className="flex gap-[0.4rem]">
            {[['upcoming', `À venir (${upcoming.length})`], ['past', `Passés (${past.length})`], ['all', `Tout (${events.length})`]].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`font-sans text-[0.74rem] font-semibold rounded-full px-[0.8rem] py-[0.25rem] cursor-pointer transition-all border ${
                  tab === key
                    ? 'text-neon-cyan bg-[#00f5ff12] border-[#00f5ff44]'
                    : 'text-tr-dim bg-transparent border-tr-border'
                }`}
              >{label}</button>
            ))}
          </div>
          {/* List */}
          <div className="flex flex-col gap-[0.35rem]">
            {tabList.length === 0 ? (
              <p className="font-sans text-[0.8rem] text-tr-dim italic">Aucun événement.</p>
            ) : tabList.map((e, i) => (
              <EventRow key={i} e={e} fmtTime={fmtTime} isReleased={isReleased} isPast={isPast} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function EventRow({ e, fmtTime, isReleased, isPast }) {
  const released  = isReleased(e)
  const past      = isPast(e)
  const impactCol = IMPACT_COLOR[e.impact] || TEXT_DIM
  const currCol   = CURRENCY_COLOR[e.country] || TEXT_DIM
  const isHigh    = e.impact === 'High'
  return (
    <div
      className={`grid grid-cols-[3rem_2.5rem_1fr_auto] items-center gap-[0.65rem] py-[0.6rem] px-[0.9rem] rounded-lg ${past && !released ? 'opacity-40' : 'opacity-100'}`}
      style={{
        // impact-tinted background / border kept inline (dynamic multi-value)
        '--ic': impactCol, '--ic-88': `${impactCol}88`,
        background: past ? 'rgba(196,79,255,0.03)' : isHigh ? `${impactCol}12` : `${impactCol}06`,
        border: `1px solid ${past ? BORDER : impactCol + (isHigh ? '44' : '22')}`,
        borderLeft: `3px solid ${impactCol}`,
        boxShadow: !past && isHigh ? `0 0 10px ${impactCol}18` : 'none',
      }}
    >
      <span className={`font-jakarta text-[0.74rem] ${!past && isHigh ? 'text-tr-text' : 'text-tr-dim'}`}>
        {fmtTime(e.date)}
      </span>
      <span className="font-jakarta text-[0.74rem] font-bold text-[var(--cc)]" style={{ '--cc': currCol }}>
        {e.country}
      </span>
      <span className={`font-sans text-[0.8rem] overflow-hidden text-ellipsis whitespace-nowrap ${isHigh ? 'font-semibold' : 'font-medium'} ${past ? 'text-tr-dim' : isHigh ? 'text-tr-text' : 'text-[#f5e6ffbb]'}`}>
        {e.title}
      </span>
      <div className="flex-shrink-0">
        {released ? (
          <span className={`font-jakarta text-[0.74rem] font-bold text-[var(--ic)] ${isHigh ? '[text-shadow:0_0_8px_var(--ic-88)]' : ''}`}>
            {e.actual}
          </span>
        ) : e.forecast ? (
          <span className="font-jakarta text-[0.68rem] text-tr-dim">
            prev. {e.forecast}
          </span>
        ) : null}
      </div>
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

  const fontSize = display.length > 8 ? '1.1rem' : display.length > 5 ? '1.3rem' : '1.5rem'

  return (
    <div className="py-[1.1rem] px-[1.2rem] flex flex-col gap-2">
      <p className={`${labelCls} mb-2`}>Calculatrice</p>
      <div className="bg-[rgba(196,79,255,0.05)] border border-tr-border rounded-lg overflow-hidden">
        <div className="px-[0.8rem] pt-1 text-right min-h-[1rem]">
          <span className="font-jakarta text-[0.58rem] text-tr-dim">
            {expression}
          </span>
        </div>
        <div className="pt-[0.1rem] px-[0.8rem] pb-[0.35rem] text-right">
          <span className="font-jakarta text-tr-text transition-[font-size] duration-100" style={{ fontSize }}>
            {display}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[0.28rem]">
        {btns.map((b, i) => (
          <button
            key={i}
            onClick={b.onPress}
            className="font-jakarta text-[0.92rem] font-semibold rounded-md py-[0.55rem] cursor-pointer transition-[background,box-shadow] duration-[120ms]"
            style={{
              gridColumn: b.span ? `span ${b.span}` : undefined,
              color: btnColor(b.type),
              background: btnBg(b.type),
              border: `1px solid ${b.type === 'eq' ? `${NEON_CYAN}33` : b.type === 'op' ? `${NEON_PURP}22` : BORDER}`,
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

// ─── Position size calculator ─────────────────────────────────────────────────

const CCY_SYM = { USD: '$', EUR: '€', JPY: '¥' }

// Scoped to the instruments the dashboard already tracks — quote currency known,
// so conversions only ever need EUR/USD or USD/JPY, which are already fetched.
const INSTRUMENTS = [
  { id: 'btc',    label: 'BTC/USDT', kind: 'crypto', quote: 'USD', priceKey: 'btc' },
  { id: 'eth',    label: 'ETH/USDT', kind: 'crypto', quote: 'USD', priceKey: 'eth' },
  { id: 'eurusd', label: 'EUR/USD',  kind: 'forex',  quote: 'USD', pip: 0.0001, contract: 100000, priceKey: 'eurusd' },
  { id: 'gbpusd', label: 'GBP/USD',  kind: 'forex',  quote: 'USD', pip: 0.0001, contract: 100000, priceKey: 'gbpusd' },
  { id: 'usdjpy', label: 'USD/JPY',  kind: 'forex',  quote: 'JPY', pip: 0.01,   contract: 100000, priceKey: 'usdjpy' },
  { id: 'qqq',    label: 'NASDAQ',   kind: 'stock',  quote: 'USD', priceKey: 'qqq' },
]

function computePosition({ inst, capital, riskPct, entry, stop, acctCcy, prices }) {
  const cap = parseFloat(capital)
  const rp  = parseFloat(riskPct)
  const e   = parseFloat(entry)
  const s   = parseFloat(stop)
  if (![cap, rp, e, s].every(Number.isFinite) || cap <= 0 || rp <= 0) return null
  const stopDist = Math.abs(e - s)
  if (stopDist <= 0) return null

  const riskAcct = cap * (rp / 100)

  // account currency → USD
  let riskUSD
  if (acctCcy === 'USD') riskUSD = riskAcct
  else { if (!prices?.eurusd) return { needRate: 'EUR/USD', riskAcct }; riskUSD = riskAcct * prices.eurusd }

  // USD → instrument quote currency
  let riskQuote
  if (inst.quote === 'USD') riskQuote = riskUSD
  else { if (!prices?.usdjpy) return { needRate: 'USD/JPY', riskAcct }; riskQuote = riskUSD * prices.usdjpy }

  const units    = riskQuote / stopDist
  const out = { riskAcct, stopDist, units, notional: units * e }
  if (inst.kind === 'forex') {
    out.lots     = units / inst.contract
    out.pips     = stopDist / inst.pip
    out.pipValue = units * inst.pip
  }
  return out
}

function fmtQty(n) {
  if (!Number.isFinite(n)) return '—'
  if (Math.abs(n) >= 1000) return n.toLocaleString('en-US', { maximumFractionDigits: 0 })
  if (Math.abs(n) >= 1)    return n.toLocaleString('en-US', { maximumFractionDigits: 2 })
  return n.toLocaleString('en-US', { maximumFractionDigits: 6 })
}
function fmtMoney(n, dp = 2) {
  if (!Number.isFinite(n)) return '—'
  return n.toLocaleString('en-US', { minimumFractionDigits: dp, maximumFractionDigits: dp })
}

function PositionSizeWidget({ prices }) {
  const [instId,  setInstId]  = useState('btc')
  const [acct,    setAcct]    = useState('USD')
  const [capital, setCapital] = useState('10000')
  const [riskPct, setRiskPct] = useState('1')
  const [entry,   setEntry]   = useState('')
  const [stop,    setStop]    = useState('')

  const inst = INSTRUMENTS.find(i => i.id === instId)
  const live = prices?.[inst.priceKey]
  const res  = computePosition({ inst, capital, riskPct, entry, stop, acctCcy: acct, prices })

  const inputCls = 'w-full box-border font-jakarta text-[0.82rem] text-tr-text bg-[rgba(196,79,255,0.05)] border border-tr-border rounded-md px-2 py-[0.35rem] outline-none focus:border-[#00f5ff88] transition-colors'

  return (
    <div className="py-[1.1rem] px-[1.2rem] flex flex-col gap-3 h-full">
      <div className="flex items-center justify-between">
        <p className={labelCls}>Taille de position</p>
        <div className="flex gap-1">
          {['USD', 'EUR'].map(c => (
            <button
              key={c}
              onClick={() => setAcct(c)}
              className={`font-jakarta text-[0.62rem] font-semibold rounded-full px-2 py-[0.15rem] border transition-colors ${acct === c ? 'text-neon-cyan bg-[#00f5ff12] border-[#00f5ff44]' : 'text-tr-dim bg-transparent border-tr-border'}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Instrument pills */}
      <div className="flex flex-wrap gap-1">
        {INSTRUMENTS.map(i => (
          <button
            key={i.id}
            onClick={() => setInstId(i.id)}
            className={`font-jakarta text-[0.66rem] font-semibold rounded-md px-[0.5rem] py-[0.2rem] border transition-colors ${instId === i.id ? 'text-tr-text bg-[rgba(196,79,255,0.12)] border-[rgba(196,79,255,0.4)]' : 'text-tr-dim bg-transparent border-tr-border hover:text-tr-text'}`}
          >
            {i.label}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-2 gap-2">
        <Field label={`Capital (${CCY_SYM[acct]})`}>
          <input className={inputCls} inputMode="decimal" value={capital} onChange={e => setCapital(e.target.value)} />
        </Field>
        <Field label="Risque (%)">
          <input className={inputCls} inputMode="decimal" value={riskPct} onChange={e => setRiskPct(e.target.value)} />
        </Field>
        <Field label="Entrée" hint={live != null ? `live ${fmtQty(live)}` : null} onHint={() => live != null && setEntry(String(live))}>
          <input className={inputCls} inputMode="decimal" value={entry} onChange={e => setEntry(e.target.value)} placeholder={live != null ? fmtQty(live) : '—'} />
        </Field>
        <Field label="Stop-loss">
          <input className={inputCls} inputMode="decimal" value={stop} onChange={e => setStop(e.target.value)} />
        </Field>
      </div>

      {/* Results */}
      <div className="mt-auto rounded-lg border border-tr-border bg-[rgba(196,79,255,0.04)] p-3 flex flex-col gap-1.5">
        {!res ? (
          <p className="font-sans text-[0.75rem] text-tr-dim italic">Renseigne capital, risque, entrée et stop.</p>
        ) : res.needRate ? (
          <p className="font-sans text-[0.75rem] text-tr-dim italic">En attente du taux {res.needRate}…</p>
        ) : (
          <>
            <ResRow label="Risque" value={`${CCY_SYM[acct]}${fmtMoney(res.riskAcct)}`} accent />
            <ResRow label="Distance" value={inst.kind === 'forex' ? `${fmtQty(res.stopDist)} · ${fmtMoney(res.pips, 1)} pips` : fmtQty(res.stopDist)} />
            <ResRow label="Taille" value={inst.kind === 'forex' ? `${fmtMoney(res.lots, 2)} lots · ${fmtQty(res.units)} u.` : `${fmtQty(res.units)} unités`} accent />
            {inst.kind === 'forex' && <ResRow label="Valeur du pip" value={`${CCY_SYM[inst.quote]}${fmtMoney(res.pipValue)}`} />}
            <ResRow label="Valeur position" value={`${CCY_SYM[inst.quote]}${fmtMoney(res.notional, inst.quote === 'JPY' ? 0 : 2)}`} />
          </>
        )}
      </div>
    </div>
  )
}

function Field({ label, hint, onHint, children }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-1">
        <span className="font-sans text-[0.62rem] uppercase tracking-[0.08em] text-tr-dim">{label}</span>
        {hint && (
          <button onClick={onHint} className="font-jakarta text-[0.58rem] text-neon-cyan hover:underline cursor-pointer bg-transparent border-none p-0">
            {hint}
          </button>
        )}
      </div>
      {children}
    </div>
  )
}

function ResRow({ label, value, accent }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-sans text-[0.72rem] text-tr-dim">{label}</span>
      <span className={`font-jakarta text-[0.82rem] font-bold ${accent ? 'text-neon-cyan' : 'text-tr-text'}`}>{value}</span>
    </div>
  )
}

// ─── Mini Candle Chart ────────────────────────────────────────────────────────

function MiniCandleChart({ data }) {
  if (!data?.length) return null
  const W = 112
  const H = 68
  const candleW = 10
  const gap = 4
  const n = data.length

  const allLows  = data.map(c => c.low)
  const allHighs = data.map(c => c.high)
  const minP = Math.min(...allLows)
  const maxP = Math.max(...allHighs)
  const range = maxP - minP || 1

  const scaleY = p => H - 2 - ((p - minP) / range) * (H - 4)

  const totalW = n * candleW + (n - 1) * gap
  const offsetX = (W - totalW) / 2

  return (
    <svg
      width="100%" height={H}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid meet"
      className="block mt-[0.35rem]"
    >
      {data.map((c, i) => {
        const x    = offsetX + i * (candleW + gap)
        const cx   = x + candleW / 2
        const bull = c.close >= c.open
        const col  = bull ? NEON_GREEN : NEON_PINK
        const bodyTop    = scaleY(Math.max(c.open, c.close))
        const bodyBot    = scaleY(Math.min(c.open, c.close))
        const bodyH      = Math.max(1, bodyBot - bodyTop)
        return (
          <g key={i}>
            <line x1={cx} y1={scaleY(c.high)} x2={cx} y2={scaleY(c.low)}
              stroke={col} strokeWidth="1" opacity="0.45" />
            <rect x={x} y={bodyTop} width={candleW} height={bodyH}
              fill={col} opacity="0.82" rx="1" />
          </g>
        )
      })}
    </svg>
  )
}

// ─── Shared helpers ───────────────────────────────────────────────────────────

function InfoTooltip({ text }) {
  const [show, setShow] = useState(false)
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const triggerRef = useRef(null)

  function handleEnter() {
    if (triggerRef.current) {
      const r = triggerRef.current.getBoundingClientRect()
      const tooltipW = 220
      const margin = 8
      const rawLeft = r.left + r.width / 2 - tooltipW / 2
      const clampedLeft = Math.max(margin, Math.min(rawLeft, window.innerWidth - tooltipW - margin))
      setPos({ top: r.bottom + 8, left: clampedLeft })
    }
    setShow(true)
  }

  return (
    <div className="relative inline-block flex-shrink-0">
      <div
        ref={triggerRef}
        onMouseEnter={handleEnter}
        onMouseLeave={() => setShow(false)}
        className="w-[14px] h-[14px] rounded-full border border-tr-border flex items-center justify-center cursor-help font-jakarta text-[0.52rem] text-tr-dim"
      >
        ?
      </div>
      {show && createPortal(
        <div
          className="fixed bg-[#1e0035] border border-[rgba(196,79,255,0.3)] rounded-lg py-3 px-[0.9rem] w-[220px] z-[9999] shadow-[0_4px_24px_rgba(0,0,0,0.7)] pointer-events-none"
          style={{ top: pos.top, left: pos.left }}
        >
          {Array.isArray(text) ? (
            <div className="flex flex-col gap-[0.35rem]">
              {text.map(({ label, value }, i) => (
                <div key={i} className="flex justify-between gap-3">
                  <span className="font-sans text-[0.75rem] text-tr-dim whitespace-nowrap">{label}</span>
                  <span className="font-jakarta text-[0.75rem] text-[rgba(245,230,255,0.9)] text-right">{value}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="font-sans text-[0.8rem] text-[rgba(245,230,255,0.8)] leading-[1.6] m-0">
              {text}
            </p>
          )}
        </div>,
        document.body
      )}
    </div>
  )
}
