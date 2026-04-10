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
             I&apos;m a software engineer with 6 years of experience who found myself increasingly drawn to the question of not just how products work, but how they feel. 
             That curiosity led me to pursue a Master&apos;s in Human-Computer Interaction, where I&apos;ve been deepening my understanding of the space where technology and human behavior meet.
            Today, I work at the intersection of engineering and design: I bring technical rigor to UX/UI challenges,
             and a designer&apos;s eye to the code I write. I care about building things that are thoughtful, accessible, and genuinely useful, not just functional.
            </p>
            <p>
              When I&apos;m not building, you can find me at the beach, hanging with my two black cats and dachsund,
              or getting lost in a good book.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              Things I work with
            </h3>
            <ul className="flex flex-wrap gap-2">
              {[
                "Java",
                "C++",
                "Vue.js",
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
