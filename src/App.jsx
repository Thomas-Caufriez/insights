import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HomePage from './HomePage'
import { useIsMobile } from './hooks/useIsMobile'

// Cuisine
import CuisineSidebar from './cuisine/Sidebar'
import CuisineGrid from './cuisine/Grid'
import CuisineDetailView from './cuisine/DetailView'
import { entries as cuisineEntries, getFilteredEntries as getCuisineFilteredEntries } from './cuisine/data'

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
  const location = useLocation()
  const navigate = useNavigate()
  // filterId is purely local navigation state — not encoded in the URL.
  // This keeps shareable URLs clean (/:section/:entryId) while still allowing
  // category filtering within a module session.
  const [filterId, setFilterId] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isMobile = useIsMobile()

  // Routing state comes from the URL: /:section/:entryId
  const parts = location.pathname.split('/').filter(Boolean)
  const section = parts[0] ?? null
  const entryId = parts[1] ?? null

  const isFromages = section === 'fromages'
  const isBoissons = section === 'boissons'
  const isTrading  = section === 'trading'

  // When the section changes (different module or back to home), reset the
  // category filter so there's no stale filter when re-entering a module.
  useEffect(() => {
    setFilterId(null)
    setSidebarOpen(false)
  }, [section])

  const activeEntry = entryId
    ? isBoissons
      ? boissonsEntries.find(e => e.id === entryId)
      : isFromages
        ? fromagesEntries.find(e => e.id === entryId)
        : isTrading
          ? tradingEntries.find(e => e.id === entryId)
          : cuisineEntries.find(e => e.id === entryId)
    : null

  const visibleEntries = isBoissons
    ? getBoissonsFilteredEntries(filterId)
    : isFromages
      ? getFromagesFilteredEntries(filterId)
      : isTrading
        ? getTradingFilteredEntries(filterId)
        : getCuisineFilteredEntries(filterId)

  function handleSelectEntry(id) {
    navigate(`/${section}/${id}`)
  }

  // navigate(-1) follows the browser's actual history — if the user arrived via
  // a shared link, back takes them to wherever they came from (expected). If
  // they navigated within the app, back goes to the previous in-app screen.
  function handleBack() {
    navigate(-1)
  }

  function handleFilter(id) {
    setFilterId(id)
    setSidebarOpen(false)
  }

  function handleHome() {
    navigate('/')
  }

  if (section === null) {
    return <HomePage onSelect={(id) => navigate(`/${id}`)} />
  }

  // ── Fromages — no sidebar, dashboard landing ──────────────────────────────
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
            onHome={handleHome}
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

  // ── Boissons — sidebar layout ─────────────────────────────────────────────
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
              onHome={handleHome}
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

  // ── Trading — no sidebar, live-data dashboard ─────────────────────────────
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
            onHome={handleHome}
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

  // ── Cuisine (default) ─────────────────────────────────────────────────────
  return (
    <div style={{ position: 'fixed', inset: 0, display: 'flex', background: '#f7f0e3', overflow: 'hidden' }}>
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
        <CuisineSidebar
          filterId={filterId}
          onFilter={handleFilter}
          onHome={handleHome}
          isMobile={isMobile}
          onClose={() => setSidebarOpen(false)}
        />
      </div>
      <main style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {activeEntry ? (
          <CuisineDetailView
            key={activeEntry.id}
            entry={activeEntry}
            onBack={handleBack}
            onHome={handleHome}
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
