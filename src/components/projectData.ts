import { type StaticImageData } from 'next/image'
import accessiscanShot from '../../public/accessiscan.png'
import wavewiseShot1 from '../../public/wavewise1.png'
import wavewiseShot2 from '../../public/wavewise2.png'

export type CaseStudySection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  // Numbered list with a bold lead-in per step.
  steps?: { title: string; text: string }[]
}

export type Project = {
  // URL segment for the case-study page: /projects/<slug>
  slug: string
  title: string
  kind: string
  // Short blurb shown on the homepage card.
  description: string
  tags: string[]
  // Live site; the "Live ↗" link only shows once this is set.
  href?: string
  // Source code; shown on the case-study page when set.
  repo?: string
  // Real screenshots; falls back to the striped placeholder until one is added.
  images?: StaticImageData[]
  // When set, the card links to /projects/<slug> and this content fills the page.
  caseStudy?: {
    summary: string
    role?: string
    timeline?: string
    sections: CaseStudySection[]
  }
}

export const projects: Project[] = [
  {
    slug: 'accessiscan',
    title: 'AccessiScan',
    kind: 'Automated accessibility auditor',
    description:
      'Audits any URL against WCAG 2.0/2.1 AA and returns a compliance score with categorized violations. Containerized and deployed on Render.',
    tags: ['Next.js', 'TypeScript', 'Playwright', 'axe-core', 'Docker'],
    href: 'https://accessibility-audit-tcy0.onrender.com/',
    repo: 'https://github.com/ajanniello/accessibility-audit',
    images: [accessiscanShot],
    caseStudy: {
      summary:
        'AccessiScan audits any public URL against WCAG 2.0 and 2.1 AA, then turns the results into a compliance score and a categorized list of violations.',
      sections: [
        {
          heading: 'Where it started',
          paragraphs: [
            "AccessiScan started in an accessibility course in my Master's in Human-Computer Interaction at Drexel University. I wanted to take what we were learning about WCAG and turn it into something anyone could use: paste in a URL, see what's wrong, and understand why it matters to the people using the page.",
          ],
        },
        {
          heading: 'How it works',
          paragraphs: [
            'An audit runs in a single request. The results page sends the URL to a Next.js API route (POST /api/audit), the server audits the page in a headless browser, and the report comes back as JSON.',
          ],
          steps: [
            {
              title: 'Check the URL.',
              text: "The form and the API both clean up the input (adding https:// if it's missing) and reject anything that isn't a valid web address. Localhost and private network addresses are refused, so the server can't be pointed at internal machines.",
            },
            {
              title: 'Load the page like a visitor.',
              text: 'Playwright launches headless Chromium with a standard desktop browser profile, opens the page, and waits for scripts to render dynamic content.',
            },
            {
              title: 'Inject axe-core early.',
              text: "The axe-core engine is added with an init script that runs before any of the page's own JavaScript, so sites with strict security policies, like YouTube and Google, can't block it.",
            },
            {
              title: 'Run the WCAG rules.',
              text: "axe-core checks the rendered page against the WCAG 2.0 A, WCAG 2.0 AA and WCAG 2.1 AA rules, plus Deque's best practices. It records violations, passed checks, and anything that needs a human to review.",
            },
            {
              title: 'Return the report.',
              text: "The API responds with each violation's severity, the HTML elements affected and a link to the rule's documentation, along with the score, the grade and the number of elements scanned.",
            },
          ],
        },
        {
          heading: 'Scoring',
          paragraphs: [
            'Every page starts at 100. Each failing rule takes off points by severity: 15 for critical, 10 for serious, 5 for moderate and 2 for minor. Each severity has a cap (45, 30, 15 and 10 points), so one type of problem can\'t sink the score on its own. The score then maps to a letter grade, from A (90 and up) to F (below 60).',
          ],
        },
        {
          heading: 'Making results readable',
          paragraphs: [
            "Raw axe-core output is written for developers, so the results page translates it for designers and product owners too.",
          ],
          bullets: [
            'Violations are sorted into six categories you can filter by: color and contrast, images and media, keyboard access, ARIA and roles, forms and labels, and structure and headings.',
            "The 17 most common rules come with a plain-language explainer: what's wrong, who it affects, and a real-world example of what breaks.",
            'Each violation shows the HTML that failed and links to the full rule documentation. Passed checks are listed separately, so you can also see what the page gets right.',
          ],
        },
        {
          heading: 'Handling the real web',
          paragraphs: [
            "Plenty of sites resist automated browsers, so failures come back as specific, readable errors instead of a generic crash. Pages that take longer than 30 seconds to load time out with an explanation, and sites that block bots are flagged as such.",
          ],
        },
        {
          heading: 'Stack & deployment',
          paragraphs: [
            "Built with Next.js and TypeScript. Playwright needs a full Chromium install, so the app ships as a Docker image built on Microsoft's Playwright base image, which includes the browser's system dependencies, and runs on Render.",
          ],
        },
      ],
    },
  },
  {
    slug: 'wavewise',
    title: 'WaveWise',
    kind: 'AI-powered beach safety assistant',
    description:
      'Real-time, location-based beach conditions and safety info. Began as a Drexel HCI course assignment and grew into a fully coded prototype.',
    tags: ['Next.js', 'TypeScript', 'Claude API', 'Leaflet'],
    images: [wavewiseShot1, wavewiseShot2],
    caseStudy: {
      summary:
        'WaveWise is a chat assistant that answers questions about any beach using live wave, wind, tide and weather data, with safety and surf ratings tailored to your skill level.',
      sections: [
        {
          heading: 'Where it started',
          paragraphs: [
            "WaveWise started as a design proposal in Human-AI Interaction (INFO 693), a course in my Master's in Human-Computer Interaction at Drexel University. I then built it out as a working prototype. The proposal was written around GPT-4; for the build I used Claude, with tool use to pull in live ocean data.",
          ],
        },
        {
          heading: 'How it works',
          paragraphs: [
            'You pick a skill level (beginner, intermediate or advanced) and ask about a beach in plain language, like "Is it safe to swim at Malibu Beach right now?" Behind the chat, a Next.js API route (POST /api/chat) runs Claude with one tool: get_beach_conditions.',
          ],
          steps: [
            {
              title: 'Claude decides when it needs data.',
              text: 'When a question depends on current conditions, Claude calls the tool with the beach name and your skill level. General questions, like how to escape a rip current, are answered without a lookup.',
            },
            {
              title: 'Find the beach.',
              text: "Nominatim, OpenStreetMap's geocoder, turns the beach name into coordinates.",
            },
            {
              title: 'Pull live data in parallel.',
              text: 'Four requests run at once: current waves and swell from the Open-Meteo Marine API, a 3-day wave forecast from Open-Meteo, wind, UV, visibility and weather from OpenWeatherMap, and the next high and low tide from the nearest NOAA tide station.',
            },
            {
              title: 'Rate the conditions with rules.',
              text: 'Thresholds based on USLA lifeguard guidance and National Weather Service rip current criteria set the rip current risk (Low, Moderate or High), an overall safety rating (Safe, Caution or Dangerous) and a surf quality rating for each skill level (Poor to Epic). The forecast is also scanned for up to three upcoming good surf windows.',
            },
            {
              title: 'Claude explains it.',
              text: "The results go back to Claude as a structured report, converted to feet and mph, and Claude's answer streams into the chat as it's written.",
            },
          ],
        },
        {
          heading: "Why the AI doesn't make the safety call",
          paragraphs: [
            "WaveWise doesn't ask the model to judge whether the water is safe. The ratings come from fixed rules that can be checked and explained, and Claude's job is to explain them in plain language for your skill level. Its instructions tell it to put safety first, be direct when conditions are dangerous, explain why a rating is what it is, always mention rip current awareness, and lean toward caution when data is missing.",
          ],
        },
        {
          heading: 'The interface',
          bullets: [
            'While data loads, the chat shows what it\'s doing, like "Fetching live conditions for Malibu Beach…"',
            'Each answer comes with a conditions card: the safety rating, rip current risk, UV index, tides and surf quality for each skill level.',
            "On larger screens, a Leaflet map beside the chat flies to each beach you ask about and drops a pin colored by safety rating (green, amber or red), so you can compare the beaches you've checked.",
          ],
        },
        {
          heading: 'Stack',
          paragraphs: [
            'Built with Next.js, TypeScript and Tailwind CSS. The assistant uses Claude Sonnet 4.6 through the Anthropic SDK, with tool use. Responses stream to the browser as server-sent events, and the map uses Leaflet with OpenStreetMap tiles.',
          ],
        },
      ],
    },
  },
]

export function getCaseStudy(slug: string) {
  const project = projects.find((p) => p.slug === slug)
  return project?.caseStudy ? { ...project, caseStudy: project.caseStudy } : undefined
}
