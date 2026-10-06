import { type StaticImageData } from 'next/image'
import ProjectCarousel from './ProjectCarousel'
import accessiscanShot from '../../public/accessiscan.png'
import wavewiseShot1 from '../../public/wavewise1.png'
import wavewiseShot2 from '../../public/wavewise2.png'

type Project = {
  title: string
  kind: string
  description: string
  tags: string[]
  // Live site; the "Live ↗" link only shows once this is set.
  href?: string
  // Real screenshots; falls back to the striped placeholder until one is added.
  images?: StaticImageData[]
}

const projects: Project[] = [
  {
    title: 'AccessiScan',
    kind: 'Automated accessibility auditor',
    description:
      'Audits any URL against WCAG 2.0/2.1 AA and returns a compliance score with categorized violations. Containerized and deployed on Render.',
    tags: ['Next.js', 'TypeScript', 'Playwright', 'axe-core'],
    href: 'https://accessibility-audit-tcy0.onrender.com/',
    images: [accessiscanShot],
  },
  {
    title: 'WaveWise',
    kind: 'AI-powered beach safety assistant',
    description:
      'Real-time, location-based beach conditions and safety info. Began as a Drexel HCI course assignment and grew into a fully coded prototype.',
    tags: ['JavaScript', 'Leaflet.js', 'OpenAI API'],
    images: [wavewiseShot1, wavewiseShot2],
  },
]

const card =
  'flex-[0_0_85vw] snap-start rounded-2xl border p-5 md:flex-[0_0_420px]'

export default function Projects() {
  return (
    <section id="work" className="bg-sand-50 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="mx-auto mb-10 flex max-w-[1280px] items-end justify-between gap-6 px-6 md:px-24">
        <div>
          <p className="eyebrow mb-4 text-sea-700">Work</p>
          <h2 className="text-[34px] leading-[1.1] font-bold tracking-[-0.03em] text-driftwood-900 md:text-[44px]">
            Selected projects
          </h2>
        </div>
        <span className="eyebrow shrink-0 text-driftwood-500">
          Drag / scroll →
        </span>
      </div>

      {/* Horizontal strip; side padding lines the first card up with the 1088px content column. */}
      <ul className="flex snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto px-6 pb-6 [scrollbar-width:thin] md:scroll-px-[max(96px,calc((100%-1088px)/2))] md:px-[max(96px,calc((100%-1088px)/2))]">
        {projects.map((project) => (
          <li
            key={project.title}
            className={`${card} border-sand-200 bg-sand-50 transition-colors duration-150 ease-(--ease-standard) hover:border-sea-300`}
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
              {project.title}
            </h3>
            <p className="mb-2 text-sm text-sea-700">{project.kind}</p>
            <p className="mb-4 text-sm leading-[1.6] text-driftwood-600">
              {project.description}
            </p>
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
                  className="shrink-0 text-sm font-medium"
                  aria-label={`${project.title} live site`}
                >
                  Live ↗
                </a>
              )}
            </div>
          </li>
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
