import {
  Code2,
  CalendarCheck,
  RefreshCcw,
  Gauge,
  LifeBuoy,
  UserRound,
  Cpu,
  Target,
  MessagesSquare,
  ShieldCheck,
  LayoutTemplate,
  Smartphone,
  Zap,
  Wrench,
} from 'lucide-react'
import { photos } from '../lib/img'

export const values = [
  {
    icon: LayoutTemplate,
    title: 'Built for Your Business',
    text: 'No recycled templates. Every site is shaped around how your customers find, choose and contact you.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Experience',
    text: 'Most local searches happen on a phone. We design for thumbs first, then scale up to desktop.',
  },
  {
    icon: Zap,
    title: 'Performance Focused',
    text: 'Lean code, optimized images and fast hosting, so pages load quickly on any connection.',
  },
  {
    icon: Wrench,
    title: 'Ongoing Support',
    text: 'Launch is the start. We stay on hand for updates, fixes and improvements as you grow.',
  },
]

export const services = [
  {
    icon: Code2,
    tag: 'build',
    title: 'Website Design & Development',
    text: 'A custom, responsive website designed around your brand and built with modern, reliable technology.',
    points: ['Custom design', 'Responsive build', 'Menu & service showcases'],
  },
  {
    icon: CalendarCheck,
    tag: 'booking',
    title: 'Booking & Reservation Integration',
    text: 'Let customers book a table, appointment or inquiry in a few taps, connected to the tools you already use.',
    points: ['Appointment booking', 'Reservations & inquiries', 'Calendar sync'],
  },
  {
    icon: RefreshCcw,
    tag: 'redesign',
    title: 'Business Website Redesign',
    text: 'Turn an outdated or hard-to-use website into a clear, modern experience that reflects your business today.',
    points: ['UX & content audit', 'Visual refresh', 'Smooth migration'],
  },
  {
    icon: Gauge,
    tag: 'seo',
    title: 'SEO & Performance Optimization',
    text: 'Technical SEO, local search foundations and speed improvements that help nearby customers find you.',
    points: ['Local SEO basics', 'Google Maps integration', 'Speed optimization'],
  },
  {
    icon: LifeBuoy,
    tag: 'care',
    title: 'Website Maintenance',
    text: 'Updates, backups, content changes and monitoring, handled for you so your site stays secure and current.',
    points: ['Content updates', 'Backups & security', 'Priority support'],
  },
]

export const industries = [
  {
    title: 'Cafes & Coffee Shops',
    photo: photos.cafeInterior,
    alt: 'Bright cafe interior with wooden tables and plants',
    solution:
      'Menu showcases, opening hours, location maps and a warm, on-brand presence that turns Instagram followers into regulars.',
    features: ['Digital menu', 'Hours & map', 'Events'],
  },
  {
    title: 'Restaurants',
    photo: photos.restaurant,
    alt: 'Plated dish on a restaurant table with wine glasses',
    solution:
      'Table reservations, private dining inquiries and menus that are easy to read and update on any phone.',
    features: ['Reservations', 'Menus', 'Private events'],
  },
  {
    title: 'Salons & Barbers',
    photo: photos.salonStylist,
    alt: 'Hair stylist drying a client’s hair in a bright salon',
    solution:
      'Online appointment booking, clear service pricing and team profiles that help new clients book with confidence.',
    features: ['Online booking', 'Price lists', 'Team profiles'],
  },
  {
    title: 'Photographers',
    photo: photos.photographer,
    alt: 'Photographer holding a camera outdoors in an autumn forest',
    solution:
      'Fast, image-led portfolios with galleries, packages and inquiry forms that let the work speak first.',
    features: ['Portfolios', 'Packages', 'Inquiry forms'],
  },
  {
    title: 'Local Service Businesses',
    photo: photos.localService,
    alt: 'Cleaning professional wiping a window in a home',
    solution:
      'Clear service pages, quote requests and local SEO so people nearby can find you and get in touch quickly.',
    features: ['Quote requests', 'Service areas', 'Local SEO'],
  },
]

export const reasons = [
  {
    icon: UserRound,
    title: 'Personal attention',
    text: 'You work directly with the people designing and building your site. No account-manager relay.',
  },
  {
    icon: Cpu,
    title: 'Modern technology',
    text: 'Current, well-supported tools that keep your site fast, secure and easy to extend later.',
  },
  {
    icon: Target,
    title: 'Business-focused design',
    text: 'Every layout decision serves a goal: more bookings, more visits, more inquiries.',
  },
  {
    icon: MessagesSquare,
    title: 'Clear communication',
    text: 'Plain-language updates, honest timelines and a single point of contact from start to finish.',
  },
  {
    icon: ShieldCheck,
    title: 'Long-term support',
    text: 'We stay available after launch for changes, improvements and peace of mind.',
  },
]

export const process = [
  {
    n: '01',
    title: 'Discover',
    text: 'Understand the business, goals, and requirements.',
    detail: 'A short call to learn about your customers, what is working today and what needs to change.',
  },
  {
    n: '02',
    title: 'Design',
    text: 'Create a modern design tailored to the brand.',
    detail: 'Layouts and visual direction built around your brand, shared for feedback before any code is written.',
  },
  {
    n: '03',
    title: 'Develop',
    text: 'Build a responsive, optimized website.',
    detail: 'A fast, accessible build with booking, maps and integrations, tested across devices.',
  },
  {
    n: '04',
    title: 'Launch & Support',
    text: 'Deploy the website and provide ongoing support.',
    detail: 'We handle the launch, walk you through everything and stay on hand for updates.',
  },
]

export const faqs = [
  {
    q: 'How much does a business website cost?',
    a: 'Every project is priced individually, because a one-page cafe site and a multi-location salon with booking are very different builds. After a short discovery call we send a clear, fixed quote that lists exactly what is included, with no hidden fees.',
  },
  {
    q: 'How long does development take?',
    a: 'It depends on the number of pages, the features you need and how quickly content such as photos and menus is ready. You will receive a realistic timeline with your proposal, and we keep you updated at every stage.',
  },
  {
    q: 'Can you integrate online appointment booking?',
    a: 'Yes. We can connect popular booking and reservation platforms you may already use, such as Calendly, Square Appointments, Fresha, Booksy or OpenTable, or build a simple inquiry and request system tailored to your workflow.',
  },
  {
    q: 'Do you provide website maintenance?',
    a: 'Yes. We offer ongoing maintenance that covers content updates, backups, security updates and technical support, so you can focus on running your business.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Absolutely. We review what your current site does well and where it falls short, then redesign it with a modern look, better mobile experience and clearer paths to booking or contacting you, while keeping your domain and the content that still works.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes. We work remotely with businesses in the United States and Europe, communicate in English and schedule calls around your time zone.',
  },
]

export const businessTypes = [
  'Cafe / Coffee shop',
  'Restaurant / Food business',
  'Hair salon / Barbershop',
  'Photographer / Creative studio',
  'Other local service business',
]
