export default function GarlicButterIllustration({ style }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={style} width="100%" height="100%">
      {/* Background */}
      <circle cx="55" cy="55" r="52" fill="#f5e8d0" />

      {/* Ombre : l'empreinte exacte de la base, décalée vers le bas-droite
          (la lumière vient du haut-gauche). Un ovale flou et large sous le bloc
          le faisait flotter — celle-ci le pose au sol. */}
      <path d="M51 51 L84 70 L67 80 L34 61 Z" fill="#c8b394" opacity="0.5" />

      {/* ---- Bloc de beurre, isométrique — deux fois plus long que large ---- */}
      {/* Face avant gauche */}
      <path d="M30 40 L63 59 L63 77 L30 58 Z" fill="#efc75c" />
      {/* Face avant droite (ombrée) */}
      <path d="M63 59 L80 49 L80 67 L63 77 Z" fill="#d9ad4e" />
      {/* Face supérieure (éclairée) */}
      <path d="M47 30 L80 49 L63 59 L30 40 Z" fill="#f7e49a" />

      {/* Arêtes */}
      <path d="M30 40 L63 59 L80 49" stroke="#c8903a" strokeWidth="1" opacity="0.45" fill="none" />
      <path d="M63 59 L63 77" stroke="#c8903a" strokeWidth="1" opacity="0.45" />
      <path d="M30 40 L30 58 L63 77 L80 67 L80 49" stroke="#c8903a" strokeWidth="1" opacity="0.32" fill="none" />

      {/* ---- Persil (vert) — face supérieure ---- */}
      <ellipse cx="50.2" cy="37.8" rx="2.5" ry="1.5" fill="#4a9040" />
      <ellipse cx="45" cy="42.7" rx="2.4" ry="1.4" fill="#5a8a40" />
      <ellipse cx="56.3" cy="46.8" rx="2.5" ry="1.5" fill="#4a9040" />
      <ellipse cx="66.3" cy="47.5" rx="2.3" ry="1.4" fill="#3a7f30" />
      <ellipse cx="45.4" cy="38.6" rx="2.1" ry="1.3" fill="#4a9040" />
      <ellipse cx="53.9" cy="49.8" rx="2.3" ry="1.4" fill="#5a8a40" />

      {/* ---- Ail confit (brun) — face supérieure ---- */}
      <ellipse cx="58.4" cy="40.9" rx="2.9" ry="1.7" fill="#a06820" />
      <ellipse cx="62.9" cy="51.4" rx="2.7" ry="1.6" fill="#b87830" />
      <ellipse cx="52" cy="42.4" rx="2.8" ry="1.7" fill="#a06820" />

      {/* ---- Morceaux en coupe — face avant gauche ---- */}
      <ellipse cx="38.2" cy="50.2" rx="2.2" ry="1.9" fill="#4a9040" />
      <ellipse cx="48.2" cy="55" rx="2.5" ry="2.1" fill="#a06820" />
      <ellipse cx="54.8" cy="62.4" rx="2.2" ry="1.9" fill="#5a8a40" />
      <ellipse cx="39.9" cy="57.4" rx="2.1" ry="1.8" fill="#4a9040" />
      <ellipse cx="49.8" cy="64" rx="2.4" ry="2" fill="#b87830" />
      <ellipse cx="36.5" cy="55.5" rx="1.8" ry="1.6" fill="#5a8a40" />
      <ellipse cx="56.4" cy="68.2" rx="2.3" ry="2" fill="#a06820" />

      {/* ---- Morceaux en coupe — face avant droite ---- */}
      <ellipse cx="68.1" cy="61.4" rx="2.2" ry="1.9" fill="#4a9040" />
      <ellipse cx="73.2" cy="58" rx="2.4" ry="2" fill="#a06820" />
      <ellipse cx="69.8" cy="65.8" rx="2.1" ry="1.8" fill="#5a8a40" />
      <ellipse cx="75.8" cy="61.4" rx="2.2" ry="1.9" fill="#b87830" />
      <ellipse cx="67.3" cy="69.5" rx="2" ry="1.7" fill="#4a9040" />
      <ellipse cx="74.5" cy="68" rx="1.9" ry="1.6" fill="#b87830" />

      {/* Reflet sur l'arête supérieure gauche */}
      <path d="M33 38.5 L45 31.5" stroke="#fdf3c8" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
    </svg>
  )
}
