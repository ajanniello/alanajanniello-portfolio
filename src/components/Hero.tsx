export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl w-full">
        <p className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase mb-4">
          Hi, I&apos;m Alana :)
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold text-[var(--foreground)] leading-tight mb-6">
          Creative engineer &<br />
          <span className="text-[var(--accent)]">problem solver.</span>
        </h1>
        <p className="text-lg text-[var(--muted)] max-w-xl leading-relaxed mb-10">
          I build things that are thoughtful, useful, and a little bit beautiful.
          Always curious, always making.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-[var(--accent)] text-white rounded-full text-sm font-medium hover:bg-[var(--foreground)] transition-colors"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[var(--border)] text-[var(--muted)] rounded-full text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
