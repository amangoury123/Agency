import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Monitor, Smartphone, X } from 'lucide-react'
import { BrowserFrame, PhoneFrame, ScaledFrame } from '../mockups/Frames'

const ease = [0.16, 1, 0.3, 1]

// Full-length, scrollable preview of a concept site in a modal dialog.
export default function ConceptViewer({ project, onClose }) {
  return (
    <AnimatePresence>{project && <Dialog key={project.id} project={project} onClose={onClose} />}</AnimatePresence>
  )
}

function Dialog({ project, onClose }) {
  const [view, setView] = useState('desktop')
  const panel = useRef(null)
  const closeBtn = useRef(null)
  const { Desktop, Mobile } = project

  useEffect(() => {
    const previous = document.activeElement
    document.body.style.overflow = 'hidden'
    closeBtn.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key !== 'Tab' || !panel.current) return
      const focusables = panel.current.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])')
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      previous?.focus?.({ preventScroll: true })
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <motion.div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="concept-title"
        className="relative flex h-[92dvh] w-full max-w-[1180px] flex-col overflow-hidden rounded-t-[24px] bg-paper shadow-2xl sm:h-[90vh] sm:rounded-[28px]"
        initial={{ y: 40, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 24, opacity: 0, scale: 0.98, transition: { duration: 0.25 } }}
        transition={{ duration: 0.6, ease }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4 sm:px-7">
          <div className="min-w-0">
            <p className="label">Concept · {project.n}</p>
            <h2 id="concept-title" className="mt-1 truncate text-[20px] font-semibold tracking-[-0.02em]">
              {project.name}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div role="group" aria-label="Preview device" className="flex rounded-full bg-mist p-1">
              {[
                ['desktop', Monitor, 'Desktop'],
                ['mobile', Smartphone, 'Mobile'],
              ].map(([key, Icon, label]) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={view === key}
                  onClick={() => setView(key)}
                  className={`flex h-9 items-center gap-1.5 rounded-full px-3.5 text-[13px] font-medium transition-[color,background-color,box-shadow] duration-300 ${
                    view === key ? 'bg-white text-ink shadow-[var(--shadow-soft)]' : 'text-ink-3 hover:text-ink'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              ))}
            </div>
            <button
              ref={closeBtn}
              type="button"
              onClick={onClose}
              aria-label="Close concept preview"
              className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-inset ring-ink/10 transition-colors hover:bg-ink hover:text-paper"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="dot-grid flex-1 overflow-y-auto overscroll-contain bg-mist px-4 py-6 sm:px-10 sm:py-10" tabIndex={0} aria-label="Scrollable concept preview">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease }}
          >
              {view === 'desktop' ? (
                <BrowserFrame url={project.url} className="mx-auto max-w-[1040px]">
                  <ScaledFrame width={1280}>
                    <Desktop />
                  </ScaledFrame>
                </BrowserFrame>
              ) : (
                <PhoneFrame className="mx-auto w-full max-w-[340px]">
                  <ScaledFrame width={390}>
                    <Mobile />
                  </ScaledFrame>
                </PhoneFrame>
              )}
          </motion.div>
          <p className="label mt-6 text-center">Fictional brand · Concept created for portfolio demonstration</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
