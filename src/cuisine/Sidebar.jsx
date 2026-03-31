import { entries, categories } from './data'

export default function Sidebar({ filterId, onFilter, onHome, isMobile, onClose }) {
  const totalCount = entries.length

  return (
    <aside
      style={{
        width: '220px',
        flexShrink: 0,
        background: '#2a1f0e',
        borderRight: '1px solid rgba(245,200,114,0.07)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      {/* Brand */}
      <div
        style={{
          padding: '1.25rem 1.5rem 1.25rem',
          borderBottom: '1px solid rgba(245,200,114,0.07)',
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
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.62rem',
            letterSpacing: '0.06em',
            color: 'rgba(245,200,114,0.35)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            marginBottom: '0.75rem',
            transition: 'color 0.12s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(245,200,114,0.7)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,200,114,0.35)')}
        >
          ← Insights
        </button>
        <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', color: '#f5c872', fontSize: '1.1rem', lineHeight: 1.3 }}>
          Carnet de<br />Recettes
        </p>
        </div>
        {isMobile && (
          <button
            onClick={onClose}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'rgba(245,200,114,0.35)', fontSize: '1.1rem', lineHeight: 1,
              padding: '0.1rem', flexShrink: 0, marginLeft: '0.5rem',
            }}
          >
            ✕
          </button>
        )}
      </div>

      {/* Nav */}
      <nav style={{ padding: '1rem 0.75rem', flex: 1 }}>
        {/* Tout */}
        <FilterButton
          label="Tout"
          count={totalCount}
          active={!filterId}
          onClick={() => onFilter(null)}
        />

        <div style={{ height: '1px', background: 'rgba(245,200,114,0.07)', margin: '0.75rem 0.5rem' }} />

        {/* Categories */}
        {categories.filter((cat) => cat.entryIds.length > 0).map((cat) => (
          <FilterButton
            key={cat.id}
            label={cat.label}
            count={cat.entryIds.length}
            active={filterId === cat.id}
            onClick={() => onFilter(cat.id)}
            bold
          />
        ))}
      </nav>
    </aside>
  )
}

function FilterButton({ label, count, active, onClick, bold, indent }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: indent ? '0.3rem 0.6rem 0.3rem 1.4rem' : '0.35rem 0.6rem',
        borderRadius: '6px',
        border: 'none',
        background: active ? 'rgba(245,200,114,0.1)' : 'transparent',
        cursor: 'pointer',
        textAlign: 'left',
        marginBottom: '1px',
        transition: 'background 0.12s',
      }}
      onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = 'rgba(245,200,114,0.05)' }}
      onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = 'transparent' }}
    >
      <span style={{
        fontFamily: bold ? '"DM Sans", sans-serif' : 'Lora, serif',
        fontWeight: bold ? 500 : 400,
        fontSize: indent ? '0.78rem' : bold ? '0.75rem' : '0.82rem',
        textTransform: bold ? 'uppercase' : 'none',
        letterSpacing: bold ? '0.1em' : 'normal',
        fontStyle: !bold && !indent ? 'italic' : 'normal',
        color: active ? '#f5c872' : bold ? 'rgba(245,200,114,0.4)' : 'rgba(255,235,180,0.6)',
      }}>
        {!bold && indent && <span style={{ marginRight: '0.4rem', fontSize: '0.4rem', opacity: 0.5 }}>●</span>}
        {label}
      </span>
      <span style={{
        fontFamily: '"DM Sans", sans-serif',
        fontSize: '0.65rem',
        color: active ? 'rgba(245,200,114,0.6)' : 'rgba(255,235,180,0.2)',
        background: 'rgba(245,200,114,0.07)',
        padding: '0.1rem 0.4rem',
        borderRadius: '999px',
      }}>
        {count}
      </span>
    </button>
  )
}
