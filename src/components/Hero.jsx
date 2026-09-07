import { ChevronDown } from 'lucide-react'
import { hero } from '../content/site.js'

function scrollTo(id) {
  const target = document.getElementById(id)
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero({ lang }) {
  const copy = hero[lang]
  const [first, second, third] = hero.nameLines

  return (
    <section id="top" className="flex min-h-screen flex-col justify-center pt-14">
      <div className="grid grid-cols-1 items-end gap-12 py-24 lg:grid-cols-[1fr_auto] lg:py-32">
        <div>
          <div className="mb-8 flex flex-wrap gap-4">
            {copy.tags.map((tag, index) => (
              <span
                key={tag}
                className={
                  'font-mono text-xs tracking-widest uppercase ' +
                  (index === 0 ? 'text-accent' : 'text-muted-foreground')
                }
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mb-4 font-display text-5xl leading-[1.05] font-normal tracking-tight md:text-7xl lg:text-8xl">
            {first}
            <br />
            <em className="text-accent italic">{second}</em>
            <br />
            {third}
          </h1>

          <p className="mb-6 font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            {copy.role}
          </p>

          <p className="mb-10 max-w-xl text-lg leading-relaxed font-light text-muted-foreground">
            {copy.summary}
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollTo('experience')}
              className="flex items-center gap-2 rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              {copy.ctaPrimary}
              <ChevronDown size={14} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-2 rounded-sm border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground/30"
            >
              {copy.ctaSecondary}
            </button>
          </div>
        </div>

        <div className="hidden flex-col gap-6 pb-1 lg:flex">
          {copy.stats.map((stat) => (
            <div key={stat.label} className="text-right">
              <div className="font-display text-4xl font-normal text-accent">{stat.value}</div>
              <div className="mt-1 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center pb-12">
        <button
          type="button"
          onClick={() => scrollTo('about')}
          aria-label={copy.scroll}
          className="group flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors group-hover:text-foreground">
            {copy.scroll}
          </span>
          <ChevronDown
            size={14}
            aria-hidden="true"
            className="animate-bounce text-muted-foreground transition-colors group-hover:text-foreground"
          />
        </button>
      </div>
    </section>
  )
}
