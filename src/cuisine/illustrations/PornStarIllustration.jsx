export default function PornStarIllustration({ style }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={style} width="100%" height="100%">
      {/* Background circle */}
      <circle cx="55" cy="55" r="52" fill="#fff8e8" />

      {/* === Martini glass === */}
      {/* Liquid (passion fruit yellow-orange) */}
      <path d="M 32 28 L 55 68 L 78 28 Z" fill="#f5b400" opacity="0.75" />
      {/* Foam / top shimmer */}
      <path d="M 32 28 L 40 44 L 70 44 L 78 28 Z" fill="#ffd84d" opacity="0.55" />
      {/* Glass outline */}
      <path d="M 32 28 L 55 68 L 78 28 Z" stroke="#8b6a50" strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Rim */}
      <rect x="31" y="25" width="48" height="5" rx="2.5" fill="#c8a878" opacity="0.3" />
      <rect x="32" y="25" width="46" height="3.5" rx="1.75" fill="#f5c842" opacity="0.4" />
      {/* Stem */}
      <rect x="53.5" y="68" width="3" height="16" rx="1.5" fill="#8b6a50" opacity="0.35" />
      {/* Base */}
      <rect x="43" y="84" width="24" height="3.5" rx="1.75" fill="#8b6a50" opacity="0.3" />
      {/* Glass highlight */}
      <path d="M 35 32 L 44 55 L 46.5 55 L 37.5 32 Z" fill="white" opacity="0.22" />

      {/* === Passion fruit half on rim === */}
      <circle cx="30" cy="26" r="12" fill="#f08000" opacity="0.85" />
      <circle cx="30" cy="26" r="10.5" fill="#f5a020" />
      {/* Pulp segments */}
      <path d="M 30 16 Q 37 21 37 26 Q 37 31 30 36 Q 23 31 23 26 Q 23 21 30 16 Z" fill="#ffc040" opacity="0.5" />
      <ellipse cx="30" cy="26" rx="5" ry="5" fill="#e06000" opacity="0.6" />
      {/* Seeds */}
      <ellipse cx="28" cy="24" rx="1.2" ry="1.5" fill="#5a2a00" opacity="0.8" transform="rotate(-20 28 24)" />
      <ellipse cx="32" cy="24" rx="1.2" ry="1.5" fill="#5a2a00" opacity="0.8" transform="rotate(20 32 24)" />
      <ellipse cx="30" cy="28" rx="1.2" ry="1.5" fill="#5a2a00" opacity="0.8" />
      <ellipse cx="27" cy="27.5" rx="1" ry="1.3" fill="#5a2a00" opacity="0.7" transform="rotate(-10 27 27.5)" />
      <ellipse cx="33" cy="27.5" rx="1" ry="1.3" fill="#5a2a00" opacity="0.7" transform="rotate(10 33 27.5)" />

      {/* === Prosecco shot glass (side) === */}
      {/* Glass body */}
      <path d="M 79 55 L 80.5 80 L 90.5 80 L 92 55 Z" fill="#f8f0c0" opacity="0.5" />
      {/* Bubbles */}
      <circle cx="83" cy="72" r="1" fill="white" opacity="0.7" />
      <circle cx="86" cy="65" r="0.8" fill="white" opacity="0.6" />
      <circle cx="84.5" cy="58" r="0.7" fill="white" opacity="0.5" />
      <circle cx="88" cy="73" r="0.7" fill="white" opacity="0.55" />
      {/* Glass outline */}
      <path d="M 79 55 L 80.5 80 L 90.5 80 L 92 55 Z" stroke="#8b6a50" strokeWidth="1.2" fill="none" opacity="0.4" />
      {/* Rim */}
      <rect x="78.5" y="52.5" width="14" height="3.5" rx="1.75" fill="#c8a878" opacity="0.3" />
      {/* Base */}
      <rect x="80" y="80" width="11" height="3" rx="1.5" fill="#8b6a50" opacity="0.25" />
    </svg>
  )
}
