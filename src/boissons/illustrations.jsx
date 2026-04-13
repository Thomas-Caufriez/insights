// Re-use the cuisine cocktail illustrations — same style, same data keys
import { getIllustration as getCuisineIll } from '../cuisine/illustrations'

const T  = '#00d4b8'  // teal
const O  = '#ff7043'  // coral/orange
const G  = '#f4c542'  // gold
const W  = '#e8f5f3'  // white

export function MaiTaiIll() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Glass body */}
      <path d="M26 18 L74 18 L66 80 L34 80 Z" fill="none" stroke={T} strokeWidth="1.6" />
      {/* Orange layer */}
      <path d="M27 28 L73 28 L71 44 L29 44 Z" fill={O} opacity="0.35" />
      {/* Teal layer */}
      <path d="M29 44 L71 44 L69 58 L31 58 Z" fill={T} opacity="0.3" />
      {/* Gold layer */}
      <path d="M31 58 L69 58 L67 72 L33 72 Z" fill={G} opacity="0.28" />
      {/* Ice cubes */}
      <rect x="35" y="22" width="9" height="9" rx="1.5" fill={W} opacity="0.22" transform="rotate(12,39,26)" />
      <rect x="54" y="21" width="7" height="7" rx="1.5" fill={W} opacity="0.18" transform="rotate(-8,57,24)" />
      {/* Straw */}
      <line x1="63" y1="18" x2="58" y2="80" stroke={T} strokeWidth="2.2" strokeLinecap="round" opacity="0.8" />
      {/* Glass rim */}
      <ellipse cx="50" cy="18" rx="24" ry="2.5" fill="none" stroke={T} strokeWidth="1.2" opacity="0.6" />
      {/* Base */}
      <rect x="32" y="80" width="36" height="5" rx="2.5" fill={T} opacity="0.45" />
      {/* Umbrella */}
      <path d="M36 16 Q50 4 64 16 Z" fill={O} opacity="0.55" />
      <line x1="50" y1="4" x2="50" y2="17" stroke={O} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="36" y1="16" x2="64" y2="16" stroke={O} strokeWidth="0.8" opacity="0.4" />
    </svg>
  )
}

export function PornStarIll() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Coupe glass */}
      <path d="M22 28 Q22 48 50 52 Q78 48 78 28 Z" fill={O} opacity="0.22" />
      <path d="M22 28 Q22 48 50 52 Q78 48 78 28 Z" fill="none" stroke={O} strokeWidth="1.6" />
      {/* Stem */}
      <line x1="50" y1="52" x2="50" y2="74" stroke={O} strokeWidth="2" strokeLinecap="round" />
      {/* Base */}
      <ellipse cx="50" cy="74" rx="18" ry="3" fill="none" stroke={O} strokeWidth="1.5" />
      {/* Foam layer */}
      <path d="M26 34 Q50 30 74 34 Q74 28 50 26 Q26 28 26 34 Z" fill={W} opacity="0.18" />
      {/* Passion fruit slice on rim */}
      <circle cx="74" cy="32" r="9" fill={G} opacity="0.5" />
      <circle cx="74" cy="32" r="6" fill="none" stroke={G} strokeWidth="0.8" opacity="0.4" />
      {/* Fruit segments */}
      <line x1="74" y1="24" x2="74" y2="40" stroke={G} strokeWidth="0.7" opacity="0.5" />
      <line x1="66" y1="32" x2="82" y2="32" stroke={G} strokeWidth="0.7" opacity="0.5" />
      <line x1="68" y1="26" x2="80" y2="38" stroke={G} strokeWidth="0.7" opacity="0.4" />
      <line x1="68" y1="38" x2="80" y2="26" stroke={G} strokeWidth="0.7" opacity="0.4" />
      {/* Seeds */}
      <circle cx="74" cy="30" r="1.2" fill={O} opacity="0.6" />
      <circle cx="71" cy="34" r="1" fill={O} opacity="0.6" />
      <circle cx="77" cy="34" r="1" fill={O} opacity="0.6" />
    </svg>
  )
}

