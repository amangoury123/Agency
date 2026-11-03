import { MotionConfig } from 'framer-motion'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import ValueStrip from './components/sections/ValueStrip'
import Services from './components/sections/Services'
import Industries from './components/sections/Industries'
import Work from './components/sections/Work'
import WhyUs from './components/sections/WhyUs'
import Process from './components/sections/Process'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-full bg-ink px-4 py-2 text-sm text-paper transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <ValueStrip />
        <Services />
        <Industries />
        <Work />
        <WhyUs />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
