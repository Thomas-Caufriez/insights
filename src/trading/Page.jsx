import { getTradingIllustration } from './illustrations'

const ACCENT = '#00f5ff'

const MARKET_COLORS = {
  'Crypto':             '#ff9900',
  'Forex':              '#00d4aa',
  'Structure':          '#c44fff',
  'Liquidité':          '#ff2d78',
  'PD Array':           '#00f5ff',
  'Exécution':          '#00ff88',
  'Risque':             '#f4c542',
  'Actions':            '#c44fff',
  'Matières premières': '#ffd700',
  'Analyse technique':  '#ff2d78',
  'Stratégie':          '#00ff9f',
  'Psychologie':        '#ff6ef7',
}

// Shared uppercase mono label — cyan at 88 alpha (static)
const labelCls = 'font-spacemono text-[0.57rem] uppercase tracking-[0.14em] text-[#00f5ff88]'

export function TradingPageHeader({ entry }) {
  const marketColor = MARKET_COLORS[entry.market] || ACCENT

  return (
    <div style={{ '--mc': marketColor, '--mc-33': `${marketColor}33` }}>
      <p className="font-jakarta text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--mc)] mb-2 [text-shadow:0_0_12px_var(--mc)]">
        {entry.market}
      </p>

      <h1
        className={`font-jakarta text-[2.4rem] font-extrabold tracking-[-0.02em] text-tr-text leading-[1.05] [text-shadow:0_0_30px_var(--mc-33)] ${entry.subtitle ? 'mb-[0.4rem]' : 'mb-4'}`}
      >
        {entry.title}
      </h1>

      {entry.subtitle && (
        <p className="font-jakarta font-normal text-base text-tr-dim tracking-[-0.01em] mb-5 leading-normal">
          {entry.subtitle}
        </p>
      )}

      <div className="flex gap-2 flex-wrap">
        {entry.risk      && <MetaTag label={entry.risk}      color={marketColor} />}
        {entry.timeframe && <MetaTag label={entry.timeframe} />}
        {entry.type      && <MetaTag label={entry.type} />}
      </div>
    </div>
  )
}

export function TradingPageBody({ entry, showIllustration }) {
  const Ill = getTradingIllustration(entry.illustration)
  const marketColor = MARKET_COLORS[entry.market] || ACCENT
  return (
    <div className="flex flex-col gap-8">

      {showIllustration && Ill && (
        <div className="rounded-xl border border-tr-border bg-[#0e0018] px-4 py-5 flex items-center justify-center">
          <div className="w-full max-w-[300px]"><Ill color={marketColor} /></div>
        </div>
      )}

      <div className="flex gap-12 flex-wrap">

      {entry.stats?.length > 0 && (
        <>
          <div className="w-40 flex-shrink-0">
            <p className={`${labelCls} mb-2`}>Données clés</p>
            {entry.stats.map((stat, i) => (
              <div key={i} className="pb-[0.7rem] mb-[0.7rem] border-b border-tr-border">
                <p className="font-spacemono text-[0.55rem] uppercase tracking-[0.1em] text-[#00f5ff77] mb-[0.2rem]">
                  {stat.label}
                </p>
                <p className="font-jakarta text-[0.88rem] font-bold text-tr-text tracking-[-0.01em]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="w-px bg-tr-border flex-shrink-0 min-h-[100px]" />
        </>
      )}

      <div className="flex-1 min-w-0">
        {entry.sections?.map((section, i) => (
          <div key={i} className="mb-7">
            <p className={`${labelCls} mb-[0.6rem]`}>{section.title}</p>
            <p className="font-jakarta font-normal text-[0.9rem] leading-[1.75] text-tr-text m-0">
              {section.text}
            </p>
          </div>
        ))}

        {entry.notes && (
          <div className="mt-2 py-4 px-[1.1rem] border-l-2 border-[#c44fff55] bg-[#c44fff08] rounded-r-lg [box-shadow:inset_0_0_20px_#c44fff05]">
            <p className={`${labelCls} mb-[0.4rem]`}>Note</p>
            <p className="font-jakarta font-normal text-[0.84rem] leading-[1.7] text-tr-dim m-0">
              {entry.notes}
            </p>
          </div>
        )}
      </div>

      </div>
    </div>
  )
}

function MetaTag({ label, color }) {
  const base = 'font-jakarta text-[0.65rem] font-semibold tracking-[0.02em] rounded-full py-[0.22rem] px-[0.65rem] border'
  if (!color) {
    return <span className={`${base} text-tr-dim border-tr-border`}>{label}</span>
  }
  return (
    <span
      style={{ '--c': color, '--c-44': `${color}44`, '--c-22': `${color}22` }}
      className={`${base} text-[var(--c)] border-[var(--c-44)] shadow-[0_0_10px_var(--c-22)]`}
    >
      {label}
    </span>
  )
}
