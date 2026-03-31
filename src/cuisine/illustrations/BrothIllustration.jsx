export default function BrothIllustration({ style }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={style} width="100%" height="100%">
      {/* Background circle */}
      <circle cx="55" cy="55" r="52" fill="#f5e8d0" />

      {/* Pot body */}
      <rect x="22" y="52" width="66" height="38" rx="10" fill="#8b6a50" />
      <rect x="24" y="54" width="62" height="34" rx="8" fill="#a07860" />

      {/* Broth surface */}
      <ellipse cx="55" cy="55" rx="31" ry="7" fill="#d4a030" />
      <ellipse cx="55" cy="54" rx="29" ry="5.5" fill="#e0b040" />

      {/* Broth shimmer */}
      <ellipse cx="48" cy="53" rx="8" ry="2.5" fill="white" opacity="0.2" />

      {/* Pot handles */}
      <rect x="12" y="60" width="12" height="8" rx="4" fill="#7a5a40" />
      <rect x="86" y="60" width="12" height="8" rx="4" fill="#7a5a40" />

      {/* Pot lid */}
      <ellipse cx="55" cy="50" rx="33" ry="7" fill="#7a5a40" />
      <ellipse cx="55" cy="49" rx="31" ry="5.5" fill="#8b6a50" />

      {/* Lid knob */}
      <ellipse cx="55" cy="42" rx="7" ry="4" fill="#6a4a30" />
      <ellipse cx="55" cy="41" rx="6" ry="3" fill="#7a5a40" />

      {/* Vegetables peeking from top */}
      <circle cx="42" cy="52" r="4" fill="#e07030" opacity="0.8" />
      <rect x="37" y="46" width="4" height="8" rx="2" fill="#6aaa40" opacity="0.7" />
      <circle cx="55" cy="51" r="3.5" fill="#f0c040" opacity="0.7" />
      <rect x="65" y="47" width="4" height="7" rx="2" fill="#80c050" opacity="0.7" />

      {/* Steam */}
      <path d="M42 36 Q40 30 42 24" stroke="#a07860" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" />
      <path d="M55 34 Q53 28 55 22" stroke="#a07860" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" />
      <path d="M68 36 Q66 30 68 24" stroke="#a07860" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" />
    </svg>
  )
}
