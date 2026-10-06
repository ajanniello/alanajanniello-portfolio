'use client'

import { useState } from 'react'
import Image, { type StaticImageData } from 'next/image'

export default function ProjectCarousel({
  images,
  alt,
}: {
  images: StaticImageData[]
  alt: string
}) {
  const [index, setIndex] = useState(0)

  return (
    <div className="relative mb-5 h-[236px] w-full overflow-hidden rounded-[10px]">
      <Image
        src={images[index]}
        alt={`${alt} screenshot ${index + 1} of ${images.length}`}
        sizes="(min-width: 768px) 380px, 80vw"
        className="h-full w-full object-cover object-top"
      />
      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
            className="absolute top-1/2 left-2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-driftwood-900/60 text-sand-50 transition-colors duration-150 hover:bg-driftwood-900/80"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next screenshot"
            onClick={() => setIndex((i) => (i + 1) % images.length)}
            className="absolute top-1/2 right-2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-driftwood-900/60 text-sand-50 transition-colors duration-150 hover:bg-driftwood-900/80"
          >
            ›
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to screenshot ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`size-1.5 rounded-full transition-colors duration-150 ${
                  i === index ? 'bg-sand-50' : 'bg-sand-50/40'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
