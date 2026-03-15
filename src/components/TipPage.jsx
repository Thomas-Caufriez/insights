import { getIllustration } from './illustrations'
import LeftColumn from './LeftColumn'
import { Note } from './RecipePage'

export function TipPageHeader({ entry }) {
  const Illustration = getIllustration(entry.illustration)
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', fontFamily: 'Lora, Georgia, serif' }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#8b5e3c', marginBottom: '0.5rem' }}>
          {entry.category}
        </p>
        <h2 style={{ fontFamily: '"Playfair Display", serif', color: '#4a3728', fontSize: '1.75rem', lineHeight: 1.25, marginBottom: '0.25rem' }}>
          {entry.titleBase} <em style={{ color: '#8b5e3c' }}>{entry.titleItalic}</em>
        </h2>
      </div>
      {Illustration && (
        <div style={{ flexShrink: 0, width: '110px', height: '110px' }}>
          <Illustration />
        </div>
      )}
    </div>
  )
}

export function TipPageBody({ entry }) {
  return (
    <div style={{ display: 'flex', gap: '2.5rem', fontFamily: 'Lora, Georgia, serif' }}>
      <LeftColumn ingredients={entry.ingredients} tools={entry.tools} />
      <div style={{ width: '1px', background: 'rgba(139,94,60,0.15)', flexShrink: 0 }} />
      <section style={{ flex: 1, minWidth: 0 }}>
        {entry.sections?.filter(s => s.body).map((section, i) => (
          <div key={i} style={{ padding: '0.7rem 1rem', borderRadius: '8px', background: 'rgba(139,94,60,0.05)', border: '1px solid rgba(139,94,60,0.1)', marginBottom: '1.25rem' }}>
            <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8b5e3c', marginBottom: '0.4rem' }}>
              {section.heading}
            </p>
            <p style={{ color: '#4a3728', fontSize: '0.88rem', lineHeight: 1.65 }}>{section.body}</p>
          </div>
        ))}
        {entry.steps && (
          <>
            <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#8b5e3c', marginBottom: '0.75rem' }}>
              Préparation
            </p>
            <StepsWithIllustrations steps={entry.steps} />
          </>
        )}
        {entry.video && (
          <div style={{ marginTop: '1.5rem', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(139,94,60,0.15)' }}>
            <iframe
              src={entry.video}
              title="Vidéo de référence"
              width="100%"
              height="315"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ display: 'block' }}
            />
          </div>
        )}
        {entry.notes && <Note>{entry.notes}</Note>}
      </section>
    </div>
  )
}

export default function TipPage({ entry }) {
  return (
    <article>
      <TipPageHeader entry={entry} />
      <TipPageBody entry={entry} />
    </article>
  )
}

function StepsWithIllustrations({ steps }) {
  return (
    <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
      {steps.map((step, i) => {
        const text = typeof step === 'string' ? step : step.text
        const StepIllustration = typeof step === 'object' && step.illustration
          ? getIllustration(step.illustration)
          : null
        return (
          <li key={i} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
            <span style={{
              flexShrink: 0, width: '26px', height: '26px', borderRadius: '50%',
              background: '#8b5e3c', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: '"DM Sans", sans-serif', fontSize: '0.72rem', fontWeight: 600, marginTop: '1px',
            }}>
              {i + 1}
            </span>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#4a3728', fontSize: '0.9rem', lineHeight: 1.7 }}>{text}</p>
              {StepIllustration && (
                <div style={{ marginTop: '0.85rem', borderRadius: '10px', overflow: 'hidden', maxWidth: '320px', border: '1px solid rgba(139,94,60,0.12)' }}>
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
