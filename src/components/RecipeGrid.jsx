import { getIllustration } from './illustrations'

export default function RecipeGrid({ entries, filterId, onSelect }) {
  const label = filterId
    ? null // sidebar already shows context
    : null

  return (
    <div style={{ padding: '2.5rem 3rem', overflowY: 'auto', height: '100%' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: '1.5rem',
          color: '#4a3728',
          fontWeight: 400,
        }}>
          {entries.length === 0 ? 'Aucun résultat' : 'Toutes les recettes'}
        </h2>
        <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.75rem', color: 'rgba(74,55,40,0.4)', marginTop: '0.25rem' }}>
          {entries.length} fiche{entries.length > 1 ? 's' : ''}
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
        gap: '1.25rem',
      }}>
        {entries.map((entry) => (
          <RecipeCard key={entry.id} entry={entry} onClick={() => onSelect(entry.id)} />
        ))}
      </div>
    </div>
  )
}

function RecipeCard({ entry, onClick }) {
  const Illustration = getIllustration(entry.illustration)

  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        textAlign: 'left',
        padding: 0,
        background: '#fffaf3',
        border: '1px solid rgba(139,94,60,0.12)',
        borderRadius: '14px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        boxShadow: '0 2px 8px rgba(74,55,40,0.06)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(74,55,40,0.13)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(74,55,40,0.06)'
      }}
    >
      {/* Illustration area — always at top, never shrinks */}
      <div style={{ height: '140px', flexShrink: 0, background: '#f5e8d0', overflow: 'hidden' }}>
        {Illustration ? (
          <Illustration style={{ width: '100%', height: '100%' }} />
        ) : (
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '2.5rem' }}>🍽</span>
          </div>
        )}
      </div>

      {/* Text area — fills remaining space, tags pinned to bottom */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0.9rem 1.1rem 1rem' }}>
        {/* Type badge */}
        <span style={{
          display: 'inline-block',
          alignSelf: 'flex-start',
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.6rem',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: '#8b5e3c',
          background: 'rgba(139,94,60,0.08)',
          borderRadius: '999px',
          padding: '0.15rem 0.5rem',
          marginBottom: '0.5rem',
        }}>
          {entry.type === 'recipe' ? entry.category : 'Technique'}
        </span>

        {/* Title */}
        <p style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: '0.95rem',
          color: '#4a3728',
          lineHeight: 1.35,
          marginBottom: '0.2rem',
        }}>
          {entry.titleBase}
        </p>
        <p style={{
          fontFamily: '"Playfair Display", serif',
          fontStyle: 'italic',
          fontSize: '0.88rem',
          color: '#8b5e3c',
          lineHeight: 1.3,
        }}>
          {entry.titleItalic}
        </p>

        {/* Spacer — pushes meta to bottom */}
        <div style={{ flex: 1 }} />

        {/* Meta — always at bottom */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
          {entry.type === 'recipe' ? (
            <>
              <Meta label={entry.time} />
              <Meta label={entry.difficulty} />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </button>
  )
}

function Meta({ label }) {
  return (
    <span style={{
      fontFamily: '"DM Sans", sans-serif',
      fontSize: '0.68rem',
      color: 'rgba(74,55,40,0.5)',
      background: 'rgba(139,94,60,0.06)',
      borderRadius: '999px',
      padding: '0.2rem 0.55rem',
    }}>
      {label}
    </span>
  )
}
