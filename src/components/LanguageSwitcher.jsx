import { Fragment } from 'react'
import { LANGS } from '../content/site.js'

export default function LanguageSwitcher({ lang, onChange, label, className = '' }) {
  return (
    <div className={'flex items-center ' + className} role="group" aria-label={label}>
      {LANGS.map((item, index) => {
        const active = item.code === lang
        return (
          <Fragment key={item.code}>
            {index > 0 && <span aria-hidden="true" className="mx-2 h-2.5 w-px bg-border" />}
            <button
              type="button"
              aria-pressed={active}
              title={item.name}
              onClick={() => onChange(item.code)}
              className={
                'font-mono text-xs tracking-[0.15em] transition-colors ' +
                (active ? 'text-accent' : 'text-muted-foreground hover:text-foreground')
              }
            >
              {item.label}
              <span className="sr-only"> — {item.name}</span>
            </button>
          </Fragment>
        )
      })}
    </div>
  )
}
