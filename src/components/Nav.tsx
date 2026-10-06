'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  // Transparent over the hero sky; glass background once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    const frame = requestAnimationFrame(onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Scroll-spy: mark the link for the section crossing the middle of the viewport.
  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => section !== null)

    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = `#${entry.target.id}`
          if (entry.isIntersecting) visible.add(id)
          else visible.delete(id)
        }
        setActive(links.find((link) => visible.has(link.href))?.href ?? null)
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-150 ease-(--ease-standard) ${
        scrolled
          ? 'border-sand-200 bg-sand-50/90 backdrop-blur-[8px]'
          : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 md:px-24 md:py-7">
        <a
          href="#"
          className="text-lg font-semibold tracking-[-0.03em] text-driftwood-900 hover:text-driftwood-900"
        >
          AJ
        </a>
        <nav aria-label="Main">
          <ul className="flex gap-5 text-sm md:gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active === link.href ? 'true' : undefined}
                  className="text-sea-900 underline-offset-[6px] hover:text-driftwood-900 aria-[current]:text-driftwood-900 aria-[current]:underline aria-[current]:decoration-sea-300 aria-[current]:decoration-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
