import SectionLabel from './SectionLabel.jsx'
import { about, ui } from '../content/site.js'
import retrato from '../assets/retrato.jpg'

export default function About({ lang, title }) {
  const copy = about[lang]

  return (
    <div className="grid grid-cols-1 gap-12 py-20 lg:grid-cols-[280px_1fr] lg:gap-20 lg:py-28">
      <div>
        <SectionLabel number="01" title={title} />
        <div className="mt-2 aspect-[3/4] w-full max-w-[15rem] overflow-hidden rounded-sm border border-border bg-secondary">
          <img
            src={retrato}
            alt={ui[lang].portraitAlt}
            width="624"
            height="832"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div>
        <h2 className="mb-6 font-display text-3xl leading-tight font-normal md:text-4xl">
          {copy.heading}
        </h2>

        <div className="mb-8 space-y-4 leading-relaxed font-light text-muted-foreground">
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <div>
          <div className="mb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {copy.competenciesLabel}
          </div>
          <div className="flex flex-wrap gap-2">
            {copy.competencies.map((item) => (
              <span
                key={item}
                className="border border-border px-3 py-1.5 font-mono text-xs tracking-wider text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
