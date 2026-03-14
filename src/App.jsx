import { useState } from 'react'
import HomePage from './components/HomePage'
import Sidebar from './components/Sidebar'
import RecipeGrid from './components/RecipeGrid'
import RecipePage from './components/RecipePage'
import TipPage from './components/TipPage'
import { entries, getFilteredEntries } from './data/entries'

export default function App() {
  const [section, setSection] = useState(null)   // null = hub
  const [filterId, setFilterId] = useState(null) // null = all
  const [activeId, setActiveId] = useState(null) // null = grid view

  const activeEntry = activeId ? entries.find((e) => e.id === activeId) : null
  const visibleEntries = getFilteredEntries(filterId)

  function handleSelectEntry(id) {
    setActiveId(id)
  }

  function handleBack() {
    setActiveId(null)
  }

  function handleFilter(id) {
    setFilterId(id)
    setActiveId(null)
  }

  // Hub
  if (section === null) {
    return (
      <div style={{ width: '100%', maxWidth: '640px' }}>
        <HomePage onSelect={setSection} />
      </div>
    )
  }

  // Cooking app — full screen
  return (
    <div style={{ position: 'fixed', inset: 0, display: 'flex', background: '#f7f0e3', overflow: 'hidden' }}>

      {/* Sidebar */}
      <Sidebar filterId={filterId} onFilter={handleFilter} onHome={() => { setSection(null); setFilterId(null); setActiveId(null) }} />

      {/* Main */}
      <main style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {activeEntry ? (
          <DetailView entry={activeEntry} onBack={handleBack} />
        ) : (
          <RecipeGrid entries={visibleEntries} filterId={filterId} onSelect={handleSelectEntry} />
        )}
      </main>
    </div>
  )
}

function DetailView({ entry, onBack }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Back bar */}
      <div style={{
        padding: '1rem 3rem',
        borderBottom: '1px solid rgba(139,94,60,0.1)',
        flexShrink: 0,
      }}>
        <button
          onClick={onBack}
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.75rem',
            color: 'rgba(74,55,40,0.5)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            letterSpacing: '0.02em',
            transition: 'color 0.12s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#8b5e3c')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(74,55,40,0.5)')}
        >
          ← Retour
        </button>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '2.5rem 3rem' }}>
        <div style={{ maxWidth: '800px' }}>
          {entry.type === 'recipe' ? (
            <RecipePage key={entry.id} entry={entry} />
          ) : (
            <TipPage key={entry.id} entry={entry} />
          )}
        </div>
      </div>
    </div>
  )
}
