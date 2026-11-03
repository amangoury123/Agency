import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

export const stagger = (gap = 0.08, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
})

// Fades content up once when it scrolls into view.
export default function Reveal({ as = 'div', delay = 0, y = 24, className = '', children, ...props }) {
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.8, ease, delay }}
      {...props}
    >
      {children}
    </Comp>
  )
}

// Parent that staggers any children using the `fadeUp` variant.
export function RevealGroup({ as = 'div', gap = 0.08, delay = 0, className = '', children, ...props }) {
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      variants={stagger(gap, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      {...props}
    >
      {children}
    </Comp>
  )
}
