export default function Nav() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-sm border-b border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-semibold text-[var(--foreground)] text-lg tracking-tight">
          AJ
        </a>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
