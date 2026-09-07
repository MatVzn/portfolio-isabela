import { Languages, Layers } from 'lucide-react'
import SectionLabel from './SectionLabel.jsx'
import { skillsLabels, spokenLanguages, toolGroups } from '../content/site.js'

export default function Skills({ lang, title }) {
  const labels = skillsLabels[lang]

  return (
    <div className="py-20 lg:py-28">
      <SectionLabel number="05" title={title} />

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <div className="mb-8 flex items-center gap-2">
            <Languages size={16} aria-hidden="true" className="text-accent" />
            <h3 className="font-display text-xl font-normal">{labels.languages}</h3>
          </div>

          <div className="space-y-5">
            {spokenLanguages.map((item) => (
              <div key={item.id}>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="border border-border bg-secondary px-1.5 py-0.5 font-mono text-xs tracking-widest text-muted-foreground">
                      {item.badge}
                    </span>
                    <span className="text-sm font-medium">{item.name[lang]}</span>
                  </div>
                  <span className="text-right font-mono text-xs text-muted-foreground">
                    {item.level[lang]}
                  </span>
                </div>
                <div className="h-px bg-border">
                  <div
                    className="h-px bg-accent transition-all duration-1000"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8 flex items-center gap-2">
            <Layers size={16} aria-hidden="true" className="text-accent" />
            <h3 className="font-display text-xl font-normal">{labels.tools}</h3>
          </div>

          <div className="space-y-7">
            {toolGroups[lang].map((group) => (
              <div key={group.label}>
                <div className="mb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