export function PinkPantherIll() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Short rocks glass */}
      <path d="M28 42 L72 42 L68 82 L32 82 Z" fill="none" stroke="#e060a0" strokeWidth="1.6" />
      {/* Pink liquid */}
      <path d="M29 52 L71 52 L69 72 L31 72 Z" fill="#e060a0" opacity="0.3" />
      {/* Foam crown */}
      <ellipse cx="50" cy="42" rx="22" ry="5" fill={W} opacity="0.25" />
      <ellipse cx="38" cy="39" rx="6" ry="4" fill={W} opacity="0.2" />
      <ellipse cx="50" cy="37" rx="8" ry="5" fill={W} opacity="0.22" />
      <ellipse cx="62" cy="39" rx="6" ry="4" fill={W} opacity="0.2" />
      {/* Ice */}
      <rect x="33" y="44" width="10" height="10" rx="1.5" fill={W} opacity="0.18" transform="rotate(-10,38,49)" />
      <rect x="55" y="46" width="8" height="8" rx="1.5" fill={W} opacity="0.15" transform="rotate(8,59,50)" />
      {/* Glass rim */}
      <ellipse cx="50" cy="42" rx="22" ry="2.5" fill="none" stroke="#e060a0" strokeWidth="1.1" opacity="0.5" />
      {/* Base */}
      <rect x="30" y="82" width="40" height="4" rx="2" fill="#e060a0" opacity="0.4" />
      {/* Straw */}
      <line x1="38" y1="42" x2="35" y2="82" stroke="#e060a0" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

export function CremeBruleeIll() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Martini glass */}
      <path d="M18 24 L82 24 L52 56 L48 56 Z" fill={G} opacity="0.18" />
      <path d="M18 24 L82 24 L52 56 L48 56 Z" fill="none" stroke={G} strokeWidth="1.6" />
      {/* Caramel top layer */}
      <path d="M20 30 L80 30 L54 50 L46 50 Z" fill={G} opacity="0.28" />
      {/* Foam bubbles */}
      <circle cx="35" cy="27" r="2.5" fill={W} opacity="0.2" />
      <circle cx="44" cy="25" r="3" fill={W} opacity="0.18" />
      <circle cx="56" cy="25" r="2.5" fill={W} opacity="0.2" />
      <circle cx="66" cy="27" r="2" fill={W} opacity="0.16" />
      {/* Caramel cracks */}
      <path d="M38 30 L45 38 M52 30 L50 42 M62 30 L56 39" stroke={O} strokeWidth="0.8" opacity="0.4" />
      {/* Stem */}
      <line x1="50" y1="56" x2="50" y2="76" stroke={G} strokeWidth="2" strokeLinecap="round" />
      {/* Base */}
      <ellipse cx="50" cy="76" rx="18" ry="3" fill="none" stroke={G} strokeWidth="1.5" />
      {/* Rim glow */}
      <line x1="18" y1="24" x2="82" y2="24" stroke={G} strokeWidth="1.2" opacity="0.5" />
    </svg>
  )
}

export function PsychedelicFrogIll() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Tall highball glass */}
      <path d="M32 18 L68 18 L64 84 L36 84 Z" fill="none" stroke={T} strokeWidth="1.6" />
      {/* Layered liquid - green/teal */}
      <path d="M33 28 L67 28 L66 48 L34 48 Z" fill={T} opacity="0.35" />
      <path d="M34 48 L66 48 L65 64 L35 64 Z" fill="#4caf50" opacity="0.28" />
      <path d="M35 64 L65 64 L64 76 L36 76 Z" fill={T} opacity="0.2" />
      {/* Limonade bubbles */}
      <circle cx="42" cy="34" r="1.5" fill={W} opacity="0.25" />
      <circle cx="55" cy="38" r="1" fill={W} opacity="0.2" />
      <circle cx="47" cy="42" r="1.2" fill={W} opacity="0.22" />
      <circle cx="60" cy="44" r="1" fill={W} opacity="0.18" />
      {/* Frog on rim */}
      <ellipse cx="58" cy="17" rx="8" ry="6" fill="#4caf50" opacity="0.5" />
      {/* Frog eyes */}
      <circle cx="54" cy="14" r="2.5" fill="#4caf50" opacity="0.7" />
      <circle cx="62" cy="14" r="2.5" fill="#4caf50" opacity="0.7" />
      <circle cx="54" cy="14" r="1.2" fill={W} opacity="0.4" />
      <circle cx="62" cy="14" r="1.2" fill={W} opacity="0.4" />
      {/* Frog legs */}
      <path d="M50 18 Q46 22 44 20" fill="none" stroke="#4caf50" strokeWidth="1.5" opacity="0.55" />
      <path d="M66 18 Q70 22 72 20" fill="none" stroke="#4caf50" strokeWidth="1.5" opacity="0.55" />
      {/* Straw */}
      <line x1="62" y1="18" x2="60" y2="84" stroke={G} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      {/* Glass base */}
      <rect x="34" y="84" width="32" height="5" rx="2.5" fill={T} opacity="0.4" />
      {/* Rim */}
      <ellipse cx="50" cy="18" rx="18" ry="2" fill="none" stroke={T} strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

