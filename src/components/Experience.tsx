const experience = [
  {
    role: "Software Engineer",
    company: "Company Name",
    period: "2023 – Present",
    description:
      "What you built, what you improved, what the impact was. Use numbers if you can — shipped X features, reduced Y by Z%.",
  },
  {
    role: "Junior Developer",
    company: "Previous Company",
    period: "2021 – 2023",
    description:
      "What you worked on here. Tools, teams, and outcomes. Keep it tight and outcome-focused.",
  },
  {
    role: "Internship / Early Role",
    company: "First Place",
    period: "2020 – 2021",
    description:
      "How you got started. What you learned. Even early roles show growth and commitment.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto">
        <p className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase mb-3">
          Background
        </p>
        <h2 className="text-4xl font-bold text-[var(--foreground)] mb-10">
          Experience
        </h2>
        <div className="space-y-10">
          {experience.map((job, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                {i < experience.length - 1 && (
                  <div className="w-px flex-1 bg-[var(--border)] mt-2" />
                )}
              </div>
              <div className="pb-2">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    {job.role}
                  </h3>
                  <span className="text-[var(--accent)] font-medium text-sm">
                    {job.company}
                  </span>
                  <span className="text-[var(--muted)] text-sm ml-auto">
                    {job.period}
                  </span>
                </div>
                <p className="text-[var(--muted)] leading-relaxed text-sm">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
