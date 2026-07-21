// ─── ICT / SMC concept diagrams ───────────────────────────────────────────────
// Small, self-contained candlestick SVGs. Each takes a `color` prop (the concept
// accent) used for annotations; candle bodies stay green/red for readability.
// All diagrams share the 0 0 220 150 viewBox and scale to their container.

const UP = '#22c98a'   // bullish candle
const DN = '#f2506e'   // bearish candle

// One candlestick, positioned in pixel space (y grows downward).
// t/b = wick top/bottom, o/c = body open/close (in px). Color from direction.
function Cndl({ x, t, b, o, c, w = 11 }) {
  const bull = c < o
  const col  = bull ? UP : DN
  const by   = Math.min(o, c)
  const bh   = Math.max(2.5, Math.abs(o - c))
  return (
    <g>
      <line x1={x} y1={t} x2={x} y2={b} stroke={col} strokeWidth="1.6" strokeLinecap="round" />
      <rect x={x - w / 2} y={by} width={w} height={bh} rx="1.5" fill={col} />
    </g>
  )
}

function Wrap({ children }) {
  return (
    <svg viewBox="0 0 220 150" width="100%" preserveAspectRatio="xMidYMid meet" className="block">
      {children}
    </svg>
  )
}

const lbl = { fontFamily: '"Space Mono", monospace', fontSize: 9, letterSpacing: '0.04em' }

// ── Bougie japonaise — anatomy ────────────────────────────────────────────────
function CandleAnatomy({ color }) {
  return (
    <Wrap>
      {/* Bullish */}
      <Cndl x={70} t={20} b={132} o={100} c={45} w={22} />
      <line x1={70} y1={45} x2={150} y2={45} stroke={color} strokeWidth="0.8" strokeDasharray="2 3" opacity="0.6" />
      <line x1={70} y1={100} x2={150} y2={100} stroke={color} strokeWidth="0.8" strokeDasharray="2 3" opacity="0.6" />
      <text x={155} y={26} fill={color} style={lbl}>mèche haute</text>
      <text x={155} y={48} fill={color} style={lbl}>clôture</text>
      <text x={155} y={103} fill={color} style={lbl}>ouverture</text>
      <text x={155} y={136} fill={color} style={lbl}>mèche basse</text>
      <text x={44} y={30} fill={UP} style={lbl}>haussière</text>
    </Wrap>
  )
}

// ── Swing points ──────────────────────────────────────────────────────────────
function SwingPoints({ color }) {
  return (
    <Wrap>
      <Cndl x={30}  t={70} b={110} o={100} c={80} />
      <Cndl x={55}  t={45} b={95}  o={88}  c={60} />
      <Cndl x={80}  t={22} b={70}  o={62}  c={34} />
      <Cndl x={105} t={45} b={92}  o={55}  c={82} />
      <Cndl x={130} t={70} b={118} o={82}  c={108} />
      <Cndl x={155} t={95} b={132} o={108} c={122} />
      <Cndl x={180} t={72} b={120} o={120} c={86} />
      {/* swing high marker */}
      <circle cx={80} cy={18} r={3} fill={color} />
      <text x={62} y={13} fill={color} style={lbl}>swing high</text>
      {/* swing low marker */}
      <circle cx={155} cy={136} r={3} fill={color} />
      <text x={135} y={148} fill={color} style={lbl}>swing low</text>
    </Wrap>
  )
}

// ── Structure de marché — uptrend HH / HL ─────────────────────────────────────
function MarketStructure({ color }) {
  const pts = '20,120 55,70 80,95 120,45 150,72 195,25'
  return (
    <Wrap>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      {[['20','120'],['55','70'],['80','95'],['120','45'],['150','72'],['195','25']].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={2.6} fill={color} />
      ))}
      <text x={40} y={62} fill={UP} style={lbl}>HH</text>
      <text x={104} y={38} fill={UP} style={lbl}>HH</text>
      <text x={82} y={110} fill={color} style={lbl}>HL</text>
      <text x={150} y={88} fill={color} style={lbl}>HL</text>
      <text x={20} y={145} fill={color} style={lbl}>tendance haussière</text>
    </Wrap>
  )
}

