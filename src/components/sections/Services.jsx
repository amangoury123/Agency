import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Reveal, { RevealGroup, fadeUp } from '../ui/Reveal'
import { services } from '../../data/content'

// Bento layout: featured card spans two rows on large screens.
const layout = ['sm:col-span-2 lg:col-span-3 lg:row-span-2', 'lg:col-span-3', 'lg:col-span-3', 'lg:col-span-3', 'lg:col-span-3']

function CodeCard() {
  return (
    <pre
      aria-hidden="true"
      className="mt-8 overflow-hidden rounded-2xl bg-white/[0.04] p-5 font-mono text-[12.5px] leading-[1.9] text-paper/70 ring-1 ring-white/10 sm:text-[13px]"
    >
      <span className="text-paper/40">{'// tailored to your business'}</span>
      {'\n'}
      <span className="text-[#f2a58e]">{'<Website'}</span>
      {'\n  '}
      <span className="text-paper">brand</span>=<span className="text-[#c9d7a4]">"yours"</span>
      {'\n  '}
      <span className="text-paper">responsive</span>
      {'\n  '}
      <span className="text-paper">booking</span>=<span className="text-[#c9d7a4]">{'{true}'}</span>
      {'\n  '}
      <span className="text-paper">maps</span>
      {'\n  '}
      <span className="text-paper">seo</span>
      {'\n'}
      <span className="text-[#f2a58e]">{'/>'}</span>
    </pre>
  )
}

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="01"
          label="Services"
          title={<span id="services-title">Everything a local business needs to win online.</span>}
          intro="From a first website to booking systems and long-term care. No packages forced on you: we recommend the right mix for how your business actually works."
        />

        <RevealGroup className="mt-14 grid gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {services.map(({ icon: Icon, tag, title, text, points }, i) => {
            const featured = i === 0
            return (
              <motion.article
                key={title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                className={`group relative flex flex-col overflow-hidden rounded-[24px] p-7 transition-shadow duration-500 sm:p-8 ${layout[i]} ${
                  featured
                    ? 'bg-ink text-paper shadow-[var(--shadow-lift)]'
                    : 'bg-white shadow-[var(--shadow-soft)] ring-1 ring-ink/5 hover:shadow-[var(--shadow-lift)]'
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-[transform,background-color,color] duration-500 ease-[var(--ease-out-expo)] group-hover:-rotate-6 ${
                      featured ? 'bg-paper text-ink' : 'bg-mist text-ink group-hover:bg-ink group-hover:text-paper'
                    }`}
                  >
                    <Icon className="h-[22px] w-[22px]" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className={`font-mono text-[11px] ${featured ? 'text-paper/50' : 'text-ink-3'}`}>/{tag}</span>
                </div>

                <h3
                  className={`mt-10 font-semibold tracking-[-0.03em] ${
                    featured ? 'text-[30px] leading-[1.05] sm:text-[36px]' : 'text-[22px] leading-tight'
                  }`}
                >
                  {title}
                </h3>
                <p className={`mt-3 max-w-md text-[15px] leading-relaxed ${featured ? 'text-paper/70' : 'text-ink-3'}`}>{text}</p>

                {featured && <CodeCard />}

                <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                  {points.map((p) => (
                    <li
                      key={p}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12.5px] ${
                        featured ? 'bg-white/[0.07] text-paper/80' : 'bg-mist text-ink-2'
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={2.4} aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </RevealGroup>

        <Reveal className="mt-10 flex flex-col items-start justify-between gap-4 rounded-[24px] border border-dashed border-ink/15 px-7 py-6 sm:flex-row sm:items-center">
          <p className="text-[15px] text-ink-2">
            <span className="font-semibold text-ink">Not sure what you need?</span> Every project is tailored. Tell us your
            goals and we’ll suggest the right solution.
          </p>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-1.5 text-[15px] font-medium text-ink underline decoration-ink/20 underline-offset-4 transition-colors hover:decoration-ink"
          >
            Get a recommendation
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
