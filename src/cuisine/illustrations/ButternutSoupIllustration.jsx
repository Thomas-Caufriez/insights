export default function ButternutSoupIllustration({ style }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={style} width="100%" height="100%">
      {/* Background */}
      <circle cx="55" cy="55" r="52" fill="#f5e8d0" />

      {/* Ombre portée */}
      <ellipse cx="55" cy="88" rx="29" ry="4" fill="#c8b394" opacity="0.5" />

      {/* Corps du bol */}
      <path d="M18 58 C19 78 34 89 55 89 C76 89 91 78 92 58 Z" fill="#f0e7d8" />
      {/* Flanc droit, dans l'ombre */}
      <path d="M55 89 C76 89 91 78 92 58 L78 58 C77 75 69 86 55 89 Z" fill="#dccfb6" opacity="0.42" />
      {/* Reflet sur le flanc gauche */}
      <path d="M24.5 63.5 C26 72 29.5 78.5 34.5 82.5" stroke="#fdfaf2" strokeWidth="1.7" strokeLinecap="round" fill="none" opacity="0.38" />

      {/* Lèvre du bol */}
      <ellipse cx="55" cy="58" rx="38" ry="13" fill="#faf4e8" />
      {/* Paroi intérieure : le croissant visible en haut est la paroi du fond,
          la soupe étant plus basse que la lèvre, son ellipse est décalée vers
          le bas. Sans ce décalage le bol a l'air rempli à ras bord. */}
      <ellipse cx="55" cy="59.2" rx="35" ry="11.3" fill="#dccfb6" />

      {/* Surface de la soupe */}
      <ellipse cx="55" cy="60.3" rx="33.5" ry="10" fill="#d9761a" />
      {/* Brillance côté lumière */}
      <path d="M28 57 Q40 50.5 57 50.8 Q43 54.5 34 61 Z" fill="#ee9a36" opacity="0.5" />

      {/* Spirale de lait de coco — écrasée dans la perspective de la surface */}
      <path
        d="M80 60.3 Q80 52.8 55 52.8 Q30 52.8 30 60.3 Q30 67.8 55 67.8 Q73 67.8 73 60.3 Q73 55.3 55 55.3 Q41 55.3 41 60.3 Q41 64.8 55 64.8 Q66 64.8 66 60.3"
        stroke="#fdfbf4" strokeWidth="2.3" strokeLinecap="round" fill="none"
      />

      {/* Croûtons, posés par-dessus la spirale */}
      <g transform="rotate(-16 40 61)">
        <rect x="35.8" y="57" width="8.4" height="8" rx="1.7" fill="#d79a3c" />
        <rect x="36.2" y="57.3" width="7.6" height="6" rx="1.4" fill="#eab65f" />
        <rect x="38" y="59" width="3.4" height="2.4" rx="0.9" fill="#f6d393" />
      </g>
      <g transform="rotate(14 55 55.5)">
        <rect x="50.8" y="51.5" width="8.4" height="8" rx="1.7" fill="#d79a3c" />
        <rect x="51.2" y="51.8" width="7.6" height="6" rx="1.4" fill="#eab65f" />
        <rect x="53" y="53.5" width="3.4" height="2.4" rx="0.9" fill="#f6d393" />
      </g>
      <g transform="rotate(-5 69 59.5)">
        <rect x="64.8" y="55.5" width="8.4" height="8" rx="1.7" fill="#d79a3c" />
        <rect x="65.2" y="55.8" width="7.6" height="6" rx="1.4" fill="#eab65f" />
        <rect x="67" y="57.5" width="3.4" height="2.4" rx="0.9" fill="#f6d393" />
      </g>

      {/* Flocons de chili */}
      <rect x="31.9" y="60.45" width="2.2" height="1.1" rx="0.5" fill="#c23b22" transform="rotate(20 33 61)" />
      <rect x="48.9" y="63.95" width="2.2" height="1.1" rx="0.5" fill="#c23b22" transform="rotate(-30 50 64.5)" />
      <rect x="60.9" y="51.95" width="2.2" height="1.1" rx="0.5" fill="#c23b22" transform="rotate(8 62 52.5)" />
      <rect x="73.9" y="61.45" width="2.2" height="1.1" rx="0.5" fill="#c23b22" transform="rotate(15 75 62)" />
      <rect x="44.9" y="66.45" width="2.2" height="1.1" rx="0.5" fill="#c23b22" transform="rotate(-10 46 67)" />

      {/* Poivre du moulin */}
      <circle cx="38" cy="65" r="0.55" fill="#5a3a22" opacity="0.5" />
      <circle cx="58" cy="66" r="0.5" fill="#5a3a22" opacity="0.45" />
      <circle cx="70" cy="54" r="0.55" fill="#5a3a22" opacity="0.5" />
      <circle cx="52" cy="61" r="0.5" fill="#5a3a22" opacity="0.4" />

      {/* Vapeur */}
      <path d="M41 41 Q39 35 41 29" stroke="#a07860" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.3" />
      <path d="M55 39 Q53 32 55 26" stroke="#a07860" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.3" />
      <path d="M69 41 Q67 35 69 29" stroke="#a07860" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.3" />
    </svg>
  )
}
