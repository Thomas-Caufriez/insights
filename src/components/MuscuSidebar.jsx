import { muscuEntries, muscuCategories } from '../data/muscuData'

export default function MuscuSidebar({ filterId, onFilter, onHome, isMobile, onClose }) {
  const totalCount = muscuEntries.length

  return (
    <aside
      style={{
        width: '220px',
        flexShrink: 0,
        background: '#111214',
        borderRight: '1px solid rgba(192,200,212,0.06)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      {/* Brand */}
      <div
        style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid rgba(192,200,212,0.06)',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ flex: 1 }}>
          <button
            onClick={onHome}
            style={{
              display: 'block',
              fontFamily: '"Barlow", sans-serif',
              fontSize: '0.6rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(192,200,212,0.3)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              marginBottom: '0.85rem',
              transition: 'color 0.12s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(192,200,212,0.7)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(192,200,212,0.3)')}
          >
            ← Insights
          </button>
          <p style={{
            fontFamily: '"Bebas Neue", sans-serif',
            color: '#c0c8d4',
            fontSize: '1.6rem',
            lineHeight: 1.05,
            letterSpacing: '0.08em',
          }}>
            CARNET DE<br />MUSCU
          </p>
        </div>
        {isMobile && (
          <button
            onClick={onClose}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'rgba(192,200,212,0.3)', fontSize: '1rem', lineHeight: 1,
              padding: '0.1rem', flexShrink: 0, marginLeft: '0.5rem',
            }}
          >
            ✕
          </button>
        )}
      </div>

      {/* Nav */}
      <nav style={{ padding: '1rem 0.75rem', flex: 1 }}>
        <FilterButton
          label="Tout"
          count={totalCount}
          active={!filterId}
          onClick={() => onFilter(null)}
        />

        <div style={{ height: '1px', background: 'rgba(192,200,212,0.06)', margin: '0.75rem 0.5rem' }} />

        {muscuCategories.map((cat) => (
          <FilterButton
            key={cat.id}
            label={cat.label}
            count={cat.entryIds.length}
            active={filterId === cat.id}
            onClick={() => onFilter(cat.id)}
          />
        ))}
      </nav>
    </aside>
  )
}

function FilterButton({ label, count, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '0.35rem 0.6rem',
        borderRadius: '3px',
        border: 'none',
        borderLeft: active ? '2px solid #c0c8d4' : '2px solid transparent',
        background: active ? 'rgba(192,200,212,0.07)' : 'transparent',
        cursor: 'pointer',
        textAlign: 'left',
        marginBottom: '2px',
        transition: 'all 0.12s',
      }}
      onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = 'rgba(192,200,212,0.04)' }}
      onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = 'transparent' }}
    >
      <span style={{
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 500,
        fontSize: '0.72rem',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: active ? '#c0c8d4' : 'rgba(192,200,212,0.35)',
        transition: 'color 0.12s',
      }}>
        {label}
      </span>
      <span style={{
        fontFamily: '"Barlow", sans-serif',
        fontSize: '0.62rem',
        fontWeight: 400,
        color: active ? 'rgba(192,200,212,0.5)' : 'rgba(192,200,212,0.18)',
        letterSpacing: '0.05em',
      }}>
        {count}
      </span>
    </button>
  )
}
