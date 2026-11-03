import { motion, useReducedMotion } from 'framer-motion'
import { CalendarCheck, MapPin, Smartphone, Gauge } from 'lucide-react'
import Button from '../ui/Button'
import { BrowserFrame, PhoneFrame, ScaledFrame } from '../mockups/Frames'
import { CafeDesktop, CafeMobile } from '../mockups/Cafe'
import { SalonDesktop, SalonMobile } from '../mockups/Salon'

const ease = [0.16, 1, 0.3, 1]

function Line({ children, delay }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className="block"
        initial={{ y: '105%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}

function Device({ className, delay, children }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

function Chip({ icon: Icon, children, className, delay, float = 0 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={`absolute z-40 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease, delay }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: float }}
        className="flex items-center gap-2 whitespace-nowrap rounded-full bg-white/90 py-1.5 pl-1.5 pr-3.5 font-mono text-[11px] text-ink-2 shadow-[var(--shadow-soft)] ring-1 ring-ink/6 backdrop-blur"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-mist text-ink">
          <Icon className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
        </span>
        {children}
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-[112px] sm:pt-[132px] lg:pt-[152px]">
      <div className="container-x">
        <motion.p
          className="label flex items-center gap-2.5"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inset-0 rounded-full bg-accent/40 motion-safe:animate-ping" />
            <span className="relative h-2 w-2 rounded-full bg-accent" />
          </span>
          Independent Web Development Studio
        </motion.p>

        <h1
          id="hero-title"
          className="mt-6 text-[clamp(3rem,10.4vw,8.6rem)] font-semibold leading-[0.92] tracking-[-0.055em]"
        >
          <Line delay={0.2}>
            Better Websites<span className="text-accent">.</span>
          </Line>
          <Line delay={0.32}>
            <span className="text-[#b9b5ae]">Better</span> Business<span className="text-accent">.</span>
          </Line>
        </h1>

        <div className="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:items-end">
          <motion.p
            className="max-w-xl text-[17px] leading-relaxed text-ink-2 sm:text-[19px] lg:col-span-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.55 }}
          >
            We design and build modern websites and booking experiences that help local businesses attract customers,
            build trust, and grow online.
          </motion.p>
          <motion.div
            className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:justify-end"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.65 }}
          >
            <Button href="#contact" size="lg" arrow>
              Start a Project
            </Button>
            <Button href="#work" size="lg" variant="secondary">
              Explore Our Work
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Device composition */}
      <div className="container-x mt-14 sm:mt-20">
        <div
          role="img"
          aria-label="Concept website designs for Café Lumière, a coffee shop, and Maison Studio, a hair salon, shown on desktop and mobile screens"
          className="dot-grid relative aspect-[4/3.3] overflow-hidden rounded-[22px] bg-mist ring-1 ring-ink/5 sm:aspect-[16/10.5] sm:rounded-[32px] lg:aspect-[16/9.6]"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-mist/80" aria-hidden="true" />

          {/* Salon desktop — back right */}
          <Device className="right-[4%] top-[7%] z-10 hidden w-[46%] sm:block" delay={0.75}>
            <BrowserFrame url="maison-studio.concept">
              <ScaledFrame width={1280} height={760}>
                <SalonDesktop eager />
              </ScaledFrame>
            </BrowserFrame>
          </Device>

          {/* Café desktop — front left */}
          <Device className="left-[5%] top-[9%] z-20 w-[86%] sm:left-[4%] sm:top-[17%] sm:w-[58%]" delay={0.6}>
            <BrowserFrame url="cafe-lumiere.concept">
              <ScaledFrame width={1280} height={780}>
                <CafeDesktop eager />
              </ScaledFrame>
            </BrowserFrame>
          </Device>

          {/* Café phone */}
          <Device className="left-[49%] top-[44%] z-30 hidden w-[13.5%] sm:block" delay={0.95}>
            <PhoneFrame>
              <ScaledFrame width={390} height={800}>
                <CafeMobile eager />
              </ScaledFrame>
            </PhoneFrame>
          </Device>

          {/* Salon phone */}
          <Device className="right-[6%] top-[40%] z-30 w-[34%] sm:right-[7%] sm:top-[33%] sm:w-[15%]" delay={1.05}>
            <PhoneFrame>
              <ScaledFrame width={390} height={800}>
                <SalonMobile eager />
              </ScaledFrame>
            </PhoneFrame>
          </Device>

          <Chip icon={CalendarCheck} className="left-[6%] top-[72%] sm:left-[7%] sm:top-[8%]" delay={1.3} float={0}>
            booking: enabled
          </Chip>
          <Chip icon={MapPin} className="bottom-[7%] left-[9%] hidden sm:block" delay={1.4} float={1.5}>
            maps.embed()
          </Chip>
          <Chip icon={Smartphone} className="left-[64%] top-[85%] hidden md:block" delay={1.5} float={3}>
            mobile-first
          </Chip>
          <Chip icon={Gauge} className="bottom-[6%] right-[5%] hidden lg:block" delay={1.6} float={4.5}>
            optimized for speed
          </Chip>
        </div>
        <p className="label mt-4 flex justify-between gap-4">
          <span>Concept work · Café Lumière &amp; Maison Studio</span>
          <span className="hidden sm:inline">Fictional brands for demonstration</span>
        </p>
      </div>
    </section>
  )
}
