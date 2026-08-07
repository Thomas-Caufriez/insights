import { useState } from 'react'
import HomePage from './HomePage'
import { useIsMobile } from './hooks/useIsMobile'

// Cuisine
import CuisineSidebar from './cuisine/Sidebar'
import CuisineGrid from './cuisine/Grid'
import CuisineDetailView from './cuisine/DetailView'
import { entries as cuisineEntries, getFilteredEntries as getCuisineFilteredEntries } from './cuisine/data'

// Musculation
import MuscuSidebar from './musculation/Sidebar'
import MuscuGrid from './musculation/Grid'
import MuscuDetailView from './musculation/DetailView'
import { muscuEntries, getMuscuFilteredEntries } from './musculation/data'

// Trading
import TradingDashboard from './trading/Dashboard'
import TradingGrid from './trading/Grid'
import TradingDetailView from './trading/DetailView'
import { tradingEntries, getTradingFilteredEntries } from './trading/data'

// Fromages
import FromagesDashboard from './fromages/Dashboard'
import FromagesGrid from './fromages/Grid'
import FromagesDetailView from './fromages/DetailView'
import { fromagesEntries, getFromagesFilteredEntries } from './fromages/data'

// Boissons
import BoissonsSidebar from './boissons/Sidebar'
import BoissonsGrid from './boissons/Grid'
import BoissonsDetailView from './boissons/DetailView'
import { boissonsEntries, getBoissonsFilteredEntries } from './boissons/data'

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
            : cuisineEntries.find((e) => e.id === activeId)
    : null
  const visibleEntries = isBoissons
    ? getBoissonsFilteredEntries(filterId)
    : isFromages
      ? getFromagesFilteredEntries(filterId)
      : isTrading
        ? getTradingFilteredEntries(filterId)
        : isMusculation
          ? getMuscuFilteredEntries(filterId)
          : getCuisineFilteredEntries(filterId)

  function handleSelectEntry(id) { setActiveId(id) }
  function handleBack() { setActiveId(null) }
  function handleFilter(id) { setFilterId(id); setActiveId(null); setSidebarOpen(false) }
  function handleHome() { setSection(null); setFilterId(null); setActiveId(null); setSidebarOpen(false) }

  if (section === null) {
    // HomePage is full-bleed and breaks out of the centred body layout itself,
    // the same way each module's fixed-inset shell does.
    return <HomePage onSelect={setSection} />
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
            onSelectEntry={handleSelectEntry}
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
        {isMusculation ? (
          <MuscuSidebar
            filterId={filterId}
            onFilter={handleFilter}
            onHome={handleHome}
            isMobile={isMobile}
            onClose={() => setSidebarOpen(false)}
          />
        ) : (
          <CuisineSidebar
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
          <CuisineDetailView
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
          <CuisineGrid
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
