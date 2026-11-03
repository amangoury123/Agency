import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Eyebrow } from '../ui/SectionHeading'
import Reveal, { RevealGroup, fadeUp } from '../ui/Reveal'
import Button from '../ui/Button'
import { faqs } from '../../data/content'

const ease = [0.16, 1, 0.3, 1]

function Item({ q, a, open, onToggle }) {
  const id = useId()
  return (
    <motion.div variants={fadeUp} className="border-b border-line">
      <h3>
        <button
          type="button"
          id={`${id}-q`}
          aria-expanded={open}
          aria-controls={`${id}-a`}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-6 py-6 text-left font-display text-[18px] font-medium tracking-[-0.02em] sm:text-[20px]"
        >
          <span className="transition-colors group-hover:text-ink-2">{q}</span>
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ring-1 ring-inset transition-colors duration-300 ${
              open ? 'bg-ink text-paper ring-ink' : 'ring-ink/15 group-hover:ring-ink/40'
            }`}
            aria-hidden="true"
          >
            <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.4, ease }} className="flex">
              <Plus className="h-4 w-4" strokeWidth={2} />
            </motion.span>
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-a`}
            role="region"
            aria-labelledby={`${id}-q`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-7 pr-12 text-[15.5px] leading-relaxed text-ink-3">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-mist py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Eyebrow index="06" label="FAQ" />
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="faq-title" className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.04] tracking-[-0.035em]">
                Questions, answered.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-sm text-[16.5px] leading-relaxed text-ink-3">
                Can’t find what you’re looking for? Send us a message and we’ll get back to you personally.
              </p>
              <Button href="#contact" variant="secondary" className="mt-8" arrow>
                Ask a question
              </Button>
            </Reveal>
          </div>
        </div>
        <RevealGroup className="border-t border-line lg:col-span-8" gap={0.06}>
          {faqs.map((f, i) => (
            <Item key={f.q} {...f} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
