export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto">
        <p className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase mb-3">
          About
        </p>
        <h2 className="text-4xl font-bold text-[var(--foreground)] mb-10">
          A little about me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-[var(--muted)] leading-relaxed">
            <p>
              I&apos;m a software engineer who cares deeply about the intersection of
              craft, creativity, and code. I love building products that feel
              intuitive and leave people a little delighted.
            </p>
            <p>
              When I&apos;m not building, you can find me sketching ideas, exploring
              new tools, or getting lost in a good book.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              Things I work with
            </h3>
            <ul className="flex flex-wrap gap-2">
              {[
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "Tailwind CSS",
                "PostgreSQL",
                "Git",
              ].map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1 bg-[var(--background)] border border-[var(--border)] rounded-full text-sm text-[var(--muted)]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
