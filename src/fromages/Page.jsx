const ACCENT   = '#d4a44c'
const TEXT     = '#f0e6d3'
const TEXT_DIM = 'rgba(240,230,211,0.45)'
const BORDER   = 'rgba(212,164,76,0.1)'
const FONT     = '"Playfair Display", Georgia, serif'
const UI       = '"DM Sans", sans-serif'
const MONO     = '"Space Grotesk", sans-serif'

const FAMILLE_COLORS = {
  'Pâte pressée cuite':         '#d4c44c',
  'Pâte pressée non cuite':     '#c4a44c',
  'Pâte molle à croûte fleurie':'#e8c87a',
  'Pâte molle à croûte lavée':  '#e8935a',
  'Pâte persillée':              '#7ab8d4',
  'Fromage de chèvre':           '#a8d48a',
  'Fromage frais':               '#d4eaa8',
}

const labelSt = {
  fontFamily: UI,
  fontSize: '0.57rem',
  textTransform: 'uppercase',
  letterSpacing: '0.14em',
  color: `rgba(212,164,76,0.5)`,
  marginBottom: '0.5rem',
}

export function FromagesPageHeader({ entry }) {
  const color = FAMILLE_COLORS[entry.famille] || ACCENT

  return (
    <div>
      <p style={{
        fontFamily: UI, fontSize: '0.65rem', fontWeight: 600,
        textTransform: 'uppercase', letterSpacing: '0.12em',
        color, marginBottom: '0.5rem',
      }}>
        {entry.famille}
      </p>

      <h1 style={{
        fontFamily: FONT, fontStyle: 'italic',
        fontSize: '2.6rem', fontWeight: 700, letterSpacing: '-0.01em',
        color: '#f5ece0', lineHeight: 1.05,
        marginBottom: entry.subtitle ? '0.4rem' : '1rem',
      }}>
        {entry.title}
      </h1>

      {entry.subtitle && (
        <p style={{
          fontFamily: UI, fontWeight: 400, fontSize: '1rem',
          color: TEXT_DIM, letterSpacing: '-0.01em',
          marginBottom: '1.25rem', lineHeight: 1.5,
        }}>
          {entry.subtitle}
        </p>
      )}

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {entry.aop     && <MetaTag label="AOP" color={color} />}
        {entry.region  && <MetaTag label={entry.region} />}
        {entry.lait    && <MetaTag label={entry.lait} />}
        {entry.affinage && <MetaTag label={`Affinage : ${entry.affinage}`} />}
      </div>
    </div>
  )
}

export function FromagesPageBody({ entry }) {
  return (
    <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>

      {entry.stats?.length > 0 && (
        <>
          <div style={{ width: '160px', flexShrink: 0 }}>
            <p style={labelSt}>Fiche rapide</p>
            {entry.stats.map((stat, i) => (
              <div key={i} style={{ paddingBottom: '0.7rem', marginBottom: '0.7rem', borderBottom: `1px solid ${BORDER}` }}>
                <p style={{ fontFamily: UI, fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: `rgba(212,164,76,0.4)`, marginBottom: '0.2rem' }}>
                  {stat.label}
                </p>
                <p style={{ fontFamily: MONO, fontSize: '0.88rem', fontWeight: 600, color: '#f5ece0', letterSpacing: '-0.01em' }}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div style={{ width: '1px', background: BORDER, flexShrink: 0, minHeight: '100px' }} />
        </>
      )}

      <div style={{ flex: 1, minWidth: 0 }}>
        {entry.sections?.map((section, i) => {
          const isMets    = section.title === 'Accords mets'
          const isBoisson = section.title === 'Accords boissons'
          const isSpecial = isMets || isBoisson

          return (
            <div key={i} style={{ marginBottom: '1.75rem' }}>
              <p style={{ ...labelSt, marginBottom: '0.6rem' }}>{section.title}</p>
              {isSpecial && (
                <div style={{
                  display: 'inline-block', marginBottom: '0.5rem',
                  padding: '0.15rem 0.55rem',
                  borderRadius: '99px',
                  border: `1px solid ${isMets ? 'rgba(212,164,76,0.2)' : 'rgba(122,184,212,0.2)'}`,
                  background: isMets ? 'rgba(212,164,76,0.05)' : 'rgba(122,184,212,0.05)',
                }}>
                  <span style={{ fontFamily: UI, fontSize: '0.6rem', color: isMets ? ACCENT : '#7ab8d4', opacity: 0.8 }}>
                    {isMets ? '🍽 Mets' : '🍷 Boissons'}
                  </span>
                </div>
              )}
              <p style={{ fontFamily: UI, fontWeight: 400, fontSize: '0.9rem', lineHeight: 1.8, color: TEXT, margin: 0 }}>
                {section.text}
              </p>
            </div>
          )
        })}

        {entry.notes && (
          <div style={{
            marginTop: '0.5rem', padding: '1rem 1.1rem',
            borderLeft: `2px solid rgba(212,164,76,0.3)`,
            background: 'rgba(212,164,76,0.04)',
            borderRadius: '0 8px 8px 0',
          }}>
            <p style={{ ...labelSt, marginBottom: '0.4rem' }}>À retenir</p>
            <p style={{ fontFamily: UI, fontWeight: 400, fontSize: '0.84rem', lineHeight: 1.75, color: TEXT_DIM, margin: 0 }}>
              {entry.notes}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function MetaTag({ label, color }) {
  return (
    <span style={{
      fontFamily: UI, fontSize: '0.65rem', fontWeight: 600,
      letterSpacing: '0.02em',
      color: color || TEXT_DIM,
      border: `1px solid ${color ? `${color}30` : 'rgba(255,255,255,0.08)'}`,
      borderRadius: '99px',
      padding: '0.22rem 0.65rem',
    }}>
      {label}
    </span>
  )
}
