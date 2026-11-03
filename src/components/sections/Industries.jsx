import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { RevealGroup, fadeUp } from '../ui/Reveal'
import Img from '../ui/Img'
import { industries } from '../../data/content'

// Two wide cards on top, three narrower below (on large screens).
const layout = [
  'lg:col-span-3 lg:aspect-[16/12]',
  'lg:col-span-3 lg:aspect-[16/12]',
  'lg:col-span-2 lg:aspect-[4/5]',
  'lg:col-span-2 lg:aspect-[4/5]',
  'sm:col-span-2 sm:aspect-[16/8] lg:col-span-2 lg:aspect-[4/5]',
]

export default function Industries() {
  return (
    <section id="industries" aria-labelledby="industries-title" className="bg-mist py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="02"
          label="Industries"
          title={<span id="industries-title">Made for the places people love to visit.</span>}
          intro="We focus on local, customer-facing businesses, so we understand what your visitors look for and what gets them through the door."
        />

        <RevealGroup as="ul" className="mt-14 grid gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {industries.map((item, i) => {
            const large = i < 2
            return (
              <motion.li
                key={item.title}
                variants={fadeUp}
                className={`group relative isolate aspect-[4/4.4] overflow-hidden rounded-[24px] bg-ink ${layout[i]}`}
              >
                <Img
                  id={item.photo}
                  alt={item.alt}
                  sizes={
                    large
                      ? '(min-width: 1024px) 600px, (min-width: 640px) 50vw, 100vw'
                      : '(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw'
                  }
                  widths={[480, 800, 1200]}
                  className="absolute inset-0 -z-10 transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/40 to-black/5" aria-hidden="true" />

                <div className="flex h-full flex-col justify-between p-6 text-white sm:p-7">
                  <span className="self-start rounded-full bg-black/35 px-3 py-1 font-mono text-[11px] tracking-[0.1em] backdrop-blur-md">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className={`font-semibold tracking-[-0.03em] ${large ? 'text-[28px] sm:text-[32px]' : 'text-[24px]'}`}>
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-white/85">{item.solution}</p>
                    <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`Solutions for ${item.title}`}>
                      {item.features.map((f) => (
                        <li key={f} className="rounded-full px-2.5 py-1 text-[12px] text-white/90 ring-1 ring-inset ring-white/25">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.li>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
