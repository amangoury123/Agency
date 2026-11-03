import Reveal from './Reveal'

export default function SectionHeading({ index, label, title, intro, align = 'split', className = '' }) {
  if (align === 'center') {
    return (
      <div className={`mx-auto max-w-2xl text-center ${className}`}>
        <Reveal>
          <Eyebrow index={index} label={label} className="justify-center" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.04] tracking-[-0.035em]">
            {title}
          </h2>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-3">{intro}</p>
          </Reveal>
        )}
      </div>
    )
  }

  return (
    <div className={`grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10 ${className}`}>
      <div className="lg:col-span-7">
        <Reveal>
          <Eyebrow index={index} label={label} />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.04] tracking-[-0.035em]">
            {title}
          </h2>
        </Reveal>
      </div>
      {intro && (
        <Reveal delay={0.1} className="lg:col-span-5 lg:pb-2">
          <p className="max-w-md text-[17px] leading-relaxed text-ink-3">{intro}</p>
        </Reveal>
      )}
    </div>
  )
}

export function Eyebrow({ index, label, dark = false, className = '' }) {
  return (
    <p className={`label flex items-center gap-3 ${dark ? 'text-paper/55' : ''} ${className}`}>
      {index && <span className={dark ? 'text-paper' : 'text-ink'}>{index}</span>}
      <span className={`h-px w-8 ${dark ? 'bg-paper/30' : 'bg-ink/25'}`} aria-hidden="true" />
      <span>{label}</span>
    </p>
  )
}
