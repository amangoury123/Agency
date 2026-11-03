import { unsplash } from '../../lib/img'

// Responsive, lazy-loaded photo. `sizes` should describe the rendered width.
export default function Img({ id, alt = '', sizes = '100vw', widths, eager = false, className = '', ...props }) {
  const { src, srcSet } = unsplash(id, widths)
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchpriority={eager ? 'high' : undefined}
      className={`h-full w-full object-cover ${className}`}
      {...props}
    />
  )
}
