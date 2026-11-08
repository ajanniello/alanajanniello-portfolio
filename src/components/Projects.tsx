'use client'

import Link from 'next/link'
import Reveal, { useReveal } from './Reveal'
import ProjectCarousel from './ProjectCarousel'
import { projects, type Project } from './projectData'

const card =
  'flex-[0_0_85vw] snap-start rounded-2xl border p-5 md:flex-[0_0_420px]'

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const [ref, style, revealClassName] = useReveal(delay)

  return (
    <li
      ref={ref}
      style={style}
      className={`${card} relative isolate border-sand-200 bg-sand-50 transition-colors duration-150 ease-(--ease-standard) hover:border-sea-300 ${revealClassName}`}
    >
      {project.images ? (
        <ProjectCarousel images={project.images} alt={project.title} />
      ) : (
        <div
          aria-hidden="true"
          className="mb-5 flex h-[236px] items-center justify-center rounded-[10px] bg-[repeating-linear-gradient(135deg,var(--sea-50)_0_10px,var(--sea-100)_10px_11px)] font-mono text-[11px] text-sea-800"
        >
          project screenshot
        </div>
      )}
      <h3 className="text-xl font-semibold text-driftwood-900">
        {project.caseStudy ? (
          // Stretched link: its ::after covers the card so the whole card is clickable,
          // while the carousel buttons and Live link sit above it (z-10).
          <Link
            href={`/projects/${project.slug}`}
            className="text-driftwood-900 after:absolute after:inset-0 after:rounded-2xl hover:text-driftwood-900"
          >
            {project.title}
          </Link>
        ) : (
          project.title
        )}
      </h3>
      <p className="mb-2 text-sm text-sea-700">{project.kind}</p>
      <p className="mb-4 text-sm leading-[1.6] text-driftwood-600">
        {project.description}
      </p>
      {project.caseStudy && (
        <p aria-hidden="true" className="mb-4 -mt-2 text-sm font-medium text-sea-700">
          Read case study →
        </p>
      )}
      <div className="flex items-center justify-between gap-4">
        <ul className="flex flex-wrap gap-1.5" aria-label="Tech">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-sand-300 px-2.5 py-[3px] text-xs text-driftwood-600"
            >
              {tag}
            </li>
          ))}
        </ul>
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 shrink-0 text-sm font-medium"
            aria-label={`${project.title} live site`}
          >
            Live ↗
          </a>
        )}
      </div>
    </li>
  )
}

export default function Projects() {
  return (
    <section id="work" className="bg-sand-50 pt-20 pb-16 md:pt-28 md:pb-24">
      <Reveal className="mx-auto mb-10 flex max-w-[1280px] items-end justify-between gap-6 px-6 md:px-24">
        <div>
          <p className="eyebrow mb-4 text-sea-700">Work</p>
          <h2 className="text-[34px] leading-[1.1] font-bold tracking-[-0.03em] text-driftwood-900 md:text-[44px]">
            Selected projects
          </h2>
        </div>
        <span className="eyebrow shrink-0 text-driftwood-500">
          Drag / scroll →
        </span>
      </Reveal>

      {/* Horizontal strip; side padding lines the first card up with the 1088px content column. */}
      <ul className="flex snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto px-6 pb-6 [scrollbar-width:thin] md:scroll-px-[max(96px,calc((100%-1088px)/2))] md:px-[max(96px,calc((100%-1088px)/2))]">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} delay={i * 100} />
        ))}
        {projects.length < 4 && (
          <li
            className={`${card} flex items-center justify-center border-dashed border-sand-200`}
          >
            <span className="eyebrow text-driftwood-500">More soon</span>
          </li>
        )}
      </ul>
    </section>
  )
}
