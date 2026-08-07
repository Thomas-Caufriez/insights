export const theme = {
  id: 'boissons',
  label: 'Boissons',
  description: 'Cocktails tiki, liqueurs maison, shakers & recettes.',
  accent: '#0d7a72',
  glow: '#2ebdb1',
  fg: '#12302b',
  dim: 'rgba(18,48,43,0.62)',
  // Light world, like cuisine — scrim lightens rather than darkens.
  // Boldest scene of the five, so it needs the strongest scrim to keep the
  // inactive labels legible where the sea band crosses the text column.
  scrim: 'linear-gradient(100deg, rgba(250,244,232,0.97) 0%, rgba(250,244,232,0.92) 36%, rgba(250,244,232,0.6) 56%, rgba(250,244,232,0.1) 82%, rgba(250,244,232,0) 100%)',
}

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
        <linearGradient id="bo-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a8daf0" />
          <stop offset="44%" stopColor="#fde9c2" />
          <stop offset="66%" stopColor="#f9b96e" />
          <stop offset="100%" stopColor="#f4865a" />
        </linearGradient>
        <radialGradient id="bo-sunglow" cx="66%" cy="52%" r="34%">
          <stop offset="0%" stopColor="#ffd166" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffd166" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bo-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3ecfc6" />
          <stop offset="100%" stopColor="#1a9e9e" />
        </linearGradient>
        <linearGradient id="bo-sand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5d98e" />
          <stop offset="100%" stopColor="#e0b45e" />
        </linearGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#bo-sky)" />
      <rect width="1440" height="900" fill="url(#bo-sunglow)" />

      {/* Sun */}
      <g style={{ animation: 'hp-pulse 8s ease-in-out infinite', animationPlayState: play, transformOrigin: '950px 470px' }}>
        <circle cx="950" cy="470" r="128" fill="#ffd166" opacity="0.28" />
      </g>
      <circle cx="950" cy="470" r="82" fill="#ffc233" opacity="0.6" />
      <circle cx="950" cy="470" r="56" fill="#f9a820" opacity="0.9" />

      {/* Headland */}
      <path d="M0 486 Q 180 442 380 462 Q 540 478 700 468 Q 830 460 900 474 L 900 520 L 0 520 Z" fill="#7ab8c2" opacity="0.22" />

      {/* Sea */}
      <path d="M0 496 C 220 478 440 514 660 496 C 880 478 1120 512 1440 492 L1440 690 L0 690 Z" fill="url(#bo-sea)" />
      <path d="M0 496 C 220 478 440 514 660 496 C 880 478 1120 512 1440 492" fill="none" stroke="white" strokeWidth="2.4" opacity="0.45" />

      {/* Shimmer lines on the water */}
      {[520, 548, 578, 610, 644].map((y, i) => (
        <g
          key={y}
          style={{
            animation: `hp-shimmer ${6 + i * 1.7}s ease-in-out infinite`,
            animationDelay: `${i * 0.7}s`,
            animationPlayState: play,
          }}
        >
          <path
            d={`M${-40 + i * 30} ${y} C ${200 + i * 40} ${y - 9}, ${520 + i * 30} ${y + 11}, ${840 + i * 20} ${y - 5} S ${1240} ${y + 7}, ${1480} ${y}`}
            fill="none" stroke="white" strokeWidth={1.4 - i * 0.14} opacity={0.34 - i * 0.04}
          />
        </g>
      ))}

      {/* Foam + sand */}
      <path d="M0 668 C 240 652 480 686 720 668 C 960 650 1200 682 1440 664 L1440 700 L0 700 Z" fill="white" opacity="0.2" />
      <path d="M0 676 C 240 658 480 694 720 674 C 960 656 1200 690 1440 670 L1440 900 L0 900 Z" fill="url(#bo-sand)" />

      {/* Palm — anchored on the right so it never crosses the text column */}
      <g>
        <path
          d="M 1330 900 Q 1318 776 1300 686 Q 1280 592 1256 516 Q 1238 458 1212 418"
          stroke="#6d4c41" strokeWidth="22" fill="none" strokeLinecap="round" opacity="0.8"
        />
        <path
          d="M 1330 900 Q 1318 776 1300 686 Q 1280 592 1256 516 Q 1238 458 1212 418"
          stroke="#a1745a" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.28"
        />
        <g
          style={{
            animation: 'hp-sway 7s ease-in-out infinite',
            animationPlayState: play,
            transformOrigin: '1212px 418px',
          }}
        >
          <path d="M1212 418 Q 1108 394 1028 436 Q 1090 418 1212 428 Z" fill="#3f8c45" opacity="0.82" />
          <path d="M1212 418 Q 1128 314 1068 268 Q 1132 330 1216 426 Z" fill="#33793a" opacity="0.78" />
          <path d="M1212 418 Q 1194 294 1222 234 Q 1212 300 1222 424 Z" fill="#43a047" opacity="0.76" />
          <path d="M1212 418 Q 1300 294 1348 246 Q 1286 312 1220 424 Z" fill="#3f8c45" opacity="0.78" />
          <path d="M1212 418 Q 1336 366 1406 374 Q 1310 386 1212 430 Z" fill="#33793a" opacity="0.73" />
          <circle cx="1200" cy="440" r="15" fill="#5d4037" opacity="0.78" />
          <circle cx="1230" cy="432" r="12" fill="#6d4c41" opacity="0.72" />
        </g>
      </g>

      {/* Seagulls */}
      {[[520, 232, 0], [606, 194, 2.4], [700, 258, 4.8]].map(([x, y, d], i) => (
        <g key={i} style={{ animation: `hp-breathe ${5 + i}s ease-in-out infinite`, animationDelay: `${d}s`, animationPlayState: play }}>
          <path d={`M${x} ${y} Q ${x + 15} ${y - 13} ${x + 30} ${y}`} fill="none" stroke="#5f8496" strokeWidth="2.4" opacity="0.4" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  )
}
