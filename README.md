# Goury.dev — Agency Website

Marketing site for Goury.dev, an independent web development studio for cafes, restaurants, salons and local service businesses.

Built with React, Vite, Tailwind CSS v4, Framer Motion and Lucide icons.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Configuration

Contact details are never hard-coded. Copy `.env.example` to `.env` and fill in what you have:

| Variable | Purpose |
| --- | --- |
| `VITE_CONTACT_EMAIL` | Shown in the contact section and footer. Hidden when empty. |
| `VITE_FORM_ENDPOINT` | Optional form backend (Formspree, Basin, Getform…) that accepts a JSON `POST`. |
| `VITE_SOCIAL_*` | Instagram / LinkedIn / GitHub / X links in the footer. Hidden when empty. |

How the inquiry form sends:

1. If `VITE_FORM_ENDPOINT` is set, it posts `{ name, business, email, type, details }` as JSON.
2. Otherwise, if `VITE_CONTACT_EMAIL` is set, it opens the visitor's email app with a pre-filled message.
3. If neither is set, it shows a notice that the form isn't connected yet.

## Project structure

```
src/
  config/site.js          Business details, nav links (reads .env)
  data/content.js         All section copy: services, industries, FAQ, process…
  lib/img.js              Unsplash photo IDs + responsive srcset helper
  components/
    ui/                   Button, Logo, Reveal (scroll animations), SectionHeading, Img
    mockups/              Device frames + the Café Lumière & Maison Studio concept sites
    sections/             One file per page section, composed in App.jsx
```

Most copy changes only need `src/data/content.js`.

## Notes

- **Concept projects.** Café Lumière and Maison Studio are fictional brands, labelled as concepts throughout the site. Their mockups are real HTML layouts rendered at desktop/mobile widths and scaled down (`ScaledFrame`), so they stay sharp and are easy to edit.
- **Images** load from the Unsplash CDN with automatic AVIF/WebP and width-based `srcset`. To self-host, replace the IDs in `src/lib/img.js` and the URL builder in the same file.
- **Motion** respects `prefers-reduced-motion` through `MotionConfig reducedMotion="user"`; the floating hero chips also switch off.
- **SEO.** The title, description, Open Graph tags and JSON-LD live in `index.html`. Once you have a domain, add `og:url`, `og:image` and a canonical link.
