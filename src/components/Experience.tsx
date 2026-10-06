// Oldest first; the timeline reads left to right.
const experience = [
  {
    role: 'B.S. Computer Science',
    company: 'Villanova University',
    period: '2016 – 2020',
    description: 'Minor in Cognitive Science.',
  },
  {
    role: 'Associate Software Engineer',
    company: 'L3Harris Technologies',
    period: '2020 – 2022',
    description:
      'Refactored 10k+ lines of code, reviewed 50+ pull requests, and built an automated code-header tool that cut monthly code-drop time by 40%.',
  },
  {
    role: 'Senior Associate Software Engineer & UX/UI Designer',
    company: 'L3Harris Technologies',
    period: '2022 – Present',
    description:
      'Lead architecture and full-stack build of 20+ features for a tactical radio planning app, design 15+ mock-ups with the UX team, and run user sessions with U.S. Army veterans.',
  },
  {
    role: 'M.S. Human-Computer Interaction',
    company: 'Drexel University',
    period: 'Expected 2028',
    description:
      'Graduate study in human-computer interaction. WaveWise started as a course assignment here.',
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
        {/* Timeline: a left rail below lg, a horizontal line across the top from lg up. */}
        <ol className="grid gap-10 border-l-2 border-sea-300 pl-8 lg:grid-cols-4 lg:border-t-2 lg:border-l-0 lg:pl-0">
          {experience.map((job) => (
            <li key={job.period} className="relative lg:pt-9">
              <span
                aria-hidden="true"
                className="absolute top-1 -left-[39px] size-3 rounded-full bg-sea-700 shadow-[0_0_0_6px_var(--sand-50)] lg:-top-[7px] lg:left-0"
              />
              <p className="mb-2.5 font-mono text-[13px] text-driftwood-500">
                {job.period}
              </p>
              <h3 className="text-[19px] leading-snug font-semibold text-driftwood-900">
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
