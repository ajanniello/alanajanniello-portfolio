// Placeholder copy: swap in real roles. Oldest first; the timeline reads left to right.
const experience = [
  {
    role: 'Internship / Early Role',
    company: 'First Place',
    period: '2020 – 2021',
    description: 'How you got started. What you learned.',
  },
  {
    role: 'Junior Developer',
    company: 'Previous Company',
    period: '2021 – 2023',
    description: 'Tools, teams, and outcomes.',
  },
  {
    role: 'Software Engineer',
    company: 'Company Name',
    period: '2023 – Present',
    description: 'What you built, improved, and the impact.',
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-sand-50 px-6 pt-6 pb-20 md:px-24 md:pb-[120px]"
    >
      <div className="mx-auto max-w-[1088px]">
        <p className="eyebrow mb-4 text-sea-700">Background</p>
        <h2 className="mb-12 text-[34px] leading-[1.1] font-bold tracking-[-0.03em] text-driftwood-900 md:mb-16 md:text-[44px]">
          Experience
        </h2>
        {/* Timeline: a left rail on mobile, a horizontal line across the top from md up. */}
        <ol className="grid gap-10 border-l-2 border-sea-300 pl-8 md:grid-cols-3 md:border-t-2 md:border-l-0 md:pl-0">
          {experience.map((job) => (
            <li key={job.period} className="relative md:pt-9">
              <span
                aria-hidden="true"
                className="absolute top-1 -left-[39px] size-3 rounded-full bg-sea-700 shadow-[0_0_0_6px_var(--sand-50)] md:-top-[7px] md:left-0"
              />
              <p className="mb-2.5 font-mono text-[13px] text-driftwood-500">
                {job.period}
              </p>
              <h3 className="text-[19px] font-semibold text-driftwood-900">
                {job.role}
              </h3>
              <p className="mt-1 mb-3 text-sm text-sea-700">{job.company}</p>
              <p className="text-sm leading-[1.6] text-driftwood-600">
                {job.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