export function LimoncelloIll() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Bottle */}
      <path d="M42 14 L58 14 L58 26 Q68 30 68 40 L68 78 Q68 84 62 84 L38 84 Q32 84 32 78 L32 40 Q32 30 42 26 Z" fill={G} opacity="0.2" />
      <path d="M42 14 L58 14 L58 26 Q68 30 68 40 L68 78 Q68 84 62 84 L38 84 Q32 84 32 78 L32 40 Q32 30 42 26 Z" fill="none" stroke={G} strokeWidth="1.5" />
      {/* Bottle cap */}
      <rect x="40" y="10" width="20" height="8" rx="2" fill={G} opacity="0.4" />
      {/* Label area */}
      <rect x="36" y="48" width="28" height="20" rx="3" fill="none" stroke={G} strokeWidth="0.8" opacity="0.4" />
      {/* Lemon cross section */}
      <circle cx="50" cy="58" r="9" fill={G} opacity="0.3" />
      <circle cx="50" cy="58" r="7" fill="none" stroke={G} strokeWidth="0.7" opacity="0.5" />
      {/* Segments */}
      <line x1="50" y1="51" x2="50" y2="65" stroke={G} strokeWidth="0.7" opacity="0.5" />
      <line x1="43" y1="58" x2="57" y2="58" stroke={G} strokeWidth="0.7" opacity="0.5" />
      <line x1="45" y1="53" x2="55" y2="63" stroke={G} strokeWidth="0.6" opacity="0.4" />
      <line x1="45" y1="63" x2="55" y2="53" stroke={G} strokeWidth="0.6" opacity="0.4" />
      {/* Liquid */}
      <path d="M33 65 L67 65 L67 78 Q67 83 62 83 L38 83 Q33 83 33 78 Z" fill={G} opacity="0.18" />
      {/* Zest sparkle */}
      <circle cx="38" cy="40" r="1.5" fill={G} opacity="0.35" />
      <circle cx="62" cy="44" r="1.2" fill={G} opacity="0.3" />
      <circle cx="40" cy="72" r="1" fill={G} opacity="0.28" />
    </svg>
  )
}

export function LiqueurKiwiIll() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Large kiwi cross section */}
      <ellipse cx="50" cy="52" rx="34" ry="36" fill="#5c9e3a" opacity="0.2" />
      <ellipse cx="50" cy="52" rx="34" ry="36" fill="none" stroke="#5c9e3a" strokeWidth="1.8" />
      {/* Skin/outer ring */}
      <ellipse cx="50" cy="52" rx="28" ry="30" fill={G} opacity="0.12" />
      <ellipse cx="50" cy="52" rx="28" ry="30" fill="none" stroke="#5c9e3a" strokeWidth="0.8" opacity="0.4" />
      {/* Flesh */}
      <ellipse cx="50" cy="52" rx="22" ry="24" fill="#7bc350" opacity="0.18" />
      {/* Core */}
      <ellipse cx="50" cy="52" rx="6" ry="7" fill={W} opacity="0.2" />
      {/* Seeds - arranged radially */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
        const angle = (i / 12) * Math.PI * 2 - Math.PI / 2
        const r = 14
        const x = 50 + r * Math.cos(angle)
        const y = 52 + r * Math.sin(angle)
        return <ellipse key={i} cx={x} cy={y} rx="2" ry="3" fill="#3a6b1a" opacity="0.4" transform={`rotate(${(i/12)*360},${x},${y})`} />
      })}
      {/* Small kiwi top right */}
      <ellipse cx="74" cy="22" rx="14" ry="16" fill="#5c9e3a" opacity="0.18" />
      <ellipse cx="74" cy="22" rx="10" ry="12" fill="#7bc350" opacity="0.12" />
      <ellipse cx="74" cy="22" rx="3" ry="3.5" fill={W} opacity="0.15" />
    </svg>
  )
}

