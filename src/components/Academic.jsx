import { useState } from 'react'
import { ChevronDown, Globe, Scale, ScrollText } from 'lucide-react'
import SectionLabel from './SectionLabel.jsx'
import { academic } from '../content/site.js'

const ICONS = { scroll: ScrollText, globe: Globe, scale: Scale }

export default function Academic({ lang, title }) {
  // O primeiro item já vem aberto, como no acordeão de referência.
  const [openId, setOpenId] = useState(academic[0].id)

  return (
    <div className="py-20 lg:py-28">
      <SectionLabel number="04" title={title} />

      <div className="space-y-3">
        {academic.map((item) => {
          const Icon = ICONS[item.icon] || ScrollText
          const open = openId === item.id
          return (
            <div key={item.id} className="border border-border">
              <button
                type="button"
                onClick={() => setOpenId(open ? null : item.id)}
                aria-expanded={open}
                aria-controls={`painel-${item.id}`}
                className="flex w-full items-center justify-between px-5 py-5 text-left transition-colors hover:bg-secondary/30 sm:px-7"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-border text-accent">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="mb-0.5 font-mono text-xs tracking-widest text-accent uppercase">
                      {item.kicker[lang]}
                    </div>
                    <h3 className="font-display text-lg font-normal">{item.title[lang]}</h3>
                    <p className="mt-0.5 text-xs font-light text-muted-foreground">
                      {item.subtitle[lang]}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-4">
                  <span className="hidden font-mono text-xs text-muted-foreground sm:block">
                    {item.period[lang]}
                  </span>
                  <ChevronDown
                    size={16}
                    aria-hidden="true"
                    className={
                      'text-muted-foreground transition-transform ' + (open ? 'rotate-180' : '')
                    }
                  />
                </div>
              </button>

              {open && (
                <div id={`painel-${item.id}`} className="border-t border-border">
                  <div className="grid grid-cols-1 gap-8 px-5 py-6 sm:px-7 md:grid-cols-2">
                    {item.blocks[lang].map((block) => (
                      <div key={block.label}>
                        <div className="mb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                          {block.label}
                        </div>
                        <p className="text-sm leading-relaxed font-light text-muted-foreground">
                          {block.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 border-t border-border px-5 py-4 sm:px-7">
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
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