// ── BOS — break of structure ──────────────────────────────────────────────────
function BOS({ color }) {
  return (
    <Wrap>
      <Cndl x={28}  t={78} b={116} o={110} c={86} />
      <Cndl x={52}  t={52} b={98}  o={92}  c={64} />
      <Cndl x={76}  t={40} b={82}  o={72}  c={50} />
      <Cndl x={100} t={55} b={96}  o={62}  c={88} />
      {/* prior high level */}
      <line x1={20} y1={40} x2={200} y2={40} stroke={color} strokeWidth="1" strokeDasharray="4 3" opacity="0.8" />
      <text x={150} y={35} fill={color} style={lbl}>ancien high</text>
      {/* breaking candle */}
      <Cndl x={124} t={44} b={92}  o={84}  c={52} />
      <Cndl x={148} t={16} b={60}  o={54}  c={24} />
      <Cndl x={172} t={22} b={58}  o={40}  c={30} />
      <text x={132} y={132} fill={color} style={{...lbl, fontWeight:700}}>BOS ↑</text>
      <path d="M148 44 L148 62" stroke={color} strokeWidth="1.4" markerEnd="" />
    </Wrap>
  )
}

// ── MSS — market structure shift ──────────────────────────────────────────────
function MSS({ color }) {
  return (
    <Wrap>
      {/* uptrend then break down */}
      <Cndl x={26}  t={92} b={128} o={122} c={100} />
      <Cndl x={50}  t={66} b={108} o={104} c={78} />
      <Cndl x={74}  t={44} b={86}  o={80}  c={54} />
      {/* recent higher low level that gets broken */}
      <line x1={20} y1={92} x2={200} y2={92} stroke={color} strokeWidth="1" strokeDasharray="4 3" opacity="0.8" />
      <text x={150} y={87} fill={color} style={lbl}>dernier low</text>
      <Cndl x={98}  t={40} b={80}  o={52}  c={72} />
      <Cndl x={122} t={60} b={104} o={70}  c={98} />
      {/* breaking candle downward */}
      <Cndl x={146} t={86} b={132} o={92}  c={124} />
      <Cndl x={170} t={110} b={140} o={124} c={132} />
      <text x={120} y={22} fill={color} style={{...lbl, fontWeight:700}}>MSS ↓</text>
      <text x={20} y={16} fill={color} style={lbl}>retournement</text>
    </Wrap>
  )
}

// ── AMD — accumulation / manipulation / distribution ──────────────────────────
function AMD({ color }) {
  return (
    <Wrap>
      {/* three phase bands */}
      <rect x={8}   y={16} width={62} height={120} fill={color} opacity="0.06" rx="4" />
      <rect x={74}  y={16} width={46} height={120} fill={color} opacity="0.11" rx="4" />
      <rect x={124} y={16} width={88} height={120} fill={color} opacity="0.06" rx="4" />
      {/* accumulation — range */}
      <Cndl x={22} t={70} b={96} o={90} c={78} />
      <Cndl x={40} t={72} b={98} o={80} c={92} />
      <Cndl x={58} t={70} b={95} o={90} c={76} />
      {/* manipulation — spike down (leurre) */}
      <Cndl x={84}  t={78} b={128} o={84} c={120} />
      <Cndl x={102} t={70} b={124} o={116} c={80} />
      {/* distribution — expansion up */}
      <Cndl x={134} t={58} b={92} o={86} c={64} />
      <Cndl x={154} t={40} b={74} o={66} c={46} />
      <Cndl x={174} t={24} b={58} o={48} c={30} />
      <Cndl x={194} t={16} b={44} o={34} c={22} />
      <text x={14}  y={148} fill={color} style={lbl}>Accum.</text>
      <text x={80}  y={148} fill={color} style={lbl}>Manip.</text>
      <text x={140} y={148} fill={color} style={lbl}>Distrib.</text>
    </Wrap>
  )
}

