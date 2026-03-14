export default function RiceBowlIllustration({ style }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={style} width="100%" height="100%">
      {/* Background */}
      <circle cx="55" cy="55" r="52" fill="#f5e8d0" />

      {/* Bowl body */}
      <path d="M22 52 Q22 82 55 82 Q88 82 88 52 Z" fill="#c8903a" />
      <path d="M24 52 Q24 79 55 79 Q86 79 86 52 Z" fill="#d4a055" />

      {/* Bowl rim */}
      <ellipse cx="55" cy="52" rx="33" ry="7" fill="#b87830" />
      <ellipse cx="55" cy="51" rx="31" ry="5.5" fill="#c8903a" />

      {/* Rice surface */}
      <ellipse cx="55" cy="50" rx="29" ry="5" fill="#f5f0e8" />

      {/* Rice grains texture */}
      <ellipse cx="42" cy="49" rx="3.5" ry="2" fill="white" opacity="0.8" />
      <ellipse cx="50" cy="47.5" rx="3" ry="1.8" fill="white" opacity="0.7" />
      <ellipse cx="58" cy="48" rx="3.5" ry="2" fill="white" opacity="0.8" />
      <ellipse cx="66" cy="49" rx="3" ry="1.8" fill="white" opacity="0.7" />
      <ellipse cx="46" cy="51" rx="3" ry="1.8" fill="white" opacity="0.6" />
      <ellipse cx="55" cy="51.5" rx="3.5" ry="2" fill="white" opacity="0.7" />
      <ellipse cx="63" cy="51" rx="3" ry="1.8" fill="white" opacity="0.6" />

      {/* Steam */}
      <path d="M43 36 Q41 30 43 24" stroke="#a07860" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.35" />
      <path d="M55 34 Q53 27 55 21" stroke="#a07860" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.35" />
      <path d="M67 36 Q65 30 67 24" stroke="#a07860" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.35" />

      {/* Chopsticks */}
      <line x1="68" y1="28" x2="78" y2="53" stroke="#8b6540" strokeWidth="2" strokeLinecap="round" />
      <line x1="72" y1="26" x2="80" y2="52" stroke="#8b6540" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
