import { useState, useEffect } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

export default function LeftColumn({ ingredients, note }) {
  const isMobile = useIsMobile()
  const hasIngredients = ingredients?.length > 0
  const hasNote = !!note
  const isCalculable = hasIngredients && ingredients.some((i) => i.base != null)

  const defaultView = hasIngredients ? 'ingredients' : 'note'
  const [view, setView] = useState(defaultView)
  const [people, setPeople] = useState(1)

  useEffect(() => {
    setView(hasIngredients ? 'ingredients' : 'note')
  }, [hasIngredients, hasNote])

  const optionCount = [hasIngredients, hasNote].filter(Boolean).length
  const hasToggle = optionCount > 1

  return (
    <section style={{ width: isMobile ? '100%' : '240px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>

      {/* Toggle or static label */}
      {hasToggle ? (
        <div style={{ display: 'inline-flex', borderRadius: '999px', border: '1px solid rgba(139,94,60,0.2)', overflow: 'hidden', alignSelf: 'flex-start' }}>
          {hasIngredients && (
            <ToggleBtn active={view === 'ingredients'} onClick={() => setView('ingredients')}>
              Ingrédients
            </ToggleBtn>
          )}
          {hasNote && (
            <ToggleBtn active={view === 'note'} onClick={() => setView('note')}>
              Note
            </ToggleBtn>
          )}
        </div>
      ) : (
        <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#8b5e3c' }}>
          {hasIngredients ? 'Ingrédients' : 'Note'}
        </p>
      )}

      {/* People counter — only when viewing calculable ingredients */}
      {view === 'ingredients' && isCalculable && (
        <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(139,94,60,0.2)', borderRadius: '999px', overflow: 'hidden', alignSelf: 'flex-start' }}>
          <CounterBtn onClick={() => setPeople((p) => Math.max(1, p - 1))}>−</CounterBtn>
          <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.72rem', color: '#4a3728', padding: '0.2rem 0.5rem', minWidth: '60px', textAlign: 'center', whiteSpace: 'nowrap' }}>
            {people} pers.
          </span>
          <CounterBtn onClick={() => setPeople((p) => p + 1)}>+</CounterBtn>
        </div>
      )}

      {/* Note view */}
      {view === 'note' && (
        <p style={{ fontFamily: 'Lora, serif', fontStyle: 'italic', color: '#8b5e3c', fontSize: '0.86rem', lineHeight: 1.6 }}>
          {note}
        </p>
      )}

      {/* Ingredients list */}
      {view === 'ingredients' && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {ingredients.map((item, i) => {
            const isRow = item.base != null
            const label = typeof item === 'string' ? item : item.label
            const qty = isRow
              ? [item.base * people, item.unit].filter(Boolean).join(' ')
              : (typeof item === 'object' ? item.qty : null)

            return (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <span style={{
                  flexShrink: 0, marginTop: '3px',
                  width: '13px', height: '13px', borderRadius: '3px',
                  background: 'rgba(139,94,60,0.08)', border: '1.5px solid rgba(139,94,60,0.22)',
                  display: 'inline-block',
                }} />
                <span style={{ color: '#4a3728', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  {qty && (
                    <strong style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 500 }}>
                      {qty}{' '}
                    </strong>
                  )}
                  {label}
                </span>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}

function ToggleBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.25rem 0.7rem', border: 'none', borderRight: '1px solid rgba(139,94,60,0.2)',
        background: active ? '#8b5e3c' : 'transparent',
        color: active ? 'white' : '#8b5e3c',
        fontFamily: '"DM Sans", sans-serif', fontSize: '0.65rem', fontWeight: 500,
        cursor: 'pointer', transition: 'all 0.15s', whiteSpace: 'nowrap',
      }}
    >
      {children}
    </button>
  )
}

function CounterBtn({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(139,94,60,0.07)', border: 'none', color: '#8b5e3c',
        fontFamily: '"DM Sans", sans-serif', fontSize: '0.95rem', cursor: 'pointer', lineHeight: 1,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(139,94,60,0.15)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(139,94,60,0.07)')}
    >
      {children}
    </button>
  )
}
