export default function LimoncelloIllustration({ style }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={style} width="100%" height="100%">
      {/* Background circle */}
      <circle cx="55" cy="55" r="52" fill="#f5e8d0" />

      {/* Glass body outline */}
      <path d="M 37 36 L 41 83 L 69 83 L 73 36 Z" fill="#8b6a50" opacity="0.2" />

      {/* Liquid fill */}
      <path d="M 38.5 40 L 42 81 L 68 81 L 71.5 40 Z" fill="#d8c818" opacity="0.88" />

      {/* Glass rim */}
      <ellipse cx="55" cy="36" rx="18" ry="5" fill="#8b6a50" opacity="0.35" />
      <ellipse cx="55" cy="35" rx="16.5" ry="3.8" fill="#c8b814" opacity="0.55" />

      {/* Glass base */}
      <ellipse cx="55" cy="83" rx="14" ry="3.5" fill="#8b6a50" opacity="0.3" />
      <rect x="49" y="83" width="12" height="4" rx="2" fill="#8b6a50" opacity="0.25" />

      {/* Glass highlight */}
      <path d="M 40 50 L 41.5 74 L 44.5 74 L 43 50 Z" fill="white" opacity="0.28" />

      {/* Bubbles */}
      <circle cx="51" cy="68" r="2" fill="white" opacity="0.38" />
      <circle cx="60" cy="74" r="1.5" fill="white" opacity="0.32" />
      <circle cx="64" cy="60" r="1.8" fill="white" opacity="0.28" />
      <circle cx="55" cy="78" r="1.2" fill="white" opacity="0.25" />

      {/* Lemon slice resting on rim */}
      <circle cx="73" cy="29" r="16" fill="#c8a810" opacity="0.5" />
      <circle cx="73" cy="29" r="15" fill="#e8d020" />
      <circle cx="73" cy="29" r="13" fill="#f4e840" />
      {/* Segments */}
      <line x1="73" y1="14" x2="73" y2="44" stroke="#b8a008" strokeWidth="1" opacity="0.55" />
      <line x1="58" y1="29" x2="88" y2="29" stroke="#b8a008" strokeWidth="1" opacity="0.55" />
      <line x1="62.5" y1="18.5" x2="83.5" y2="39.5" stroke="#b8a008" strokeWidth="1" opacity="0.55" />
      <line x1="62.5" y1="39.5" x2="83.5" y2="18.5" stroke="#b8a008" strokeWidth="1" opacity="0.55" />
      {/* Lemon center */}
      <circle cx="73" cy="29" r="5" fill="#dcc820" opacity="0.75" />
      {/* Peel ring */}
      <circle cx="73" cy="29" r="13" fill="none" stroke="#b8a008" strokeWidth="1.5" opacity="0.7" />
    </svg>
  )
}
