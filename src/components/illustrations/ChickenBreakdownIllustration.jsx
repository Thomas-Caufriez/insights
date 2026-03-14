export default function ChickenBreakdownIllustration({ style }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={style} width="100%" height="100%">
      {/* Background circle */}
      <circle cx="55" cy="55" r="52" fill="#f5e8d0" />

      {/* Whole chicken body */}
      <ellipse cx="55" cy="58" rx="26" ry="22" fill="#d4a055" />
      <ellipse cx="55" cy="56" rx="24" ry="20" fill="#c8903a" />

      {/* Chicken texture / skin */}
      <ellipse cx="55" cy="54" rx="18" ry="14" fill="#d4a055" opacity="0.5" />

      {/* Legs / drumsticks */}
      <ellipse cx="38" cy="74" rx="7" ry="4" fill="#c8903a" />
      <rect x="33" y="70" width="10" height="8" rx="4" fill="#b87830" />
      <ellipse cx="38" cy="79" rx="6" ry="3.5" fill="#a06820" />

      <ellipse cx="72" cy="74" rx="7" ry="4" fill="#c8903a" />
      <rect x="67" y="70" width="10" height="8" rx="4" fill="#b87830" />
      <ellipse cx="72" cy="79" rx="6" ry="3.5" fill="#a06820" />

      {/* Wings */}
      <ellipse cx="32" cy="57" rx="9" ry="6" fill="#b87830" transform="rotate(-20 32 57)" />
      <ellipse cx="78" cy="57" rx="9" ry="6" fill="#b87830" transform="rotate(20 78 57)" />

      {/* Chicken head */}
      <circle cx="55" cy="36" r="12" fill="#d4a055" />
      <circle cx="55" cy="35" r="10" fill="#c8903a" />

      {/* Crest */}
      <path d="M51 26 Q53 20 55 24 Q57 18 59 23 Q61 17 63 22" stroke="#e07040" strokeWidth="0" fill="#e07040" />
      <ellipse cx="52" cy="24" rx="3" ry="5" fill="#e07040" />
      <ellipse cx="55" cy="22" rx="3" ry="5" fill="#d06030" />
      <ellipse cx="58" cy="24" rx="3" ry="5" fill="#e07040" />

      {/* Eyes */}
      <circle cx="50" cy="34" r="3" fill="white" />
      <circle cx="60" cy="34" r="3" fill="white" />
      <circle cx="51" cy="34" r="1.5" fill="#3a2810" />
      <circle cx="61" cy="34" r="1.5" fill="#3a2810" />

      {/* Beak */}
      <path d="M52 39 L58 39 L55 43 Z" fill="#e09030" />

      {/* Wattle */}
      <ellipse cx="55" cy="42" rx="3" ry="2.5" fill="#e05040" />

      {/* Dashed cut lines (subtle) */}
      <line x1="55" y1="43" x2="55" y2="65" stroke="#8b5e3c" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
      <line x1="35" y1="62" x2="50" y2="68" stroke="#8b5e3c" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
      <line x1="75" y1="62" x2="60" y2="68" stroke="#8b5e3c" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
    </svg>
  )
}
