import { ArrowUp } from 'lucide-react'
import Logo from '../ui/Logo'
import { navLinks, site } from '../../config/site'
import { services } from '../../data/content'

function Column({ title, children }) {
  return (
    <div>
      <h2 className="label">{title}</h2>
      <ul className="mt-5 space-y-3 text-[14.5px]">{children}</ul>
    </div>
  )
}

const link = 'text-ink-2 transition-colors hover:text-ink'

export default function Footer() {
  return (
    <footer className="border-t border-line pt-16 sm:pt-20">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-ink-3">{site.description}</p>
            <p className="label mt-6">{site.regions}</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8">
            <Column title="Navigate">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={l.href} className={link}>
                    {l.label}
                  </a>
                </li>
              ))}
            </Column>
            <Column title="Services">
              {services.map((s) => (
                <li key={s.title}>
                  <a href="#services" className={link}>
                    {s.title}
                  </a>
                </li>
              ))}
            </Column>
            <Column title="Contact">
              {site.email && (
                <li>
                  <a href={`mailto:${site.email}`} className={`${link} break-all`}>
                    {site.email}
                  </a>
                </li>
              )}
              <li>
                <a href="#contact" className={link}>
                  Start a project
                </a>
              </li>
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className={link}>
                    {s.label}
                  </a>
                </li>
              ))}
            </Column>
          </div>
        </div>

        <p
          className="mt-20 select-none whitespace-nowrap font-display text-[clamp(3.5rem,15.5vw,13.5rem)] font-bold leading-[0.8] tracking-[-0.06em] text-ink/[0.06] pb-[0.2em]"
          aria-hidden="true"
        >
          Goury.dev
        </p>

        <div className="flex flex-col gap-4 border-t border-line py-7 text-[13px] text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <a href="#top" className="group inline-flex items-center gap-2 transition-colors hover:text-ink">
            Back to top
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
