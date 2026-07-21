import { useState } from 'react'
import { tradingCategories } from './data'

const ACCENT   = '#00f5ff'
const CARD_BG  = '#0e0018'   // used by card hover handlers (runtime, not Tailwind)
const CARD_HOV = '#160025'

// Fixed decorative grid pattern — kept inline (multi-gradient background)
const GRID_BG = {
  backgroundImage: `
    linear-gradient(rgba(196,79,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(196,79,255,0.04) 1px, transparent 1px)
  `,
  backgroundSize: '40px 40px',
}

export default function TradingGrid({ entries, filterId, onSelect, isMobile, onBack }) {
  const [search, setSearch] = useState('')
  const [subId,  setSubId]  = useState(null)

  const currentCat    = tradingCategories.find((c) => c.id === filterId)
  const subcategories = currentCat?.subcategories || []
  const color         = currentCat?.color || ACCENT

  const q       = search.trim().toLowerCase()
  const filtered = subId ? entries.filter((e) => e.subcategoryId === subId) : entries
  const visible  = q
    ? filtered.filter((e) => [e.title, e.subtitle, e.market].filter(Boolean).some((s) => s.toLowerCase().includes(q)))
    : filtered

  return (
    <div
      className="h-full flex flex-col overflow-hidden bg-tr-bg"
      style={{ '--c': color, '--c-88': `${color}88`, ...GRID_BG }}
    >

      {/* Header */}
      <div className={`${isMobile ? 'px-5' : 'px-8'} py-[0.9rem] border-b border-tr-border flex-shrink-0 flex items-center gap-3`}>
        <button
          onClick={onBack}
          className="font-jakarta text-[0.7rem] font-medium text-tr-dim hover:text-tr-text bg-transparent border-none cursor-pointer p-0 transition-colors flex-shrink-0"
        >
          ← Trading
        </button>

        <div className="w-px h-[14px] bg-tr-border flex-shrink-0" />

        <span className="font-jakarta font-extrabold text-[0.85rem] text-[var(--c)]">
          {currentCat?.label}
        </span>
        <span className="font-jakarta text-[0.72rem] text-tr-dim">
          {currentCat?.fullLabel}
        </span>
      </div>

      {/* Sub-nav (if subcategories exist) */}
      {subcategories.length > 0 && (
        <div className={`flex border-b border-tr-border ${isMobile ? 'pl-5' : 'pl-8'} flex-shrink-0 overflow-x-auto`}>
          <SubTab label="Tout" active={!subId} color={color} onClick={() => setSubId(null)} />
          {subcategories.map((sub) => (
            <SubTab key={sub.id} label={sub.label} active={subId === sub.id} color={color} onClick={() => setSubId(sub.id)} />
          ))}
        </div>
      )}

      {/* Content */}
      <div className={`flex-1 overflow-y-auto ${isMobile ? 'py-6 px-5' : 'p-8'}`}>

        {/* Title + search row */}
        <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
          <div>
            <h2 className="font-jakarta text-2xl font-extrabold text-tr-text leading-none mb-[0.3rem]">
              {visible.length === 0 && q ? 'Aucun résultat' : currentCat?.fullLabel}
            </h2>
            <p className="font-spacemono text-[0.6rem] text-[var(--c-88)]">
              {visible.length} fiche{visible.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className={`relative ${isMobile ? 'w-full' : 'w-[260px]'}`}>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[0.8rem] text-tr-dim pointer-events-none">⌕</span>
            <input
              type="text" placeholder="Rechercher..."
              value={search} onChange={(e) => setSearch(e.target.value)}
              className="w-full box-border font-jakarta text-[0.8rem] text-tr-text bg-white/[0.04] border border-tr-border rounded-[10px] pl-8 pr-3 py-[0.42rem] outline-none transition-colors"
              onFocus={(e) => { e.target.style.borderColor = `${color}88`; e.target.style.boxShadow = `0 0 12px ${color}22` }}
              onBlur={(e)  => { e.target.style.borderColor = ''; e.target.style.boxShadow = 'none' }}
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-[0.6rem] top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-[0.7rem] text-tr-dim px-[0.2rem] py-[0.1rem]"
              >✕</button>
            )}
          </div>
        </div>

        {/* Empty state */}
        {visible.length === 0 && !q && (
          <div className="mt-12">
            <p className="font-jakarta text-[1.1rem] font-bold text-[rgba(209,216,232,0.1)] mb-[0.4rem]">Bientôt disponible</p>
            <p className="font-jakarta text-[0.78rem] text-[rgba(209,216,232,0.07)]">Les fiches pour cette catégorie arrivent prochainement.</p>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
          {visible.map((e) => <TradingCard key={e.id} entry={e} color={color} onClick={() => onSelect(e.id)} />)}
        </div>
      </div>
    </div>
  )
}

function SubTab({ label, active, color, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ '--c': color }}
      className={`font-jakarta text-[0.78rem] bg-transparent border-none border-b-2 cursor-pointer py-[0.65rem] px-4 whitespace-nowrap transition-colors flex-shrink-0 ${
        active
          ? 'font-bold text-[var(--c)] border-[var(--c)]'
          : 'font-normal text-tr-dim border-transparent hover:text-tr-text'
      }`}
    >
      {label}
    </button>
  )
}