// ── Liquidité — buyside / sellside pools ──────────────────────────────────────
function Liquidity({ color }) {
  return (
    <Wrap>
      <line x1={10} y1={30}  x2={210} y2={30}  stroke={color} strokeWidth="1.2" strokeDasharray="5 3" />
      <line x1={10} y1={122} x2={210} y2={122} stroke={color} strokeWidth="1.2" strokeDasharray="5 3" />
      <text x={12} y={24}  fill={color} style={{...lbl, fontWeight:700}}>BSL — buyside</text>
      <text x={12} y={138} fill={color} style={{...lbl, fontWeight:700}}>SSL — sellside</text>
      <Cndl x={40}  t={40} b={110} o={96} c={58} />
      <Cndl x={66}  t={34} b={92}  o={80} c={48} />
      <Cndl x={92}  t={58} b={116} o={66} c={104} />
      <Cndl x={118} t={70} b={120} o={80} c={110} />
      <Cndl x={144} t={44} b={100} o={98} c={56} />
      <Cndl x={170} t={30} b={78}  o={70} c={40} />
    </Wrap>
  )
}

// ── Equal highs & lows ────────────────────────────────────────────────────────
function EqualHL({ color }) {
  return (
    <Wrap>
      <line x1={30} y1={34} x2={190} y2={34} stroke={color} strokeWidth="1.2" strokeDasharray="4 3" />
      <text x={140} y={28} fill={color} style={lbl}>equal highs</text>
      <Cndl x={45}  t={34} b={92}  o={84} c={48} />
      <Cndl x={72}  t={54} b={104} o={62} c={96} />
      <Cndl x={99}  t={34} b={88}  o={80} c={46} />
      <Cndl x={126} t={56} b={108} o={64} c={100} />
      <Cndl x={153} t={35} b={90}  o={82} c={48} />
      <circle cx={45}  cy={34} r={2.4} fill={color} />
      <circle cx={99}  cy={34} r={2.4} fill={color} />
      <circle cx={153} cy={35} r={2.4} fill={color} />
    </Wrap>
  )
}

// ── Turtle soup — liquidity grab wick ─────────────────────────────────────────
function TurtleSoup({ color }) {
  return (
    <Wrap>
      <line x1={20} y1={44} x2={200} y2={44} stroke={color} strokeWidth="1" strokeDasharray="4 3" opacity="0.8" />
      <text x={22} y={38} fill={color} style={lbl}>ancien high (liquidité)</text>
      <Cndl x={40}  t={60} b={110} o={100} c={70} />
      <Cndl x={66}  t={50} b={96}  o={86}  c={60} />
      {/* the grab candle: long wick above the level, closes back below */}
      <Cndl x={94}  t={26} b={86}  o={58}  c={74} w={12} />
      <circle cx={94} cy={26} r={3} fill={color} />
      <text x={100} y={22} fill={color} style={{...lbl, fontWeight:700}}>grab</text>
      {/* reversal down */}
      <Cndl x={122} t={62} b={104} o={72}  c={98} />
      <Cndl x={148} t={86} b={126} o={98}  c={120} />
      <Cndl x={174} t={104} b={138} o={120} c={132} />
    </Wrap>
  )
}

// ── IRL → ERL (entry on FVG, exit at liquidity) ───────────────────────────────
function IrlErl({ color }) {
  return (
    <Wrap>
      {/* FVG zone (internal) */}
      <rect x={70} y={70} width={34} height={26} fill={color} opacity="0.16" rx="2" />
      <text x={40} y={64} fill={color} style={lbl}>IRL (FVG)</text>
      {/* liquidity target (external) */}
      <line x1={20} y1={26} x2={210} y2={26} stroke={color} strokeWidth="1.2" strokeDasharray="4 3" />
      <text x={150} y={20} fill={color} style={lbl}>ERL (liq.)</text>
      <Cndl x={40}  t={44} b={100} o={92}  c={54} />
      <Cndl x={62}  t={60} b={112} o={70}  c={104} />
      <Cndl x={87}  t={70} b={118} o={96}  c={78} />
      <Cndl x={112} t={52} b={98}  o={90}  c={62} />
      <Cndl x={137} t={38} b={80}  o={64}  c={46} />
      <Cndl x={162} t={26} b={62}  o={48}  c={32} />
      <path d="M96 96 L160 30" stroke={color} strokeWidth="1.3" strokeDasharray="3 3" opacity="0.9" />
    </Wrap>
  )
}

