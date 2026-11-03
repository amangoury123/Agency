import Img from '../ui/Img'
import { MiniMap } from './Frames'
import { photos } from '../../lib/img'

// Fictional concept brand: Maison Studio — premium hair salon.
const c = { ink: '#151515', soft: '#5c5853', bone: '#efebe5', paper: '#f8f6f3', line: '#e2ddd6', gold: '#a8865a' }
const display = 'font-display uppercase'

const services = [
  ['Cut & Style', '60 min', '85'],
  ['Signature Blow Dry', '45 min', '55'],
  ['Full Colour', '120 min', '140'],
  ['Balayage', '180 min', '220'],
  ['Gloss Treatment', '30 min', '45'],
  ['Men’s Cut', '40 min', '50'],
]

const slots = ['09:30', '10:15', '11:00', '13:30', '14:15', '15:45', '16:30', '17:15']

const team = [
  ['ÉL', 'Élise Martin', 'Creative Director', '#d9cfc3'],
  ['MR', 'Marco Rossi', 'Senior Colourist', '#cfd3cc'],
  ['NA', 'Noor Amari', 'Stylist', '#ded5cd'],
]

function SalonLogo({ color = c.ink, size = 20 }) {
  return (
    <span className="flex items-baseline gap-2" style={{ color }}>
      <span className={`${display} font-semibold tracking-[0.34em]`} style={{ fontSize: size }}>
        Maison
      </span>
      <span className="font-mono text-[0.55em] uppercase tracking-[0.2em] opacity-70" style={{ fontSize: size * 0.55 }}>
        studio
      </span>
    </span>
  )
}

