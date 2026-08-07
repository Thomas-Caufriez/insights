export const theme = {
  id: 'fromages',
  label: 'Fromages',
  description: 'Familles, histoires, textures, accords mets & vins.',
  accent: '#d4a44c',
  glow: '#e8c87a',
  fg: '#f2e8d6',
  dim: 'rgba(242,232,214,0.55)',
  scrim: 'linear-gradient(100deg, rgba(12,9,6,0.95) 0%, rgba(12,9,6,0.84) 44%, rgba(12,9,6,0.2) 76%, rgba(12,9,6,0) 100%)',
}

// The whole cellar is built on one centre line and stays inside the frame:
// nothing touches x=0 or x=1440, so no wheel or arch gets sliced by the edge.
const CX = 1180          // shared centre for the vault and the racks
const RACK_L = 960       // left upright
const RACK_R = 1400      // right upright
const SPAN = RACK_R - RACK_L

// Wheels are laid out symmetrically inside the uprights: n wheels, n+1 equal
// gaps. Front rack is largest and brightest, rows behind smaller and dimmer.
// The `v` factors vary each wheel slightly — identical discs read as a pattern
// rather than as cheese.
function layout(n, r) {
  const gap = (SPAN - n * r * 2) / (n + 1)
  return Array.from({ length: n }, (_, i) => RACK_L + gap * (i + 1) + r * (2 * i + 1))
}

const RACKS = [
  { y: 372, r: 30, o: 0.34, xs: layout(5, 30), v: [1, 0.94, 1.05, 0.97, 0.92] },
  { y: 516, r: 38, o: 0.58, xs: layout(4, 38), v: [0.96, 1.04, 0.99, 0.95] },
  { y: 676, r: 47, o: 0.85, xs: layout(3, 47), v: [1.03, 0.96, 1.0] },
]

