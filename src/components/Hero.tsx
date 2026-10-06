// The name sits on the horizon: "Alana" above the waterline, "Janniello" below it in the sand.
// --sand-h drives the sand height so the waterline, sun and name stay locked together.
const name =
  'm-0 font-bold leading-[0.8] tracking-[-0.055em] text-[clamp(72px,20vw,88px)] md:text-[clamp(96px,11.7vw,150px)]'

export default function Hero() {
  return (
    <section className="relative h-[700px] overflow-hidden bg-sea-200 [--sand-h:380px] md:h-[780px] md:[--sand-h:300px]">
      <h1 className="sr-only">Alana Janniello</h1>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-(--sand-h) h-7 bg-sea-500"
      />

      <div className="relative mx-auto h-full max-w-[1280px]">
        <div
          aria-hidden="true"
          className="absolute right-6 bottom-[calc(var(--sand-h)+28px)] h-[60px] w-[120px] rounded-t-full bg-clay-300 md:right-[170px] md:h-[110px] md:w-[220px]"
        />
        <div className="absolute bottom-[calc(var(--sand-h)+28px)] left-6 md:left-24">
          <p className="eyebrow mb-5 text-sea-900">Hi, I&apos;m Alana :)</p>
          <p aria-hidden="true" className={`${name} text-driftwood-900`}>
            Alana
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-(--sand-h) bg-sand-300">
        <div className="relative mx-auto h-full max-w-[1280px] px-6 md:px-24">
          <p aria-hidden="true" className={`${name} text-sand-50`}>
            Janniello
          </p>
          <div className="mt-8 max-w-[400px] md:absolute md:right-24 md:bottom-16 md:mt-0 md:w-[400px] md:text-right">
            <p className="mb-1.5 text-xl font-semibold text-driftwood-900 md:text-[22px]">
              Creative Software Engineer &amp; problem solver.
            </p>
            <p className="text-base leading-normal text-driftwood-800">
              I build products that work beautifully — inside the codebase and
              across the user experience.
            </p>
          </div>
          <a
            href="#about"
            className="eyebrow absolute bottom-8 left-6 text-driftwood-800 hover:text-driftwood-900 md:bottom-16 md:left-24"
          >
            Scroll ↓
          </a>
        </div>
      </div>
    </section>
  )
}
