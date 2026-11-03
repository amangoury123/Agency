import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { RevealGroup, fadeUp } from '../ui/Reveal'
import { process } from '../../data/content'

const ease = [0.16, 1, 0.3, 1]

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="05"
          label="Our Process"
          title={<span id="process-title">A clear path from first call to launch.</span>}
          intro="Four focused steps, with your feedback built in at every stage. You always know what is happening and what comes next."
        />

        <div className="relative mt-14 sm:mt-20">
          {/* Connecting line that draws in on scroll (desktop) */}
          <motion.div
            aria-hidden="true"
            className="absolute left-7 right-[calc(25%-1.125rem-1.75rem)] top-[27px] hidden h-px origin-left bg-ink/15 lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '0px 0px -20% 0px' }}
            transition={{ duration: 1.6, ease }}
          />
          <RevealGroup as="ol" gap={0.12} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {process.map((step) => (
              <motion.li key={step.n} variants={fadeUp} className="group relative flex flex-col">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-paper font-mono text-[14px] font-medium ring-1 ring-ink/15 transition-colors duration-500 group-hover:bg-ink group-hover:text-paper">
                  {step.n}
                </div>
                <div className="mt-6 flex-1 rounded-[22px] bg-white p-6 shadow-[var(--shadow-soft)] ring-1 ring-ink/5 transition-[box-shadow,transform] duration-500 group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-lift)] sm:p-7">
                  <h3 className="text-[24px] font-semibold tracking-[-0.03em]">{step.title}</h3>
                  <p className="mt-2 text-[15.5px] font-medium leading-snug text-ink-2">{step.text}</p>
                  <p className="mt-4 border-t border-line pt-4 text-[14.5px] leading-relaxed text-ink-3">{step.detail}</p>
                </div>
              </motion.li>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
