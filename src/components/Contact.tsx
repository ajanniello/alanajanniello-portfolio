const links = [
  {
    label: 'Email',
    href: 'mailto:alanajanniello721@gmail.com',
    display: 'alanajanniello721@gmail.com',
    external: false,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ajanniello',
    display: 'github.com/ajanniello ↗',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alana-janniello/',
    display: 'linkedin.com/in/alanajanniello ↗',
    external: true,
  },
]

// "Dusk": the page ends on dark driftwood; Footer continues the same band.
export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-driftwood-900 px-6 pt-20 text-sand-50 md:px-24 md:pt-[120px]"
    >
      <div className="mx-auto max-w-[1088px]">
        <p className="eyebrow mb-5 text-sea-300">Say hello</p>
        <h2 className="mb-6 text-[clamp(56px,14vw,96px)] leading-[0.95] font-bold tracking-[-0.05em]">
          Let&apos;s connect<span className="text-clay-300">.</span>
        </h2>
        <p className="mb-12 max-w-[520px] text-[19px] leading-[1.55] text-sand-300">
          Whether you have a project in mind, a question, or just want to say hi
          — my inbox is always open.
        </p>
        <ul className="grid border-t border-driftwood-800 lg:grid-cols-[auto_auto_1fr] xl:grid-cols-3">
          {links.map((link, i) => (
            <li
              key={link.label}
              className="border-b border-driftwood-800 lg:border-r lg:border-b-0 lg:last:border-r-0"
            >
              <a
                href={link.href}
                {...(link.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                className={`group block py-6 text-sand-50 hover:text-sand-50 ${i > 0 ? 'lg:px-7' : 'lg:pr-7'}`}
              >
                <span className="eyebrow mb-2 block text-sand-400">
                  {link.label}
                </span>
                <span className="text-[17px] transition-colors duration-150 ease-(--ease-standard) group-hover:text-sea-300">
                  {link.display}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
