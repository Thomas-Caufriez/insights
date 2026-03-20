import { useState } from 'react'
import HomePage from './components/HomePage'
import Sidebar from './components/Sidebar'
import RecipeGrid from './components/RecipeGrid'
import { RecipePageHeader, RecipePageBody } from './components/RecipePage'
import { TipPageHeader, TipPageBody } from './components/TipPage'
import { getIllustration } from './components/illustrations'
import { entries, getFilteredEntries } from './data/entries'
import { useIsMobile } from './hooks/useIsMobile'

export default function App() {
  const [section, setSection] = useState(null)
  const [filterId, setFilterId] = useState(null)
  const [activeId, setActiveId] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isMobile = useIsMobile()

  const activeEntry = activeId ? entries.find((e) => e.id === activeId) : null
  const visibleEntries = getFilteredEntries(filterId)

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

  return (
    <div style={{ position: 'fixed', inset: 0, display: 'flex', background: '#f7f0e3', overflow: 'hidden' }}>

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
        <Sidebar
          filterId={filterId}
          onFilter={handleFilter}
          onHome={handleHome}
          isMobile={isMobile}
          onClose={() => setSidebarOpen(false)}
        />
      </div>

      <main style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {activeEntry ? (
          <DetailView
            key={activeEntry.id}
            entry={activeEntry}
            onBack={handleBack}
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
