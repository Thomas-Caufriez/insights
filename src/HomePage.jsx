import { useState, useRef, useEffect, useCallback } from 'react'
import { useIsMobile } from './hooks/useIsMobile'

import CuisineBackdrop, { theme as cuisine } from './cuisine/Backdrop'
import MuscuBackdrop, { theme as musculation } from './musculation/Backdrop'
import TradingBackdrop, { theme as trading } from './trading/Backdrop'
import FromagesBackdrop, { theme as fromages } from './fromages/Backdrop'
import BoissonsBackdrop, { theme as boissons } from './boissons/Backdrop'

// Order is the display order: the three food-and-drink worlds group first,
// then trading. Musculation sits last while its world is still being designed
// — it's the one module with no prior art to draw from.
const WORLDS = [
  { ...cuisine, Backdrop: CuisineBackdrop },
  { ...boissons, Backdrop: BoissonsBackdrop },
  { ...fromages, Backdrop: FromagesBackdrop },
  { ...trading, Backdrop: TradingBackdrop },
  { ...musculation, Backdrop: MuscuBackdrop, wip: true },
]

const UI = '"DM Sans", sans-serif'
const DISPLAY = '"Playfair Display", Georgia, serif'

const FADE_MS = 900
const ALL = WORLDS.map((_, i) => i)

