import { useState } from 'react'
import HomePage from './HomePage'
import Sidebar from './cuisine/Sidebar'
import RecipeGrid from './cuisine/Grid'
import { RecipePageHeader, RecipePageBody } from './cuisine/RecipePage'
import { TipPageHeader, TipPageBody } from './cuisine/TipPage'
import { getIllustration } from './cuisine/illustrations'
import { entries, getFilteredEntries } from './cuisine/data'
import MuscuSidebar from './musculation/Sidebar'
import MuscuGrid from './musculation/Grid'
import { MuscuExerciseHeader, MuscuExerciseBody } from './musculation/ExercisePage'
import { muscuEntries, getMuscuFilteredEntries } from './musculation/data'
import TradingDashboard from './trading/Dashboard'
import TradingGrid from './trading/Grid'
import { TradingPageHeader, TradingPageBody } from './trading/Page'
import { tradingEntries, getTradingFilteredEntries } from './trading/data'
import FromagesDashboard from './fromages/Dashboard'
import FromagesGrid from './fromages/Grid'
import { FromagesPageHeader, FromagesPageBody } from './fromages/Page'
import { fromagesEntries, getFromagesFilteredEntries } from './fromages/data'
import BoissonsSidebar from './boissons/Sidebar'
import BoissonsGrid from './boissons/Grid'
import { BoissonsPageHeader, BoissonsPageBody } from './boissons/Page'
import { boissonsEntries, getBoissonsFilteredEntries } from './boissons/data'
import { getBoissonsIllustration } from './boissons/illustrations'
import { useIsMobile } from './hooks/useIsMobile'

