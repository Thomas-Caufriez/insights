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

  const activeEntry = activeId
    ? isFromages
      ? fromagesEntries.find((e) => e.id === activeId)
      : isTrading
        ? tradingEntries.find((e) => e.id === activeId)
        : isMusculation
          ? muscuEntries.find((e) => e.id === activeId)
          : entries.find((e) => e.id === activeId)
    : null
  const visibleEntries = isFromages
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
