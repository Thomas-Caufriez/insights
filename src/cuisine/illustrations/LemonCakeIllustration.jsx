export default function LemonCakeIllustration({ style }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={style} width="100%" height="100%">
      {/* Background */}
      <circle cx="55" cy="55" r="52" fill="#f5e8d0" />

      {/* Ombre au sol, décalée à droite (lumière en haut à gauche) */}
      <ellipse cx="58" cy="78.5" rx="26" ry="3" fill="#c8b394" opacity="0.5" />

      {/* Rondelle de citron posée devant, à gauche */}
      <ellipse cx="22" cy="74" rx="8" ry="4" fill="#e8b400" />
      <ellipse cx="22" cy="74" rx="6.4" ry="2.9" fill="#f7dc5c" />
      <path d="M22 74 L28.4 74" stroke="#e8b400" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M22 74 L18.8 76.5" stroke="#e8b400" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M22 74 L18.8 71.5" stroke="#e8b400" strokeWidth="0.9" strokeLinecap="round" />

      {/* ---- Corps du cake ---- */}
      <path d="M30 77 L27 52 Q27 44 41 41 Q55 38.5 69 41 Q83 44 83 52 L80 77 Z" fill="#e0b85c" />
      {/* Flanc droit ombré */}
      <path d="M55 38.5 Q69 41 83 44 Q83 48 83 52 L80 77 L55 77 Z" fill="#c8903a" opacity="0.42" />

      {/* Mie — quelques grains */}
      <ellipse cx="36" cy="65" rx="1.5" ry="1.1" fill="#c8903a" opacity="0.35" />
      <ellipse cx="43" cy="71" rx="1.3" ry="1" fill="#c8903a" opacity="0.3" />
      <ellipse cx="33" cy="72" rx="1.4" ry="1" fill="#c8903a" opacity="0.32" />
      <ellipse cx="47" cy="66" rx="1.3" ry="1" fill="#c8903a" opacity="0.3" />
      <ellipse cx="40" cy="75" rx="1.2" ry="0.9" fill="#c8903a" opacity="0.28" />
      <ellipse cx="63" cy="68" rx="1.4" ry="1" fill="#b87830" opacity="0.32" />
      <ellipse cx="71" cy="65" rx="1.3" ry="1" fill="#b87830" opacity="0.3" />
      <ellipse cx="75" cy="71" rx="1.4" ry="1" fill="#b87830" opacity="0.32" />
      <ellipse cx="58" cy="72" rx="1.3" ry="1" fill="#b87830" opacity="0.28" />
      <ellipse cx="66" cy="74" rx="1.2" ry="0.9" fill="#b87830" opacity="0.3" />

      {/* ---- Glaçage ---- */}
      {/* Coulures */}
      <path d="M31 52 L31 60 Q33.5 64 36 60 L36 52.5 Z" fill="#fdfaf2" />
      <path d="M42 55 L42 57 Q44 60 46 57 L46 55.5 Z" fill="#fdfaf2" />
      <path d="M52 55.5 L52 63 Q55 67 58 63 L58 55.5 Z" fill="#fdfaf2" />
      <path d="M64 55 L64 58 Q66.5 61 69 58 L69 54.5 Z" fill="#fdfaf2" />
      <path d="M74 54 L74 60 Q76.5 64 79 60 L79 53 Z" fill="#fdfaf2" />
      {/* Calotte */}
      <path d="M27 51 Q27 44 41 41 Q55 38.5 69 41 Q83 44 83 51 Q69 56 55 55.5 Q41 56 27 51 Z" fill="#fdfaf2" />
      {/* Ombre sous la calotte */}
      <path d="M27 51 Q41 56 55 55.5 Q69 56 83 51" stroke="#e6dac2" strokeWidth="1.1" fill="none" opacity="0.8" />

      {/* ---- Rondelle de citron sur le dessus ---- */}
      <ellipse cx="62" cy="44.5" rx="8.5" ry="2.6" fill="#e6dac2" opacity="0.75" />
      <ellipse cx="62" cy="40" rx="9.5" ry="6.5" fill="#e8b400" />
      <ellipse cx="62" cy="40" rx="7.8" ry="5" fill="#f7dc5c" />
      <path d="M62 40 L69.8 40" stroke="#e8b400" strokeWidth="1" strokeLinecap="round" />
      <path d="M62 40 L65.9 44.3" stroke="#e8b400" strokeWidth="1" strokeLinecap="round" />
      <path d="M62 40 L58.1 44.3" stroke="#e8b400" strokeWidth="1" strokeLinecap="round" />
      <path d="M62 40 L54.2 40" stroke="#e8b400" strokeWidth="1" strokeLinecap="round" />
      <path d="M62 40 L58.1 35.7" stroke="#e8b400" strokeWidth="1" strokeLinecap="round" />
      <path d="M62 40 L65.9 35.7" stroke="#e8b400" strokeWidth="1" strokeLinecap="round" />
      <ellipse cx="58.5" cy="37.5" rx="2.2" ry="1.2" fill="#fce892" opacity="0.7" />
    </svg>
  )
}
