import { motion } from 'framer-motion'
import { RevealGroup, fadeUp } from '../ui/Reveal'
import { values } from '../../data/content'

export default function ValueStrip() {
  return (
    <section aria-label="Why our websites work" className="container-x pb-8 pt-20 sm:pt-28">
      <RevealGroup
        as="ul"
        className="grid gap-px overflow-hidden rounded-[24px] bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-4"
      >
        {values.map(({ icon: Icon, title, text }, i) => (
          <motion.li key={title} variants={fadeUp} className="group bg-paper p-7 transition-colors duration-500 hover:bg-white lg:p-8">
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-paper">
                <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <span className="font-mono text-[11px] text-ink-3">0{i + 1}</span>
            </div>
            <h3 className="mt-8 text-[19px] font-semibold tracking-[-0.02em]">{title}</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-ink-3">{text}</p>
          </motion.li>
        ))}
      </RevealGroup>
    </section>
  )
}
