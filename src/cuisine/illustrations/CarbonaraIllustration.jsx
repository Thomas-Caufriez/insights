export default function CarbonaraIllustration({ style }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={style} width="100%" height="100%">
      {/* Background */}
      <circle cx="55" cy="55" r="52" fill="#f5e8d0" />

      {/* Plate */}
      <ellipse cx="55" cy="64" rx="43" ry="20" fill="#e2d3ba" />
      <ellipse cx="55" cy="62.5" rx="41" ry="18.5" fill="#f3ece0" />
      <ellipse cx="55" cy="62" rx="32" ry="13.5" fill="#e9dfcc" />

      {/* Pasta mound */}
      <ellipse cx="55" cy="58" rx="30" ry="13.5" fill="#f0d489" />
      <ellipse cx="55" cy="56.5" rx="27" ry="11.5" fill="#f5de9d" />

      {/* Spaghetti strands — nest swirl */}
      <ellipse cx="55" cy="57" rx="24" ry="9.5" stroke="#e0b85c" strokeWidth="1.9" fill="none" opacity="0.85" />
      <ellipse cx="55" cy="59" rx="18" ry="7.2" stroke="#e0b85c" strokeWidth="1.8" fill="none" opacity="0.75" />
      <ellipse cx="56" cy="55.5" rx="12.5" ry="5" stroke="#e0b85c" strokeWidth="1.7" fill="none" opacity="0.7" />
      <path d="M31 58 Q40 50 52 51" stroke="#d9ad4e" strokeWidth="1.7" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M79 57 Q71 49 60 50" stroke="#d9ad4e" strokeWidth="1.7" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M38 64 Q50 69 68 65" stroke="#d9ad4e" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Guanciale cubes */}
      <g transform="rotate(-16 34 54)">
        <rect x="30" y="51" width="8.5" height="6" rx="1.4" fill="#cf7d66" />
        <rect x="30" y="51" width="8.5" height="2.4" rx="1.2" fill="#f2ddd2" opacity="0.85" />
      </g>
      <g transform="rotate(14 74 56)">
        <rect x="70" y="53" width="8" height="5.6" rx="1.4" fill="#c9755e" />
        <rect x="70" y="53" width="8" height="2.2" rx="1.1" fill="#f2ddd2" opacity="0.8" />
      </g>
      <g transform="rotate(-6 55 67)">
        <rect x="51" y="64.5" width="7.5" height="5.2" rx="1.3" fill="#d4836c" />
        <rect x="51" y="64.5" width="7.5" height="2" rx="1" fill="#f2ddd2" opacity="0.8" />
      </g>

      {/* Egg yolk */}
      <ellipse cx="55" cy="52" rx="9.5" ry="8.5" fill="#e8951f" />
      <ellipse cx="55" cy="51" rx="8.2" ry="7.3" fill="#f5aa2e" />
      <ellipse cx="52" cy="48.5" rx="3" ry="2.4" fill="#facf72" opacity="0.75" />

      {/* Cracked black pepper */}
      <circle cx="43" cy="49" r="1" fill="#4a3728" opacity="0.7" />
      <circle cx="66" cy="48" r="0.9" fill="#4a3728" opacity="0.65" />
      <circle cx="48" cy="62" r="1.1" fill="#4a3728" opacity="0.6" />
      <circle cx="63" cy="60" r="0.9" fill="#4a3728" opacity="0.65" />
      <circle cx="72" cy="63" r="0.85" fill="#4a3728" opacity="0.5" />
      <circle cx="37" cy="61" r="0.85" fill="#4a3728" opacity="0.5" />
      <circle cx="58" cy="44" r="0.8" fill="#4a3728" opacity="0.55" />

      {/* Steam */}
      <path d="M44 36 Q42 30 44 24" stroke="#a07860" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.32" />
      <path d="M55 33 Q53 26 55 20" stroke="#a07860" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.32" />
      <path d="M66 36 Q64 30 66 24" stroke="#a07860" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.32" />
    </svg>
  )
}