export default function App() {
  const [section, setSection] = useState(null)
  const [filterId, setFilterId] = useState(null)
  const [activeId, setActiveId] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isMobile = useIsMobile()

  const isMusculation = section === 'musculation'
  const isTrading = section === 'trading'
  const isFromages = section === 'fromages'
  const isBoissons = section === 'boissons'

  const activeEntry = activeId
    ? isBoissons
      ? boissonsEntries.find((e) => e.id === activeId)
      : isFromages
        ? fromagesEntries.find((e) => e.id === activeId)
        : isTrading
          ? tradingEntries.find((e) => e.id === activeId)
          : isMusculation
            ? muscuEntries.find((e) => e.id === activeId)
            : entries.find((e) => e.id === activeId)
    : null
  const visibleEntries = isBoissons
    ? getBoissonsFilteredEntries(filterId)
    : isFromages
      ? getFromagesFilteredEntries(filterId)
      : isTrading
        ? getTradingFilteredEntries(filterId)
        : isMusculation
          ? getMuscuFilteredEntries(filterId)
          : getFilteredEntries(filterId)

  function handleSelectEntry(id) { setActiveId(id) }
  function handleBack() { setActiveId(null) }
  function handleFilter(id) { setFilterId(id); setActiveId(null); setSidebarOpen(false) }
  function handleHome() { setSection(null); setFilterId(null); setActiveId(null); setSidebarOpen(false) }

  if (section === null) {
    return (
      <div style={{ width: '100%', maxWidth: '640px' }}>
        <HomePage onSelect={setSection} />
      </div>
    )
  }

  // Fromages — no sidebar, dashboard layout
  if (isFromages) {
    return (
      <div style={{ position: 'fixed', inset: 0, background: '#110e08', overflow: 'hidden' }}>
        {!filterId && !activeEntry ? (
          <FromagesDashboard
            onSelectCategory={handleFilter}
            onHome={handleHome}
            isMobile={isMobile}
          />
        ) : activeEntry ? (
          <FromagesDetailView
            key={activeEntry.id}
            entry={activeEntry}
            onBack={handleBack}
            isMobile={isMobile}
          />
        ) : (
          <FromagesGrid
            key={filterId}
            entries={visibleEntries}
            filterId={filterId}
            onSelect={handleSelectEntry}
            isMobile={isMobile}
            onBack={() => handleFilter(null)}
          />
        )}
      </div>
    )
  }

  // Boissons — sidebar layout like cuisine
  if (isBoissons) {
    return (
      <div style={{ position: 'fixed', inset: 0, display: 'flex', background: '#f7f2e8', overflow: 'hidden' }}>
        {isMobile && sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 10 }}
          />
        )}
        <div style={isMobile ? {
          position: 'fixed', top: 0, left: sidebarOpen ? 0 : '-240px',
          bottom: 0, zIndex: 20, transition: 'left 0.25s ease',
        } : {}}>
          <BoissonsSidebar
            filterId={filterId}
            onFilter={handleFilter}
            onHome={handleHome}
            isMobile={isMobile}
            onClose={() => setSidebarOpen(false)}
          />
        </div>
        <main style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          {activeEntry ? (
            <BoissonsDetailView
              key={activeEntry.id}
              entry={activeEntry}
              onBack={handleBack}
              isMobile={isMobile}
              onMenuOpen={() => setSidebarOpen(true)}
            />
          ) : (
            <BoissonsGrid
              key={filterId}
              entries={visibleEntries}
              filterId={filterId}
              onSelect={handleSelectEntry}
              isMobile={isMobile}
              onMenuOpen={() => setSidebarOpen(true)}
            />
          )}
        </main>
      </div>
    )
  }

  // Trading — no sidebar, completely different layout
  if (isTrading) {
    return (
      <div style={{ position: 'fixed', inset: 0, background: '#0d1117', overflow: 'hidden' }}>
        {!filterId && !activeEntry ? (
          <TradingDashboard
            onSelectCategory={handleFilter}
            onHome={handleHome}
            isMobile={isMobile}
          />
        ) : activeEntry ? (
          <TradingDetailView
            key={activeEntry.id}
            entry={activeEntry}
            onBack={handleBack}
            isMobile={isMobile}
          />
        ) : (
          <TradingGrid
            key={filterId}
            entries={visibleEntries}
            filterId={filterId}
            onSelect={handleSelectEntry}
            isMobile={isMobile}
            onBack={() => handleFilter(null)}
          />
        )}
      </div>
    )
  }

  return (
    <div style={{ position: 'fixed', inset: 0, display: 'flex', background: isTrading ? '#0d1117' : isMusculation ? '#1c1e22' : '#f7f0e3', overflow: 'hidden' }}>

      {/* Mobile backdrop */}
      {isMobile && sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 10 }}
        />
      )}

      {/* Sidebar — fixed overlay on mobile, static on desktop */}
      <div style={isMobile ? {
        position: 'fixed', top: 0, left: sidebarOpen ? 0 : '-240px',
        bottom: 0, zIndex: 20, transition: 'left 0.25s ease',
      } : {}}>
        {isTrading ? (
          <TradingSidebar
            filterId={filterId}
            onFilter={handleFilter}
            onHome={handleHome}
            isMobile={isMobile}
            onClose={() => setSidebarOpen(false)}
          />
        ) : isMusculation ? (
          <MuscuSidebar
            filterId={filterId}
            onFilter={handleFilter}
            onHome={handleHome}
            isMobile={isMobile}
            onClose={() => setSidebarOpen(false)}
          />
        ) : (
          <Sidebar
            filterId={filterId}
            onFilter={handleFilter}
            onHome={handleHome}
            isMobile={isMobile}
            onClose={() => setSidebarOpen(false)}
          />
        )}
      </div>

      <main style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {activeEntry && isMusculation ? (
          <MuscuDetailView
            key={activeEntry.id}
            entry={activeEntry}
            onBack={handleBack}
            isMobile={isMobile}
            onMenuOpen={() => setSidebarOpen(true)}
          />
        ) : activeEntry ? (
          <DetailView
            key={activeEntry.id}
            entry={activeEntry}
            onBack={handleBack}
            isMobile={isMobile}
            onMenuOpen={() => setSidebarOpen(true)}
          />
        ) : isMusculation ? (
          <MuscuGrid
            key={filterId}
            entries={visibleEntries}
            filterId={filterId}
            onSelect={handleSelectEntry}
            isMobile={isMobile}
            onMenuOpen={() => setSidebarOpen(true)}
          />
        ) : (
          <RecipeGrid
            key={filterId}
            entries={visibleEntries}
            filterId={filterId}
            onSelect={handleSelectEntry}
            isMobile={isMobile}
            onMenuOpen={() => setSidebarOpen(true)}
          />
        )}
      </main>
    </div>
  )
}

