import Image from 'next/image'
import alanaPhoto from '../../public/alana.jpg'
import catsPhoto from '../../public/cats.jpeg'
import dogPhoto from '../../public/dog.jpeg'

const skills = [
  'Java',
  'C++',
  'Vue.js',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'Tailwind CSS',
  'PostgreSQL',
  'Git',
]

export default function About() {
  return (
    <section
      id="about"
      className="bg-sand-100 px-6 py-20 md:px-24 md:py-[120px]"
    >
      <div className="mx-auto grid max-w-[1088px] items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-[72px]">
        <div>
          <p className="eyebrow mb-5 text-sea-700">About</p>
          <h2 className="mb-7 text-[34px] leading-[1.1] font-bold tracking-[-0.03em] text-driftwood-900 md:text-[44px]">
            Engineer by training. Designer by curiosity.
          </h2>
          <p className="mb-4 text-[17px] leading-[1.7] text-driftwood-600">
            Six years of software engineering left me drawn to not just how
            products work, but how they feel — so I&apos;m pursuing a
            Master&apos;s in Human-Computer Interaction.
          </p>
          <p className="mb-7 text-[17px] leading-[1.7] text-driftwood-600">
            When I&apos;m not building, you can find me at the beach, hanging
            with my two black cats and dachshund, or getting lost in a good
            book.
          </p>
          <ul className="flex flex-wrap gap-1.5" aria-label="Skills">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-sand-300 px-2.5 py-[3px] text-xs text-driftwood-600"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Collage: the two small photos are "cut out" over the portrait by a sand-100 border. */}
        <div className="relative mx-auto h-[440px] w-full max-w-[480px] md:h-[520px] lg:max-w-none">
          <div className="absolute top-0 right-0 h-[340px] w-[86%] overflow-hidden rounded-2xl md:h-[400px]">
            <Image
              src={alanaPhoto}
              alt="Alana Janniello"
              fill
              sizes="(min-width: 1024px) 410px, (min-width: 768px) 420px, 86vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 h-[164px] w-[140px] overflow-hidden rounded-2xl border-[6px] border-sand-100 md:h-[212px] md:w-[192px]">
            <Image
              src={catsPhoto}
              alt="Two black cats"
              fill
              sizes="192px"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-[148px] size-[124px] overflow-hidden rounded-2xl border-[6px] border-sand-100 md:bottom-5 md:left-[196px] md:size-[162px]">
            <Image
              src={dogPhoto}
              alt="Dachshund"
              fill
              sizes="162px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
