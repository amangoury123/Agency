import { motion } from 'framer-motion'
import { Eyebrow } from '../ui/SectionHeading'
import Reveal, { RevealGroup, fadeUp } from '../ui/Reveal'
import { LogoMark } from '../ui/Logo'
import { reasons } from '../../data/content'

export default function WhyUs() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[140px]"
        aria-hidden="true"
      />
      <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow index="04" label="Why Goury.dev" dark />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="about-title" className="mt-6 text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.04] tracking-[-0.035em]">
              Every local business deserves a professional digital presence.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-lg text-[17px] leading-relaxed text-paper/65">
              We combine thoughtful design, reliable development, and practical functionality to build websites that work
              for real businesses. As an independent studio, we keep things personal: small enough to care about every
              detail, focused enough to deliver.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 inline-flex items-center gap-3 rounded-full bg-white/[0.06] py-2 pl-2 pr-5 ring-1 ring-white/10">
              <LogoMark className="h-8 w-8 rounded-[9px] ring-1 ring-white/15" />
              <span className="font-mono text-[12px] text-paper/70">Design · Development · Support, under one roof</span>
            </div>
          </Reveal>
        </div>

        <RevealGroup as="ul" className="lg:col-span-6" gap={0.07}>
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className="group grid grid-cols-[auto_1fr] gap-5 border-t border-white/10 py-6 last:border-b sm:gap-7 sm:py-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-paper ring-1 ring-white/10 transition-colors duration-500 group-hover:bg-paper group-hover:text-ink">
                <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div>
                <h3 className="flex items-baseline gap-3 text-[20px] font-semibold tracking-[-0.02em]">
                  {title}
                  <span className="font-mono text-[11px] font-normal text-paper/35">0{i + 1}</span>
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-paper/60">{text}</p>
              </div>
            </motion.li>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
