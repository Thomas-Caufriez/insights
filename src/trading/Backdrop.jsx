export const theme = {
  id: 'trading',
  label: 'Trading',
  description: 'Crypto, actions, forex, matières premières.',
  accent: '#00d4aa',
  glow: '#00f5ff',
  fg: '#e8f2f0',
  dim: 'rgba(232,242,240,0.55)',
  scrim: 'linear-gradient(100deg, rgba(8,12,18,0.95) 0%, rgba(8,12,18,0.82) 44%, rgba(8,12,18,0.16) 78%, rgba(8,12,18,0) 100%)',
}

// Decorative, not live. A real feed would put a rate-limited request on first
// paint and would sometimes render empty — this always reads correctly.
const CANDLES = [
  [60, 470, 96, 1], [112, 430, 132, 1], [164, 452, 74, 0], [216, 388, 148, 1],
  [268, 410, 92, 0], [320, 344, 168, 1], [372, 300, 122, 1], [424, 336, 88, 0],
  [476, 286, 140, 1], [528, 330, 104, 0], [580, 252, 178, 1], [632, 214, 130, 1],
  [684, 268, 96, 0], [736, 206, 152, 1], [788, 248, 86, 0], [840, 180, 164, 1],
  [892, 140, 134, 1], [944, 196, 98, 0], [996, 148, 156, 1], [1048, 190, 88, 0],
  [1100, 122, 170, 1], [1152, 92, 128, 1], [1204, 146, 102, 0], [1256, 88, 158, 1],
  [1308, 130, 94, 0], [1360, 66, 176, 1], [1412, 104, 120, 1],
]

export default function Backdrop({ active }) {
  const play = active ? 'running' : 'paused'

  return (
    <div
      style={{
        position: 'absolute', inset: 0, overflow: 'hidden',
        background: 'linear-gradient(160deg, #101822 0%, #0b1119 55%, #06090e 100%)',
      }}
      aria-hidden="true"
    >
      {/* Grid — a CSS layer rather than an animated SVG pattern. Full-viewport
          repaints every frame were the single heaviest thing on this page, and
          the old 300px travel against a 48px tile made the loop jump. */}
      <div style={{
        position: 'absolute', left: 0, right: 0, top: '-48px', height: 'calc(100% + 96px)',
        backgroundImage:
          'linear-gradient(to right, rgba(0,212,170,0.11) 1px, transparent 1px),' +
          'linear-gradient(to bottom, rgba(0,212,170,0.11) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        animation: 'hp-tile-y 5.5s linear infinite',
        animationPlayState: play,
      }} />

      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
      <defs>
        <radialGradient id="tr-glow" cx="66%" cy="52%" r="60%">
          <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.16" />
          <stop offset="60%" stopColor="#00d4aa" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#00d4aa" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="tr-fade" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#00d4aa" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="tr-fade-dim" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#5d7a8c" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#5d7a8c" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#tr-glow)" />

      {/* Candles along the lower half, rising left to right.
          Batched into four interleaved groups rather than one animation per
          candle — 27 separately-animated nodes was the heaviest thing on the
          page, and interleaving keeps the shimmer looking uncorrelated. */}
      <g opacity="0.85">
        {[0, 1, 2, 3].map((band) => (
          <g
            key={band}
            style={{
              animation: `hp-breathe ${7 + band * 1.7}s ease-in-out infinite`,
              animationDelay: `${band * 0.6}s`,
              animationPlayState: play,
            }}
          >
            {CANDLES.filter((_, i) => i % 4 === band).map(([x, y, h, up], i) => (
              <g key={i}>
                <line
                  x1={x + 13} y1={y - 26} x2={x + 13} y2={y + h + 22}
                  stroke={up ? '#00d4aa' : '#5d7a8c'} strokeWidth="1.2" opacity="0.3"
                />
                <rect
                  x={x} y={y} width="26" height={h} rx="2"
                  fill={up ? 'url(#tr-fade)' : 'url(#tr-fade-dim)'}
                />
              </g>
            ))}
          </g>
        ))}
      </g>

      {/* Horizon line + price ticks */}
      <line x1="0" y1="640" x2="1440" y2="640" stroke="#00d4aa" strokeWidth="0.8" opacity="0.18" />
      {[120, 260, 400, 540, 780].map((y) => (
        <g key={y}>
          <line x1="0" y1={y} x2="1440" y2={y} stroke="#00d4aa" strokeWidth="0.5" opacity="0.06" strokeDasharray="3 9" />
        </g>
      ))}

      </svg>

      {/* Scanning pulse — also a CSS layer, so it slides on the compositor
          instead of forcing a full-height SVG repaint on every frame. */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, rgba(0,245,255,0) 42%, rgba(0,245,255,0.055) 50%, rgba(0,245,255,0) 58%)',
        animation: 'hp-sweep-x 13s linear infinite',
        animationPlayState: play,
      }} />
    </div>
  )
}
