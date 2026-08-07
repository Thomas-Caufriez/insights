import { TradingPageHeader, TradingPageBody } from './Page'
import { getTradingIllustration } from './illustrations'
import { useIsMobile } from '../hooks/useIsMobile'

export default function DetailView({ entry, onBack, isMobile }) {
  const hidePanel = useIsMobile(1100)

  return (
    <div className="h-full flex flex-col overflow-hidden bg-[#0d1117]">

      {/* Back bar */}
      <div className={`py-[0.9rem] ${isMobile ? 'px-4' : 'px-14'} border-b border-[rgba(0,212,170,0.07)] flex-shrink-0 flex items-center gap-3`}>
        <button
          onClick={onBack}
          className="font-jakarta text-[0.72rem] font-semibold tracking-[0.01em] text-[#d1d8e8] bg-white/5 hover:bg-[rgba(0,212,170,0.1)] border border-white/[0.08] rounded-lg cursor-pointer px-[0.85rem] py-[0.3rem] transition-colors"
        >
          ← Retour
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto flex flex-col">

        {/* Header row */}
        <div className="flex">
          <div className={`flex-1 min-w-0 ${isMobile ? 'pt-7 px-4 pb-5' : 'pt-12 px-14 pb-6'}`}>
            <div className="max-w-[800px]">
              <TradingPageHeader entry={entry} />
            </div>
          </div>
          {!hidePanel && <div className="w-[260px] flex-shrink-0" />}
        </div>

        {/* Divider */}
        <div className="h-px bg-[rgba(0,212,170,0.07)]" />

        {/* Body row */}
        <div className="flex flex-1">
          <div className={`flex-1 min-w-0 ${isMobile ? 'pt-5 px-4 pb-8' : 'pt-8 px-14 pb-12'}`}>
            <div className="max-w-[800px]">
              <TradingPageBody entry={entry} showIllustration={hidePanel} />
            </div>
          </div>
          {!hidePanel && <DecorativePanel entry={entry} />}
        </div>

      </div>
    </div>
  )
}

function DecorativePanel({ entry }) {
  const MARKET_COLORS = {
    'Crypto': '#f7931a',
    'Forex': '#00d4aa',
    'Structure': '#c44fff',
    'Liquidité': '#ff2d78',
    'PD Array': '#00f5ff',
    'Exécution': '#00ff88',
    'Risque': '#f4c542',
    'Psychologie': '#ff6ef7',
    'Actions': '#7c85f0',
    'Matières premières': '#e5c46b',
    'Analyse technique': 'rgba(205,214,224,0.4)',
  }
  const color = MARKET_COLORS[entry?.market] || '#00d4aa'
  const Ill = getTradingIllustration(entry?.illustration)

  return (
    <div className="w-[260px] flex-shrink-0 relative flex items-center justify-center min-h-[300px] border-l border-[rgba(0,212,170,0.07)] bg-[#080c12]">
      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern id="panelGrid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke={color} strokeWidth="0.5" opacity="0.1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#panelGrid)" />
        {/* Radial glow */}
        <radialGradient id="panelGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.08" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        <rect width="100%" height="100%" fill="url(#panelGlow)" />
      </svg>

      {Ill ? (
        /* Concept diagram */
        <div className="relative w-full px-6">
          <Ill color={color} />
        </div>
      ) : (
        /* Faint ticker fallback */
        <p
          className="absolute font-['Space_Grotesk'] font-bold text-[4rem] tracking-[-0.04em] text-[var(--c)] opacity-[0.04] select-none text-center px-4"
          style={{ '--c': color }}
        >
          {entry?.title?.toUpperCase()}
        </p>
      )}
    </div>
  )
}
