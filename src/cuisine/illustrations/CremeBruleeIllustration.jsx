export default function CremeBruleeIllustration({ style }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={style} width="100%" height="100%">
      {/* Background circle */}
      <circle cx="55" cy="55" r="52" fill="#fdf6e3" />

      {/* === Rocks glass === */}
      {/* Glass body */}
      <path d="M 28 42 L 32 88 L 78 88 L 82 42 Z" fill="#f5e6c8" opacity="0.45" />
      {/* Liquid layers */}
      {/* Base — vodka/vanilla cream (ivory) */}
      <path d="M 29.5 60 L 32 88 L 78 88 L 80.5 60 Z" fill="#f0d8a0" opacity="0.7" />
      {/* Cream layer on top */}
      <path d="M 28.8 50 L 80.5 50 L 80.5 60 L 29.5 60 Z" fill="#faebd0" opacity="0.8" />
      {/* Glass outline */}
      <path d="M 28 42 L 32 88 L 78 88 L 82 42 Z" stroke="#c8a060" strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Rim */}
      <rect x="27.5" y="39" width="55" height="5" rx="2.5" fill="#d4a84c" opacity="0.25" />
      <rect x="28" y="39" width="54" height="3.5" rx="1.75" fill="#f0c860" opacity="0.35" />
      {/* Glass highlight */}
      <path d="M 31 46 L 34 80 L 36.5 80 L 33.5 46 Z" fill="white" opacity="0.25" />

      {/* === Caramel foam on top === */}
      {/* Foam base */}
      <ellipse cx="55" cy="44" rx="26" ry="6" fill="#faebd0" opacity="0.95" />
      {/* Caramel crust (burnt sugar) */}
      <ellipse cx="55" cy="43" rx="23" ry="4.5" fill="#c87820" opacity="0.55" />
      <ellipse cx="55" cy="43" rx="19" ry="3" fill="#e09030" opacity="0.45" />
      {/* Caramel cracks */}
      <path d="M 40 42 Q 48 40 55 43 Q 62 46 70 42" stroke="#a05010" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M 46 44 Q 52 41 58 44" stroke="#a05010" strokeWidth="0.6" fill="none" opacity="0.4" />
      {/* Gloss on caramel */}
      <ellipse cx="50" cy="41.5" rx="7" ry="2" fill="white" opacity="0.15" />

      {/* === Chalumeau / blowtorch (small, top right) === */}
      {/* Handle */}
      <rect x="76" y="20" width="8" height="18" rx="3" fill="#888" opacity="0.7" />
      {/* Nozzle */}
      <rect x="78" y="16" width="4" height="7" rx="1.5" fill="#666" opacity="0.7" />
      {/* Flame */}
      <path d="M 79 14 Q 77 9 80 6 Q 83 9 81 14 Z" fill="#ff9800" opacity="0.85" />
      <path d="M 79.5 14 Q 78 10 80 8 Q 82 10 80.5 14 Z" fill="#ffee58" opacity="0.7" />
      <path d="M 80 14 Q 79 11 80.5 9.5 Q 81.5 11 80 14 Z" fill="white" opacity="0.5" />

      {/* === Icing sugar dots scattered on foam === */}
      <circle cx="44" cy="43" r="1.2" fill="white" opacity="0.8" />
      <circle cx="51" cy="41" r="1" fill="white" opacity="0.75" />
      <circle cx="58" cy="42" r="1.3" fill="white" opacity="0.8" />
      <circle cx="65" cy="44" r="1" fill="white" opacity="0.7" />
      <circle cx="47" cy="46" r="0.8" fill="white" opacity="0.6" />
      <circle cx="62" cy="46" r="0.9" fill="white" opacity="0.65" />

      {/* === Vanilla pod decoration === */}
      <path d="M 22 78 Q 26 68 30 58" stroke="#5a3a10" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M 24 77 Q 28 67 31 58" stroke="#7a5020" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.4" />
    </svg>
  )
}