export default function HomePage({ onSelect }) {
  const [active, setActive] = useState(0)
  // Backdrops are mounted once and never torn down. Mounting one mid-hover cost
  // ~160ms frames — building a ~124-node SVG on the main thread during an
  // interaction. So the first world mounts immediately for a fast first paint,
  // and the rest are warmed once the page is idle, before you can hover them.
  const [warm, setWarm] = useState(() => new Set([0]))
  // The layer fading out. Only these two get promoted to compositor layers,
  // and only for the length of the fade — opacity on an un-promoted element
  // containing a large SVG makes the browser re-rasterize the whole scene on
  // every step of the transition.
  const [prev, setPrev] = useState(null)
  const lastActive = useRef(0)
  const isMobile = useIsMobile()
  const scrollRef = useRef(null)
  const itemRefs = useRef([])
  const world = WORLDS[active]

  useEffect(() => {
    const warmAll = () => setWarm(new Set(ALL))
    if (typeof requestIdleCallback === 'function') {
      const id = requestIdleCallback(warmAll, { timeout: 2500 })
      return () => cancelIdleCallback(id)
    }
    const id = setTimeout(warmAll, 900)
    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    if (lastActive.current === active) return
    setPrev(lastActive.current)
    lastActive.current = active
    const t = setTimeout(() => setPrev(null), FADE_MS + 80)
    return () => clearTimeout(t)
  }, [active])

  // On touch there is no cursor, so scrolling is how you point: whichever item
  // sits nearest the focal line becomes the active world.
  const syncFromScroll = useCallback(() => {
    // Sits high enough that the first item wins at rest, rather than whichever
    // item happens to land mid-screen.
    const focal = window.innerHeight * 0.34
    let best = 0
    let bestDist = Infinity
    itemRefs.current.forEach((el, i) => {
      if (!el) return
      const r = el.getBoundingClientRect()
      const d = Math.abs(r.top + r.height / 2 - focal)
      if (d < bestDist) { bestDist = d; best = i }
    })
    setActive((prev) => (prev === best ? prev : best))
  }, [])

  useEffect(() => {
    if (!isMobile) return
    const el = scrollRef.current
    if (!el) return
    let frame = null
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => { frame = null; syncFromScroll() })
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    syncFromScroll()
    return () => {
      el.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [isMobile, syncFromScroll])

  function handleKeyDown(e) {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
    e.preventDefault()
    const next = e.key === 'ArrowDown'
      ? Math.min(active + 1, WORLDS.length - 1)
      : Math.max(active - 1, 0)
    setActive(next)
    itemRefs.current[next]?.focus()
  }

  const pad = isMobile ? '1.6rem' : 'clamp(2.5rem, 6vw, 6rem)'

  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', background: '#0b0e12' }}>

      {/* ── The five worlds, cross-fading ─────────────────────────────── */}
      {WORLDS.map((w, i) => {
        const on = i === active
        // Active is always mounted even if the idle warm-up hasn't fired yet.
        // No `will-change` here: it would pin a full-viewport GPU layer per
        // world, permanently — that was the original cause of the jank.
        const mounted = on || warm.has(i)
        const fading = on || i === prev
        return (
          <div
            key={w.id}
            aria-hidden="true"
            style={{
              position: 'absolute', inset: 0,
              opacity: on ? 1 : 0,
              transition: `opacity ${FADE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
              // Transient only — dropped as soon as the fade ends.
              willChange: fading ? 'opacity' : 'auto',
            }}
          >
            {mounted && <w.Backdrop active={on} />}
            {/* Per-world scrim: light worlds lighten, dark worlds darken, so the
                type keeps its contrast whichever world is showing. */}
            <div style={{ position: 'absolute', inset: 0, background: w.scrim }} />
          </div>
        )
      })}

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div
        ref={scrollRef}
        style={{
          position: 'relative', height: '100%',
          overflowY: isMobile ? 'auto' : 'hidden',
          WebkitOverflowScrolling: 'touch',
          display: 'flex', flexDirection: 'column',
          justifyContent: isMobile ? 'flex-start' : 'center',
          padding: `${isMobile ? '3.5rem' : '0'} ${pad}`,
          color: world.fg,
          transition: 'color 900ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div style={{ maxWidth: '780px', width: '100%', flexShrink: 0 }}>

          {/* Wordmark */}
          <p style={{
            fontFamily: UI, fontSize: '0.68rem', fontWeight: 500,
            letterSpacing: '0.34em', textTransform: 'uppercase',
            color: world.fg, opacity: 0.55, marginBottom: isMobile ? '1.1rem' : '1.6rem',
          }}>
            Insights
          </p>

          {/* The question — the loudest thing on the page */}
          <h1 style={{
            fontFamily: DISPLAY, fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(2.3rem, 6.2vw, 5.2rem)',
            lineHeight: 1.03, letterSpacing: '-0.022em',
            marginBottom: isMobile ? '2.6rem' : '3.4rem',
            maxWidth: '15ch',
          }}>
            Où voulez-vous aller aujourd'hui&nbsp;?
          </h1>

          {/* The five */}
          <nav aria-label="Modules" onKeyDown={handleKeyDown} style={{ display: 'flex', flexDirection: 'column' }}>
            {WORLDS.map((w, i) => {
              const on = i === active
              return (
                <button
                  key={w.id}
                  ref={(el) => (itemRefs.current[i] = el)}
                  onClick={() => onSelect(w.id)}
                  onMouseEnter={() => !isMobile && setActive(i)}
                  onFocus={() => setActive(i)}
                  style={{
                    appearance: 'none', background: 'transparent', border: 'none',
                    borderTop: `1px solid ${on ? w.glow : 'currentColor'}`,
                    borderTopColor: on ? w.glow : undefined,
                    padding: isMobile ? '1.05rem 0' : '1.15rem 0',
                    textAlign: 'left', cursor: 'pointer', width: '100%',
                    display: 'flex', alignItems: 'baseline', gap: isMobile ? '0.9rem' : '1.4rem',
                    color: 'inherit', font: 'inherit',
                    opacity: on ? 1 : (isMobile ? 0.5 : 0.42),
                    transform: on ? `translateX(${isMobile ? 0 : 10}px)` : 'translateX(0)',
                    transition: 'opacity 420ms ease, transform 420ms cubic-bezier(0.4,0,0.2,1), border-color 420ms ease',
                  }}
                >
                  <span style={{
                    fontFamily: UI, fontSize: '0.66rem', fontWeight: 600,
                    letterSpacing: '0.14em', flexShrink: 0,
                    color: on ? w.glow : 'currentColor',
                    transition: 'color 420ms ease',
                    minWidth: '1.6rem',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span style={{ flex: 1, minWidth: 0 }}>
                    <span style={{
                      display: 'flex', alignItems: 'baseline', flexWrap: 'wrap',
                      gap: '0.7rem',
                      fontFamily: DISPLAY, fontWeight: 400,
                      fontSize: 'clamp(1.45rem, 3vw, 2.35rem)',
                      lineHeight: 1.12, letterSpacing: '-0.015em',
                    }}>
                      {w.label}
                      {w.wip && (
                        <span style={{
                          fontFamily: UI, fontSize: '0.56rem', fontWeight: 600,
                          letterSpacing: '0.16em', textTransform: 'uppercase',
                          padding: '0.24rem 0.5rem', borderRadius: '4px',
                          border: `1px solid ${w.glow}`, color: w.glow,
                          // Filled rather than outlined, and undimmed: the badge
                          // inherits the item's inactive opacity, and a hairline
                          // outline disappears entirely at that level.
                          background: `${w.glow}26`,
                          whiteSpace: 'nowrap',
                          transform: 'translateY(-0.25em)',
                        }}>
                          En cours
                        </span>
                      )}
                    </span>
                    <span style={{
                      display: 'block', fontFamily: UI,
                      fontSize: isMobile ? '0.76rem' : '0.82rem',
                      lineHeight: 1.45, marginTop: '0.3rem',
                      color: world.dim,
                      // Always open on touch: there's no hover to reveal them,
                      // and a fixed height stops the list reflowing under the
                      // scroll handler, which would make the active item oscillate.
                      maxHeight: on || isMobile ? '3.2rem' : 0,
                      opacity: on || isMobile ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 420ms ease, opacity 320ms ease',
                    }}>
                      {w.description}
                    </span>
                  </span>

                  <span style={{
                    fontFamily: UI, fontSize: '1.05rem', flexShrink: 0,
                    color: on ? w.glow : 'currentColor',
                    opacity: on ? 1 : 0,
                    transform: on ? 'translateX(0)' : 'translateX(-10px)',
                    transition: 'opacity 420ms ease, transform 420ms cubic-bezier(0.4,0,0.2,1), color 420ms ease',
                  }}>
                    →
                  </span>
                </button>
              )
            })}
            <div style={{ borderTop: '1px solid currentColor', opacity: 0.42 }} />
          </nav>

          <p style={{
            fontFamily: UI, fontSize: '0.64rem', letterSpacing: '0.2em',
            opacity: 0.4, marginTop: isMobile ? '2.4rem' : '3rem',
          }}>
            2026
          </p>

          {/* Scroll runway. Without it the list fits the viewport, nothing
              scrolls, and the backdrop freezes on whichever item started
              nearest the focal line. This lets every world be reached. */}
          {isMobile && <div style={{ height: '58vh', flexShrink: 0 }} aria-hidden="true" />}
        </div>
      </div>
    </div>
  )
}