// ── Order block ───────────────────────────────────────────────────────────────
function OrderBlock({ color }) {
  return (
    <Wrap>
      {/* the OB: last down candle before up impulse */}
      <rect x={54} y={78} width={22} height={34} fill={color} opacity="0.18" rx="2" />
      <text x={10} y={128} fill={color} style={{...lbl, fontWeight:700}}>Order Block</text>
      <Cndl x={30}  t={64} b={110} o={78}  c={104} />
      <Cndl x={65}  t={78} b={116} o={86}  c={110} />
      {/* impulse up */}
      <Cndl x={92}  t={54} b={104} o={100} c={62} />
      <Cndl x={116} t={34} b={78}  o={70}  c={42} />
      <Cndl x={140} t={22} b={56}  o={48}  c={28} />
      {/* return to OB */}
      <Cndl x={164} t={40} b={96}  o={40}  c={90} />
      <path d="M164 96 L96 108" stroke={color} strokeWidth="1.2" strokeDasharray="3 3" opacity="0.7" />
    </Wrap>
  )
}

// ── Fair value gap (3-candle imbalance) ───────────────────────────────────────
function FVG({ color }) {
  return (
    <Wrap>
      {/* three bullish candles, gap between wick1-high and wick3-low */}
      <Cndl x={60}  t={100} b={140} o={132} c={110} w={16} />
      <Cndl x={110} t={40}  b={120} o={112} c={52}  w={16} />
      <Cndl x={160} t={20}  b={78}  o={64}  c={30}  w={16} />
      {/* gap rectangle between candle1 high (y=100) and candle3 low (y=78) */}
      <rect x={44} y={78} width={132} height={22} fill={color} opacity="0.2" rx="2" />
      <line x1={44} y1={78}  x2={176} y2={78}  stroke={color} strokeWidth="0.8" opacity="0.7" />
      <line x1={44} y1={100} x2={176} y2={100} stroke={color} strokeWidth="0.8" opacity="0.7" />
      <text x={60} y={94} fill={color} style={{...lbl, fontWeight:700}}>FVG</text>
      <text x={40} y={16} fill={color} style={lbl}>déséquilibre (imbalance)</text>
    </Wrap>
  )
}

// ── Breaker block (OB that flips) ─────────────────────────────────────────────
function BreakerBlock({ color }) {
  return (
    <Wrap>
      <rect x={44} y={44} width={22} height={30} fill={color} opacity="0.18" rx="2" />
      <Cndl x={32}  t={36} b={82}  o={48}  c={72} />
      <Cndl x={55}  t={44} b={86}  o={56}  c={78} />
      {/* impulse down breaks the block */}
      <Cndl x={80}  t={62} b={110} o={70}  c={104} />
      <Cndl x={104} t={88} b={128} o={98}  c={122} />
      {/* price returns to breaker → resistance */}
      <Cndl x={130} t={54} b={96}  o={90}  c={62} />
      <Cndl x={154} t={58} b={100} o={66}  c={94} />
      <Cndl x={178} t={84} b={126} o={94}  c={120} />
      <text x={8} y={38} fill={color} style={{...lbl, fontWeight:700}}>Breaker</text>
      <path d="M138 58 L70 60" stroke={color} strokeWidth="1.1" strokeDasharray="3 3" opacity="0.7" />
    </Wrap>
  )
}

// ── Premium & discount (fib 50%) ──────────────────────────────────────────────
function PremiumDiscount({ color }) {
  return (
    <Wrap>
      <rect x={30} y={24} width={160} height={48} fill={DN} opacity="0.08" />
      <rect x={30} y={78} width={160} height={48} fill={UP} opacity="0.08" />
      <line x1={30} y1={24}  x2={190} y2={24}  stroke={color} strokeWidth="0.9" opacity="0.6" />
      <line x1={30} y1={75}  x2={190} y2={75}  stroke={color} strokeWidth="1.4" />
      <line x1={30} y1={126} x2={190} y2={126} stroke={color} strokeWidth="0.9" opacity="0.6" />
      <text x={34} y={20}  fill={color} style={lbl}>0%</text>
      <text x={34} y={72}  fill={color} style={{...lbl, fontWeight:700}}>50% équilibre</text>
      <text x={34} y={138} fill={color} style={lbl}>100%</text>
      <text x={150} y={50}  fill={DN} style={{...lbl, fontWeight:700}}>Premium</text>
      <text x={150} y={104} fill={UP} style={{...lbl, fontWeight:700}}>Discount</text>
    </Wrap>
  )
}