function TradingCard({ entry, color, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ '--c': color }}
      className="flex flex-col h-full text-left p-0 bg-tr-card border border-tr-border rounded-xl overflow-hidden cursor-pointer transition-[border-color,box-shadow,background] duration-200"
      onMouseEnter={(e) => {
        e.currentTarget.style.background = CARD_HOV
        e.currentTarget.style.borderColor = `${color}66`
        e.currentTarget.style.boxShadow = `0 0 24px -6px ${color}`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = CARD_BG
        e.currentTarget.style.borderColor = ''
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Preview */}
      <div className="h-[100px] flex-shrink-0 bg-[#07000e] overflow-hidden flex items-center justify-center relative border-b border-tr-border">
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id={`g-${entry.id}`} width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="12" r="0.5" fill={color} opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#g-${entry.id})`} />
        </svg>
        <span className="font-spacemono text-[0.55rem] uppercase tracking-[0.1em] text-[var(--c)] opacity-60 absolute top-[0.65rem] left-[0.8rem]">
          {entry.type}
        </span>
        {entry.risk && (
          <span className="font-jakarta text-[0.6rem] font-semibold text-tr-dim absolute bottom-[0.65rem] right-[0.8rem]">
            {entry.risk}
          </span>
        )}
        <span className="font-jakarta font-extrabold text-[2.4rem] text-[var(--c)] opacity-[0.11] select-none absolute tracking-[-0.02em]">
          {entry.title}
        </span>
      </div>

      {/* Text */}
      <div className="flex-1 flex flex-col py-[0.9rem] px-4">
        <span className="inline-block self-start font-jakarta text-[0.6rem] font-bold uppercase tracking-[0.08em] text-[var(--c)] opacity-75 mb-[0.45rem]">
          {entry.market}
        </span>
        <p className="font-jakarta text-base font-extrabold text-tr-text leading-[1.2] mb-[0.2rem]">
          {entry.title}
        </p>
        {entry.subtitle && (
          <p className="font-jakarta font-normal text-[0.74rem] text-tr-dim leading-[1.4]">
            {entry.subtitle}
          </p>
        )}
        <div className="flex-1" />
        {entry.timeframe && (
          <span className="inline-block mt-3 font-jakarta text-[0.62rem] font-semibold text-tr-dim border border-tr-border rounded-full px-[0.6rem] py-[0.2rem]">
            {entry.timeframe}
          </span>
        )}
      </div>
    </button>
  )
}
