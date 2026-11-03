import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, ChevronDown, Mail } from 'lucide-react'
import { Eyebrow } from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import { businessTypes } from '../../data/content'
import { site } from '../../config/site'

const ease = [0.16, 1, 0.3, 1]
const empty = { name: '', business: '', email: '', type: '', details: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your name.'
  if (!v.business.trim()) e.business = 'Please enter your business name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (!v.type) e.type = 'Please choose your business type.'
  if (v.details.trim().length < 10) e.details = 'Tell us a little about your project (at least 10 characters).'
  return e
}

function mailtoLink(v) {
  const subject = `Project inquiry: ${v.business}`
  const body = `Name: ${v.name}\nBusiness: ${v.business}\nEmail: ${v.email}\nBusiness type: ${v.type}\n\n${v.details}`
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[13px] font-medium text-ink-2">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden pt-1.5 text-[13px] text-[#b3361a]"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error | unconfigured

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }))
  }

  const aria = (key) => ({
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `${key}-error` : undefined,
  })

  async function onSubmit(e) {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      document.getElementById(Object.keys(found)[0])?.focus()
      return
    }

    if (site.formEndpoint) {
      setStatus('sending')
      try {
        const res = await fetch(site.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        })
        if (!res.ok) throw new Error(`Request failed: ${res.status}`)
        setStatus('sent')
        setValues(empty)
      } catch {
        setStatus('error')
      }
    } else if (site.email) {
      window.location.href = mailtoLink(values)
      setStatus('sent')
    } else {
      setStatus('unconfigured')
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 sm:py-32">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[28px] bg-ink px-6 py-12 text-paper sm:rounded-[36px] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -bottom-48 -left-40 h-[480px] w-[480px] rounded-full bg-accent/25 blur-[140px]" aria-hidden="true" />

          <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow index="07" label="Contact" dark />
              </Reveal>
              <Reveal delay={0.05}>
                <h2 id="contact-title" className="mt-6 text-[clamp(2.2rem,4.8vw,3.8rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
                  Ready to give your business a better online presence?
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md text-[17px] leading-relaxed text-paper/65">
                  Tell us about your business and what you’d like to improve. Let’s build something meaningful.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <ol className="mt-10 space-y-4 text-[15px] text-paper/75">
                  {[
                    'We read every inquiry personally.',
                    'We reply with questions or a short call invite.',
                    'You receive a clear proposal tailored to your needs.',
                  ].map((t, i) => (
                    <li key={t} className="flex gap-4">
                      <span className="font-mono text-[12px] leading-[1.9] text-paper/40">0{i + 1}</span>
                      {t}
                    </li>
                  ))}
                </ol>
              </Reveal>

              {site.email && (
                <Reveal delay={0.2}>
                  <a
                    href={`mailto:${site.email}`}
                    className="group mt-10 inline-flex items-center gap-4 rounded-2xl bg-white/[0.06] p-4 pr-6 ring-1 ring-white/10 transition-colors hover:bg-white/[0.1]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper text-ink">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-paper/50">Prefer email?</span>
                      <span className="mt-0.5 block text-[16px] font-medium">{site.email}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-paper/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                </Reveal>
              )}
            </div>

            <Reveal delay={0.1} className="lg:col-span-7">
              <div className="relative rounded-[22px] bg-paper p-6 text-ink sm:p-9">
                <AnimatePresence mode="wait" initial={false}>
                  {status === 'sent' ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease }}
                      className="flex min-h-[420px] flex-col items-center justify-center text-center"
                      role="status"
                    >
                      <CheckCircle2 className="h-12 w-12" strokeWidth={1.4} aria-hidden="true" />
                      <h3 className="mt-6 text-[28px] font-semibold tracking-[-0.03em]">Thank you!</h3>
                      <p className="mt-3 max-w-sm text-[15.5px] leading-relaxed text-ink-3">
                        {site.formEndpoint
                          ? 'Your inquiry has been sent. We’ll be in touch soon with next steps.'
                          : 'Your email app should now be open with your message ready to send.'}
                      </p>
                      <Button variant="secondary" className="mt-8" onClick={() => setStatus('idle')} type="button">
                        Send another inquiry
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      noValidate
                      onSubmit={onSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="grid gap-5 sm:grid-cols-2"
                      aria-label="Project inquiry"
                    >
                      <Field id="name" label="Name" error={errors.name}>
                        <input id="name" name="name" autoComplete="name" className="field" value={values.name} onChange={set('name')} placeholder="Your full name" {...aria('name')} />
                      </Field>
                      <Field id="business" label="Business name" error={errors.business}>
                        <input id="business" name="business" autoComplete="organization" className="field" value={values.business} onChange={set('business')} placeholder="e.g. Corner Street Coffee" {...aria('business')} />
                      </Field>
                      <Field id="email" label="Email" error={errors.email}>
                        <input id="email" name="email" type="email" autoComplete="email" inputMode="email" className="field" value={values.email} onChange={set('email')} placeholder="you@business.com" {...aria('email')} />
                      </Field>
                      <Field id="type" label="Business type" error={errors.type}>
                        <div className="relative">
                          <select
                            id="type"
                            name="type"
                            className={`field appearance-none pr-10 ${values.type ? '' : 'text-ink-3/80'}`}
                            value={values.type}
                            onChange={set('type')}
                            {...aria('type')}
                          >
                            <option value="" disabled>
                              Select one
                            </option>
                            {businessTypes.map((t) => (
                              <option key={t} value={t} className="text-ink">
                                {t}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-3" aria-hidden="true" />
                        </div>
                      </Field>
                      <div className="sm:col-span-2">
                        <Field id="details" label="Project details" error={errors.details}>
                          <textarea
                            id="details"
                            name="details"
                            rows={5}
                            className="field resize-y"
                            value={values.details}
                            onChange={set('details')}
                            placeholder="What would you like to build or improve? Booking, menu, redesign, timeline…"
                            {...aria('details')}
                          />
                        </Field>
                      </div>

                      <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-[13px] text-ink-3">We only use your details to reply to your inquiry.</p>
                        <Button type="submit" size="lg" arrow disabled={status === 'sending'} className="w-full sm:w-auto">
                          {status === 'sending' ? 'Sending…' : 'Send Project Inquiry'}
                        </Button>
                      </div>

                      <div aria-live="polite" className="sm:col-span-2">
                        {status === 'error' && (
                          <p className="rounded-xl bg-accent-soft px-4 py-3 text-[14px] text-[#8a2a12]">
                            Something went wrong sending your inquiry. Please try again
                            {site.email ? ` or email us at ${site.email}` : ''}.
                          </p>
                        )}
                        {status === 'unconfigured' && (
                          <p className="rounded-xl bg-mist px-4 py-3 text-[14px] text-ink-2">
                            The inquiry form isn’t connected yet. Set <code className="font-mono text-[13px]">VITE_FORM_ENDPOINT</code> or{' '}
                            <code className="font-mono text-[13px]">VITE_CONTACT_EMAIL</code> in your <code className="font-mono text-[13px]">.env</code> file.
                          </p>
                        )}
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
