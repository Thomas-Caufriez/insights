import { useState } from 'react'

export default function MuscuGrid({ entries, filterId, onSelect, isMobile, onMenuOpen }) {
  const [search, setSearch] = useState('')

  const q = search.trim().toLowerCase()
  const visible = q
    ? entries.filter((e) =>
        [e.titleBase, e.titleItalic, e.muscleGroup]
          .filter(Boolean)
          .some((s) => s.toLowerCase().includes(q))
      )
    : entries

  return (
    <div style={{
      padding: isMobile ? '1.5rem 1rem' : '2.5rem 3rem',
      overflowY: 'auto',
      height: '100%',
      background: '#1c1e22',
    }}>

      {/* Header */}
      <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
        <div>
          <h2 style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: '2rem',
            color: '#e8eaed',
            fontWeight: 400,
            letterSpacing: '0.08em',
          }}>
            {visible.length === 0 && q ? 'Aucun résultat' : 'Tous les exercices'}
          </h2>
          <p style={{
            fontFamily: '"Barlow", sans-serif',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(192,200,212,0.3)',
            marginTop: '0.2rem',
          }}>
            {visible.length} exercice{visible.length > 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Search bar */}
      <div style={{ marginBottom: '1.75rem', position: 'relative', maxWidth: '320px' }}>
        <span style={{
          position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)',
          fontSize: '0.8rem', color: 'rgba(192,200,212,0.3)', pointerEvents: 'none',
        }}>
          ⌕
        </span>
        <input
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: '100%',
            fontFamily: '"Barlow", sans-serif',
            fontSize: '0.8rem',
            fontWeight: 400,
            color: '#c0c8d4',
            background: 'rgba(192,200,212,0.05)',
            border: '1px solid rgba(192,200,212,0.1)',
            borderRadius: '3px',
            padding: '0.45rem 0.75rem 0.45rem 2rem',
            outline: 'none',
            transition: 'border-color 0.15s',
          }}
          onFocus={(e) => (e.target.style.borderColor = 'rgba(192,200,212,0.35)')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(192,200,212,0.1)')}
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            style={{
              position: 'absolute', right: '0.6rem', top: '50%', transform: 'translateY(-50%)',
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '0.7rem', color: 'rgba(192,200,212,0.3)', padding: '0.1rem 0.2rem',
            }}
          >
            ✕
          </button>
        )}
      </div>

      {/* Empty state */}
      {visible.length === 0 && !q && (
        <div style={{ marginTop: '3rem' }}>
          <p style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: '1.4rem',
            letterSpacing: '0.1em',
            color: 'rgba(192,200,212,0.2)',
            marginBottom: '0.4rem',
          }}>
            Bientôt disponible
          </p>
          <p style={{
            fontFamily: '"Barlow", sans-serif',
            fontSize: '0.75rem',
            fontWeight: 400,
            letterSpacing: '0.08em',
            color: 'rgba(192,200,212,0.15)',
          }}>
            Les exercices arrivent prochainement.
          </p>
        </div>
      )}

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
        gap: '1px',
      }}>
        {visible.map((entry) => (
          <ExerciseCard key={entry.id} entry={entry} onClick={() => onSelect(entry.id)} />
        ))}
      </div>
    </div>
  )
}

function ExerciseCard({ entry, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        textAlign: 'left',
        padding: 0,
        background: '#242729',
        border: 'none',
        borderRadius: 0,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'background 0.15s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = '#2c2f33' }}
      onMouseLeave={(e) => { e.currentTarget.style.background = '#242729' }}
    >
      {/* Preview area — muscle group name as graphic element */}
      <div style={{
        height: '120px',
        flexShrink: 0,
        background: '#1a1c20',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderBottom: '1px solid rgba(192,200,212,0.06)',
      }}>
        {/* Big faint muscle group text as background */}
        <span style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: '3.5rem',
          letterSpacing: '0.1em',
          color: 'rgba(192,200,212,0.06)',
          userSelect: 'none',
          position: 'absolute',
        }}>
          {entry.muscleGroup?.toUpperCase()}
        </span>
        {/* Sets indicator */}
        {entry.sets && (
          <span style={{
            position: 'absolute',
            bottom: '0.6rem',
            right: '0.75rem',
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: '0.85rem',
            letterSpacing: '0.12em',
            color: 'rgba(192,200,212,0.25)',
          }}>
            {entry.sets}
          </span>
        )}
      </div>

      {/* Text area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0.85rem 1rem 0.9rem' }}>
        {/* Muscle group badge */}
        <span style={{
          display: 'inline-block',
          alignSelf: 'flex-start',
          fontFamily: '"Barlow", sans-serif',
          fontSize: '0.58rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: 'rgba(192,200,212,0.45)',
          marginBottom: '0.5rem',
        }}>
          {entry.muscleGroup}
        </span>

        {/* Title */}
        <p style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: '1.25rem',
          letterSpacing: '0.06em',
          color: '#e8eaed',
          lineHeight: 1.1,
          marginBottom: '0.15rem',
        }}>
          {entry.titleBase}
        </p>
        {entry.titleItalic && (
          <p style={{
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 300,
            fontSize: '0.8rem',
            letterSpacing: '0.06em',
            color: 'rgba(192,200,212,0.5)',
            lineHeight: 1.3,
          }}>
            {entry.titleItalic}
        </p>
        )}

        <div style={{ flex: 1 }} />

        {/* Meta */}
        <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.7rem', flexWrap: 'wrap' }}>
          {entry.difficulty && <Meta label={entry.difficulty} />}
          {entry.equipment && <Meta label={entry.equipment} />}
        </div>
      </div>
    </button>
  )
}

function Meta({ label }) {
  return (
    <span style={{
      fontFamily: '"Barlow", sans-serif',
      fontSize: '0.62rem',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'rgba(192,200,212,0.35)',
      border: '1px solid rgba(192,200,212,0.1)',
      borderRadius: '2px',
      padding: '0.15rem 0.45rem',
    }}>
      {label}
    </span>
  )
}
