// Central place for business details. Values come from environment variables
// (see .env.example) so nothing here needs to be hard-coded or invented.
const env = import.meta.env

export const site = {
  name: 'Goury.dev',
  tagline: 'Independent web development studio',
  description:
    'We design and build modern websites and booking experiences for cafes, restaurants, salons and local service businesses.',
  email: env.VITE_CONTACT_EMAIL || '',
  formEndpoint: env.VITE_FORM_ENDPOINT || '',
  regions: 'Working with businesses across the US & Europe',
  socials: [
    { label: 'Instagram', href: env.VITE_SOCIAL_INSTAGRAM || '' },
    { label: 'LinkedIn', href: env.VITE_SOCIAL_LINKEDIN || '' },
    { label: 'GitHub', href: env.VITE_SOCIAL_GITHUB || '' },
    { label: 'X', href: env.VITE_SOCIAL_X || '' },
  ].filter((s) => s.href),
}

export const navLinks = [
  { label: 'Home', href: '#top', id: 'top' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Industries', href: '#industries', id: 'industries' },
  { label: 'Our Work', href: '#work', id: 'work' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]
