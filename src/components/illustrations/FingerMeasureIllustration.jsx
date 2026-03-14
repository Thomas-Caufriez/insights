export default function FingerMeasureIllustration({ style }) {
  return (
    <svg viewBox="0 0 170 130" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} width="100%">
      {/* Background */}
      <rect width="170" height="130" rx="12" fill="#f5e8d0" />

      {/* ── Pot ── */}
      {/* Left wall */}
      <rect x="30" y="38" width="8" height="67" rx="3" fill="#b87830" />
      {/* Right wall */}
      <rect x="118" y="38" width="8" height="67" rx="3" fill="#b87830" />
      {/* Bottom */}
      <rect x="30" y="100" width="96" height="9" rx="4" fill="#a06820" />
      {/* Interior bg */}
      <rect x="38" y="38" width="80" height="62" fill="#e8d8b8" />

      {/* ── Rice layer (y 80→100, full interior width x=38→118) ── */}
      <rect x="38" y="80" width="80" height="20" fill="#f0e8d0" />
      {/* Row 1 */}
      <ellipse cx="44" cy="85" rx="3.5" ry="2"  fill="white" opacity="0.75" />
      <ellipse cx="53" cy="83" rx="3"   ry="1.8" fill="white" opacity="0.65" />
      <ellipse cx="62" cy="86" rx="3.5" ry="2"  fill="white" opacity="0.7"  />
      <ellipse cx="71" cy="83" rx="3"   ry="1.8" fill="white" opacity="0.65" />
      <ellipse cx="80" cy="86" rx="3.5" ry="2"  fill="white" opacity="0.7"  />
      <ellipse cx="89" cy="83" rx="3"   ry="1.8" fill="white" opacity="0.65" />
      <ellipse cx="98" cy="86" rx="3.5" ry="2"  fill="white" opacity="0.7"  />
      <ellipse cx="107" cy="83" rx="3"  ry="1.8" fill="white" opacity="0.65" />
      <ellipse cx="115" cy="85" rx="3"  ry="2"   fill="white" opacity="0.6"  />
      {/* Row 2 */}
      <ellipse cx="48" cy="92" rx="3"   ry="1.8" fill="white" opacity="0.5"  />
      <ellipse cx="58" cy="94" rx="3.5" ry="2"   fill="white" opacity="0.55" />
      <ellipse cx="68" cy="92" rx="3"   ry="1.8" fill="white" opacity="0.5"  />
      <ellipse cx="78" cy="94" rx="3.5" ry="2"   fill="white" opacity="0.55" />
      <ellipse cx="88" cy="92" rx="3"   ry="1.8" fill="white" opacity="0.5"  />
      <ellipse cx="98" cy="94" rx="3.5" ry="2"   fill="white" opacity="0.55" />
      <ellipse cx="110" cy="92" rx="3"  ry="1.8" fill="white" opacity="0.5"  />

      {/* ── Water layer (y 56→80) ── */}
      <rect x="38" y="56" width="80" height="24" fill="#8ab8d8" opacity="0.3" />

      {/* ── Water level line at y=56 ── */}
      <line x1="38" y1="56" x2="118" y2="56" stroke="#6aa0c8" strokeWidth="1.5" strokeDasharray="5,3" />

      {/* ── Finger (pointing down, tip at y=80) ── */}
      {/* Body */}
      <rect x="69" y="8" width="18" height="72" rx="9" fill="#e8c090" />
      {/* Fingernail — at the tip (bottom) of the pointing finger */}
      <rect x="73" y="67" width="10" height="11" rx="5" fill="#d4a878" opacity="0.55" />
      {/* Second knuckle (~y=42) */}
      <path d="M70 42 Q78 44 87 42" stroke="#c8a070" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      {/* First knuckle at y=56 — aligns with water level */}
      <path d="M70 56 Q78 58 87 56" stroke="#c8a070" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* ── Left label: eau ── */}
      <line x1="30" y1="56" x2="14" y2="56" stroke="#6aa0c8" strokeWidth="1" strokeDasharray="3,2" />
      <text x="4" y="53" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#6aa0c8" fontWeight="500">eau</text>

      {/* ── Right label: 1re jointure ── */}
      <line x1="126" y1="56" x2="136" y2="56" stroke="#8b5e3c" strokeWidth="1" />
      <text x="138" y="52" fontFamily="DM Sans, sans-serif" fontSize="7.5" fill="#8b5e3c" fontWeight="500">1re</text>
      <text x="134" y="62" fontFamily="DM Sans, sans-serif" fontSize="7.5" fill="#8b5e3c" fontWeight="500">jointure</text>
    </svg>
  )
}
