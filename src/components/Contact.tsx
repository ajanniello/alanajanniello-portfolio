const links = [
  { label: "Email", href: "mailto:alana@example.com", display: "alana@example.com" },
  { label: "GitHub", href: "https://github.com/alanajanniello", display: "github.com/alanajanniello" },
  { label: "LinkedIn", href: "https://linkedin.com/in/alanajanniello", display: "linkedin.com/in/alanajanniello" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase mb-3">
          Say hello
        </p>
        <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">
          Let&apos;s connect
        </h2>
        <p className="text-[var(--muted)] text-lg max-w-lg leading-relaxed mb-10">
          Whether you have a project in mind, a question, or just want to say hi —
          my inbox is always open.
        </p>
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.label}>
              <span className="text-sm text-[var(--muted)] uppercase tracking-wider mr-4 w-20 inline-block">
                {link.label}
              </span>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline font-medium"
              >
                {link.display}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
