import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const styles = {
  primary:
    'bg-ink text-paper shadow-[0_1px_0_rgb(255_255_255/0.12)_inset,0_10px_24px_-12px_rgb(20_20_23/0.6)] hover:bg-[#26262b]',
  secondary: 'bg-white/70 text-ink ring-1 ring-inset ring-ink/12 hover:ring-ink/30 hover:bg-white',
  ghost: 'text-ink hover:bg-ink/5',
  light: 'bg-paper text-ink hover:bg-white',
}

const sizes = {
  sm: 'h-10 px-4 text-[14px]',
  md: 'h-12 px-6 text-[15px]',
  lg: 'h-14 px-7 text-[15px]',
}

export default function Button({
  as,
  href,
  variant = 'primary',
  size = 'md',
  arrow = false,
  className = '',
  children,
  ...props
}) {
  const Comp = href ? motion.a : motion[as || 'button']
  return (
    <Comp
      href={href}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className={`group relative inline-flex select-none whitespace-nowrap items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-colors duration-300 disabled:pointer-events-none disabled:opacity-60 ${styles[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {arrow && (
        <span className="relative -mr-1 inline-flex h-5 w-5 overflow-hidden" aria-hidden="true">
          <ArrowRight className="absolute h-5 w-5 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-5" />
          <ArrowRight className="absolute h-5 w-5 -translate-x-5 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0" />
        </span>
      )}
    </Comp>
  )
}
