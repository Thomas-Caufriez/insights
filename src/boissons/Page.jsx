import { useState } from 'react'
import { getBoissonsIllustration } from './illustrations'
import { useIsMobile } from '../hooks/useIsMobile'

const ACCENT   = '#2ebdb1'
const CORAL    = '#e87a5a'
const TEXT     = '#1a3830'
const TEXT_MID = 'rgba(26,56,48,0.6)'
const TEXT_DIM = 'rgba(26,56,48,0.4)'
const BORDER   = 'rgba(46,189,177,0.14)'
const FONT     = '"Playfair Display", Georgia, serif'
const UI       = '"DM Sans", sans-serif'
const MONO     = '"Space Grotesk", sans-serif'

export function BoissonsPageHeader({ entry }) {
  const Ill = getBoissonsIllustration(entry.illustration)

  return (
    <div>
      {/* ── Hero card: illustration + title integrated ── */}
      <div style={{
        position: 'relative', overflow: 'hidden',
        borderRadius: '18px',
        background: 'linear-gradient(135deg, #1a3530 0%, #204038 60%, #172e2a 100%)',
        padding: '1.5rem 1.75rem',
        marginBottom: '1.25rem',
        display: 'flex', alignItems: 'center', gap: '1.4rem',
      }}>
        {/* Background tiki decoration */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} viewBox="0 0 500 120" preserveAspectRatio="xMidYMid slice">
          {/* Stars */}
          {[[20,15],[80,8],[150,20],[260,10],[350,18],[430,8],[475,24]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r={0.9} fill="white" opacity={0.12+i*0.02} />
          ))}
          {/* Palm fronds — top-right */}
          <path d="M 500 0 Q 470 20 440 30 Q 460 18 500 10 Z" fill="#2e7d32" opacity="0.25" />
          <path d="M 500 0 Q 465 30 435 50 Q 458 30 500 20 Z" fill="#388e3c" opacity="0.2" />
          <path d="M 500 10 Q 460 40 430 60 Q 455 38 500 30 Z" fill="#2e7d32" opacity="0.18" />
          {/* Tiki mask faint — far right */}
          <g opacity="0.045" transform="translate(380, 10) scale(0.42)">
            <ellipse cx="100" cy="110" rx="55" ry="70" stroke="#5dd4ca" strokeWidth="3" fill="none" />
            <rect x="58" y="78" width="30" height="20" rx="3" stroke="#5dd4ca" strokeWidth="2.5" fill="none" />
            <rect x="112" y="78" width="30" height="20" rx="3" stroke="#5dd4ca" strokeWidth="2.5" fill="none" />
            <path d="M 100 110 L 88 128 L 112 128 Z" stroke="#5dd4ca" strokeWidth="2" fill="none" />
            <rect x="62" y="138" width="76" height="26" rx="4" stroke="#5dd4ca" strokeWidth="2.5" fill="none" />
          </g>
          {/* Bottom wave */}
          <path d="M 0 108 C 60 100 120 114 180 108 C 240 102 300 114 360 108 C 420 102 470 112 500 108 L 500 120 L 0 120 Z" fill="#5dd4ca" opacity="0.1" />
        </svg>

        {/* Illustration */}
        {Ill && (
          <div style={{
            flexShrink: 0,
            width: '96px', height: '96px',
            borderRadius: '50%', overflow: 'hidden',
            position: 'relative', zIndex: 1,
            boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
          }}>
            <Ill />
          </div>
        )}

        {/* Title block */}
        <div style={{ flex: 1, minWidth: 0, position: 'relative', zIndex: 1 }}>
          <p style={{
            fontFamily: UI, fontSize: '0.58rem', textTransform: 'uppercase',
            letterSpacing: '0.18em', color: 'rgba(93,212,202,0.6)',
            marginBottom: '0.35rem',
          }}>
            {entry.category}
          </p>
          <h2 style={{
            fontFamily: FONT, fontStyle: 'italic', fontWeight: 400,
            fontSize: '1.65rem', color: '#e8f7f5',
            lineHeight: 1.2, marginBottom: '0.1rem',
          }}>
            {entry.titleBase}
            {entry.titleItalic && <> <em style={{ color: '#5dd4ca', fontStyle: 'italic' }}>{entry.titleItalic}</em></>}
          </h2>
          {entry.subtitle && (
            <p style={{ fontFamily: UI, fontSize: '0.8rem', color: 'rgba(232,247,245,0.5)', marginBottom: '0.1rem' }}>
              {entry.subtitle}
            </p>
          )}
          {/* Chips */}
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
            {entry.time      && <HeroChip label={entry.time} />}
            {entry.difficulty && <HeroChip label={entry.difficulty} />}
            {entry.servings != null && <HeroChip label={`${entry.servings} pers.`} color="#e87a5a" />}
            {entry.tags?.map((t) => <HeroChip key={t} label={t} color="#d4950a" />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export function BoissonsPageBody({ entry }) {
  const isMobile = useIsMobile()
  const isCalculable = entry.ingredients?.some((i) => i.base != null)
  const defaultPeople = entry.servings ?? 1
  const [people, setPeople] = useState(defaultPeople)

  return (
    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '1.5rem' : '2.5rem' }}>
      {/* Ingredients */}
      <div style={{ width: isMobile ? '100%' : '200px', flexShrink: 0 }}>
        <p style={{ fontFamily: UI, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: ACCENT, marginBottom: '0.6rem' }}>
          Ingrédients
        </p>

        {/* People counter */}
        {isCalculable && (
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            border: '1px solid rgba(46,189,177,0.25)', borderRadius: '999px',
            overflow: 'hidden', marginBottom: '0.85rem',
          }}>
            <ServingBtn onClick={() => setPeople((p) => Math.max(1, p - 1))}>−</ServingBtn>
            <span style={{
              fontFamily: UI, fontSize: '0.72rem', color: TEXT,
              padding: '0.2rem 0.5rem', minWidth: '60px', textAlign: 'center', whiteSpace: 'nowrap',
            }}>
              {people} pers.
            </span>
            <ServingBtn onClick={() => setPeople((p) => p + 1)}>+</ServingBtn>
          </div>
        )}

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {entry.ingredients?.map((ing, i) => {
            const qty = ing.base != null
              ? `${ing.base * people}${ing.unit ? ` ${ing.unit}` : ''}`
              : null
            return (
              <li key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span style={{
                  width: '5px', height: '5px', borderRadius: '50%',
                  background: ACCENT, flexShrink: 0, opacity: 0.5, marginTop: '0.42rem',
                }} />
                <span style={{ fontFamily: UI, fontSize: '0.83rem', color: TEXT_MID, lineHeight: 1.4 }}>
                  {qty ? (
                    <>
                      <span style={{ fontFamily: MONO, fontWeight: 600, color: TEXT, fontSize: '0.85rem' }}>
                        {qty}
                      </span>{' '}{ing.label}
                    </>
                  ) : ing.label}
                </span>
              </li>
            )
          })}
        </ul>
        {entry.notes && (
          <div style={{ marginTop: '1.25rem', padding: '0.75rem 1rem', borderRadius: '8px', background: 'rgba(46,189,177,0.07)', borderLeft: `3px solid rgba(46,189,177,0.35)` }}>
            <p style={{ fontFamily: '"Lora", serif', fontStyle: 'italic', color: TEXT_MID, fontSize: '0.86rem', lineHeight: 1.6 }}>
              {entry.notes}
            </p>
          </div>
        )}
      </div>

      {!isMobile && <div style={{ width: '1px', background: BORDER, flexShrink: 0 }} />}
      {isMobile  && <div style={{ height: '1px', background: BORDER }} />}

      {/* Steps */}
      <section style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontFamily: UI, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: ACCENT, marginBottom: '0.75rem' }}>
          Préparation
        </p>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
          {entry.steps?.map((step, i) => {
            const text = typeof step === 'string' ? step : step.text
            return (
              <li key={i} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                <span style={{
                  flexShrink: 0, width: '26px', height: '26px', borderRadius: '50%',
                  background: ACCENT, color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: UI, fontSize: '0.72rem', fontWeight: 600, marginTop: '1px',
                }}>
                  {i + 1}
                </span>
                <p style={{ fontFamily: '"Lora", Georgia, serif', color: TEXT_MID, fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {text}
                </p>
              </li>
            )
          })}
        </ol>
      </section>
    </div>
  )
}

function ServingBtn({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(46,189,177,0.08)', border: 'none', color: ACCENT,
        fontFamily: UI, fontSize: '0.95rem', cursor: 'pointer', lineHeight: 1,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(46,189,177,0.18)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(46,189,177,0.08)')}
    >
      {children}
    </button>
  )
}

function HeroChip({ label, color = '#5dd4ca' }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '0.18rem 0.65rem', borderRadius: '999px',
      background: `${color}20`, color,
      fontFamily: UI, fontWeight: 500, fontSize: '0.7rem',
      border: `1px solid ${color}38`,
    }}>
      {label}
    </span>
  )
}
