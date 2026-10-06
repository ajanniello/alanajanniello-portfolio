export default function Footer() {
  return (
    <footer className="bg-driftwood-900 px-6 pt-20 pb-10 md:px-24 md:pt-24">
      <div className="mx-auto flex max-w-[1088px] flex-wrap justify-between gap-x-6 gap-y-2 text-[13px] text-sand-400">
        <span>© {new Date().getFullYear()} Alana Janniello</span>
        <span>Built with Next.js &amp; Tailwind</span>
      </div>
    </footer>
  )
}
