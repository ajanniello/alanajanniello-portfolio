import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import { getCaseStudy, projects } from '@/components/projectData'

type Props = { params: Promise<{ slug: string }> }

// Only projects with case-study content get a page; any other slug 404s.
export const dynamicParams = false

export function generateStaticParams() {
  return projects.filter((p) => p.caseStudy).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getCaseStudy((await params).slug)
  if (!project) return {}
  return {
    title: `${project.title} — Alana Janniello`,
    description: project.caseStudy.summary,
  }
}

const pill =
  'rounded-full border border-sand-300 px-2.5 py-[3px] text-xs text-driftwood-600'

export default async function CaseStudyPage({ params }: Props) {
  const project = getCaseStudy((await params).slug)
  if (!project) notFound()

  const { caseStudy } = project
  const meta = [
    caseStudy.role && { label: 'Role', value: caseStudy.role },
    caseStudy.timeline && { label: 'Timeline', value: caseStudy.timeline },
  ].filter((m): m is { label: string; value: string } => Boolean(m))

  return (
    <>
      <header className="bg-sand-100">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 md:px-24 md:py-7">
          <Link
            href="/"
            className="text-lg font-semibold tracking-[-0.03em] text-driftwood-900 hover:text-driftwood-900"
          >
            AJ
          </Link>
          <Link href="/#work" className="text-sm text-sea-900 hover:text-driftwood-900">
            ← All work
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-sand-50">
        <section className="bg-sand-100 px-6 pt-12 pb-16 md:px-24 md:pt-16 md:pb-20">
          <div className="mx-auto max-w-[1088px]">
            <p className="eyebrow mb-5 text-sea-700">Case study</p>
            <h1 className="mb-3 text-[44px] leading-[1.05] font-bold tracking-[-0.04em] text-driftwood-900 md:text-[64px]">
              {project.title}
            </h1>
            <p className="mb-6 text-lg text-sea-700">{project.kind}</p>
            <p className="mb-10 max-w-[680px] text-[19px] leading-[1.6] text-driftwood-600">
              {caseStudy.summary}
            </p>

            <dl className="grid gap-6 border-t border-sand-300 pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="eyebrow mb-2 text-driftwood-500">{m.label}</dt>
                  <dd className="text-sm text-driftwood-900">{m.value}</dd>
                </div>
              ))}
              <div className="sm:col-span-2">
                <dt className="eyebrow mb-2 text-driftwood-500">Stack</dt>
                <dd>
                  <ul className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li key={tag} className={pill}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              {project.href && (
                <div>
                  <dt className="eyebrow mb-2 text-driftwood-500">Links</dt>
                  <dd className="flex gap-5 text-sm font-medium">
                    {project.href && (
                      <a href={project.href} target="_blank" rel="noopener noreferrer">
                        Live site ↗
                      </a>
                    )}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </section>

        {project.images && (
          <section aria-label="Screenshots" className="px-6 pt-16 md:px-24 md:pt-20">
            <div className="mx-auto grid max-w-[1088px] gap-8">
              {project.images.map((image, i) => (
                <Image
                  key={image.src}
                  src={image}
                  alt={`${project.title} screenshot ${i + 1}`}
                  sizes="(min-width: 1280px) 1088px, 100vw"
                  placeholder="blur"
                  priority={i === 0}
                  className="w-full rounded-2xl border border-sand-200"
                />
              ))}
            </div>
          </section>
        )}

        <div className="px-6 pt-16 pb-24 md:px-24 md:pt-20 md:pb-[120px]">
          <div className="mx-auto max-w-[720px] space-y-14">
            {caseStudy.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-5 text-[28px] leading-[1.15] font-bold tracking-[-0.03em] text-driftwood-900">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((text) => (
                  <p key={text} className="mb-4 text-[17px] leading-[1.7] text-driftwood-600">
                    {text}
                  </p>
                ))}
                {section.steps && (
                  <ol className="mb-4 space-y-4">
                    {section.steps.map((step, i) => (
                      <li key={step.title} className="flex gap-4">
                        <span
                          aria-hidden="true"
                          className="mt-[3px] flex size-6 shrink-0 items-center justify-center rounded-full bg-sea-100 font-mono text-xs font-medium text-sea-800"
                        >
                          {i + 1}
                        </span>
                        <p className="text-[17px] leading-[1.7] text-driftwood-600">
                          <strong className="font-semibold text-driftwood-900">
                            {step.title}
                          </strong>{' '}
                          {step.text}
                        </p>
                      </li>
                    ))}
                  </ol>
                )}
                {section.bullets && (
                  <ul className="list-disc space-y-2 pl-5 text-[17px] leading-[1.7] text-driftwood-600 marker:text-sea-300">
                    {section.bullets.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <Link href="/#work" className="inline-block text-sm font-medium">
              ← Back to all work
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
