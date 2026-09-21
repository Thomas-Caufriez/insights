export default function ChocolateFondantFinal({ style }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={style} width="100%" height="100%">
      {/* Background */}
      <circle cx="55" cy="55" r="52" fill="#f5e8d0" />

      {/* Ombre table */}
      <ellipse cx="56" cy="91" rx="36" ry="6" fill="#3a1a0a" opacity="0.14" />

      {/* ---- Assiette ---- */}
      <ellipse cx="55" cy="81" rx="42" ry="11" fill="#d3c3ab" />
      <ellipse cx="55" cy="79" rx="42" ry="11" fill="#f3ece0" />
      <ellipse cx="55" cy="79" rx="42" ry="11" fill="none" stroke="#fffdf6" strokeWidth="1" strokeOpacity="0.55" />
      <ellipse cx="55" cy="79" rx="32" ry="8.5" fill="#e9dfcc" />

      {/* Ombre du gâteau sur l'assiette */}
      <ellipse cx="53" cy="79" rx="22" ry="6" fill="#3a1a0a" opacity="0.35" />

      {/* ---- Corps du gâteau (cylindre 3/4 vue) ---- */}
      {/* Face principale */}
      <path d="M28 49 C40 43,64 43,76 49 L76 77 C64 83,40 83,28 77 Z" fill="#2a1200" />
      {/* Zone gauche éclairée (lumière haut-gauche) */}
      <path d="M28 49 C34 43,46 43,52 49 L52 77 C46 83,34 83,28 77 Z" fill="#3d1c02" opacity="0.55" />
      {/* Zone droite en ombre */}
      <path d="M52 49 C58 43,70 43,76 49 L76 77 C70 83,58 83,52 77 Z" fill="#180900" opacity="0.5" />
      {/* Reflet vertical gauche */}
      <path d="M30 55 Q31 64 31 74" stroke="#5a2e08" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.45" />

      {/* ---- Surface du dessus ---- */}
      <path d="M28 49 C40 43,64 43,76 49 C64 55,40 55,28 49 Z" fill="#42220f" />
      {/* Zone gauche éclairée */}
      <path d="M28 49 C34 43,46 43,52 49 C46 52,34 52,28 49 Z" fill="#6c3d22" opacity="0.55" />
      {/* Petits détails de texture */}
      <circle cx="39" cy="50" r="1.2" fill="#c9a279" opacity="0.28" />
      <circle cx="48" cy="47" r="1" fill="#c9a279" opacity="0.22" />

      {/* ---- Sauce : coulant qui s'écoule ---- */}
      {/* Zone chaude derrière la sauce (halo) */}
      <path d="M58 48 C61 44,66 43,71 45 C74 46,76 48,76 51 C78 55,79 60,78 65 C77 68,76 71,76 77 C78 79,79 81,78 83 C77 86,73 88,67 88 C61 88,54 88,49 86 C44 84,43 82,45 80 C47 78,52 78,57 78 C62 78,67 77,68 75 C70 71,69 66,67 61 C65 56,61 51,58 48 Z"
        fill="#7a4a28" opacity="0.28" />

      {/* Sauce principale */}
      <path d="M58 48 C61 44,66 43,71 45 C74 46,76 48,76 51 C78 55,79 60,78 65 C77 68,76 71,76 77 C78 79,79 81,78 83 C77 86,73 88,67 88 C61 88,54 88,49 86 C44 84,43 82,45 80 C47 78,52 78,57 78 C62 78,67 77,68 75 C70 71,69 66,67 61 C65 56,61 51,58 48 Z"
        fill="#9e4e1d" />

      {/* Couche ambrée claire (côté lumière) */}
      <path d="M58 48 C61 44,66 43,71 45 C74 46,76 48,76 51 C78 55,79 60,78 65 C77 68,76 71,76 77 C78 79,79 81,78 83 C77 86,73 88,67 88 C61 88,54 88,49 86 C44 84,43 82,45 80 C47 78,52 78,57 78 C62 78,67 77,68 75 C70 71,69 66,67 61 C65 56,61 51,58 48 Z"
        fill="#d4691e" opacity="0.38" />

      {/* Sheen (reflet brillant sur le coulant) */}
      <path d="M65 51 C68 58,70 65,70 75" stroke="#fff3e0" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.22" />
      <path d="M65 51 C68 58,70 65,70 75" stroke="#f5a020" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.3" />
      {/* Sheen sur la flaque */}
      <path d="M52 84 C58 82,66 82,72 84" stroke="#f5a020" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.2" />

      {/* Zone lumineuse à l'ouverture */}
      <path d="M62 46 C64 44,67 43,70 44 C72 45,73 47,72 48 C70 46,67 45,64 46 C62 47,62 48,62 46 Z" fill="#f5a020" opacity="0.55" />
      <ellipse cx="67" cy="45.5" rx="3.5" ry="2" fill="#fac040" opacity="0.4" />

      {/* ---- Bord de croûte au-dessus de la sauce ---- */}
      <path d="M58 48 C60 46,63 44,67 44 C69 44,71 44,71 45" stroke="#1e0c00" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M58 49 C61 47,64 46,68 46 C70 46,72 46,72 47" stroke="#42220f" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.55" />

      {/* ---- Cacao en poudre sur le bord de l'assiette ---- */}
      <circle cx="30" cy="73" r="1.5" fill="#7a4a28" opacity="0.2" />
      <circle cx="24" cy="80" r="1.2" fill="#7a4a28" opacity="0.16" />
      <circle cx="27" cy="87" r="1" fill="#7a4a28" opacity="0.13" />
      <circle cx="85" cy="75" r="1.4" fill="#7a4a28" opacity="0.18" />
      <circle cx="91" cy="81" r="1" fill="#7a4a28" opacity="0.13" />

      {/* Miettes */}
      <ellipse cx="36" cy="89" rx="2.5" ry="1" fill="#3a1a0a" opacity="0.26" transform="rotate(16,36,89)" />
      <ellipse cx="79" cy="86" rx="2" ry="0.9" fill="#3a1a0a" opacity="0.22" transform="rotate(-22,79,86)" />

      {/* ---- Vapeur ---- */}
      <path d="M43 36 Q41 30 43 24" stroke="#a07860" strokeWidth="1.7" strokeLinecap="round" fill="none" opacity="0.3" />
      <path d="M54 34 Q52 28 54 22" stroke="#a07860" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.3" />
      <path d="M65 36 Q63 30 65 24" stroke="#a07860" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.27" />
    </svg>
  )
}
