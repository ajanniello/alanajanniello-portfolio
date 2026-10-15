'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

// For wrapping arbitrary content in a div.
export default function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-(--ease-standard) motion-reduce:transition-none motion-reduce:translate-y-0 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  )
}

// For elements that can't be wrapped in a div without breaking valid nesting
// (e.g. an <li> directly inside <ol>/<ul>) — spread the result onto the element.
export function useReveal(delay = 0) {
  const ref = useRef<HTMLLIElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const style = { transitionDelay: `${delay}ms` }
  const className = `transition-[opacity,transform] duration-700 ease-(--ease-standard) motion-reduce:transition-none motion-reduce:translate-y-0 ${
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`

  return [ref, style, className] as const
}
