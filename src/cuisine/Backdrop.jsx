export const theme = {
  id: 'cooking',
  label: 'Cuisine',
  description: 'Recettes, fiches techniques, carnets de saveurs.',
  accent: '#8b5e3c',
  glow: '#c98b3f',
  fg: '#3b2b1c',
  dim: 'rgba(59,43,28,0.6)',
  // Light world — the scrim lightens so the dark text keeps its contrast.
  scrim: 'linear-gradient(100deg, rgba(249,243,232,0.95) 0%, rgba(249,243,232,0.86) 44%, rgba(249,243,232,0.3) 72%, rgba(249,243,232,0) 100%)',
}

// Subject sits right of x≈880 so it never runs under the desktop text column.
const POT_X = 1120
const COUNTER_Y = 660

export default function Backdrop({ active }) {
  const play = active ? 'running' : 'paused'

  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cu-bg" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0%" stopColor="#faf4e9" />
          <stop offset="52%" stopColor="#f2e8d5" />
          <stop offset="100%" stopColor="#e4d5b8" />
        </linearGradient>
        <radialGradient id="cu-sun" cx="18%" cy="12%" r="62%">
          <stop offset="0%" stopColor="#ffd89b" stopOpacity="0.8" />
          <stop offset="55%" stopColor="#f0c078" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#e8b76a" stopOpacity="0" />
        </radialGradient>
        {/* Heat glow under the pot */}
        <radialGradient id="cu-heat" cx="78%" cy="72%" r="34%">
          <stop offset="0%" stopColor="#e2882e" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#e2882e" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cu-copper" x1="0" y1="0" x2="1" y2="0.3">
          <stop offset="0%" stopColor="#8a4a22" />
          <stop offset="24%" stopColor="#c4763a" />
          <stop offset="45%" stopColor="#e0a063" />
          <stop offset="62%" stopColor="#b96a30" />
          <stop offset="100%" stopColor="#7d3f1c" />
        </linearGradient>
        <linearGradient id="cu-copper-rim" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a3552a" />
          <stop offset="40%" stopColor="#e8b077" />
          <stop offset="100%" stopColor="#8a4a22" />
        </linearGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#cu-bg)" />
      <rect width="1440" height="900" fill="url(#cu-sun)" />

      {/* Paper rules, kept faint — the parchment texture under everything */}
      {[110, 250, 390, 530, 790].map((y, row) => (
        <g
          key={y}
          style={{
            animation: `hp-drift-x ${40 + row * 6}s linear infinite`,
            animationPlayState: play,
            animationDirection: row % 2 ? 'reverse' : 'normal',
          }}
        >
          {[0, 480, 960, 1440].map((x) => (
            <path
              key={x}
              d="M0 40 C 80 14, 160 66, 240 40 S 400 14, 480 40"
              transform={`translate(${x}, ${y})`}
              fill="none" stroke="#8b5e3c" strokeWidth="1.1"
              opacity={0.085 - row * 0.008}
            />
          ))}
        </g>
      ))}

      <rect width="1440" height="900" fill="url(#cu-heat)" />

      {/* ── Steam, rising and wavering ─────────────────────────────────── */}
      {[
        [POT_X - 62, 0, 1], [POT_X - 20, 5.5, 1.25], [POT_X + 26, 2.6, 0.9],
        [POT_X + 66, 8, 1.15], [POT_X + 4, 11, 1.4],
      ].map(([x, delay, scale], i) => (
        <g
          key={i}
          style={{
            animation: `hp-rise ${13 + i * 2.4}s linear infinite`,
            animationDelay: `${delay}s`,
            animationPlayState: play,
          }}
        >
          <g style={{ animation: `hp-sway ${5 + i}s ease-in-out infinite`, animationPlayState: play, transformOrigin: `${x}px 470px` }}>
            <path
              d={`M${x} 470
                  C ${x - 26 * scale} 424, ${x + 24 * scale} 392, ${x - 8 * scale} 348
                  C ${x - 34 * scale} 306, ${x + 20 * scale} 276, ${x + 2 * scale} 236`}
              fill="none" stroke="#a8845f" strokeWidth={7 * scale}
              strokeLinecap="round" opacity="0.16"
            />
          </g>
        </g>
      ))}

      {/* ── Copper pot ─────────────────────────────────────────────────── */}
      <g>
        {/* Shadow on the counter */}
        <ellipse cx={POT_X} cy={COUNTER_Y - 2} rx="128" ry="15" fill="#8b5e3c" opacity="0.16" />

        {/* Handles */}
        <path
          d={`M${POT_X - 118} 530 q -46 6 -44 42 q 2 26 30 24`}
          fill="none" stroke="#7d3f1c" strokeWidth="11" strokeLinecap="round" opacity="0.9"
        />
        <path
          d={`M${POT_X + 118} 530 q 46 6 44 42 q -2 26 -30 24`}
          fill="none" stroke="#7d3f1c" strokeWidth="11" strokeLinecap="round" opacity="0.9"
        />

        {/* Body */}
        <path
          d={`M${POT_X - 116} 492
              L ${POT_X - 98} ${COUNTER_Y - 8}
              Q ${POT_X} ${COUNTER_Y + 12} ${POT_X + 98} ${COUNTER_Y - 8}
              L ${POT_X + 116} 492 Z`}
          fill="url(#cu-copper)"
        />
        {/* Hammered highlights */}
        {[[-70, 540], [-34, 588], [16, 552], [58, 604], [-8, 626], [80, 528]].map(([dx, y], i) => (
          <ellipse key={i} cx={POT_X + dx} cy={y} rx="16" ry="9" fill="#f0c58c" opacity="0.13" />
        ))}
        {/* Vertical sheen */}
        <path
          d={`M${POT_X - 58} 496 L ${POT_X - 48} ${COUNTER_Y - 12} L ${POT_X - 24} ${COUNTER_Y - 12} L ${POT_X - 30} 496 Z`}
          fill="#ffd9a6" opacity="0.18"
        />

        {/* Rim */}
        <ellipse cx={POT_X} cy="492" rx="116" ry="24" fill="url(#cu-copper-rim)" />
        <ellipse cx={POT_X} cy="492" rx="101" ry="18" fill="#5e3213" opacity="0.85" />
        <ellipse cx={POT_X} cy="495" rx="101" ry="16" fill="#3d2410" opacity="0.6" />
        {/* Rim catch-light */}
        <path
          d={`M${POT_X - 96} 486 A 116 24 0 0 1 ${POT_X - 8} 469`}
          fill="none" stroke="#ffdcae" strokeWidth="4" strokeLinecap="round" opacity="0.5"
        />
      </g>

      {/* Counter line */}
      <line x1="838" y1={COUNTER_Y} x2="1440" y2={COUNTER_Y} stroke="#8b5e3c" strokeWidth="1.4" opacity="0.28" />

      {/* ── Aromatics on the counter ───────────────────────────────────── */}
      {/* Garlic */}
      <g transform="translate(960, 632)">
        <ellipse cx="0" cy="26" rx="27" ry="6" fill="#8b5e3c" opacity="0.22" />
        <ellipse cx="0" cy="0" rx="29" ry="26" fill="#efe0c8" />
        <path d="M-29 2 Q -15 -27 0 -26 Q 15 -27 29 2" fill="#e0cbaa" />
        <path d="M-10 -24 Q -2 -4 -11 25" fill="none" stroke="#a8875f" strokeWidth="1.7" opacity="0.85" />
        <path d="M10 -24 Q 2 -4 11 25" fill="none" stroke="#a8875f" strokeWidth="1.7" opacity="0.85" />
        <path d="M-22 -12 Q -18 6 -23 18" fill="none" stroke="#a8875f" strokeWidth="1.3" opacity="0.6" />
        <path d="M22 -12 Q 18 6 23 18" fill="none" stroke="#a8875f" strokeWidth="1.3" opacity="0.6" />
        <ellipse cx="-8" cy="-8" rx="9" ry="11" fill="#fdf6e9" opacity="0.55" />
        <path d="M0 -26 q -4 -14 5 -21" fill="none" stroke="#8a6b42" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Peppercorns */}
      {[[982, 652, 5], [1000, 645, 4], [996, 657, 3.4], [1274, 650, 4.6], [1292, 643, 3.6], [1286, 656, 4.2]].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#4a3420" opacity="0.55" />
      ))}

      {/* Thyme sprigs */}
      {[[1246, 640, -14], [1326, 634, 12]].map(([x, y, rot], i) => (
        <g key={i} transform={`translate(${x}, ${y}) rotate(${rot})`}>
          <path d="M-52 8 Q 0 -6 52 -2" fill="none" stroke="#6f8a4a" strokeWidth="2.4" strokeLinecap="round" opacity="0.8" />
          {[-40, -24, -8, 8, 24, 40].map((dx, j) => (
            <ellipse
              key={j}
              cx={dx} cy={j % 2 ? 2 : -6} rx="8" ry="4.4"
              fill="#7fa055" opacity="0.72"
              transform={`rotate(${j % 2 ? 24 : -24} ${dx} ${j % 2 ? 2 : -6})`}
            />
          ))}
        </g>
      ))}

      {/* Flour dust catching the light */}
      {[[900, 4, 0], [1010, 3, 7], [1180, 4.5, 13], [1310, 3.4, 4], [1390, 4, 18]].map(([x, r, delay], i) => (
        <g
          key={i}
          style={{
            animation: `hp-rise ${24 + (i % 3) * 7}s linear infinite`,
            animationDelay: `${delay}s`,
            animationPlayState: play,
          }}
        >
          <circle cx={x} cy={700 + (i % 3) * 46} r={r} fill="#c4964a" opacity="0.45" />
        </g>
      ))}
    </svg>
  )
}
