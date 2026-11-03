import Img from '../ui/Img'
import { MiniMap } from './Frames'
import { photos } from '../../lib/img'

// Fictional concept brand: Café Lumière — specialty coffee shop.
const serif = { fontFamily: '"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif' }
const c = { cream: '#f6f0e7', paper: '#fbf8f3', espresso: '#2a1c13', bean: '#5b4332', caramel: '#b4723c', line: '#e6dccd' }

const menu = [
  ['Espresso', 'Single origin, rotating', '3.20'],
  ['Flat White', 'Double ristretto, steamed milk', '4.40'],
  ['Oat Cortado', 'Equal parts, silky oat', '4.20'],
  ['Pour Over', 'Ethiopia Guji, V60', '5.50'],
  ['Cardamom Bun', 'Baked every morning', '3.80'],
  ['Almond Croissant', 'Twice baked, frangipane', '4.10'],
]

const hours = [
  ['Mon – Fri', '7:00 – 18:00'],
  ['Saturday', '8:00 – 18:00'],
  ['Sunday', '8:00 – 15:00'],
]

function CafeLogo({ size = 22, color = c.espresso }) {
  return (
    <span style={{ ...serif, fontSize: size, color, letterSpacing: '-0.01em' }} className="italic">
      Café Lumière
    </span>
  )
}

