'use client'

import { useEffect, useRef, useState } from 'react'

// The name sits on the horizon: "Alana" above the waterline, "Janniello" below it in the sand.
// The hero pins for PIN px of scroll while the sun sets into the water, then scrolls away.
const name =
  'm-0 font-bold leading-[0.8] tracking-[-0.055em] text-[clamp(72px,20vw,88px)] md:text-[clamp(96px,11.7vw,150px)]'

const clamp = (x: number) => Math.min(1, Math.max(0, x))

function useSunset() {
  const ref = useRef<HTMLDivElement>(null)
  const [s, setS] = useState({ p: 0, md: true, vh: 900, reduced: false })

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const el = ref.current
        const md = window.innerWidth >= 768
        const heroH = md ? 780 : 700
        const pin = reduced ? 0 : md ? 560 : 440
        let p = 0
        if (el && pin) {
          const stickyTop = Math.min(0, window.innerHeight - heroH)
          p = clamp((stickyTop - el.getBoundingClientRect().top) / pin)
        }
        setS({ p, md, vh: window.innerHeight, reduced })
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return [ref, s] as const
}

export default function Hero() {
  const [ref, { p, md, vh, reduced }] = useSunset()

  const heroH = md ? 780 : 700
  const sandH = md ? 300 : 380
  const pin = reduced ? 0 : md ? 560 : 440
  const e = p * p * (3 - 2 * p) // smoothstep

  // Full sun disc, clipped at the waterline (top of the 28px water band).
  const D = md ? 220 : 120
  const R = D / 2
  const sunRight = md ? 170 : 24
  const sunCX = sunRight + R // sun centre, measured from container right
  const waterline = sandH + 28
  const start = 10 // sun bottom sits just above the water
  const end = -(D - (md ? 10 : 6)) // a sliver left
  const b = start + (end - start) * e
  const h = b + R
  const submerged = clamp(-b / D)
  const chord = Math.abs(h) < R ? 2 * Math.sqrt(R * R - h * h) : 0
  const near = clamp(1 - Math.max(0, b) / D)
  const squash = 0.07 * Math.sin(Math.PI * Math.min(1, submerged * 1.2))
  const tintW = Math.max(Math.max(chord, D * 0.45) * 3.3, md ? 360 : 200)
  const haloD = D * 3.4
  const stage1 = clamp(e / 0.55)
  const stage2 = clamp((e - 0.45) / 0.55)

  return (
    <div ref={ref} style={{ height: heroH + pin }} className="relative">
      <section
        style={{ top: Math.min(0, vh - heroH) }}
        className={`${pin ? 'sticky' : 'relative'} h-[700px] overflow-hidden bg-sea-200 [--sand-h:380px] md:h-[780px] md:[--sand-h:300px]`}
      >
        <h1 className="sr-only">Alana Janniello</h1>

        {/* Sky: warms to gold, then ember near the horizon */}
        <div
          aria-hidden="true"
          style={{
            opacity: stage1,
            background:
              'linear-gradient(to bottom, rgba(188,216,228,0) 20%, #f0dcc2 72%, #f6cb9c 100%)',
          }}
          className="absolute inset-x-0 top-0 bottom-(--sand-h)"
        />
        <div
          aria-hidden="true"
          style={{
            opacity: stage2,
            background:
              'linear-gradient(to bottom, rgba(214,204,196,0.55) 0%, #efcaa9 42%, #f2a679 80%, #e88a63 100%)',
          }}
          className="absolute inset-x-0 top-0 bottom-(--sand-h)"
        />

        {/* Water band */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-(--sand-h) h-7 bg-sea-500" />
        <div
          aria-hidden="true"
          style={{ opacity: stage2 * 0.6, background: 'linear-gradient(to bottom, #9a7a7e, #6f8a9c)' }}
          className="absolute inset-x-0 bottom-(--sand-h) h-7"
        />

        <div className="relative mx-auto h-full max-w-[1280px]">
          {/* Halo */}
          <div
            aria-hidden="true"
            style={{
              right: sunCX - haloD / 2,
              bottom: waterline + h - haloD / 2,
              width: haloD,
              height: haloD,
              opacity: 0.2 + 0.8 * e,
              background:
                'radial-gradient(circle, rgba(255,196,112,0.9) 0%, rgba(240,140,90,0.42) 30%, rgba(240,140,90,0) 62%)',
            }}
            className="pointer-events-none absolute rounded-full"
          />

          {/* Warm reflection on the water */}
          <div
            aria-hidden="true"
            style={{
              right: sunCX - tintW / 2,
              width: tintW,
              opacity: (0.15 + 0.85 * e) * (0.35 + 0.65 * near),
              background:
                'linear-gradient(90deg, rgba(196,112,79,0) 0%, rgba(245,154,95,0.85) 38%, rgba(255,211,122,1) 50%, rgba(245,154,95,0.85) 62%, rgba(196,112,79,0) 100%)',
            }}
            className="absolute bottom-(--sand-h) h-7"
          />

          {/* Sun, clipped at the waterline */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 bottom-[calc(var(--sand-h)+28px)] overflow-hidden"
          >
            <div
              style={{
                right: sunRight,
                bottom: b,
                width: D,
                height: D,
                transform: `scale(${1 + squash * 0.5}, ${1 - squash})`,
                transformOrigin: '50% 100%',
              }}
              className="absolute overflow-hidden rounded-full will-change-transform"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,#fff6dc_0%,#ffe6a8_55%,#f8cf8a_100%)]" />
              <div
                style={{ opacity: stage1 }}
                className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffd37a_0%,#f59a5f_60%,#c4704f_100%)]"
              />
              <div
                style={{ opacity: stage2 }}
                className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffb86b_0%,#ec7a48_50%,#b9553a_100%)]"
              />
            </div>
          </div>

          {/* Bright line where the sun meets the water */}
          <div
            aria-hidden="true"
            style={{
              right: sunCX - (chord * 1.6) / 2,
              width: chord * 1.6,
              opacity: chord > 0 ? 0.95 : 0,
              background: 'linear-gradient(90deg, rgba(255,231,166,0), #fff1c2 50%, rgba(255,231,166,0))',
            }}
            className="absolute bottom-[calc(var(--sand-h)+27px)] h-[3px] rounded-full"
          />

          {/* Shimmer glints */}
          <div
            aria-hidden="true"
            style={{ right: sunCX - tintW / 2, width: tintW, opacity: 0.15 + near * 0.85 }}
            className="pointer-events-none absolute bottom-(--sand-h) h-7 overflow-hidden"
          >
            {GLINTS.map(([cx, top, wf, delay], i) => (
              <span
                key={i}
                style={{
                  top,
                  left: `${(cx - wf / 2) * 100}%`,
                  width: `${wf * 100}%`,
                  animation: `sun-glint ${2.4 + (i % 3) * 0.6}s ease-in-out ${delay}s infinite`,
                }}
                className="absolute h-0.5 rounded-full bg-[#ffe7a6]"
              />
            ))}
          </div>

          <div className="absolute bottom-[calc(var(--sand-h)+28px)] left-6 md:left-24">
            <p className="eyebrow mb-5 text-sea-900">Hi, I&apos;m Alana :)</p>
            <p aria-hidden="true" className={`${name} text-driftwood-900`}>
              Alana
            </p>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-(--sand-h) bg-sand-300">
          <div className="relative mx-auto h-full max-w-[1280px] px-6 md:px-24">
            <p aria-hidden="true" className={`${name} text-sand-50`}>
              Janniello
            </p>
            <div className="mt-8 max-w-[400px] md:absolute md:right-24 md:bottom-16 md:mt-0 md:w-[400px] md:text-right">
              <p className="mb-1.5 text-xl font-semibold text-driftwood-900 md:text-[22px]">
                Creative Software Engineer &amp; problem solver.
              </p>
              <p className="text-base leading-normal text-driftwood-800">
                I build products that work beautifully — inside the codebase and
                across the user experience.
              </p>
            </div>
            <a
              href="#about"
              className="eyebrow absolute bottom-8 left-6 text-driftwood-800 hover:text-driftwood-900 md:bottom-16 md:left-24"
            >
              Scroll ↓
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

// [centre x (0–1), top px, width (0–1), delay s]
const GLINTS: [number, number, number, number][] = [
  [0.5, 4, 0.3, 0],
  [0.43, 11, 0.2, 0.4],
  [0.57, 11, 0.18, 0.9],
  [0.5, 18, 0.14, 1.3],
  [0.38, 21, 0.08, 0.7],
  [0.62, 7, 0.08, 1.6],
  [0.48, 24, 0.1, 2.1],
]
