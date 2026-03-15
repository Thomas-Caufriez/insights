import { useState } from 'react'
import HomePage from './components/HomePage'
import Sidebar from './components/Sidebar'
import RecipeGrid from './components/RecipeGrid'
import { RecipePageHeader, RecipePageBody } from './components/RecipePage'
import { TipPageHeader, TipPageBody } from './components/TipPage'
import { getIllustration } from './components/illustrations'
import { entries, getFilteredEntries } from './data/entries'

export default function App() {
  const [section, setSection] = useState(null)
  const [filterId, setFilterId] = useState(null)
  const [activeId, setActiveId] = useState(null)

  const activeEntry = activeId ? entries.find((e) => e.id === activeId) : null
  const visibleEntries = getFilteredEntries(filterId)

  function handleSelectEntry(id) { setActiveId(id) }
  function handleBack() { setActiveId(null) }
  function handleFilter(id) { setFilterId(id); setActiveId(null) }

  if (section === null) {
    return (
      <div style={{ width: '100%', maxWidth: '640px' }}>
        <HomePage onSelect={setSection} />
      </div>
    )
  }

  return (
    <div style={{ position: 'fixed', inset: 0, display: 'flex', background: '#f7f0e3', overflow: 'hidden' }}>
      <Sidebar filterId={filterId} onFilter={handleFilter} onHome={() => { setSection(null); setFilterId(null); setActiveId(null) }} />
      <main style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {activeEntry ? (
          <DetailView entry={activeEntry} onBack={handleBack} />
        ) : (
          <RecipeGrid key={filterId} entries={visibleEntries} filterId={filterId} onSelect={handleSelectEntry} />
        )}
      </main>
    </div>
  )
}

function DetailView({ entry, onBack }) {
  const Illustration = getIllustration(entry.illustration)
  const Header = entry.type === 'recipe' ? RecipePageHeader : TipPageHeader
  const Body   = entry.type === 'recipe' ? RecipePageBody  : TipPageBody

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {/* Back bar */}
      <div style={{ padding: '1rem 3.5rem', borderBottom: '1px solid rgba(139,94,60,0.1)', flexShrink: 0 }}>
        <button
          onClick={onBack}
          style={{
            fontFamily: '"DM Sans", sans-serif', fontSize: '0.75rem',
            color: 'rgba(74,55,40,0.5)', background: 'none', border: 'none',
            cursor: 'pointer', padding: 0, letterSpacing: '0.02em', transition: 'color 0.12s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#8b5e3c')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(74,55,40,0.5)')}
        >
          ← Retour
        </button>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>

        {/* Header row — content + empty panel placeholder */}
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, minWidth: 0, padding: '3rem 3.5rem 1.5rem' }}>
            <div style={{ maxWidth: '800px' }}>
              <Header key={entry.id} entry={entry} />
            </div>
          </div>
          <div style={{ width: '260px', flexShrink: 0 }} />
        </div>

        {/* Full-width divider */}
        <div style={{ height: '1px', background: 'rgba(139,94,60,0.15)' }} />

        {/* Body row — content + decorative panel */}
        <div style={{ display: 'flex', flex: 1 }}>
          <div style={{ flex: 1, minWidth: 0, padding: '2rem 3.5rem 3rem' }}>
            <div style={{ maxWidth: '800px' }}>
              <Body key={entry.id} entry={entry} />
            </div>
          </div>
          <DecorativePanel Illustration={Illustration} />
        </div>

      </div>
    </div>
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

      {/* Wave + diamond SVG background */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Repeating wave lines */}
          <pattern id="wavePattern" x="0" y="0" width="260" height="22" patternUnits="userSpaceOnUse">
            <path
              d="M-10,11 C32,2 88,20 130,11 S193,2 270,11"
              stroke="#8b5e3c" strokeWidth="1" fill="none" opacity="0.11"
            />
          </pattern>
          {/* Scattered diamonds */}
          <pattern id="diamondPattern" x="0" y="0" width="130" height="110" patternUnits="userSpaceOnUse">
            <rect x="16" y="22" width="6" height="6" transform="rotate(45,19,25)" fill="#8b5e3c" opacity="0.14"/>
            <rect x="85" y="72" width="5" height="5" transform="rotate(45,87.5,74.5)" fill="#c4964a" opacity="0.18"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wavePattern)" />
        <rect width="100%" height="100%" fill="url(#diamondPattern)" />
      </svg>

      {/* Centered illustration — behind waves */}
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