function DetailView({ entry, onBack, isMobile, onMenuOpen }) {
  const [activeVariant, setActiveVariant] = useState(0)
  const hidePanel = useIsMobile(1100)

  const variants = entry.variants
  const hasVariants = variants?.length > 0
  const effectiveEntry = hasVariants && activeVariant > 0
    ? { ...entry, ...variants[activeVariant - 1] }
    : entry

  const Illustration = getIllustration(entry.illustration)
  const Header = entry.type === 'recipe' ? RecipePageHeader : TipPageHeader
  const Body   = entry.type === 'recipe' ? RecipePageBody  : TipPageBody
  const hPad = isMobile ? '1rem' : '3.5rem'

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {/* Back bar */}
      <div style={{
        padding: `0.9rem ${hPad}`,
        borderBottom: '1px solid rgba(139,94,60,0.1)',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}>
        {isMobile && (
          <button
            onClick={onMenuOpen}
            style={{
              fontFamily: '"DM Sans", sans-serif', fontSize: '1.1rem',
              color: '#8b5e3c', background: 'rgba(139,94,60,0.08)',
              border: '1px solid rgba(139,94,60,0.22)', borderRadius: '8px',
              cursor: 'pointer', padding: '0.28rem 0.55rem', lineHeight: 1, flexShrink: 0,
              transition: 'background 0.12s, border-color 0.12s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(139,94,60,0.15)'; e.currentTarget.style.borderColor = 'rgba(139,94,60,0.4)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(139,94,60,0.08)'; e.currentTarget.style.borderColor = 'rgba(139,94,60,0.22)' }}
          >
            ≡
          </button>
        )}
        <button
          onClick={onBack}
          style={{
            fontFamily: '"DM Sans", sans-serif', fontSize: '0.75rem', fontWeight: 500,
            color: '#8b5e3c', background: 'rgba(139,94,60,0.08)',
            border: '1px solid rgba(139,94,60,0.22)', borderRadius: '999px',
            cursor: 'pointer', padding: '0.3rem 0.85rem', letterSpacing: '0.02em',
            transition: 'background 0.12s, border-color 0.12s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(139,94,60,0.15)'; e.currentTarget.style.borderColor = 'rgba(139,94,60,0.4)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(139,94,60,0.08)'; e.currentTarget.style.borderColor = 'rgba(139,94,60,0.22)' }}
        >
          ← Retour
        </button>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>

        {/* Header row */}
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, minWidth: 0, padding: isMobile ? '1.75rem 1rem 1.25rem' : '3rem 3.5rem 1.5rem' }}>
            <div style={{ maxWidth: '800px' }}>
              <Header key={entry.id} entry={effectiveEntry} />
              {hasVariants && (
                <div style={{ marginTop: '1.25rem', display: 'inline-flex', borderRadius: '999px', border: '1px solid rgba(139,94,60,0.2)', overflow: 'hidden' }}>
                  <VariantBtn active={activeVariant === 0} onClick={() => setActiveVariant(0)}>{entry.baseLabel || 'Original'}</VariantBtn>
                  {variants.map((v, i) => (
                    <VariantBtn key={i} active={activeVariant === i + 1} onClick={() => setActiveVariant(i + 1)}>
                      {v.label}
                    </VariantBtn>
                  ))}
                </div>
              )}
            </div>
          </div>
          {!hidePanel && <div style={{ width: '260px', flexShrink: 0 }} />}
        </div>

        {/* Full-width divider */}
        <div style={{ height: '1px', background: 'rgba(139,94,60,0.15)' }} />

        {/* Body row */}
        <div style={{ display: 'flex', flex: 1 }}>
          <div style={{ flex: 1, minWidth: 0, padding: isMobile ? '1.25rem 1rem 2rem' : '2rem 3.5rem 3rem' }}>
            <div style={{ maxWidth: '800px' }}>
              <Body key={`${entry.id}-${activeVariant}`} entry={effectiveEntry} />
            </div>
          </div>
          {!hidePanel && <DecorativePanel Illustration={Illustration} />}
        </div>

      </div>
    </div>
  )
}

function VariantBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.25rem 0.7rem', border: 'none',
        borderRight: '1px solid rgba(139,94,60,0.2)',
        background: active ? '#8b5e3c' : 'transparent',
        color: active ? 'white' : '#8b5e3c',
        fontFamily: '"DM Sans", sans-serif', fontSize: '0.65rem', fontWeight: 500,
        cursor: 'pointer', transition: 'all 0.15s', whiteSpace: 'nowrap',
      }}
    >
      {children}
    </button>
  )
}

function DecorativePanel({ Illustration }) {
  return (
    <div style={{
      width: '260px',
      flexShrink: 0,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '300px',
      borderLeft: '1px solid rgba(139,94,60,0.1)',
    }}>

      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="wavePattern" x="0" y="0" width="260" height="22" patternUnits="userSpaceOnUse">
            <path
              d="M-10,11 C32,2 88,20 130,11 S193,2 270,11"
              stroke="#8b5e3c" strokeWidth="1" fill="none" opacity="0.11"
            />
          </pattern>
          <pattern id="diamondPattern" x="0" y="0" width="130" height="110" patternUnits="userSpaceOnUse">
            <rect x="16" y="22" width="6" height="6" transform="rotate(45,19,25)" fill="#8b5e3c" opacity="0.14"/>
            <rect x="85" y="72" width="5" height="5" transform="rotate(45,87.5,74.5)" fill="#c4964a" opacity="0.18"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wavePattern)" />
        <rect width="100%" height="100%" fill="url(#diamondPattern)" />
      </svg>

      {Illustration && (
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '155px', height: '155px',
          opacity: 0.22,
          zIndex: 0,
        }}>
          <Illustration />
        </div>
      )}
    </div>
  )
}

