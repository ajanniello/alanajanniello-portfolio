const projects = [
  {
    title: "Project One",
    description:
      "A short description of what this project does and why it's interesting. Replace this with your real project.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "#",
    repo: "#",
  },
  {
    title: "Project Two",
    description:
      "Another project description. What problem does it solve? Who is it for? Make it compelling.",
    tags: ["Python", "FastAPI", "React"],
    href: "#",
    repo: "#",
  },
  {
    title: "Project Three",
    description:
      "A third project. Think about the impact, the tech, and what you learned building it.",
    tags: ["Node.js", "Tailwind", "Figma"],
    href: "#",
    repo: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase mb-3">
          Work
        </p>
        <h2 className="text-4xl font-bold text-[var(--foreground)] mb-10">
          Selected projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group p-6 bg-[var(--surface)] border border-[var(--border)] rounded-2xl hover:border-[var(--accent-light)] transition-colors flex flex-col gap-4"
            >
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="px-2 py-0.5 bg-[var(--background)] border border-[var(--border)] rounded-full text-xs text-[var(--muted)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 pt-1">
                <a
                  href={project.href}
                  className="text-sm text-[var(--accent)] hover:underline font-medium"
                >
                  Live ↗
                </a>
                {project.repo && (
                  <a
                    href={project.repo}
                    className="text-sm text-[var(--muted)] hover:text-[var(--accent)] hover:underline"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