// ── OTE — optimal trade entry (fib 0.62–0.79) ─────────────────────────────────
function OTE({ color }) {
  return (
    <Wrap>
      <line x1={30} y1={26}  x2={190} y2={26}  stroke={color} strokeWidth="0.8" opacity="0.5" />
      <line x1={30} y1={72}  x2={190} y2={72}  stroke={color} strokeWidth="0.8" opacity="0.5" />
      <rect x={30} y={82} width={160} height={26} fill={color} opacity="0.22" />
      <line x1={30} y1={126} x2={190} y2={126} stroke={color} strokeWidth="0.8" opacity="0.5" />
      <text x={192} y={30}  fill={color} style={lbl}>0%</text>
      <text x={192} y={76}  fill={color} style={lbl}>50%</text>
      <text x={192} y={98}  fill={color} style={{...lbl, fontWeight:700}}>OTE</text>
      <text x={192} y={130} fill={color} style={lbl}>100%</text>
      <text x={34} y={98} fill={color} style={{...lbl, fontWeight:700}}>0.62 – 0.79</text>
      {/* retrace arrow into the zone then up */}
      <path d="M40 120 L110 95 L180 30" fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    </Wrap>
  )
}

// ── Kill zones — session timeline ─────────────────────────────────────────────
function KillZones({ color }) {
  return (
    <Wrap>
      <line x1={10} y1={92} x2={210} y2={92} stroke={color} strokeWidth="1" opacity="0.4" />
      {/* Asia */}
      <rect x={14} y={60} width={44} height={32} fill={color} opacity="0.07" rx="3" />
      <text x={18} y={52}  fill={color} style={lbl}>Asie</text>
      <text x={16} y={110} fill={color} style={lbl}>2–6h</text>
      {/* London */}
      <rect x={70} y={44} width={52} height={48} fill={color} opacity="0.22" rx="3" />
      <text x={78} y={38}  fill={color} style={{...lbl, fontWeight:700}}>Londres</text>
      <text x={80} y={110} fill={color} style={lbl}>8–11h</text>
      {/* New York */}
      <rect x={134} y={44} width={54} height={48} fill={color} opacity="0.22" rx="3" />
      <text x={140} y={38}  fill={color} style={{...lbl, fontWeight:700}}>New York</text>
      <text x={140} y={110} fill={color} style={lbl}>13–16h</text>
      <text x={40} y={134} fill={color} style={lbl}>zones actives = smart money</text>
    </Wrap>
  )
}

// ── Risk / reward (SL vs TP) ──────────────────────────────────────────────────
function RiskReward({ color }) {
  return (
    <Wrap>
      <line x1={20} y1={84} x2={200} y2={84} stroke={color} strokeWidth="1.4" strokeDasharray="4 3" />
      <text x={22} y={78} fill={color} style={lbl}>entrée</text>
      {/* risk (1) */}
      <rect x={80} y={84} width={26} height={34} fill={DN} opacity="0.3" rx="2" />
      <line x1={80} y1={118} x2={106} y2={118} stroke={DN} strokeWidth="1.4" />
      <text x={110} y={112} fill={DN} style={{...lbl, fontWeight:700}}>SL — 1</text>
      {/* reward (2) */}
      <rect x={80} y={16} width={26} height={68} fill={UP} opacity="0.3" rx="2" />
      <line x1={80} y1={16} x2={106} y2={16} stroke={UP} strokeWidth="1.4" />
      <text x={110} y={26} fill={UP} style={{...lbl, fontWeight:700}}>TP — 2</text>
      <text x={60} y={140} fill={color} style={lbl}>ratio 1 : 2</text>
    </Wrap>
  )
}

const MAP = {
  'candle-anatomy':   CandleAnatomy,
  'swing-points':     SwingPoints,
  'market-structure': MarketStructure,
  'bos':              BOS,
  'mss':              MSS,
  'amd':              AMD,
  'liquidity':        Liquidity,
  'equal-hl':         EqualHL,
  'turtle-soup':      TurtleSoup,
  'irl-erl':          IrlErl,
  'order-block':      OrderBlock,
  'fvg':              FVG,
  'breaker-block':    BreakerBlock,
  'premium-discount': PremiumDiscount,
  'ote':              OTE,
  'kill-zones':       KillZones,
  'risk-reward':      RiskReward,
}

export function getTradingIllustration(key) {
  return MAP[key] || null
}