export function TikiMaskIll() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Tiki face outline */}
      <ellipse cx="50" cy="56" rx="28" ry="36" fill={T} opacity="0.08" />
      <ellipse cx="50" cy="56" rx="28" ry="36" fill="none" stroke={T} strokeWidth="1.5" opacity="0.7" />
      {/* Forehead band */}
      <rect x="28" y="30" width="44" height="7" rx="1" fill={T} opacity="0.15" />
      <rect x="28" y="30" width="44" height="7" rx="1" fill="none" stroke={T} strokeWidth="0.9" opacity="0.5" />
      {/* Horizontal brow lines */}
      <line x1="30" y1="33" x2="46" y2="33" stroke={T} strokeWidth="1" opacity="0.5" />
      <line x1="54" y1="33" x2="70" y2="33" stroke={T} strokeWidth="1" opacity="0.5" />
      {/* Eyes - rectangular tiki style */}
      <rect x="29" y="40" width="16" height="11" rx="1.5" fill={T} opacity="0.2" />
      <rect x="29" y="40" width="16" height="11" rx="1.5" fill="none" stroke={T} strokeWidth="1.2" opacity="0.8" />
      <rect x="55" y="40" width="16" height="11" rx="1.5" fill={T} opacity="0.2" />
      <rect x="55" y="40" width="16" height="11" rx="1.5" fill="none" stroke={T} strokeWidth="1.2" opacity="0.8" />
      {/* Eye pupils */}
      <circle cx="37" cy="45.5" r="3" fill={T} opacity="0.5" />
      <circle cx="63" cy="45.5" r="3" fill={T} opacity="0.5" />
      {/* Nose - triangular */}
      <path d="M50 56 L44 66 L56 66 Z" fill={T} opacity="0.18" />
      <path d="M50 56 L44 66 L56 66 Z" fill="none" stroke={T} strokeWidth="1.1" opacity="0.6" />
      {/* Mouth - grille */}
      <rect x="31" y="70" width="38" height="14" rx="2" fill={T} opacity="0.12" />
      <rect x="31" y="70" width="38" height="14" rx="2" fill="none" stroke={T} strokeWidth="1.2" opacity="0.6" />
      {[39, 47, 55, 61].map((x) => (
        <line key={x} x1={x} y1="70" x2={x} y2="84" stroke={T} strokeWidth="0.9" opacity="0.45" />
      ))}
      {/* Top decoration / headdress */}
      <rect x="40" y="16" width="20" height="10" rx="2" fill={T} opacity="0.2" />
      <rect x="40" y="16" width="20" height="10" rx="2" fill="none" stroke={T} strokeWidth="1" opacity="0.55" />
      <rect x="45" y="10" width="10" height="8" rx="1.5" fill={T} opacity="0.15" />
      <rect x="45" y="10" width="10" height="8" rx="1.5" fill="none" stroke={T} strokeWidth="0.9" opacity="0.45" />
      {/* Cheek decorations */}
      <path d="M22 55 Q18 50 22 45" fill="none" stroke={T} strokeWidth="1.2" opacity="0.4" />
      <path d="M78 55 Q82 50 78 45" fill="none" stroke={T} strokeWidth="1.2" opacity="0.4" />
    </svg>
  )
}

export function PalmIll() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Palm trunk - slightly curved */}
      <path d="M46 90 Q44 70 48 50 Q50 30 52 18" fill="none" stroke={T} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      {/* Palm leaves */}
      <path d="M52 18 Q68 10 80 20 Q70 28 52 24 Z" fill={T} opacity="0.3" />
      <path d="M52 18 Q55 4 68 6 Q64 18 52 22 Z" fill={T} opacity="0.28" />
      <path d="M52 18 Q38 6 28 14 Q36 24 52 22 Z" fill={T} opacity="0.26" />
      <path d="M52 18 Q42 8 32 8 Q36 18 52 22 Z" fill={T} opacity="0.22" />
      <path d="M52 18 Q62 10 72 8 Q68 20 52 22 Z" fill={T} opacity="0.24" />
      {/* Coconuts */}
      <circle cx="48" cy="24" r="4" fill={G} opacity="0.4" />
      <circle cx="56" cy="22" r="3.5" fill={G} opacity="0.35" />
      {/* Ground / waves */}
      <path d="M10 88 Q30 82 50 88 Q70 94 90 88" fill="none" stroke={T} strokeWidth="1.2" opacity="0.25" />
      <path d="M10 94 Q30 88 50 94 Q70 100 90 94" fill="none" stroke={T} strokeWidth="1" opacity="0.18" />
    </svg>
  )
}

const CUSTOM = {
  'tiki': TikiMaskIll,
  'palm': PalmIll,
}

export function getBoissonsIllustration(name) {
  // Cocktail illustrations already live in the cuisine module — reuse them
  const fromCuisine = getCuisineIll(name)
  if (fromCuisine) return fromCuisine
  return CUSTOM[name] || null
}
