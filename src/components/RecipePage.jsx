import { getIllustration } from './illustrations'
import LeftColumn from './LeftColumn'
import { useIsMobile } from '../hooks/useIsMobile'

export function RecipePageHeader({ entry }) {
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
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <Badge label={entry.time} />
          <Badge label={entry.difficulty} />
          <Badge label={`${entry.servings} personne`} />
        </div>
      </div>
      {Illustration && (
        <div style={{ flexShrink: 0, width: '110px', height: '110px' }}>
          <Illustration />
        </div>
      )}
    </div>
  )
}

export function RecipePageBody({ entry }) {
  const isMobile = useIsMobile()
  return (
    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '1.5rem' : '2.5rem', fontFamily: 'Lora, Georgia, serif' }}>
      <LeftColumn ingredients={entry.ingredients} tools={entry.tools} />
      {!isMobile && <div style={{ width: '1px', background: 'rgba(139,94,60,0.15)', flexShrink: 0 }} />}
      {isMobile && <div style={{ height: '1px', background: 'rgba(139,94,60,0.15)' }} />}
      <section style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#8b5e3c', marginBottom: '0.75rem' }}>
          Préparation
        </p>
        <Steps steps={entry.steps} />
        {entry.notes && <Note>{entry.notes}</Note>}
      </section>
    </div>
  )
}

export default function RecipePage({ entry }) {
  return (
    <article>
      <RecipePageHeader entry={entry} />
      <RecipePageBody entry={entry} />
    </article>
  )
}

export function Steps({ steps }) {
  return (
    <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
      {steps.map((step, i) => {
        const text = typeof step === 'string' ? step : step.text
        return (
          <li key={i} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
            <span style={{
              flexShrink: 0, width: '26px', height: '26px', borderRadius: '50%',
              background: '#8b5e3c', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: '"DM Sans", sans-serif', fontSize: '0.72rem', fontWeight: 600, marginTop: '1px',
            }}>
              {i + 1}
            </span>
            <p style={{ color: '#4a3728', fontSize: '0.9rem', lineHeight: 1.7 }}>{text}</p>
          </li>
        )
      })}
    </ol>
  )
}

export function Note({ children }) {
  return (
    <div style={{ marginTop: '1.25rem', padding: '0.75rem 1rem', borderRadius: '8px', background: 'rgba(139,94,60,0.07)', borderLeft: '3px solid rgba(139,94,60,0.4)' }}>
      <p style={{ fontFamily: 'Lora, serif', fontStyle: 'italic', color: '#8b5e3c', fontSize: '0.86rem', lineHeight: 1.6 }}>
        💡 {children}
      </p>
    </div>
  )
}

function Badge({ label }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '0.2rem 0.7rem', borderRadius: '999px',
      background: 'rgba(139,94,60,0.1)', color: '#8b5e3c',
      fontFamily: '"DM Sans", sans-serif', fontWeight: 500, fontSize: '0.72rem',
    }}>
      {label}
    </span>
  )
}
