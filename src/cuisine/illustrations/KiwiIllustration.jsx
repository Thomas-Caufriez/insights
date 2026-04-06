export default function KiwiIllustration({ style }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={style} width="100%" height="100%">
      {/* Background circle */}
      <circle cx="55" cy="55" r="52" fill="#f5e8d0" />

      {/* Jar body */}
      <rect x="30" y="42" width="50" height="48" rx="6" fill="#8b6a50" opacity="0.15" />
      <rect x="31.5" y="43.5" width="47" height="45" rx="5" fill="#4a7c3f" opacity="0.22" />

      {/* Liquid fill */}
      <rect x="32" y="52" width="46" height="36" rx="4" fill="#5a9e4a" opacity="0.55" />

      {/* Jar highlight */}
      <rect x="35" y="55" width="6" height="28" rx="3" fill="white" opacity="0.2" />

      {/* Jar lid */}
      <rect x="27" y="36" width="56" height="10" rx="5" fill="#8b6a50" opacity="0.45" />
      <rect x="29" y="37.5" width="52" height="7" rx="4" fill="#a07850" opacity="0.3" />

      {/* Kiwi slice — left */}
      <circle cx="38" cy="28" r="14" fill="#3d7a32" opacity="0.85" />
      <circle cx="38" cy="28" r="12" fill="#6ab85a" />
      <circle cx="38" cy="28" r="9" fill="#8fd480" />
      {/* Segments */}
      <line x1="38" y1="16" x2="38" y2="40" stroke="#3d7a32" strokeWidth="0.9" opacity="0.5" />
      <line x1="26" y1="28" x2="50" y2="28" stroke="#3d7a32" strokeWidth="0.9" opacity="0.5" />
      <line x1="29.5" y1="19.5" x2="46.5" y2="36.5" stroke="#3d7a32" strokeWidth="0.9" opacity="0.5" />
      <line x1="29.5" y1="36.5" x2="46.5" y2="19.5" stroke="#3d7a32" strokeWidth="0.9" opacity="0.5" />
      {/* Center */}
      <circle cx="38" cy="28" r="3.5" fill="#c8e840" opacity="0.9" />
      {/* Seeds */}
      <ellipse cx="38" cy="19.5" r="1.2" ry="0.7" fill="#2a5a22" opacity="0.6" />
      <ellipse cx="44.5" cy="22" r="1.2" ry="0.7" transform="rotate(45 44.5 22)" fill="#2a5a22" opacity="0.6" />
      <ellipse cx="46.5" cy="28" r="1.2" ry="0.7" fill="#2a5a22" opacity="0.6" />
      <ellipse cx="44.5" cy="34" r="1.2" ry="0.7" transform="rotate(-45 44.5 34)" fill="#2a5a22" opacity="0.6" />
      <ellipse cx="38" cy="36.5" r="1.2" ry="0.7" fill="#2a5a22" opacity="0.6" />
      <ellipse cx="31.5" cy="34" r="1.2" ry="0.7" transform="rotate(45 31.5 34)" fill="#2a5a22" opacity="0.6" />
      <ellipse cx="29.5" cy="28" r="1.2" ry="0.7" fill="#2a5a22" opacity="0.6" />
      <ellipse cx="31.5" cy="22" r="1.2" ry="0.7" transform="rotate(-45 31.5 22)" fill="#2a5a22" opacity="0.6" />
      {/* Peel ring */}
      <circle cx="38" cy="28" r="12" fill="none" stroke="#3d7a32" strokeWidth="1.2" opacity="0.5" />

      {/* Kiwi slice — right, slightly overlapping */}
      <circle cx="72" cy="26" r="12" fill="#3d7a32" opacity="0.85" />
      <circle cx="72" cy="26" r="10" fill="#6ab85a" />
      <circle cx="72" cy="26" r="7.5" fill="#8fd480" />
      <line x1="72" y1="15.5" x2="72" y2="36.5" stroke="#3d7a32" strokeWidth="0.8" opacity="0.5" />
      <line x1="61" y1="26" x2="83" y2="26" stroke="#3d7a32" strokeWidth="0.8" opacity="0.5" />
      <line x1="64" y1="18.5" x2="80" y2="33.5" stroke="#3d7a32" strokeWidth="0.8" opacity="0.5" />
      <line x1="64" y1="33.5" x2="80" y2="18.5" stroke="#3d7a32" strokeWidth="0.8" opacity="0.5" />
      <circle cx="72" cy="26" r="3" fill="#c8e840" opacity="0.9" />
      <ellipse cx="72" cy="17.5" r="1" ry="0.6" fill="#2a5a22" opacity="0.6" />
      <ellipse cx="77.5" cy="19.5" r="1" ry="0.6" transform="rotate(45 77.5 19.5)" fill="#2a5a22" opacity="0.6" />
      <ellipse cx="79.5" cy="26" r="1" ry="0.6" fill="#2a5a22" opacity="0.6" />
      <ellipse cx="77.5" cy="32.5" r="1" ry="0.6" transform="rotate(-45 77.5 32.5)" fill="#2a5a22" opacity="0.6" />
      <ellipse cx="72" cy="34.5" r="1" ry="0.6" fill="#2a5a22" opacity="0.6" />
      <ellipse cx="66.5" cy="32.5" r="1" ry="0.6" transform="rotate(45 66.5 32.5)" fill="#2a5a22" opacity="0.6" />
      <ellipse cx="64.5" cy="26" r="1" ry="0.6" fill="#2a5a22" opacity="0.6" />
      <ellipse cx="66.5" cy="19.5" r="1" ry="0.6" transform="rotate(-45 66.5 19.5)" fill="#2a5a22" opacity="0.6" />
      <circle cx="72" cy="26" r="10" fill="none" stroke="#3d7a32" strokeWidth="1" opacity="0.5" />

      {/* Bubbles in jar */}
      <circle cx="52" cy="65" r="2" fill="white" opacity="0.3" />
      <circle cx="63" cy="72" r="1.5" fill="white" opacity="0.25" />
      <circle cx="57" cy="78" r="1.2" fill="white" opacity="0.2" />
    </svg>
  )
}
