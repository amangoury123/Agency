// Unsplash images served through their CDN with automatic format (AVIF/WebP)
// and width-based srcsets so each device only downloads what it needs.
const base = (id, w, q = 70) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`

export function unsplash(id, widths = [480, 800, 1200]) {
  return {
    src: base(id, widths[Math.floor(widths.length / 2)]),
    srcSet: widths.map((w) => `${base(id, w)} ${w}w`).join(', '),
  }
}

export const photos = {
  cafeInterior: 'photo-1554118811-1e0d58224f24',
  cafeTerrace: 'photo-1559925393-8be0ec4767c8',
  latte: 'photo-1509042239860-f550ce710b93',
  coffeeBoard: 'photo-1497935586351-b67a49e012bf',
  restaurant: 'photo-1414235077428-338989a2e8c0',
  salonStylist: 'photo-1562322140-8baeececf3df',
  salonDark: 'photo-1600948836101-f9ffda59d250',
  salonBright: 'photo-1560066984-138dadb4c035',
  hair: 'photo-1522337360788-8b13dee7a37e',
  photographer: 'photo-1542038784456-1ea8e935640e',
  localService: 'photo-1581578731548-c64695cc6952',
}