export function CafeDesktop({ eager = false }) {
  return (
    <div style={{ background: c.paper, color: c.espresso }} className="font-sans" aria-hidden="true">
      {/* Nav */}
      <div className="flex items-center justify-between px-16 py-7">
        <CafeLogo size={26} />
        <div className="flex items-center gap-10 text-[15px]" style={{ color: c.bean }}>
          <span>Menu</span>
          <span>Our Coffee</span>
          <span>Visit</span>
          <span>Events</span>
          <span className="rounded-full px-6 py-3 text-[14px] font-medium" style={{ background: c.espresso, color: c.cream }}>
            Reserve a table
          </span>
        </div>
      </div>

      {/* Hero */}
      <div className="grid grid-cols-12 gap-10 px-16 pb-20 pt-8">
        <div className="col-span-6 flex flex-col justify-center">
          <span className="text-[13px] uppercase tracking-[0.24em]" style={{ color: c.caramel }}>
            Specialty coffee & bakery
          </span>
          <h3 style={{ ...serif }} className="mt-6 text-[82px] font-normal leading-[0.98] tracking-[-0.03em]">
            Slow mornings, <em>carefully</em> poured.
          </h3>
          <p className="mt-7 max-w-[440px] text-[18px] leading-[1.6]" style={{ color: c.bean }}>
            Small-batch roasts, fresh pastries and a quiet corner to stay a while. Come in, or reserve a table for later.
          </p>
          <div className="mt-10 flex items-center gap-4 text-[15px] font-medium">
            <span className="rounded-full px-7 py-4" style={{ background: c.espresso, color: c.cream }}>
              View the menu
            </span>
            <span className="rounded-full px-7 py-4" style={{ border: `1px solid ${c.line}` }}>
              Find us →
            </span>
          </div>
        </div>
        <div className="relative col-span-6">
          <div className="h-[560px] overflow-hidden rounded-[28px]">
            <Img id={photos.latte} alt="" sizes="(min-width: 1024px) 420px, 60vw" widths={[400, 700, 1000]} eager={eager} />
          </div>
          <div
            className="absolute -left-10 bottom-10 rounded-2xl px-6 py-5 shadow-[0_20px_40px_-20px_rgba(42,28,19,0.4)]"
            style={{ background: c.paper }}
          >
            <div className="flex items-center gap-2 text-[13px]" style={{ color: c.caramel }}>
              <span className="h-2 w-2 rounded-full bg-[#5f9a62]" /> Open today
            </div>
            <div style={serif} className="mt-1 text-[28px]">
              7:00 – 18:00
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="px-16 py-20" style={{ background: c.cream }}>
        <div className="flex items-end justify-between">
          <h4 style={serif} className="text-[52px] font-normal tracking-[-0.02em]">
            The menu
          </h4>
          <div className="flex gap-2 text-[14px]">
            {['Coffee', 'Bakery', 'Brunch'].map((t, i) => (
              <span
                key={t}
                className="rounded-full px-5 py-2.5"
                style={i === 0 ? { background: c.espresso, color: c.cream } : { border: `1px solid ${c.line}` }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6">
          <div className="col-span-1 h-[360px] overflow-hidden rounded-[22px]">
            <Img id={photos.coffeeBoard} alt="" sizes="300px" widths={[400, 700]} />
          </div>
          <div className="col-span-2 grid grid-cols-2 content-start gap-x-12">
            {menu.map(([name, note, price]) => (
              <div key={name} className="flex items-baseline justify-between border-b py-5" style={{ borderColor: c.line }}>
                <div>
                  <div style={serif} className="text-[24px]">
                    {name}
                  </div>
                  <div className="mt-1 text-[14px]" style={{ color: c.bean }}>
                    {note}
                  </div>
                </div>
                <div className="text-[17px] tabular-nums" style={{ color: c.caramel }}>
                  ${price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visit */}
      <div className="grid grid-cols-12 gap-10 px-16 py-20">
        <div className="col-span-5">
          <h4 style={serif} className="text-[52px] font-normal tracking-[-0.02em]">
            Visit us
          </h4>
          <p className="mt-4 text-[17px]" style={{ color: c.bean }}>
            24 Market Street, Old Town
          </p>
          <div className="mt-10 space-y-0">
            {hours.map(([d, h]) => (
              <div key={d} className="flex justify-between border-b py-4 text-[17px]" style={{ borderColor: c.line }}>
                <span>{d}</span>
                <span className="tabular-nums" style={{ color: c.bean }}>
                  {h}
                </span>
              </div>
            ))}
          </div>
          <span className="mt-10 inline-block rounded-full px-7 py-4 text-[15px] font-medium" style={{ background: c.espresso, color: c.cream }}>
            Get directions
          </span>
        </div>
        <div className="col-span-7 h-[420px] overflow-hidden rounded-[28px]">
          <MiniMap className="h-full w-full" />
        </div>
      </div>

      {/* Reservation */}
      <div className="mx-16 mb-16 grid grid-cols-12 gap-10 rounded-[32px] px-14 py-16" style={{ background: c.espresso, color: c.cream }}>
        <div className="col-span-5">
          <h4 style={serif} className="text-[48px] font-normal leading-[1.05] tracking-[-0.02em]">
            Save me a table
          </h4>
          <p className="mt-4 text-[16px] opacity-70">Weekend brunch fills fast. Reserve ahead or send us a question.</p>
        </div>
        <div className="col-span-7 grid grid-cols-3 gap-4 self-center text-[15px]">
          {[
            ['Date', 'Sat, 14 June'],
            ['Time', '10:30'],
            ['Guests', '2 people'],
          ].map(([l, v]) => (
            <div key={l} className="rounded-2xl px-5 py-4" style={{ background: 'rgba(246,240,231,0.08)' }}>
              <div className="text-[12px] uppercase tracking-[0.16em] opacity-60">{l}</div>
              <div className="mt-1.5">{v}</div>
            </div>
          ))}
          <span className="col-span-3 rounded-full py-4 text-center font-medium" style={{ background: c.caramel, color: '#fff' }}>
            Request reservation
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t px-16 py-8 text-[14px]" style={{ borderColor: c.line, color: c.bean }}>
        <CafeLogo size={20} />
        <span>Instagram · Newsletter · Careers</span>
      </div>
    </div>
  )
}

export function CafeMobile({ eager = false }) {
  return (
    <div style={{ background: c.paper, color: c.espresso }} className="font-sans" aria-hidden="true">
      <div className="flex items-center justify-between px-6 pb-4 pt-12">
        <CafeLogo size={22} />
        <span className="flex flex-col gap-[5px]">
          <span className="block h-[2px] w-6" style={{ background: c.espresso }} />
          <span className="block h-[2px] w-4 self-end" style={{ background: c.espresso }} />
        </span>
      </div>
      <div className="mx-4 h-[300px] overflow-hidden rounded-[24px]">
        <Img id={photos.cafeTerrace} alt="" sizes="160px" widths={[320, 600]} eager={eager} />
      </div>
      <div className="px-6 pt-7">
        <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px]" style={{ background: c.cream, color: c.bean }}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#5f9a62]" /> Open now · until 18:00
        </span>
        <h3 style={serif} className="mt-4 text-[40px] font-normal leading-[1.02] tracking-[-0.02em]">
          Slow mornings, <em>carefully</em> poured.
        </h3>
        <div className="mt-6 grid grid-cols-2 gap-3 text-[14px] font-medium">
          <span className="rounded-full py-3.5 text-center" style={{ background: c.espresso, color: c.cream }}>
            Menu
          </span>
          <span className="rounded-full py-3.5 text-center" style={{ border: `1px solid ${c.line}` }}>
            Directions
          </span>
        </div>
      </div>
      <div className="mt-8 px-6 pb-6">
        <div className="text-[12px] uppercase tracking-[0.2em]" style={{ color: c.caramel }}>
          Today’s favourites
        </div>
        {menu.slice(1, 5).map(([name, , price]) => (
          <div key={name} className="flex justify-between border-b py-3.5 text-[16px]" style={{ borderColor: c.line }}>
            <span style={serif}>{name}</span>
            <span style={{ color: c.caramel }}>${price}</span>
          </div>
        ))}
      </div>
      <div className="mx-4 mb-6 rounded-[20px] px-5 py-4 text-[15px] font-medium" style={{ background: c.espresso, color: c.cream }}>
        <div className="flex items-center justify-between">
          <span>Reserve a table</span>
          <span>→</span>
        </div>
      </div>
    </div>
  )
}
