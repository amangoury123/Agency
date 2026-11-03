import { useCallback, useState } from 'react'
import { Check } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import { BrowserFrame, PhoneFrame, ScaledFrame } from '../mockups/Frames'
import { CafeDesktop, CafeMobile } from '../mockups/Cafe'
import { SalonDesktop, SalonMobile } from '../mockups/Salon'
import ConceptViewer from './ConceptViewer'

const projects = [
  {
    id: 'lumiere',
    n: 'Project 01',
    name: 'Café Lumière',
    type: 'Specialty coffee shop',
    url: 'cafe-lumiere.concept',
    summary:
      'A warm, editorial website for a neighbourhood specialty coffee shop, designed to turn passers-by and Instagram followers into regulars.',
    features: ['Menu showcase', 'Opening hours', 'Location & Google Maps', 'Reservation & contact'],
    Desktop: CafeDesktop,
    Mobile: CafeMobile,
    tone: 'bg-[#efe6da]',
  },
  {
    id: 'maison',
    n: 'Project 02',
    name: 'Maison Studio',
    type: 'Premium hair salon',
    url: 'maison-studio.concept',
    summary:
      'A refined, image-led website for a modern hair salon, built around a quick and clear path to booking an appointment.',
    features: ['Services & pricing', 'Appointment booking concept', 'Team presentation', 'Contact information'],
    Desktop: SalonDesktop,
    Mobile: SalonMobile,
    tone: 'bg-[#e6e3de]',
  },
]

function Showcase({ project, onOpen }) {
  const { Desktop, Mobile } = project
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View ${project.name} concept`}
      className={`group relative block aspect-[4/3.2] w-full overflow-hidden rounded-[24px] text-left sm:rounded-[28px] ${project.tone}`}
    >
      <div className="absolute left-[7%] top-[10%] w-[80%] transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:-translate-y-2 group-hover:scale-[1.015]">
        <BrowserFrame url={project.url}>
          <ScaledFrame width={1280} height={800}>
            <Desktop />
          </ScaledFrame>
        </BrowserFrame>
      </div>
      <div className="absolute bottom-[-8%] right-[6%] w-[24%] transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:-translate-y-4">
        <PhoneFrame>
          <ScaledFrame width={390} height={820}>
            <Mobile />
          </ScaledFrame>
        </PhoneFrame>
      </div>
      <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-2 backdrop-blur sm:left-5 sm:top-5">
        Concept
      </span>
      <span
        className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13px] font-medium text-paper opacity-0 shadow-lg transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:opacity-100 group-focus-visible:opacity-100 max-lg:hidden lg:translate-y-2 lg:group-hover:translate-y-0"
        aria-hidden="true"
      >
        View Concept
      </span>
    </button>
  )
}

export default function Work() {
  const [open, setOpen] = useState(null)
  const close = useCallback(() => setOpen(null), [])

  return (
    <section id="work" aria-labelledby="work-title" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="03"
          label="Featured Work"
          title={<span id="work-title">Concepts that show how we think.</span>}
          intro="Two in-house concept projects that demonstrate our design and development approach for cafes and salons. Both brands are fictional and created for portfolio demonstration."
        />

        <div className="mt-14 space-y-20 sm:mt-20 sm:space-y-28">
          {projects.map((p, i) => (
            <article key={p.id} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14" aria-labelledby={`${p.id}-title`}>
              <Reveal className={`lg:col-span-7 ${i % 2 ? 'lg:order-2' : ''}`}>
                <Showcase project={p} onOpen={() => setOpen(p)} />
              </Reveal>

              <Reveal delay={0.1} className={`lg:col-span-5 ${i % 2 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className="label text-ink">{p.n}</span>
                  <span className="h-px w-8 bg-ink/25" aria-hidden="true" />
                  <span className="label">{p.type}</span>
                </div>
                <h3 id={`${p.id}-title`} className="mt-5 text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-none tracking-[-0.045em]">
                  {p.name}
                </h3>
                <p className="mt-5 text-[16.5px] leading-relaxed text-ink-3">{p.summary}</p>

                <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-line ring-1 ring-line sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 bg-paper px-4 py-3.5 text-[14.5px] text-ink-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
                        <Check className="h-3 w-3" strokeWidth={2.6} aria-hidden="true" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <Button onClick={() => setOpen(p)} arrow aria-haspopup="dialog">
                    View Concept
                  </Button>
                  <span className="font-mono text-[11px] text-ink-3">Fictional brand · Portfolio concept</span>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>

      <ConceptViewer project={open} onClose={close} />
    </section>
  )
}
