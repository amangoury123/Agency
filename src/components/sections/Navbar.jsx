import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import { navLinks, site } from '../../config/site'

const ease = [0.16, 1, 0.3, 1]

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])
  return active
}

const sectionIds = navLinks.map((l) => l.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    document.body.style.overflow = 'hidden'
    const raf = requestAnimationFrame(() => document.querySelector('#mobile-menu a')?.focus({ preventScroll: true }))
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
          scrolled || open
            ? 'bg-paper/80 shadow-[0_1px_0_rgb(20_20_23/0.07)] backdrop-blur-xl backdrop-saturate-150'
            : 'bg-transparent'
        }`}
      >
        <nav aria-label="Main" className="container-x flex h-[72px] items-center justify-between">
          <a href="#top" className="relative z-10 -m-2 p-2" aria-label={`${site.name} — back to top`}>
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative block rounded-full px-4 py-2 text-[14px] font-medium transition-colors duration-300 ${
                      isActive ? 'text-ink' : 'text-ink-3 hover:text-ink'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-ink/[0.06]"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Button href="#contact" size="sm" className="hidden sm:inline-flex" arrow>
              Let’s Talk
            </Button>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-inset ring-ink/12 transition-colors hover:bg-ink/5 lg:hidden"
            >
              <span className="relative block h-3 w-[18px]" aria-hidden="true">
                <motion.span
                  className="absolute left-0 top-0 block h-[1.5px] w-full rounded bg-ink"
                  animate={open ? { top: '50%', rotate: 45, y: '-50%' } : { top: 0, rotate: 0, y: 0 }}
                  transition={{ duration: 0.35, ease }}
                />
                <motion.span
                  className="absolute bottom-0 left-0 block h-[1.5px] w-full rounded bg-ink"
                  animate={open ? { bottom: '50%', rotate: -45, y: '50%' } : { bottom: 0, rotate: 0, y: 0 }}
                  transition={{ duration: 0.35, ease }}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] h-[calc(100dvh-72px)] overflow-y-auto bg-paper lg:hidden"
          >
            <motion.ul
              className="container-x flex flex-col pt-6"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
                  className="border-b border-line"
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-5 font-display text-[30px] font-medium tracking-[-0.03em]"
                  >
                    {link.label}
                    <span className="font-mono text-[11px] text-ink-3">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
                className="pb-10 pt-8"
              >
                <Button href="#contact" onClick={() => setOpen(false)} size="lg" arrow className="w-full">
                  Let’s Talk
                </Button>
                <p className="label mt-6 text-center">{site.regions}</p>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