function TradingDetailView({ entry, onBack, isMobile }) {
  const hPad = isMobile ? '1rem' : '3.5rem'
  const hidePanel = useIsMobile(1100)

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#0d1117' }}>

      {/* Back bar */}
      <div style={{
        padding: `0.9rem ${hPad}`,
        borderBottom: '1px solid rgba(0,212,170,0.07)',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}>
        <button
          onClick={onBack}
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.72rem', fontWeight: 600,
            letterSpacing: '0.01em',
            color: '#d1d8e8', background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px',
            cursor: 'pointer', padding: '0.3rem 0.85rem',
            transition: 'background 0.12s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,212,170,0.1)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,212,170,0.06)' }}
        >
          ← Retour
        </button>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>

        {/* Header row */}
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, minWidth: 0, padding: isMobile ? '1.75rem 1rem 1.25rem' : '3rem 3.5rem 1.5rem' }}>
            <div style={{ maxWidth: '800px' }}>
              <TradingPageHeader entry={entry} />
            </div>
          </div>
          {!hidePanel && <div style={{ width: '260px', flexShrink: 0 }} />}
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(0,212,170,0.07)' }} />

        {/* Body row */}
        <div style={{ display: 'flex', flex: 1 }}>
          <div style={{ flex: 1, minWidth: 0, padding: isMobile ? '1.25rem 1rem 2rem' : '2rem 3.5rem 3rem' }}>
            <div style={{ maxWidth: '800px' }}>
              <TradingPageBody entry={entry} />
            </div>
          </div>
          {!hidePanel && <TradingDecorativePanel entry={entry} />}
        </div>

      </div>
    </div>
  )
}

function TradingDecorativePanel({ entry }) {
  const MARKET_COLORS = {
    'Crypto': '#f7931a',
    'Forex': '#00d4aa',
    'Actions': '#7c85f0',
    'Matières premières': '#e5c46b',
    'Analyse technique': 'rgba(205,214,224,0.4)',
  }
  const color = MARKET_COLORS[entry?.market] || '#00d4aa'

  return (
    <div style={{
      width: '260px',
      flexShrink: 0,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '300px',
      borderLeft: '1px solid rgba(0,212,170,0.07)',
      background: '#080c12',
    }}>
      {/* Grid pattern */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
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

      {/* Faint ticker */}
      <p style={{
        position: 'absolute',
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: 700,
        fontSize: '4rem',
        letterSpacing: '-0.04em',
        color: color,
        opacity: 0.04,
        userSelect: 'none',
        textAlign: 'center',
        padding: '0 1rem',
      }}>
        {entry?.title?.toUpperCase()}
      </p>
    </div>
  )
}

function FromagesDetailView({ entry, onBack, isMobile }) {
  const hPad = isMobile ? '1rem' : '3.5rem'
  const hidePanel = useIsMobile(1100)

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#110e08' }}>

      {/* Back bar */}
      <div style={{
        padding: `0.9rem ${hPad}`,
        borderBottom: '1px solid rgba(212,164,76,0.1)',
        flexShrink: 0,
        display: 'flex', alignItems: 'center', gap: '0.75rem',
      }}>
        <button
          onClick={onBack}
          style={{
            fontFamily: '"DM Sans", sans-serif', fontSize: '0.72rem', fontWeight: 500,
            letterSpacing: '0.01em',
            color: '#f0e6d3', background: 'rgba(212,164,76,0.07)',
            border: '1px solid rgba(212,164,76,0.15)', borderRadius: '8px',
            cursor: 'pointer', padding: '0.3rem 0.85rem',
            transition: 'background 0.12s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(212,164,76,0.15)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(212,164,76,0.07)' }}
        >
          ← Retour
        </button>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>

        {/* Header row */}
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, minWidth: 0, padding: isMobile ? '1.75rem 1rem 1.25rem' : '3rem 3.5rem 1.5rem' }}>
            <div style={{ maxWidth: '800px' }}>
              <FromagesPageHeader entry={entry} />
            </div>
          </div>
          {!hidePanel && <div style={{ width: '260px', flexShrink: 0 }} />}
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(212,164,76,0.08)' }} />

        {/* Body row */}
        <div style={{ display: 'flex', flex: 1 }}>
          <div style={{ flex: 1, minWidth: 0, padding: isMobile ? '1.25rem 1rem 2rem' : '2rem 3.5rem 3rem' }}>
            <div style={{ maxWidth: '800px' }}>
              <FromagesPageBody entry={entry} />
            </div>
          </div>
          {!hidePanel && <FromagesDecorativePanel entry={entry} />}
        </div>

      </div>
    </div>
  )
}