// Nested vaults, all on CX, widest still 8px clear of the right edge.
const VAULTS = [
  { rx: 252, ry: 200, w: 1.8, o: 0.3 },
  { rx: 198, ry: 158, w: 1.4, o: 0.23 },
  { rx: 146, ry: 118, w: 1, o: 0.16 },
]
const SPRING_Y = 430

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
        <linearGradient id="fr-bgg" x1="0" y1="0" x2="0.25" y2="1">
          <stop offset="0%" stopColor="#1a140c" />
          <stop offset="55%" stopColor="#120e08" />
          <stop offset="100%" stopColor="#0a0705" />
        </linearGradient>
        {/* Centred on the rack (1180/1440 ≈ 82%) so the light and the shelving agree */}
        <radialGradient id="fr-lamp" cx="82%" cy="52%" r="46%">
          <stop offset="0%" stopColor="#e8c87a" stopOpacity="0.26" />
          <stop offset="45%" stopColor="#d4a44c" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#d4a44c" stopOpacity="0" />
        </radialGradient>
        <pattern id="fr-dots" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.9" fill="#d4a44c" opacity="0.15" />
        </pattern>
        {/* Rind: lit from the upper left by the lamp, falling to shadow */}
        <linearGradient id="fr-rind" x1="0.15" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor="#e8cf8f" />
          <stop offset="42%" stopColor="#c9a558" />
          <stop offset="100%" stopColor="#6d5228" />
        </linearGradient>
        <linearGradient id="fr-shelf" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8a6a3c" />
          <stop offset="100%" stopColor="#3d2d18" />
        </linearGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#fr-bgg)" />
      <rect width="1440" height="900" fill="url(#fr-dots)" />

      {/* Cellar vaults behind the racks, sharing their centre line */}
      <g opacity="0.45">
        {VAULTS.map((v, i) => (
          <path
            key={i}
            d={`M ${CX - v.rx} 900 L ${CX - v.rx} ${SPRING_Y} A ${v.rx} ${v.ry} 0 0 1 ${CX + v.rx} ${SPRING_Y} L ${CX + v.rx} 900`}
            fill="none" stroke="#d4a44c" strokeWidth={v.w} opacity={v.o}
          />
        ))}
      </g>

      <rect width="1440" height="900" fill="url(#fr-lamp)" />

      {/* ── Ageing racks ───────────────────────────────────────────────── */}
      {RACKS.map((rack, ri) => (
        <g key={ri} opacity={rack.o}>
          {/* Wheels sit on the board, so draw them first */}
          {rack.xs.map((x, wi) => {
            const r = rack.r * rack.v[wi]
            return (
              <g key={x}>
                {/* Contact shadow */}
                <ellipse cx={x} cy={rack.y + r - 1} rx={r * 0.86} ry={r * 0.16} fill="#000" opacity="0.5" />
                {/* Cylinder edge behind the face, so it reads as a wheel not a disc */}
                <circle cx={x + r * 0.12} cy={rack.y + r * 0.05} r={r} fill="#5a4320" />
                {/* Wheel face */}
                <circle cx={x} cy={rack.y} r={r} fill="url(#fr-rind)" />
                {/* Inner paste ring */}
                <circle cx={x} cy={rack.y} r={r * 0.72} fill="none" stroke="#f0dfae" strokeWidth={r * 0.045} opacity="0.3" />
                {/* Rind pitting */}
                <circle cx={x - r * 0.3} cy={rack.y - r * 0.26} r={r * 0.07} fill="#f2e2b4" opacity="0.28" />
                <circle cx={x + r * 0.22} cy={rack.y + r * 0.3} r={r * 0.05} fill="#4a3a1c" opacity="0.35" />
                <circle cx={x + r * 0.36} cy={rack.y - r * 0.34} r={r * 0.04} fill="#4a3a1c" opacity="0.28" />
                {/* Lamp catch on the upper-left edge */}
                <path
                  d={`M ${x - r * 0.94} ${rack.y - r * 0.3} A ${r} ${r} 0 0 1 ${x - r * 0.2} ${rack.y - r * 0.95}`}
                  fill="none" stroke="#f7e6b8" strokeWidth={r * 0.08} strokeLinecap="round" opacity="0.45"
                />
              </g>
            )
          })}
          {/* Shelf board, ending at both uprights rather than running off-frame */}
          <rect x={RACK_L} y={rack.y + rack.r} width={SPAN} height={rack.r * 0.2} rx="2" fill="url(#fr-shelf)" />
          <rect x={RACK_L} y={rack.y + rack.r} width={SPAN} height={rack.r * 0.06} fill="#a8834c" opacity="0.5" />
          {/* Uprights, both ends — they frame the rack and stop it drifting off-canvas */}
          {[RACK_L - 9, RACK_R].map((ux) => (
            <rect key={ux} x={ux} y={rack.y - rack.r - 12} width="9" height={rack.r * 2.2 + 32} fill="#3d2d18" opacity="0.6" />
          ))}
        </g>
      ))}

      {/* Dust turning in the lamplight */}
      {[
        [988, 2.4, 0], [1046, 1.8, 6], [1104, 2.8, 12], [1180, 2, 3],
        [1252, 2.4, 9], [1318, 1.6, 15], [1378, 2.6, 18], [1140, 2, 21],
      ].map(([x, r, delay], i) => (
        <g
          key={i}
          style={{
            animation: `hp-rise ${26 + (i % 5) * 7}s linear infinite`,
            animationDelay: `${delay}s`,
            animationPlayState: play,
          }}
        >
          <circle cx={x} cy={760 + (i % 4) * 40} r={r} fill="#e8c87a" opacity="0.55" />
        </g>
      ))}

      {/* The lamp itself, breathing */}
      <g style={{ animation: 'hp-pulse 9s ease-in-out infinite', animationPlayState: play }}>
        <circle cx={CX} cy="286" r="150" fill="#e8c87a" opacity="0.045" />
        <circle cx={CX} cy="286" r="64" fill="#e8c87a" opacity="0.05" />
      </g>
    </svg>
  )
}
