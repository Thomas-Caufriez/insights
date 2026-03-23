export function MuscuExerciseHeader({ entry }) {
  return (
    <div>
      {/* Muscle group label */}
      <p style={{
        fontFamily: '"Barlow", sans-serif',
        fontSize: '0.65rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: 'rgba(192,200,212,0.4)',
        marginBottom: '0.5rem',
      }}>
        {entry.muscleGroup}
      </p>

      {/* Title */}
      <h1 style={{
        fontFamily: '"Bebas Neue", sans-serif',
        fontSize: '3rem',
        letterSpacing: '0.06em',
        color: '#e8eaed',
        lineHeight: 1,
        marginBottom: entry.titleItalic ? '0.2rem' : '1rem',
      }}>
        {entry.titleBase}
      </h1>
      {entry.titleItalic && (
        <p style={{
          fontFamily: '"Barlow", sans-serif',
          fontWeight: 300,
          fontSize: '1rem',
          letterSpacing: '0.1em',
          color: 'rgba(192,200,212,0.45)',
          marginBottom: '1.25rem',
        }}>
          {entry.titleItalic}
        </p>
      )}

      {/* Meta row */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {entry.difficulty && <MetaTag label={entry.difficulty} />}
        {entry.equipment && <MetaTag label={entry.equipment} />}
        {entry.sets && <MetaTag label={entry.sets} highlight />}
      </div>
    </div>
  )
}

export function MuscuExerciseBody({ entry }) {
  return (
    <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>

      {/* Left column — muscles + sets info */}
      <div style={{ width: '160px', flexShrink: 0 }}>

        {entry.muscles?.primary?.length > 0 && (
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={labelStyle}>Muscles primaires</p>
            {entry.muscles.primary.map((m) => (
              <MuscleTag key={m} label={m} primary />
            ))}
          </div>
        )}

        {entry.muscles?.secondary?.length > 0 && (
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={labelStyle}>Secondaires</p>
            {entry.muscles.secondary.map((m) => (
              <MuscleTag key={m} label={m} />
            ))}
          </div>
        )}

        {entry.sets && (
          <div>
            <p style={labelStyle}>Volume</p>
            <p style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: '1.5rem',
              letterSpacing: '0.08em',
              color: '#e8eaed',
              lineHeight: 1,
            }}>
              {entry.sets}
            </p>
            <p style={{
              fontFamily: '"Barlow", sans-serif',
              fontSize: '0.62rem',
              letterSpacing: '0.08em',
              color: 'rgba(192,200,212,0.25)',
              marginTop: '0.2rem',
              textTransform: 'uppercase',
            }}>
              séries × reps
            </p>
          </div>
        )}
      </div>

      {/* Divider */}
      <div style={{ width: '1px', background: 'rgba(192,200,212,0.08)', flexShrink: 0, minHeight: '100px' }} />

      {/* Right column — steps */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ ...labelStyle, marginBottom: '1.25rem' }}>Exécution</p>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {entry.steps?.map((step, i) => (
            <li key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
              {/* Step number */}
              <span style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: '1rem',
                letterSpacing: '0.05em',
                color: 'rgba(192,200,212,0.2)',
                flexShrink: 0,
                width: '1.5rem',
                paddingTop: '0.05rem',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {/* Step text */}
              <p style={{
                fontFamily: '"Barlow", sans-serif',
                fontWeight: 400,
                fontSize: '0.88rem',
                lineHeight: 1.65,
                color: 'rgba(232,234,237,0.75)',
                margin: 0,
              }}>
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        {/* Notes */}
        {entry.notes && (
          <div style={{
            marginTop: '1.5rem',
            padding: '0.9rem 1rem',
            borderLeft: '2px solid rgba(192,200,212,0.15)',
            background: 'rgba(192,200,212,0.03)',
          }}>
            <p style={{
              fontFamily: '"Barlow", sans-serif',
              fontSize: '0.6rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'rgba(192,200,212,0.3)',
              marginBottom: '0.4rem',
            }}>
              Note
            </p>
            <p style={{
              fontFamily: '"Barlow", sans-serif',
              fontWeight: 400,
              fontSize: '0.82rem',
              lineHeight: 1.6,
              color: 'rgba(232,234,237,0.5)',
              margin: 0,
            }}>
              {entry.notes}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

const labelStyle = {
  fontFamily: '"Barlow", sans-serif',
  fontSize: '0.6rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.18em',
  color: 'rgba(192,200,212,0.3)',
  marginBottom: '0.5rem',
}

function MetaTag({ label, highlight }) {
  return (
    <span style={{
      fontFamily: '"Barlow", sans-serif',
      fontSize: '0.62rem',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: highlight ? '#e8eaed' : 'rgba(192,200,212,0.4)',
      border: `1px solid ${highlight ? 'rgba(192,200,212,0.25)' : 'rgba(192,200,212,0.1)'}`,
      borderRadius: '2px',
      padding: '0.2rem 0.55rem',
    }}>
      {label}
    </span>
  )
}

function MuscleTag({ label, primary }) {
  return (
    <div style={{
      fontFamily: '"Barlow", sans-serif',
      fontSize: '0.72rem',
      fontWeight: primary ? 500 : 400,
      letterSpacing: '0.04em',
      color: primary ? 'rgba(232,234,237,0.7)' : 'rgba(192,200,212,0.35)',
      padding: '0.2rem 0',
      borderBottom: '1px solid rgba(192,200,212,0.06)',
      marginBottom: '0.25rem',
    }}>
      {label}
    </div>
  )
}