export function SalonDesktop({ eager = false }) {
  return (
    <div style={{ background: c.paper, color: c.ink }} className="font-sans" aria-hidden="true">
      {/* Hero */}
      <div className="relative h-[760px] overflow-hidden">
        <Img id={photos.salonDark} alt="" sizes="(min-width: 1024px) 560px, 80vw" widths={[600, 1000, 1400]} eager={eager} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-16 py-8 text-white">
          <SalonLogo color="#fff" size={22} />
          <div className="flex items-center gap-10 text-[15px] text-white/80">
            <span>Services</span>
            <span>Team</span>
            <span>Journal</span>
            <span>Contact</span>
            <span className="rounded-full bg-white px-6 py-3 text-[14px] font-medium text-[#151515]">Book appointment</span>
          </div>
        </div>
        <div className="absolute bottom-24 left-16 max-w-[640px] text-white">
          <span className="font-mono text-[13px] uppercase tracking-[0.3em] text-white/70">Hair · Colour · Care</span>
          <h3 className={`${display} mt-6 text-[96px] font-medium leading-[0.92] tracking-[-0.02em]`}>Hair, considered.</h3>
          <p className="mt-6 max-w-[460px] text-[18px] leading-[1.6] text-white/75">
            Precision cuts and modern colour in a calm, light-filled studio. Book online in under a minute.
          </p>
          <div className="mt-9 flex gap-4 text-[15px] font-medium">
            <span className="rounded-full bg-white px-7 py-4 text-[#151515]">Book now</span>
            <span className="rounded-full px-7 py-4 ring-1 ring-white/40">View services</span>
          </div>
        </div>
      </div>

      {/* Services & pricing */}
      <div className="grid grid-cols-12 gap-12 px-16 py-24">
        <div className="col-span-4">
          <span className="font-mono text-[13px] uppercase tracking-[0.24em]" style={{ color: c.gold }}>
            Services
          </span>
          <h4 className={`${display} mt-5 text-[52px] font-medium leading-[0.98]`}>Menu & pricing</h4>
          <p className="mt-6 text-[16px] leading-[1.6]" style={{ color: c.soft }}>
            Every appointment begins with a consultation. Prices vary by length and stylist level.
          </p>
        </div>
        <div className="col-span-8 grid grid-cols-2 gap-x-14">
          {services.map(([name, time, price]) => (
            <div key={name} className="flex items-baseline gap-4 border-b py-6" style={{ borderColor: c.line }}>
              <div className="flex-1">
                <div className="text-[20px] font-medium">{name}</div>
                <div className="mt-1 font-mono text-[12px] uppercase tracking-[0.12em]" style={{ color: c.soft }}>
                  {time}
                </div>
              </div>
              <div className="text-[18px] tabular-nums">from ${price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking concept */}
      <div className="mx-16 grid grid-cols-12 gap-10 rounded-[28px] p-14" style={{ background: c.bone }}>
        <div className="col-span-4">
          <h4 className={`${display} text-[44px] font-medium leading-[1]`}>Book your visit</h4>
          <div className="mt-8 space-y-3 text-[15px]">
            {['Service', 'Stylist', 'Date & time'].map((s, i) => (
              <div key={s} className="flex items-center gap-4">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full font-mono text-[12px]"
                  style={i < 2 ? { background: c.ink, color: '#fff' } : { border: `1px solid ${c.ink}` }}
                >
                  {i < 2 ? '✓' : '3'}
                </span>
                <span style={{ color: i < 2 ? c.soft : c.ink }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-8 rounded-[20px] bg-white p-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[18px] font-medium">Cut & Style with Élise</div>
              <div className="mt-1 text-[14px]" style={{ color: c.soft }}>
                Thursday, 12 June · 60 min
              </div>
            </div>
            <div className="flex gap-2">
              {['Wed 11', 'Thu 12', 'Fri 13', 'Sat 14'].map((d, i) => (
                <span
                  key={d}
                  className="rounded-xl px-4 py-2.5 text-[13px]"
                  style={i === 1 ? { background: c.ink, color: '#fff' } : { border: `1px solid ${c.line}` }}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 grid grid-cols-4 gap-3">
            {slots.map((s, i) => (
              <span
                key={s}
                className="rounded-xl py-3.5 text-center font-mono text-[14px]"
                style={
                  i === 4
                    ? { background: c.ink, color: '#fff' }
                    : i === 2
                      ? { color: '#b9b3ab', border: `1px dashed ${c.line}` }
                      : { border: `1px solid ${c.line}` }
                }
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-8 rounded-full py-4 text-center text-[15px] font-medium text-white" style={{ background: c.ink }}>
            Confirm 14:15 appointment
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="px-16 py-24">
        <div className="flex items-end justify-between">
          <h4 className={`${display} text-[52px] font-medium leading-[1]`}>The team</h4>
          <span className="text-[15px]" style={{ color: c.soft }}>
            Meet our stylists →
          </span>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6">
          {team.map(([ini, name, role, bg], i) => (
            <div key={name}>
              <div className="relative h-[340px] overflow-hidden rounded-[22px]" style={{ background: bg }}>
                {i === 0 ? (
                  <Img id={photos.hair} alt="" sizes="260px" widths={[400, 700]} />
                ) : (
                  <span className={`${display} absolute inset-0 flex items-center justify-center text-[88px] font-light text-black/15`}>
                    {ini}
                  </span>
                )}
              </div>
              <div className="mt-5 text-[20px] font-medium">{name}</div>
              <div className="mt-1 font-mono text-[12px] uppercase tracking-[0.14em]" style={{ color: c.soft }}>
                {role}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="grid grid-cols-12 gap-10 px-16 pb-20" style={{ color: c.ink }}>
        <div className="col-span-5">
          <h4 className={`${display} text-[44px] font-medium leading-[1]`}>Find the studio</h4>
          <div className="mt-8 space-y-5 text-[16px]" style={{ color: c.soft }}>
            <div>
              <div className="font-mono text-[12px] uppercase tracking-[0.16em]" style={{ color: c.gold }}>
                Address
              </div>
              <div className="mt-1">18 Linden Avenue, Suite 2</div>
            </div>
            <div>
              <div className="font-mono text-[12px] uppercase tracking-[0.16em]" style={{ color: c.gold }}>
                Phone
              </div>
              <div className="mt-1">(555) 014-2290</div>
            </div>
            <div>
              <div className="font-mono text-[12px] uppercase tracking-[0.16em]" style={{ color: c.gold }}>
                Hours
              </div>
              <div className="mt-1">Tue – Sat · 9:00 – 19:00</div>
            </div>
          </div>
        </div>
        <div className="col-span-7 h-[320px] overflow-hidden rounded-[24px]">
          <MiniMap tone="cool" className="h-full w-full" />
        </div>
      </div>
      <div className="flex items-center justify-between px-16 py-8 text-[14px] text-white" style={{ background: c.ink }}>
        <SalonLogo color="#fff" size={16} />
        <span className="text-white/60">Instagram · Gift cards · Careers</span>
      </div>
    </div>
  )
}

export function SalonMobile({ eager = false }) {
  return (
    <div style={{ background: c.paper, color: c.ink }} className="font-sans" aria-hidden="true">
      <div className="relative h-[430px] overflow-hidden">
        <Img id={photos.hair} alt="" sizes="160px" widths={[320, 600]} eager={eager} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-6 pt-12 text-white">
          <SalonLogo color="#fff" size={17} />
          <span className="flex flex-col gap-[5px]">
            <span className="block h-[2px] w-6 bg-white" />
            <span className="block h-[2px] w-6 bg-white" />
          </span>
        </div>
        <div className="absolute inset-x-6 bottom-7 text-white">
          <h3 className={`${display} text-[46px] font-medium leading-[0.92]`}>Hair, considered.</h3>
          <div className="mt-5 rounded-full bg-white py-3.5 text-center text-[15px] font-medium text-[#151515]">
            Book appointment
          </div>
        </div>
      </div>
      <div className="px-6 py-7">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: c.gold }}>
          Available Thursday
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {slots.slice(0, 8).map((s, i) => (
            <span
              key={s}
              className="rounded-lg py-2.5 text-center font-mono text-[12px]"
              style={i === 4 ? { background: c.ink, color: '#fff' } : { border: `1px solid ${c.line}` }}
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-7">
          {services.slice(0, 4).map(([name, time, price]) => (
            <div key={name} className="flex items-baseline justify-between border-b py-3.5" style={{ borderColor: c.line }}>
              <div>
                <div className="text-[16px] font-medium">{name}</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.1em]" style={{ color: c.soft }}>
                  {time}
                </div>
              </div>
              <span className="text-[15px] tabular-nums">${price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
