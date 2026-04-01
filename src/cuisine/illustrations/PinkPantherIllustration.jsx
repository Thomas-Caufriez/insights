export default function PinkPantherIllustration({ style }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={style} width="100%" height="100%">
      {/* Background circle */}
      <circle cx="55" cy="55" r="52" fill="#fff0f5" />

      {/* === Coupe glass === */}
      {/* Liquid (pink from grenadine) */}
      <path d="M 28 30 L 55 72 L 82 30 Z" fill="#e8607a" opacity="0.75" />
      {/* Egg white foam on top */}
      <path d="M 28 30 L 36 47 L 74 47 L 82 30 Z" fill="#fff5f7" opacity="0.85" />
      {/* Foam texture bubbles */}
      <ellipse cx="45" cy="38" rx="5" ry="3" fill="white" opacity="0.5" />
      <ellipse cx="58" cy="36" rx="4" ry="2.5" fill="white" opacity="0.45" />
      <ellipse cx="68" cy="40" rx="3.5" ry="2" fill="white" opacity="0.4" />
      <ellipse cx="38" cy="41" rx="3" ry="1.8" fill="white" opacity="0.4" />
      {/* Glass outline */}
      <path d="M 28 30 L 55 72 L 82 30 Z" stroke="#c0607a" strokeWidth="1.5" fill="none" opacity="0.45" />
      {/* Rim */}
      <rect x="27" y="27" width="56" height="5" rx="2.5" fill="#e8a0b0" opacity="0.25" />
      <rect x="28" y="27" width="54" height="3.5" rx="1.75" fill="#f8c0cc" opacity="0.5" />
      {/* Stem */}
      <rect x="53.5" y="72" width="3" height="14" rx="1.5" fill="#c0607a" opacity="0.35" />
      {/* Base */}
      <rect x="43" y="86" width="24" height="3.5" rx="1.75" fill="#c0607a" opacity="0.3" />
      {/* Glass highlight */}
      <path d="M 32 33 L 42 58 L 44.5 58 L 34.5 33 Z" fill="white" opacity="0.2" />

      {/* === Lime wheel on rim === */}
      <circle cx="84" cy="28" r="13" fill="#5aaa30" opacity="0.5" />
      <circle cx="84" cy="28" r="11.5" fill="#78c840" />
      <circle cx="84" cy="28" r="9.5" fill="#a0e060" />
      {/* Segments */}
      <line x1="84" y1="18.5" x2="84" y2="37.5" stroke="#4a8820" strokeWidth="0.9" opacity="0.6" />
      <line x1="74.5" y1="28" x2="93.5" y2="28" stroke="#4a8820" strokeWidth="0.9" opacity="0.6" />
      <line x1="77.3" y1="21.3" x2="90.7" y2="34.7" stroke="#4a8820" strokeWidth="0.9" opacity="0.6" />
      <line x1="77.3" y1="34.7" x2="90.7" y2="21.3" stroke="#4a8820" strokeWidth="0.9" opacity="0.6" />
      {/* Center */}
      <circle cx="84" cy="28" r="3.5" fill="#5aaa30" opacity="0.7" />
      {/* Peel ring */}
      <circle cx="84" cy="28" r="9.5" fill="none" stroke="#4a8820" strokeWidth="1" opacity="0.5" />

      {/* === Small shaker silhouette (background) === */}
      <rect x="14" y="42" width="12" height="28" rx="4" fill="#e8c0c8" opacity="0.35" />
      <rect x="13.5" y="39" width="13" height="6" rx="3" fill="#e8c0c8" opacity="0.45" />
      <rect x="15.5" y="68" width="9" height="5" rx="2.5" fill="#e8c0c8" opacity="0.35" />
    </svg>
  )
}
