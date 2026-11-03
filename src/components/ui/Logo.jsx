// Same artwork as public/favicon.svg, inlined so it renders crisply at any size.
export function LogoMark({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 64 64" className={`shrink-0 ${className}`} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#16161a" />
      <text x="13" y="45" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="34" fill="#faf8f5">
        G
      </text>
      <circle cx="46" cy="41" r="5" fill="#e0522c" />
    </svg>
  )
}

export default function Logo({ className = '', inverted = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span
        className={`inline-flex items-baseline font-display text-[19px] leading-none tracking-[-0.03em] ${
          inverted ? 'text-paper' : 'text-ink'
        }`}
      >
        <span className="font-bold">Goury</span>
        <span className="font-bold text-accent">.</span>
        <span className="font-normal opacity-75">dev</span>
      </span>
    </span>
  )
}
