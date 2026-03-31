export default function ChickenCurryIllustration({ style }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={style} width="100%" height="100%">
      {/* Background circle */}
      <circle cx="55" cy="55" r="52" fill="#f5e8d0" />

      {/* Bowl */}
      <path d="M20 65 Q20 88 55 88 Q90 88 90 65 Z" fill="#d4956a" />
      <path d="M22 65 Q22 85 55 85 Q88 85 88 65 Z" fill="#e8aa7a" />

      {/* Curry sauce */}
      <ellipse cx="55" cy="65" rx="33" ry="8" fill="#d4830a" opacity="0.8" />
      <ellipse cx="55" cy="64" rx="30" ry="6" fill="#e09020" opacity="0.7" />

      {/* Coconut milk swirl */}
      <path d="M40 62 Q50 58 60 62 Q50 66 40 62Z" fill="white" opacity="0.5" />

      {/* Potato pieces */}
      <rect x="32" y="56" width="13" height="10" rx="4" fill="#e8c97a" />
      <rect x="64" y="57" width="12" height="10" rx="4" fill="#dfc070" />

      {/* Chicken thigh */}
      <ellipse cx="55" cy="55" rx="19" ry="13" fill="#c8903a" />
      <ellipse cx="55" cy="53" rx="16" ry="11" fill="#d4a055" />

      {/* Curry spice coating */}
      <ellipse cx="55" cy="52" rx="14" ry="9" fill="#b87020" opacity="0.4" />

      {/* Spice dots */}
      <circle cx="48" cy="50" r="1.5" fill="#8a5010" />
      <circle cx="55" cy="48" r="1.5" fill="#8a5010" />
      <circle cx="62" cy="51" r="1.5" fill="#8a5010" />

      {/* Coriander */}
      <circle cx="73" cy="58" r="5" fill="#4a9040" />
      <circle cx="77" cy="55" r="4" fill="#3a7f30" />
      <circle cx="75" cy="62" r="3.5" fill="#4a9040" />

      {/* Steam */}
      <path d="M48 35 Q46 30 48 25" stroke="#c8903a" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" />
      <path d="M55 33 Q53 27 55 22" stroke="#c8903a" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" />
      <path d="M62 35 Q60 30 62 25" stroke="#c8903a" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" />
    </svg>
  )
}
