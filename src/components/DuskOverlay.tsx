'use client'

import { usePageScrollProgress } from './useScrollProgress'

// A fixed wash that deepens as the page scrolls, carrying the day-to-dusk
// feel through the light sections on the way down to the dark Contact band.
export default function DuskOverlay() {
  const progress = usePageScrollProgress()

  return (
    <div
      aria-hidden="true"
      style={{ opacity: progress * 0.35 }}
      className="pointer-events-none fixed inset-0 z-40 bg-driftwood-900"
    />
  )
}