function FromagesDecorativePanel({ entry }) {
  const ACCENT = '#d4a44c'
  return (
    <div style={{
      width: '260px', flexShrink: 0,
      position: 'relative',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      minHeight: '300px',
      borderLeft: '1px solid rgba(212,164,76,0.08)',
      background: '#0c0906',
    }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <pattern id="fromagesGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="0.6" fill={ACCENT} opacity="0.12" />
          </pattern>
          <radialGradient id="fromagesGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={ACCENT} stopOpacity="0.07" />
            <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#fromagesGrid)" />
        <rect width="100%" height="100%" fill="url(#fromagesGlow)" />
      </svg>
      <p style={{
        position: 'absolute',
        fontFamily: '"Playfair Display", Georgia, serif',
        fontStyle: 'italic', fontWeight: 700,
        fontSize: '3.5rem', letterSpacing: '-0.02em',
        color: ACCENT, opacity: 0.04,
        userSelect: 'none', textAlign: 'center', padding: '0 1rem',
      }}>
        {entry?.title}
      </p>
    </div>
  )
}

function BoissonsDetailView({ entry, onBack, isMobile, onMenuOpen }) {
  const [activeVariant, setActiveVariant] = useState(0)
  const [panelScrollY, setPanelScrollY] = useState(0)
  const hidePanel = useIsMobile(1100)
  const hPad = isMobile ? '1rem' : '3.5rem'

  const variants = entry.variants
  const hasVariants = variants?.length > 0
  const effectiveEntry = hasVariants && activeVariant > 0
    ? { ...entry, ...variants[activeVariant - 1] }
    : entry

  const Ill = getBoissonsIllustration(entry.illustration)

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#f7f2e8' }}>

      {/* Back bar */}
      <div style={{
        padding: `0.9rem ${hPad}`,
        borderBottom: '1px solid rgba(46,189,177,0.12)',
        flexShrink: 0,
        display: 'flex', alignItems: 'center', gap: '0.75rem',
      }}>
        {isMobile && (
          <button
            onClick={onMenuOpen}
            style={{
              fontFamily: '"DM Sans", sans-serif', fontSize: '1.1rem',
              color: '#2ebdb1', background: 'rgba(46,189,177,0.08)',
              border: '1px solid rgba(46,189,177,0.22)', borderRadius: '8px',
              cursor: 'pointer', padding: '0.28rem 0.55rem', lineHeight: 1, flexShrink: 0,
            }}
          >≡</button>
        )}
        <button
          onClick={onBack}
          style={{
            fontFamily: '"DM Sans", sans-serif', fontSize: '0.75rem', fontWeight: 500,
            color: '#2ebdb1', background: 'rgba(46,189,177,0.08)',
            border: '1px solid rgba(46,189,177,0.22)', borderRadius: '999px',
            cursor: 'pointer', padding: '0.3rem 0.85rem', letterSpacing: '0.02em',
            transition: 'background 0.12s, border-color 0.12s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(46,189,177,0.15)'; e.currentTarget.style.borderColor = 'rgba(46,189,177,0.4)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(46,189,177,0.08)'; e.currentTarget.style.borderColor = 'rgba(46,189,177,0.22)' }}
        >
          ← Retour
        </button>
      </div>

      {/* Scrollable content */}
      <div
        style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}
        onScroll={(e) => setPanelScrollY(e.currentTarget.scrollTop)}
      >

        {/* Header row */}
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, minWidth: 0, padding: isMobile ? '1.75rem 1rem 1.25rem' : '3rem 3.5rem 1.5rem' }}>
            <div style={{ maxWidth: '800px' }}>
              <BoissonsPageHeader key={entry.id} entry={effectiveEntry} />
              {hasVariants && (
                <div style={{ marginTop: '1.25rem', display: 'inline-flex', borderRadius: '999px', border: '1px solid rgba(46,189,177,0.2)', overflow: 'hidden' }}>
                  <BoissonsVariantBtn active={activeVariant === 0} onClick={() => setActiveVariant(0)}>{entry.baseLabel || 'Original'}</BoissonsVariantBtn>
                  {variants.map((v, i) => (
                    <BoissonsVariantBtn key={i} active={activeVariant === i + 1} onClick={() => setActiveVariant(i + 1)}>
                      {v.label}
                    </BoissonsVariantBtn>
                  ))}
                </div>
              )}
            </div>
          </div>
          {!hidePanel && <div style={{ width: '300px', flexShrink: 0 }} />}
        </div>

        {/* Full-width divider */}
        <div style={{ height: '1px', background: 'rgba(46,189,177,0.12)' }} />

        {/* Body row */}
        <div style={{ display: 'flex', flex: 1, alignItems: 'flex-start' }}>
          <div style={{ flex: 1, minWidth: 0, padding: isMobile ? '1.25rem 1rem 2rem' : '2rem 3.5rem 3rem' }}>
            <div style={{ maxWidth: '800px' }}>
              <BoissonsPageBody key={`${entry.id}-${activeVariant}`} entry={effectiveEntry} />
            </div>
          </div>
          {!hidePanel && <BoissonsDecorativePanel Ill={Ill} scrollY={panelScrollY} />}
        </div>

      </div>
    </div>
  )
}

function BoissonsVariantBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.25rem 0.7rem', border: 'none',
        borderRight: '1px solid rgba(46,189,177,0.2)',
        background: active ? '#2ebdb1' : 'transparent',
        color: active ? 'white' : '#2ebdb1',
        fontFamily: '"DM Sans", sans-serif', fontSize: '0.65rem', fontWeight: 500,
        cursor: 'pointer', transition: 'all 0.15s', whiteSpace: 'nowrap',
      }}
    >
      {children}
    </button>
  )
}

function BoissonsDecorativePanel({ Ill, scrollY = 0 }) {
  const lift = Math.round(scrollY * 0.2)

  return (
    <div style={{
      width: '300px', flexShrink: 0,
      position: 'sticky', top: 0,
      alignSelf: 'flex-start',
      height: '100vh',
      borderLeft: '1px solid rgba(46,189,177,0.1)',
      overflow: 'hidden',
    }}>

      {/* ── Beach bar scene ─────────────────────────────── */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        viewBox="0 0 260 420"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#a8daf0" />
            <stop offset="52%"  stopColor="#fde9c2" />
            <stop offset="74%"  stopColor="#f9b96e" />
            <stop offset="100%" stopColor="#f4865a" />
          </linearGradient>
          <radialGradient id="bSunGlow" cx="72%" cy="54%" r="30%">
            <stop offset="0%"   stopColor="#ffd166" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ffd166" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="bSea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#3ecfc6" />
            <stop offset="100%" stopColor="#1a9e9e" />
          </linearGradient>
          <linearGradient id="bSand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#f5d98e" />
            <stop offset="100%" stopColor="#e8c06a" />
          </linearGradient>
        </defs>

        <rect width="260" height="420" fill="url(#bSky)" />
        <rect width="260" height="420" fill="url(#bSunGlow)" />

        {/* Sun */}
        <circle cx="188" cy="224" r="26" fill="#ffd166" opacity="0.35" />
        <circle cx="188" cy="224" r="20" fill="#ffc233" opacity="0.65" />
        <circle cx="188" cy="224" r="14" fill="#f9a820" opacity="0.92" />
        <path d="M 172 232 Q 188 228 204 232 Q 196 240 188 242 Q 180 240 172 232 Z" fill="#f9a820" opacity="0.18" />

        {/* Headland */}
        <path d="M 0 218 Q 30 200 70 208 Q 100 215 130 210 Q 155 206 170 212 L 170 232 L 0 232 Z" fill="#7ab8c2" opacity="0.2" />

        {/* Sea */}
        <path d="M 0 222 C 40 214 80 230 120 222 C 160 214 200 228 260 220 L 260 310 L 0 310 Z" fill="url(#bSea)" />
        <path d="M 0 222 C 40 214 80 230 120 222 C 160 214 200 228 260 220" fill="none" stroke="white" strokeWidth="1.4" opacity="0.45" />
        <path d="M 0 236 C 35 230 70 242 105 235 C 140 228 175 240 210 233 C 230 229 248 234 260 231" fill="none" stroke="white" strokeWidth="0.9" opacity="0.28" />
        <path d="M 0 250 C 45 244 90 256 135 249" fill="none" stroke="white" strokeWidth="0.8" opacity="0.22" />
        <path d="M 150 253 C 185 247 220 258 260 252" fill="none" stroke="white" strokeWidth="0.8" opacity="0.2" />

        {/* Foam + Sand */}
        <path d="M 0 298 C 40 291 85 303 130 296 C 175 289 220 300 260 294 L 260 310 L 0 310 Z" fill="white" opacity="0.18" />
        <path d="M 0 302 C 40 294 85 308 130 300 C 175 293 220 305 260 298 L 260 420 L 0 420 Z" fill="url(#bSand)" />
        <path d="M 0 302 C 40 294 85 308 130 300 C 175 293 220 305 260 298 L 260 318 C 220 323 175 310 130 318 C 85 326 40 312 0 318 Z" fill="#ddb055" opacity="0.25" />

        {/* Palm tree */}
        <path d="M 36 420 Q 40 390 46 360 Q 52 325 58 295 Q 64 265 70 242 Q 75 225 82 212" stroke="#6d4c41" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M 36 420 Q 40 390 46 360 Q 52 325 58 295 Q 64 265 70 242 Q 75 225 82 212" stroke="#a1745a" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.35" />
        <path d="M 47 362 Q 54 358 60 362" stroke="#5d4037" strokeWidth="0.9" fill="none" opacity="0.4" />
        <path d="M 51 338 Q 58 334 64 338" stroke="#5d4037" strokeWidth="0.9" fill="none" opacity="0.4" />
        <path d="M 56 312 Q 63 308 69 312" stroke="#5d4037" strokeWidth="0.9" fill="none" opacity="0.4" />
        <path d="M 62 284 Q 69 280 75 284" stroke="#5d4037" strokeWidth="0.9" fill="none" opacity="0.38" />
        <path d="M 68 258 Q 75 254 81 258" stroke="#5d4037" strokeWidth="0.8" fill="none" opacity="0.35" />
        <path d="M 82 212 Q 52 205 28 218 Q 46 216 82 218 Z" fill="#4caf50" opacity="0.82" />
        <path d="M 82 212 Q 58 182 40 170 Q 58 188 84 216 Z" fill="#388e3c" opacity="0.78" />
        <path d="M 82 212 Q 76 176 84 158 Q 82 178 85 214 Z" fill="#43a047" opacity="0.75" />
        <path d="M 82 212 Q 108 176 122 162 Q 104 180 84 214 Z" fill="#4caf50" opacity="0.78" />
        <path d="M 82 212 Q 120 196 140 198 Q 112 204 82 218 Z" fill="#388e3c" opacity="0.72" />
        <circle cx="78" cy="220" r="5.5" fill="#5d4037" opacity="0.8" />
        <circle cx="88" cy="217" r="4.5" fill="#6d4c41" opacity="0.75" />
        <circle cx="72" cy="224" r="4" fill="#5d4037" opacity="0.7" />

        {/* Tiki umbrella */}
        <line x1="208" y1="420" x2="208" y2="304" stroke="#8d6e63" strokeWidth="4" strokeLinecap="round" />
        <line x1="208" y1="420" x2="208" y2="304" stroke="#bcaaa4" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        <ellipse cx="208" cy="300" rx="42" ry="10" fill="#c49a6c" opacity="0.9" />
        <path d="M 166 300 Q 208 278 250 300 Z" fill="#d4a96c" opacity="0.85" />
        <path d="M 174 297 Q 208 284 242 297" fill="none" stroke="#e8c490" strokeWidth="1.2" opacity="0.5" />
        {[170, 178, 186, 194, 202, 210, 218, 226, 234, 242].map((x, i) => (
          <line key={i} x1={x} y1="300" x2={x - 1} y2="311" stroke="#b8926a" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
        ))}

        {/* Sailboat */}
        <path d="M 218 262 L 226 244 L 234 262 Z" fill="white" opacity="0.4" />
        <line x1="226" y1="262" x2="226" y2="244" stroke="white" strokeWidth="0.8" opacity="0.45" />

        {/* Seagulls */}
        <path d="M 105 172 Q 110 167 115 172" fill="none" stroke="#7a9eae" strokeWidth="1.3" opacity="0.5" strokeLinecap="round" />
        <path d="M 118 162 Q 124 156 130 162" fill="none" stroke="#7a9eae" strokeWidth="1.3" opacity="0.45" strokeLinecap="round" />
        <path d="M 144 178 Q 149 173 154 178" fill="none" stroke="#7a9eae" strokeWidth="1.1" opacity="0.38" strokeLinecap="round" />

        {/* ── Still life props in the sand ── */}
        {/* Bamboo straw — diagonal, right of center */}
        <line x1="172" y1="415" x2="148" y2="310" stroke="#8d6e63" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
        <line x1="172" y1="415" x2="148" y2="310" stroke="#bcaaa4" strokeWidth="2" strokeLinecap="round" opacity="0.2" />
        {[[169,407],[165,390],[161,373],[157,356],[153,339],[149,322]].map(([x,y],i) => (
          <ellipse key={i} cx={x} cy={y} rx="4" ry="2.5" fill="#6d4c41" opacity="0.35"
            transform={`rotate(-15,${x},${y})`} />
        ))}

        {/* Lime/citrus wedge — left side, on sand */}
        <path d="M 42 368 L 70 352 Q 76 368 70 384 Z" fill="#7bc043" opacity="0.75" />
        <path d="M 42 368 L 70 368 Q 68 354 42 368 Z" fill="#c8e86a" opacity="0.65" />
        <line x1="42" y1="368" x2="70" y2="360" stroke="#5a9e2f" strokeWidth="0.8" opacity="0.5" />
        <line x1="42" y1="368" x2="70" y2="368" stroke="#5a9e2f" strokeWidth="0.8" opacity="0.5" />
        <line x1="42" y1="368" x2="70" y2="376" stroke="#5a9e2f" strokeWidth="0.8" opacity="0.5" />

        {/* Mint sprig — left, above lime */}
        <line x1="58" y1="348" x2="54" y2="322" stroke="#388e3c" strokeWidth="1.2" opacity="0.55" strokeLinecap="round" />
        {[[58,346],[56,336],[57,328],[55,320]].map(([x,y],i) => (
          <ellipse key={i} cx={x+(i%2===0?6:-6)} cy={y} rx="7" ry="4"
            fill="#66bb6a" opacity="0.55"
            transform={`rotate(${i%2===0?-30:30},${x+(i%2===0?6:-6)},${y})`} />
        ))}

        {/* Footprints */}
        <ellipse cx="100" cy="390" rx="4" ry="6" fill="#d4a840" opacity="0.2" transform="rotate(-15,100,390)" />
        <ellipse cx="110" cy="400" rx="4" ry="6" fill="#d4a840" opacity="0.18" transform="rotate(10,110,400)" />
      </svg>

      {/* ── Cocktail illustration — large, bleeds bottom, parallax ── */}
      {Ill && (
        <div style={{
          position: 'absolute',
          bottom: '-28px',
          left: '50%',
          transform: `translateX(-50%) translateY(${-lift}px)`,
          width: '240px', height: '240px',
          zIndex: 2,
          filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.22))',
          willChange: 'transform',
        }}>
          <Ill />
        </div>
      )}
    </div>
  )
}

