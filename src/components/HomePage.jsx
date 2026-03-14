const categories = [
  {
    id: 'cooking',
    label: 'Cuisine',
    description: 'Recettes, fiches techniques, carnets de saveurs.',
    // Preview of the cooking world's palette
    accentColor: '#f5c872',
    borderColor: 'rgba(245,200,114,0.2)',
    hoverBorder: 'rgba(245,200,114,0.45)',
    dot: '#f5c872',
  },
  // Future categories — add entries here
]

export default function HomePage({ onSelect }) {
  return (
    <div>
      {/* Wordmark */}
      <div style={{ marginBottom: '3.5rem' }}>
        <h1
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 300,
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.25)',
            marginBottom: '1rem',
          }}
        >
          Insights
        </h1>
        <p
          style={{
            fontFamily: 'Lora, Georgia, serif',
            fontStyle: 'italic',
            fontSize: '2rem',
            color: 'rgba(255,255,255,0.82)',
            lineHeight: 1.3,
            fontWeight: 400,
          }}
        >
          Où voulez-vous
          <br />
          aller aujourd'hui ?
        </p>
      </div>

      {/* Category list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {categories.map((cat) => (
          <CategoryRow key={cat.id} cat={cat} onSelect={onSelect} />
        ))}

        {/* Placeholder */}
        <div
          style={{
            padding: '1rem 1.25rem',
            borderRadius: '10px',
            border: '1px dashed rgba(255,255,255,0.07)',
            color: 'rgba(255,255,255,0.15)',
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.75rem',
          }}
        >
          + à venir
        </div>
      </div>

      {/* Footer */}
      <p
        style={{
          marginTop: '4rem',
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.65rem',
          color: 'rgba(255,255,255,0.12)',
          letterSpacing: '0.08em',
        }}
      >
        {new Date().getFullYear()}
      </p>
    </div>
  )
}

function CategoryRow({ cat, onSelect }) {
  return (
    <button
      onClick={() => onSelect(cat.id)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        width: '100%',
        textAlign: 'left',
        padding: '1rem 1.25rem',
        borderRadius: '10px',
        background: 'transparent',
        border: `1px solid ${cat.borderColor}`,
        cursor: 'pointer',
        transition: 'all 0.15s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = `1px solid ${cat.hoverBorder}`
        e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = `1px solid ${cat.borderColor}`
        e.currentTarget.style.background = 'transparent'
      }}
    >
      {/* Color dot — preview of the world's accent */}
      <span
        style={{
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          background: cat.dot,
          flexShrink: 0,
          opacity: 0.7,
        }}
      />

      {/* Text */}
      <span style={{ flex: 1 }}>
        <span
          style={{
            display: 'block',
            fontFamily: 'Lora, Georgia, serif',
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.4,
          }}
        >
          {cat.label}
        </span>
        <span
          style={{
            display: 'block',
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.72rem',
            color: 'rgba(255,255,255,0.28)',
            marginTop: '0.15rem',
          }}
        >
          {cat.description}
        </span>
      </span>

      {/* Arrow */}
      <span
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.2)',
          flexShrink: 0,
        }}
      >
        →
      </span>
    </button>
  )
}
