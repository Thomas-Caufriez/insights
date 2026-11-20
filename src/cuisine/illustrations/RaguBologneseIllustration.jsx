export default function RaguBologneseIllustration({ style }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={style} width="100%" height="100%">
      {/* Background */}
      <circle cx="55" cy="55" r="52" fill="#f5e8d0" />

      {/* Ombre portée */}
      <ellipse cx="55" cy="87" rx="30" ry="4" fill="#c8b394" opacity="0.5" />

      {/* Corps de la cocotte — fonte émaillée, flancs presque droits. Le volume
          vient d'un liseró sombre tout autour plutôt que d'un flanc ombré :
          sur une masse aussi foncée, le moindre aplat laisse une arête en plein
          milieu, et une bande de lumière y fait un pli. */}
      <path d="M21 54 L22.5 71 C23.5 80 38 85.5 55 85.5 C72 85.5 86.5 80 87.5 71 L89 54 Z" fill="#33251a" />
      <path d="M23.2 54 L24.6 70.8 C25.5 78.6 38.8 83.5 55 83.5 C71.2 83.5 84.5 78.6 85.4 70.8 L86.8 54 Z" fill="#4a3728" />

      {/* Oreilles. Même aplat que le corps : pas de couture à masquer. */}
      <path d="M23 54.5 L15.5 55 C12 55.6 11.6 60.6 15.2 61.6 L23 62 Z" fill="#4a3728" />
      <path d="M87 54.5 L94.5 55 C98 55.6 98.4 60.6 94.8 61.6 L87 62 Z" fill="#4a3728" />

      {/* Lumière rasante, calée sur le contour gauche et pas en travers du flanc */}
      <path d="M26.4 58 C27 66 27.8 72 29.5 76 C31.5 79.5 35 81.6 39 82.9" stroke="#8a6a4f" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.35" />

      {/* Lèvre de la cocotte */}
      <ellipse cx="55" cy="54" rx="34" ry="12" fill="#6b5240" />
      {/* Paroi intérieure : le ragù étant plus bas que la lèvre, son ellipse est
          décalée vers le bas, ce qui laisse voir la paroi du fond en croissant. */}
      <ellipse cx="55" cy="55.3" rx="31" ry="10.2" fill="#38291d" />

      {/* Surface du ragù */}
      <ellipse cx="55" cy="56.4" rx="29.5" ry="9" fill="#a8402a" />
      {/* Brillance côté lumière */}
      <path d="M31 53.5 Q43 48 58 48.3 Q45 51.8 37 57.8 Z" fill="#c25434" opacity="0.45" />

      {/* Viande saisie */}
      <circle cx="38" cy="58" r="1.3" fill="#7e2c1c" />
      <circle cx="47" cy="61.5" r="1.25" fill="#7e2c1c" />
      <circle cx="60" cy="59" r="1.3" fill="#7e2c1c" />
      <circle cx="70" cy="55" r="1.2" fill="#7e2c1c" />
      <circle cx="64" cy="62.5" r="1.15" fill="#7e2c1c" />
      <circle cx="33" cy="55.5" r="1.1" fill="#7e2c1c" />
      <circle cx="76" cy="58.5" r="1.1" fill="#7e2c1c" />
      <circle cx="52" cy="53.5" r="1.2" fill="#7e2c1c" />
      <circle cx="43" cy="55" r="1.1" fill="#bf5536" />
      <circle cx="56" cy="62" r="1.15" fill="#bf5536" />
      <circle cx="68" cy="59.5" r="1.1" fill="#bf5536" />
      <circle cx="49" cy="58" r="1.05" fill="#bf5536" />
      <circle cx="72" cy="52.5" r="1" fill="#bf5536" />
      <circle cx="36" cy="61" r="1.05" fill="#bf5536" />

      {/* Ce qui reste du soffritto */}
      <rect x="44.1" y="50.6" width="1.8" height="1.8" rx="0.5" fill="#d9761a" transform="rotate(18 45 51.5)" />
      <rect x="61.1" y="51.1" width="1.8" height="1.8" rx="0.5" fill="#d9761a" transform="rotate(-12 62 52)" />
      <rect x="40.1" y="61.1" width="1.8" height="1.8" rx="0.5" fill="#d9761a" transform="rotate(25 41 62)" />
      <rect x="73.1" y="60.1" width="1.8" height="1.8" rx="0.5" fill="#d9761a" transform="rotate(-8 74 61)" />
      <rect x="51.2" y="49.2" width="1.6" height="1.6" rx="0.45" fill="#6a9a4a" transform="rotate(-20 52 50)" />
      <rect x="66.2" y="62.2" width="1.6" height="1.6" rx="0.45" fill="#6a9a4a" transform="rotate(14 67 63)" />
      <rect x="33.2" y="57.7" width="1.6" height="1.6" rx="0.45" fill="#6a9a4a" transform="rotate(30 34 58.5)" />

      {/* Feuille de laurier */}
      <path d="M35 53 Q42 49 49 53 Q42 57 35 53 Z" fill="#4a7a35" />
      <path d="M36 53 L48 53" stroke="#7aa85c" strokeWidth="0.6" strokeLinecap="round" />

      {/* Croûte de parmesan, le bonus */}
      <path d="M56.5 64.8 L64.5 63 L65.6 66.5 L57.6 68.3 Z" fill="#e8d9a8" />
      <path d="M56.5 64.8 L64.5 63 L64.9 64.4 L56.9 66.2 Z" fill="#c9a85e" />
      <path d="M57.9 66 L64 64.6" stroke="#cdbc8a" strokeWidth="0.5" strokeLinecap="round" />

      {/* Cuillère en bois, manche sorti de la cocotte */}
      <ellipse cx="71" cy="52.5" rx="5.4" ry="3.4" fill="#b0834d" transform="rotate(-38 71 52.5)" />
      <ellipse cx="70.4" cy="51.9" rx="4.4" ry="2.6" fill="#c9a06a" transform="rotate(-38 70.4 51.9)" />
      <path d="M73.5 49.5 L88 33" stroke="#c9a06a" strokeWidth="3.1" strokeLinecap="round" fill="none" />
      <path d="M74.5 50.4 L88.8 34" stroke="#dcb985" strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.8" />

      {/* Vapeur */}
      <path d="M38 38 Q36 32 38 26" stroke="#a07860" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.3" />
      <path d="M52 36 Q50 29 52 23" stroke="#a07860" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.3" />
    </svg>
  )
}
