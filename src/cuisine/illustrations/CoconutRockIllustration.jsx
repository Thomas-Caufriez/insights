export default function CoconutRockIllustration({ style }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={style} width="100%" height="100%">
      {/* Background */}
      <circle cx="55" cy="55" r="52" fill="#f5e8d0" />

      {/* Ombre portée, calée sur la base */}
      <ellipse cx="55" cy="82" rx="30" ry="4.5" fill="#c8b394" opacity="0.55" />

      {/* Corps du rocher */}
      <path d="M28 78 Q34 52 55 26 Q76 52 82 78 Z" fill="#dcae62" />
      {/* Flanc droit ombré */}
      <path d="M55 26 Q76 52 82 78 L55 78 Z" fill="#c8903a" opacity="0.55" />

      {/* Silhouette dentelée — bord éclairé */}
      <circle cx="28" cy="78" r="4.2" fill="#e8c97a" />
      <circle cx="32" cy="70" r="4" fill="#e8c97a" />
      <circle cx="36" cy="62" r="3.7" fill="#e8c97a" />
      <circle cx="40" cy="54" r="3.4" fill="#e8c97a" />
      <circle cx="44" cy="46" r="3" fill="#e8c97a" />
      <circle cx="48" cy="38" r="2.6" fill="#e8c97a" />
      <circle cx="52" cy="30" r="2.2" fill="#e8c97a" />

      {/* Silhouette dentelée — bord ombré */}
      <circle cx="82" cy="78" r="4.2" fill="#c8903a" />
      <circle cx="78" cy="70" r="4" fill="#c8903a" />
      <circle cx="74" cy="62" r="3.7" fill="#c8903a" />
      <circle cx="70" cy="54" r="3.4" fill="#c8903a" />
      <circle cx="66" cy="46" r="3" fill="#c8903a" />
      <circle cx="62" cy="38" r="2.6" fill="#c8903a" />
      <circle cx="58" cy="30" r="2.2" fill="#c8903a" />

      {/* Base dentelée */}
      <circle cx="36" cy="79" r="4.2" fill="#e0b85c" />
      <circle cx="44" cy="80" r="4.2" fill="#e0b85c" />
      <circle cx="52" cy="80.5" r="4.2" fill="#dcae62" />
      <circle cx="60" cy="80.5" r="4.2" fill="#d9ad4e" />
      <circle cx="68" cy="80" r="4.2" fill="#d9ad4e" />
      <circle cx="76" cy="79" r="4.2" fill="#d9ad4e" />

      {/* Pointe torréfiée */}
      <circle cx="55" cy="27" r="3.1" fill="#a06820" />
      <circle cx="51" cy="33" r="2.6" fill="#b87830" />
      <circle cx="59" cy="33.5" r="2.4" fill="#a06820" />

      {/* Éclats de coco qui accrochent la lumière */}
      <path d="M42 60 Q45 58.6 48 59.2" stroke="#faf3e4" strokeWidth="1.7" strokeLinecap="round" fill="none" />
      <path d="M60 52 Q63 50.6 66 51.2" stroke="#f5e8d0" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M46 70 Q49 68.6 52 69.2" stroke="#faf3e4" strokeWidth="1.7" strokeLinecap="round" fill="none" />
      <path d="M62 66 Q65 64.6 68 65.2" stroke="#f5e8d0" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M50 44 Q53 42.6 56 43.2" stroke="#faf3e4" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M40 68 Q43 66.6 46 67.2" stroke="#faf3e4" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M56 74 Q59 72.6 62 73.2" stroke="#f5e8d0" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M48 54 Q51 52.6 54 53.2" stroke="#faf3e4" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}
