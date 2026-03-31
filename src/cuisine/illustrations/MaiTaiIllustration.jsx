export default function MaiTaiIllustration({ style }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={style} width="100%" height="100%">
      {/* Background circle */}
      <circle cx="55" cy="55" r="52" fill="#fef3e2" />

      {/* Glass body (rocks glass) */}
      <path d="M 33 42 L 36 86 L 74 86 L 77 42 Z" fill="#a0c8e8" opacity="0.15" />

      {/* Liquid — orange/tropical gradient layers */}
      <path d="M 33.8 55 L 36 86 L 74 86 L 76.2 55 Z" fill="#f4a030" opacity="0.85" />
      <path d="M 33.4 48 L 33.8 55 L 76.2 55 L 76.6 48 Z" fill="#e87020" opacity="0.7" />

      {/* Ice cubes */}
      <rect x="38" y="44" width="14" height="12" rx="2" fill="white" opacity="0.55" />
      <rect x="55" y="43" width="13" height="13" rx="2" fill="white" opacity="0.45" />
      <rect x="43" y="54" width="11" height="10" rx="2" fill="white" opacity="0.38" />
      <rect x="62" y="55" width="10" height="9" rx="2" fill="white" opacity="0.35" />

      {/* Glass outline */}
      <path d="M 33 42 L 36 86 L 74 86 L 77 42 Z" stroke="#8b6a50" strokeWidth="1.5" opacity="0.45" fill="none" />

      {/* Glass rim */}
      <rect x="33" y="39" width="44" height="5" rx="2.5" fill="#8b6a50" opacity="0.3" />
      <rect x="34" y="39" width="42" height="4" rx="2" fill="#c8a878" opacity="0.35" />

      {/* Glass base */}
      <rect x="36" y="86" width="38" height="4" rx="2" fill="#8b6a50" opacity="0.3" />

      {/* Glass highlight */}
      <path d="M 36 50 L 37.5 80 L 40.5 80 L 39 50 Z" fill="white" opacity="0.25" />

      {/* Straw */}
      <rect x="63" y="22" width="3.5" height="50" rx="1.75" fill="#e84040" opacity="0.75" />
      <rect x="64" y="22" width="1.2" height="50" rx="0.6" fill="white" opacity="0.3" />

      {/* Orange slice on rim */}
      <circle cx="34" cy="33" r="14" fill="#e87820" opacity="0.5" />
      <circle cx="34" cy="33" r="13" fill="#f4941c" />
      <circle cx="34" cy="33" r="11" fill="#f8b040" />
      {/* Segments */}
      <line x1="34" y1="20" x2="34" y2="46" stroke="#c86010" strokeWidth="0.9" opacity="0.55" />
      <line x1="21" y1="33" x2="47" y2="33" stroke="#c86010" strokeWidth="0.9" opacity="0.55" />
      <line x1="24.8" y1="23.8" x2="43.2" y2="42.2" stroke="#c86010" strokeWidth="0.9" opacity="0.55" />
      <line x1="24.8" y1="42.2" x2="43.2" y2="23.8" stroke="#c86010" strokeWidth="0.9" opacity="0.55" />
      {/* Center */}
      <circle cx="34" cy="33" r="4" fill="#e8901c" opacity="0.75" />
      {/* Peel ring */}
      <circle cx="34" cy="33" r="11" fill="none" stroke="#c86010" strokeWidth="1.2" opacity="0.65" />
    </svg>
  )
}
