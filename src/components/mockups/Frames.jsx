import { useLayoutEffect, useRef, useState } from 'react'

// Renders children at a fixed design width (e.g. 1280px) and scales them to fit
// the container, so mockups keep real layout proportions at any size.
// With `height`, the frame crops to that design height; without it, the frame
// grows to the full content height (used for the scrollable concept viewer).
export function ScaledFrame({ width, height, className = '', children }) {
  const outer = useRef(null)
  const inner = useRef(null)
  const [scale, setScale] = useState(0)
  const [contentHeight, setContentHeight] = useState(0)

  useLayoutEffect(() => {
    const update = () => {
      if (outer.current) setScale(outer.current.clientWidth / width)
      if (inner.current) setContentHeight(inner.current.offsetHeight)
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(outer.current)
    ro.observe(inner.current)
    return () => ro.disconnect()
  }, [width])

  const style = height ? { aspectRatio: `${width} / ${height}` } : { height: contentHeight * scale }

  return (
    <div ref={outer} className={`relative w-full overflow-hidden ${className}`} style={style}>
      <div
        ref={inner}
        className="absolute left-0 top-0 origin-top-left"
        style={{ width, transform: `scale(${scale})`, visibility: scale ? 'visible' : 'hidden' }}
      >
        {children}
      </div>
    </div>
  )
}

export function BrowserFrame({ url, className = '', children }) {
  return (
    <div
      className={`overflow-hidden rounded-[10px] bg-white shadow-[var(--shadow-device)] ring-1 ring-ink/8 sm:rounded-[14px] ${className}`}
    >
      <div className="flex h-6 items-center gap-1.5 border-b border-ink/6 bg-[#f6f4f1] px-2.5 sm:h-8 sm:px-3.5">
        <span className="h-[7px] w-[7px] rounded-full bg-[#e2ddd6] sm:h-2.5 sm:w-2.5" />
        <span className="h-[7px] w-[7px] rounded-full bg-[#e2ddd6] sm:h-2.5 sm:w-2.5" />
        <span className="h-[7px] w-[7px] rounded-full bg-[#e2ddd6] sm:h-2.5 sm:w-2.5" />
        <span className="mx-auto flex h-4 max-w-[60%] flex-1 items-center justify-center rounded-md bg-white px-2 font-mono text-[8px] text-ink-3 ring-1 ring-ink/5 sm:h-5 sm:text-[10px]">
          <span className="truncate">{url}</span>
        </span>
        <span className="w-6 sm:w-10" />
      </div>
      {children}
    </div>
  )
}

export function PhoneFrame({ className = '', children }) {
  return (
    <div
      className={`relative rounded-[22px] bg-[#16161a] p-[5px] shadow-[var(--shadow-device)] sm:rounded-[30px] sm:p-[7px] ${className}`}
    >
      <div className="relative overflow-hidden rounded-[17px] bg-white sm:rounded-[23px]">
        <span className="absolute left-1/2 top-[5px] z-10 h-[10px] w-[30%] -translate-x-1/2 rounded-full bg-[#16161a] sm:top-2 sm:h-[14px]" />
        {children}
      </div>
    </div>
  )
}

// Stylized street map used inside the concept sites (decorative only).
export function MiniMap({ tone = 'warm', className = '' }) {
  const c =
    tone === 'warm'
      ? { bg: '#efe6d8', block: '#e6dac8', road: '#fbf7f1', park: '#d5dcc0', water: '#cfdde0', pin: '#2a1c13' }
      : { bg: '#e9e7e3', block: '#dedbd5', road: '#f8f7f5', park: '#d7dacd', water: '#d3dadd', pin: '#151515' }
  return (
    <svg viewBox="0 0 400 260" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="400" height="260" fill={c.bg} />
      <path d="M0 200 C80 190 140 230 220 215 S340 180 400 196 V260 H0Z" fill={c.water} />
      <rect x="250" y="30" width="110" height="70" rx="8" fill={c.park} />
      {[
        [20, 20, 90, 60],
        [130, 20, 100, 60],
        [20, 100, 90, 70],
        [130, 100, 100, 70],
        [250, 120, 110, 50],
      ].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="6" fill={c.block} />
      ))}
      <g stroke={c.road} strokeLinecap="round">
        <path d="M0 90 H400" strokeWidth="12" />
        <path d="M120 0 V200" strokeWidth="10" />
        <path d="M240 0 V190" strokeWidth="8" />
        <path d="M0 180 H260" strokeWidth="7" />
        <path d="M60 0 L380 250" strokeWidth="6" opacity="0.8" />
      </g>
      <g transform="translate(176 72)">
        <circle cx="12" cy="30" r="14" fill={c.pin} opacity="0.12" />
        <path d="M12 0C5.4 0 0 5.2 0 11.7 0 20.4 12 32 12 32s12-11.6 12-20.3C24 5.2 18.6 0 12 0z" fill={c.pin} />
        <circle cx="12" cy="11.5" r="4.2" fill="#fff" />
      </g>
    </svg>
  )
}
