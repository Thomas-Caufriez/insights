const ACCENT   = '#00e5b8'
const TEXT     = '#d1d8e8'
const TEXT_DIM = 'rgba(209,216,232,0.45)'
const BORDER   = 'rgba(255,255,255,0.06)'
const FONT     = '"Plus Jakarta Sans", sans-serif'
const MONO     = '"Space Mono", monospace'

const MARKET_COLORS = {
  'Crypto':             '#f7931a',
  'Forex':              '#00e5b8',
  'Actions':            '#7c85f0',
  'Matières premières': '#e5c46b',
  'Analyse technique':  '#4fc3f7',
  'Stratégie':          '#e5c46b',
  'Psychologie':        '#ce93d8',
}

const labelSt = {
  fontFamily: MONO,
  fontSize: '0.57rem',
  textTransform: 'uppercase',
  letterSpacing: '0.14em',
  color: 'rgba(0,229,184,0.45)',
  marginBottom: '0.5rem',
}

export function TradingPageHeader({ entry }) {
  const marketColor = MARKET_COLORS[entry.market] || ACCENT

  return (
    <div>
      <p style={{
        fontFamily: FONT, fontSize: '0.65rem', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.12em',
        color: marketColor, marginBottom: '0.5rem',
      }}>
        {entry.market}
      </p>

      <h1 style={{
        fontFamily: FONT,
        fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-0.02em',
        color: '#eef2ff', lineHeight: 1.05,
        marginBottom: entry.subtitle ? '0.4rem' : '1rem',
      }}>
        {entry.title}
      </h1>

      {entry.subtitle && (
        <p style={{
          fontFamily: FONT, fontWeight: 400, fontSize: '1rem',
          color: TEXT_DIM, letterSpacing: '-0.01em',
          marginBottom: '1.25rem', lineHeight: 1.5,
        }}>
          {entry.subtitle}
        </p>
      )}

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {entry.risk     && <MetaTag label={entry.risk}      color={marketColor} />}
        {entry.timeframe && <MetaTag label={entry.timeframe} />}
        {entry.type     && <MetaTag label={entry.type} />}
      </div>
    </div>
  )
}

export function TradingPageBody({ entry }) {
  return (
    <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>

      {entry.stats?.length > 0 && (
        <>
          <div style={{ width: '160px', flexShrink: 0 }}>
            <p style={labelSt}>Données clés</p>
            {entry.stats.map((stat, i) => (
              <div key={i} style={{ paddingBottom: '0.7rem', marginBottom: '0.7rem', borderBottom: `1px solid ${BORDER}` }}>
                <p style={{ fontFamily: MONO, fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(0,229,184,0.4)', marginBottom: '0.2rem' }}>
                  {stat.label}
                </p>
                <p style={{ fontFamily: FONT, fontSize: '0.88rem', fontWeight: 700, color: '#eef2ff', letterSpacing: '-0.01em' }}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div style={{ width: '1px', background: BORDER, flexShrink: 0, minHeight: '100px' }} />
        </>
      )}

      <div style={{ flex: 1, minWidth: 0 }}>
        {entry.sections?.map((section, i) => (
          <div key={i} style={{ marginBottom: '1.75rem' }}>
            <p style={{ ...labelSt, marginBottom: '0.6rem' }}>{section.title}</p>
            <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: '0.9rem', lineHeight: 1.75, color: TEXT, margin: 0 }}>
              {section.text}
            </p>
          </div>
        ))}

        {entry.notes && (
          <div style={{
            marginTop: '0.5rem', padding: '1rem 1.1rem',
            borderLeft: `2px solid rgba(0,229,184,0.25)`,
            background: 'rgba(0,229,184,0.04)',
            borderRadius: '0 8px 8px 0',
          }}>
            <p style={{ ...labelSt, marginBottom: '0.4rem' }}>Note</p>
            <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: '0.84rem', lineHeight: 1.7, color: TEXT_DIM, margin: 0 }}>
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
      fontFamily: FONT, fontSize: '0.65rem', fontWeight: 600,
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
