export default function ChickenMustardIllustration({ style }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={style} width="100%" height="100%">
      {/* Background circle */}
      <circle cx="55" cy="55" r="52" fill="#f5e8d0" />

      {/* Plate / bowl */}
      <ellipse cx="55" cy="72" rx="34" ry="10" fill="#e8c98a" />
      <ellipse cx="55" cy="70" rx="34" ry="10" fill="#f0d89a" />

      {/* Sauce puddle */}
      <ellipse cx="55" cy="68" rx="28" ry="7" fill="#d4a44a" opacity="0.5" />

      {/* Potato chunks */}
      <rect x="30" y="60" width="14" height="10" rx="4" fill="#e8c97a" />
      <rect x="47" y="58" width="12" height="11" rx="4" fill="#dfc070" />
      <rect x="62" y="61" width="13" height="9" rx="4" fill="#e8c97a" />

      {/* Chicken piece (body) */}
      <ellipse cx="55" cy="52" rx="20" ry="14" fill="#d4a055" />
      <ellipse cx="55" cy="50" rx="18" ry="12" fill="#c8903a" />

      {/* Chicken texture lines */}
      <path d="M42 50 Q55 44 68 50" stroke="#b87830" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M44 55 Q55 50 66 55" stroke="#b87830" strokeWidth="1.2" strokeLinecap="round" fill="none" />

      {/* Mustard drizzle */}
      <path d="M38 48 Q45 42 52 46 Q59 50 65 44" stroke="#f5c030" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Herb garnish (parsley) */}
      <circle cx="72" cy="60" r="5" fill="#5a8a40" />
      <circle cx="76" cy="58" r="4" fill="#4a7a30" />
      <circle cx="74" cy="63" r="3.5" fill="#5a8a40" />
    </svg>
  )
}
