import { getIllustration } from './illustrations'
import LeftColumn from './LeftColumn'
import { Note } from './RecipePage'

export default function TipPage({ entry }) {
  const Illustration = getIllustration(entry.illustration)

  return (
    <article style={{ height: '100%', display: 'flex', flexDirection: 'column', fontFamily: 'Lora, Georgia, serif' }}>
      {/* Header */}
      <header style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(139,94,60,0.15)', flexShrink: 0 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#8b5e3c', marginBottom: '0.5rem' }}>
            {entry.category}
          </p>
          <h2 style={{ fontFamily: '"Playfair Display", serif', color: '#4a3728', fontSize: '1.6rem', lineHeight: 1.25, marginBottom: '0.25rem' }}>
            {entry.titleBase} <em style={{ color: '#8b5e3c' }}>{entry.titleItalic}</em>
          </h2>
          {entry.subtitle && (
            <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', color: '#8b5e3c', fontSize: '1rem' }}>
              {entry.subtitle}
            </p>
          )}
        </div>
        {Illustration && (
          <div style={{ flexShrink: 0, width: '110px', height: '110px' }}>
            <Illustration />
          </div>
        )}
      </header>

      {/* Body */}
      <div style={{ display: 'flex', gap: '2rem', flex: 1, minHeight: 0, marginTop: '1.5rem' }}>
        <LeftColumn ingredients={entry.ingredients} tools={entry.tools} />

        <div style={{ width: '1px', background: 'rgba(139,94,60,0.15)', flexShrink: 0 }} />

        <section style={{ flex: 1, minWidth: 0, overflowY: 'auto' }}>
          {/* Body sections (intros, notes, etc.) — rows are now in LeftColumn */}
          {entry.sections?.filter(s => s.body).map((section, i) => (
            <div key={i} style={{ padding: '0.7rem 1rem', borderRadius: '8px', background: 'rgba(139,94,60,0.05)', border: '1px solid rgba(139,94,60,0.1)', marginBottom: '1.25rem' }}>
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8b5e3c', marginBottom: '0.4rem' }}>
                {section.heading}
              </p>
              <p style={{ color: '#4a3728', fontSize: '0.82rem', lineHeight: 1.65 }}>{section.body}</p>
            </div>
          ))}

          {/* Steps */}
          {entry.steps && (
            <>
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#8b5e3c', marginBottom: '0.75rem' }}>
                Préparation
              </p>
              <StepsWithIllustrations steps={entry.steps} />
            </>
          )}

          {entry.notes && <Note>{entry.notes}</Note>}
        </section>
      </div>
    </article>
  )
}

function StepsWithIllustrations({ steps }) {
  return (
    <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {steps.map((step, i) => {
        const text = typeof step === 'string' ? step : step.text
        const StepIllustration = typeof step === 'object' && step.illustration
          ? getIllustration(step.illustration)
          : null
        return (
          <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <span style={{
              flexShrink: 0, width: '24px', height: '24px', borderRadius: '50%',
              background: '#8b5e3c', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: '"DM Sans", sans-serif', fontSize: '0.7rem', fontWeight: 600, marginTop: '1px',
            }}>
              {i + 1}
            </span>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#4a3728', fontSize: '0.84rem', lineHeight: 1.65 }}>{text}</p>
              {StepIllustration && (
                <div style={{ marginTop: '0.75rem', borderRadius: '10px', overflow: 'hidden', maxWidth: '320px', border: '1px solid rgba(139,94,60,0.12)' }}>
                  <StepIllustration style={{ display: 'block', width: '100%', height: 'auto' }} />
                </div>
              )}
            </div>
          </li>
        )
      })}
    </ol>
  )
}
