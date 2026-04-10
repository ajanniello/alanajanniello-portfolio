export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto flex items-center justify-between text-sm text-[var(--muted)]">
        <span>© {new Date().getFullYear()} Alana Janniello</span>
        <span>Built with Next.js & Tailwind</span>
      </div>
    </footer>
  );
}
