export default function PsychedelicFrogIllustration({ style }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={style} width="100%" height="100%">
      {/* Background circle */}
      <circle cx="55" cy="55" r="52" fill="#e8f5e0" />

      {/* === Cocktail glass === */}
      {/* Liquid (tropical green) */}
      <path d="M 30 26 L 55 70 L 80 26 Z" fill="#4caf50" opacity="0.72" />
      {/* Top shimmer (melon/midori layer) */}
      <path d="M 30 26 L 38 43 L 72 43 L 80 26 Z" fill="#8bc34a" opacity="0.55" />
      {/* Glass outline */}
      <path d="M 30 26 L 55 70 L 80 26 Z" stroke="#5a7a50" strokeWidth="1.5" fill="none" opacity="0.45" />
      {/* Rim */}
      <rect x="29" y="23" width="52" height="5" rx="2.5" fill="#7cb870" opacity="0.3" />
      <rect x="30" y="23" width="50" height="3.5" rx="1.75" fill="#a5d66e" opacity="0.45" />
      {/* Stem */}
      <rect x="53.5" y="70" width="3" height="15" rx="1.5" fill="#5a7a50" opacity="0.35" />
      {/* Base */}
      <rect x="43" y="85" width="24" height="3.5" rx="1.75" fill="#5a7a50" opacity="0.3" />
      {/* Glass highlight */}
      <path d="M 33 30 L 43 56 L 45.5 56 L 35.5 30 Z" fill="white" opacity="0.2" />

      {/* === Frog sitting on rim === */}
      {/* Body */}
      <ellipse cx="82" cy="30" rx="11" ry="9" fill="#66bb6a" />
      {/* Belly */}
      <ellipse cx="82" cy="31" rx="7" ry="6" fill="#a5d6a7" opacity="0.8" />
      {/* Head */}
      <ellipse cx="82" cy="21" rx="9" ry="7.5" fill="#66bb6a" />
      {/* Eyes */}
      <circle cx="77.5" cy="16.5" r="4" fill="#81c784" />
      <circle cx="86.5" cy="16.5" r="4" fill="#81c784" />
      <circle cx="77.5" cy="16.5" r="2.2" fill="#1b2a1b" />
      <circle cx="86.5" cy="16.5" r="2.2" fill="#1b2a1b" />
      {/* Eye shine */}
      <circle cx="78.3" cy="15.8" r="0.8" fill="white" opacity="0.9" />
      <circle cx="87.3" cy="15.8" r="0.8" fill="white" opacity="0.9" />
      {/* Smile */}
      <path d="M 78 23 Q 82 26 86 23" stroke="#388e3c" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Front legs on rim */}
      <path d="M 72 30 Q 70 34 67 35" stroke="#4caf50" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 78 35 Q 76 39 74 40" stroke="#4caf50" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Psychedelic dots on body */}
      <circle cx="81" cy="30" r="1.2" fill="#ff8f00" opacity="0.7" />
      <circle cx="85" cy="27" r="0.9" fill="#e040fb" opacity="0.7" />
      <circle cx="79" cy="26" r="0.8" fill="#29b6f6" opacity="0.7" />
      <circle cx="84" cy="33" r="1" fill="#ffee58" opacity="0.7" />

      {/* === Bubbles in glass === */}
      <circle cx="46" cy="55" r="1.1" fill="white" opacity="0.5" />
      <circle cx="55" cy="48" r="0.9" fill="white" opacity="0.45" />
      <circle cx="62" cy="58" r="1" fill="white" opacity="0.4" />
      <circle cx="51" cy="62" r="0.8" fill="white" opacity="0.35" />
    </svg>
  )
}