function MuscuDetailView({ entry, onBack, isMobile, onMenuOpen }) {
  const hPad = isMobile ? '1rem' : '3.5rem'

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#1c1e22' }}>

      {/* Back bar */}
      <div style={{
        padding: `0.9rem ${hPad}`,
        borderBottom: '1px solid rgba(192,200,212,0.07)',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}>
        {isMobile && (
          <button
            onClick={onMenuOpen}
            style={{
              fontFamily: '"Barlow", sans-serif', fontSize: '1.1rem',
              color: '#c0c8d4', background: 'rgba(192,200,212,0.07)',
              border: '1px solid rgba(192,200,212,0.12)', borderRadius: '3px',
              cursor: 'pointer', padding: '0.28rem 0.55rem', lineHeight: 1, flexShrink: 0,
              transition: 'background 0.12s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(192,200,212,0.12)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(192,200,212,0.07)' }}
          >
            ≡
          </button>
        )}
        <button
          onClick={onBack}
          style={{
            fontFamily: '"Barlow", sans-serif', fontSize: '0.7rem', fontWeight: 500,
            textTransform: 'uppercase', letterSpacing: '0.12em',
            color: '#c0c8d4', background: 'rgba(192,200,212,0.07)',
            border: '1px solid rgba(192,200,212,0.12)', borderRadius: '3px',
            cursor: 'pointer', padding: '0.3rem 0.85rem',
            transition: 'background 0.12s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(192,200,212,0.12)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(192,200,212,0.07)' }}
        >
          ← Retour
        </button>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto' }}>

        {/* Header */}
        <div style={{ padding: isMobile ? '1.75rem 1rem 1.5rem' : '3rem 3.5rem 2rem' }}>
          <div style={{ maxWidth: '860px' }}>
            <MuscuExerciseHeader entry={entry} />
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(192,200,212,0.07)' }} />

        {/* Body */}
        <div style={{ padding: isMobile ? '1.5rem 1rem 3rem' : '2.5rem 3.5rem 4rem' }}>
          <div style={{ maxWidth: '860px' }}>
            <MuscuExerciseBody entry={entry} />
          </div>
        </div>

      </div>
    </div>
  )
}
