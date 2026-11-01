export default function KatsuCurryIllustration({ style }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={style} width="100%" height="100%">
      {/* Background */}
      <circle cx="55" cy="55" r="52" fill="#f5e8d0" />

      {/* Assiette */}
      <ellipse cx="55" cy="66" rx="43" ry="20" fill="#e2d3ba" />
      <ellipse cx="55" cy="64.5" rx="41" ry="18.5" fill="#f3ece0" />
      <ellipse cx="55" cy="64" rx="33.5" ry="14" fill="#e9dfcc" />

      {/* Sauce curry — posée en premier, le katsu vient dessus */}
      <ellipse cx="71" cy="66.5" rx="16" ry="9.5" fill="#8f5518" />
      <ellipse cx="71" cy="65.3" rx="14.3" ry="8.1" fill="#a5661d" />
      {/* Reflet de la sauce émulsionnée au beurre */}
      <path d="M61 63.5 Q69 60 79 61.5 Q70 65.5 61 63.5 Z" fill="#c08430" opacity="0.45" />
      <circle cx="81" cy="68.5" r="1.1" fill="#75430f" opacity="0.5" />
      <circle cx="67" cy="70.5" r="1" fill="#75430f" opacity="0.4" />

      {/* Dôme de riz, à gauche. Pas de flanc ombré en aplat : la couture se
          voyait en plein milieu du dôme. Le volume vient des grains, clairs
          à gauche (lumière) et sourds à droite. */}
      <ellipse cx="34" cy="60.5" rx="14.5" ry="8.5" fill="#dccdb2" opacity="0.55" />
      <path d="M20.5 61 Q21 48 34 46.8 Q47 48 47.5 61 Q34 66.5 20.5 61 Z" fill="#fdfbf4" />
      <ellipse cx="26" cy="53" rx="3" ry="1.6" fill="#ffffff" stroke="#e6dcc6" strokeWidth="0.4" transform="rotate(-20 26 53)" />
      <ellipse cx="32" cy="50" rx="2.9" ry="1.55" fill="#ffffff" stroke="#e6dcc6" strokeWidth="0.4" transform="rotate(10 32 50)" />
      <ellipse cx="39" cy="51.5" rx="2.9" ry="1.55" fill="#f6efe1" stroke="#e0d4ba" strokeWidth="0.4" transform="rotate(-15 39 51.5)" />
      <ellipse cx="44.5" cy="55.5" rx="2.7" ry="1.5" fill="#eadfc8" stroke="#ddd0b4" strokeWidth="0.4" transform="rotate(20 44.5 55.5)" />
      <ellipse cx="23.5" cy="57.5" rx="2.8" ry="1.5" fill="#ffffff" stroke="#e6dcc6" strokeWidth="0.4" transform="rotate(15 23.5 57.5)" />
      <ellipse cx="30.5" cy="56" rx="3" ry="1.6" fill="#fbf6ea" stroke="#e6dcc6" strokeWidth="0.4" transform="rotate(-10 30.5 56)" />
      <ellipse cx="37.5" cy="57.5" rx="2.8" ry="1.5" fill="#f2eadb" stroke="#e0d4ba" strokeWidth="0.4" transform="rotate(25 37.5 57.5)" />
      <ellipse cx="43.5" cy="60.5" rx="2.7" ry="1.45" fill="#e6dbc3" stroke="#d8cbaf" strokeWidth="0.4" transform="rotate(-20 43.5 60.5)" />
      <ellipse cx="27" cy="61.5" rx="2.8" ry="1.5" fill="#fbf6ea" stroke="#e6dcc6" strokeWidth="0.4" transform="rotate(5 27 61.5)" />
      <ellipse cx="34.5" cy="62.5" rx="2.7" ry="1.45" fill="#f2eadb" stroke="#e0d4ba" strokeWidth="0.4" transform="rotate(-25 34.5 62.5)" />

      {/* Katsu tranché en éventail. Vu de dessus c'est surtout de la panure :
          la chair ne se voit que sur la tranche tournée vers nous, d'où le
          mince liseré clair en bas de chaque morceau. Dessiné de gauche à
          droite, chaque tranche recouvre la précédente. */}
      <g transform="rotate(60 41 69)">
        <rect x="32.6" y="65.2" width="16.8" height="8.2" rx="3.2" fill="#b8792a" />
        <rect x="33" y="65.5" width="16" height="5.2" rx="2.6" fill="#e0a040" />
        <circle cx="36" cy="66.7" r="0.95" fill="#efbe68" />
        <circle cx="39.5" cy="66.2" r="0.95" fill="#efbe68" />
        <circle cx="43.5" cy="66.6" r="0.95" fill="#efbe68" />
        <circle cx="37.5" cy="68.5" r="0.8" fill="#efbe68" opacity="0.7" />
        <circle cx="45.5" cy="68.4" r="0.8" fill="#efbe68" opacity="0.7" />
        <rect x="34.7" y="70" width="12.6" height="2.2" rx="1.1" fill="#f0dcb8" />
      </g>
      <g transform="rotate(62 48.5 66.5)">
        <rect x="40.1" y="62.7" width="16.8" height="8.2" rx="3.2" fill="#b8792a" />
        <rect x="40.5" y="63" width="16" height="5.2" rx="2.6" fill="#e0a040" />
        <circle cx="43.5" cy="64.2" r="0.95" fill="#efbe68" />
        <circle cx="47" cy="63.7" r="0.95" fill="#efbe68" />
        <circle cx="51" cy="64.1" r="0.95" fill="#efbe68" />
        <circle cx="45" cy="66" r="0.8" fill="#efbe68" opacity="0.7" />
        <circle cx="53" cy="65.9" r="0.8" fill="#efbe68" opacity="0.7" />
        <rect x="42.2" y="67.5" width="12.6" height="2.2" rx="1.1" fill="#f0dcb8" />
      </g>
      <g transform="rotate(58 56 64)">
        <rect x="47.6" y="60.2" width="16.8" height="8.2" rx="3.2" fill="#b8792a" />
        <rect x="48" y="60.5" width="16" height="5.2" rx="2.6" fill="#e0a040" />
        <circle cx="51" cy="61.7" r="0.95" fill="#efbe68" />
        <circle cx="54.5" cy="61.2" r="0.95" fill="#efbe68" />
        <circle cx="58.5" cy="61.6" r="0.95" fill="#efbe68" />
        <circle cx="52.5" cy="63.5" r="0.8" fill="#efbe68" opacity="0.7" />
        <circle cx="60.5" cy="63.4" r="0.8" fill="#efbe68" opacity="0.7" />
        <rect x="49.7" y="65" width="12.6" height="2.2" rx="1.1" fill="#f0dcb8" />
      </g>
      <g transform="rotate(62 63.5 61.5)">
        <rect x="55.1" y="57.7" width="16.8" height="8.2" rx="3.2" fill="#b8792a" />
        <rect x="55.5" y="58" width="16" height="5.2" rx="2.6" fill="#e0a040" />
        <circle cx="58.5" cy="59.2" r="0.95" fill="#efbe68" />
        <circle cx="62" cy="58.7" r="0.95" fill="#efbe68" />
        <circle cx="66" cy="59.1" r="0.95" fill="#efbe68" />
        <circle cx="60" cy="61" r="0.8" fill="#efbe68" opacity="0.7" />
        <circle cx="68" cy="60.9" r="0.8" fill="#efbe68" opacity="0.7" />
        <rect x="57.2" y="62.5" width="12.6" height="2.2" rx="1.1" fill="#f0dcb8" />
      </g>
      <g transform="rotate(60 71 59)">
        <rect x="62.6" y="55.2" width="16.8" height="8.2" rx="3.2" fill="#b8792a" />
        <rect x="63" y="55.5" width="16" height="5.2" rx="2.6" fill="#e0a040" />
        <circle cx="66" cy="56.7" r="0.95" fill="#efbe68" />
        <circle cx="69.5" cy="56.2" r="0.95" fill="#efbe68" />
        <circle cx="73.5" cy="56.6" r="0.95" fill="#efbe68" />
        <circle cx="67.5" cy="58.5" r="0.8" fill="#efbe68" opacity="0.7" />
        <circle cx="75.5" cy="58.4" r="0.8" fill="#efbe68" opacity="0.7" />
        <rect x="64.7" y="60" width="12.6" height="2.2" rx="1.1" fill="#f0dcb8" />
      </g>

      {/* Miettes de panko tombées sur l'assiette */}
      <circle cx="31" cy="74" r="1.2" fill="#e0a040" opacity="0.7" />
      <circle cx="51" cy="76" r="1" fill="#efbe68" opacity="0.8" />

      {/* Oignons jeunes émincés */}
      <circle cx="45" cy="62" r="2" fill="none" stroke="#5e9a3e" strokeWidth="1.3" />
      <circle cx="55" cy="58.5" r="1.8" fill="none" stroke="#4a8a32" strokeWidth="1.2" />
      <circle cx="65" cy="55" r="2" fill="none" stroke="#5e9a3e" strokeWidth="1.3" />
      <circle cx="79" cy="60" r="1.8" fill="none" stroke="#4a8a32" strokeWidth="1.2" />

      {/* Vapeur */}
      <path d="M42 42 Q40 36 42 30" stroke="#a07860" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.3" />
      <path d="M55 39 Q53 32 55 26" stroke="#a07860" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.3" />
      <path d="M68 42 Q66 36 68 30" stroke="#a07860" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.3" />
    </svg>
  )
}
