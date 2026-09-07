import SectionLabel from './SectionLabel.jsx'
import { experiences } from '../content/site.js'

export default function Experience({ lang, title }) {
  return (
    <div className="py-20 lg:py-28">
      <SectionLabel number="02" title={title} />

      <div className="space-y-0">
        {experiences.map((item) => (
          <div
            key={item.id}
            className="group -mx-6 grid grid-cols-1 gap-4 border-b border-border px-6 py-8 transition-colors last:border-0 hover:bg-secondary/40 lg:grid-cols-[220px_1fr] lg:gap-12"
          >
            <div>
              <div className="mb-1 font-mono text-xs tracking-widest text-accent uppercase">
                {item.period[lang]}
              </div>
              <div className="text-sm text-muted-foreground">{item.location[lang]}</div>
            </div>

            <div>
              <div className="mb-2">
                <h3 className="font-display text-xl font-normal">{item.role[lang]}</h3>
                <div className="mt-0.5 text-sm text-muted-foreground">{item.org}</div>
              </div>

              <p className="mb-4 text-sm leading-relaxed font-light text-muted-foreground">
                {item.description[lang]}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags[lang].map((tag) => (
                  <span
                    key={tag}
                    className="border border-border bg-secondary px-2.5 py-1 font-mono text-xs tracking-wider text-muted-foreground uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
