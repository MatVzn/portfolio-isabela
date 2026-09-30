import { useEffect, useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import ThemeSwitcher from './ThemeSwitcher.jsx'
import { profile } from '../content/site.js'

const SECTIONS = ['about', 'experience', 'education', 'academic', 'skills', 'contact']

export default function Header({ lang, setLang, theme, setTheme, t, active }) {
  const [open, setOpen] = useState(false)

  // Fecha o menu ao passar para a largura de desktop.
  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return
    const query = window.matchMedia('(min-width: 768px)')
    const close = () => query.matches && setOpen(false)
    query.addEventListener('change', close)
    return () => query.removeEventListener('change', close)
  }, [])

  function go(event, id) {
    event.preventDefault()
    setOpen(false)
    const target = document.getElementById(id)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          onClick={(event) => go(event, 'top')}
          className="font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase transition-colors hover:text-foreground"
        >
          {profile.shortName}
        </a>

        <div className="flex items-center gap-3 md:gap-7">
          <nav className="hidden items-center gap-7 md:flex">
            {SECTIONS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(event) => go(event, id)}
                aria-current={active === id ? 'true' : undefined}
                className={
                  'text-sm transition-colors ' +
                  (active === id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground')
                }
              >
                {t.nav[id]}
              </a>
            ))}
          </nav>

          <LanguageSwitcher
            lang={lang}
            onChange={setLang}
            label={t.changeLanguage}
          />

          <ThemeSwitcher theme={theme} onChange={setTheme} copy={t.theme} />
            
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? t.closeMenu : t.openMenu}
            className="text-muted-foreground transition-colors hover:text-foreground md:hidden"
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={
                  'h-px bg-current transition-all ' + (open ? 'translate-y-1.75 rotate-45' : '')
                }
              />
              <span className={'h-px bg-current transition-all ' + (open ? 'opacity-0' : '')} />
              <span
                className={
                  'h-px bg-current transition-all ' + (open ? '-translate-y-1.75 -rotate-45' : '')
                }
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto max-w-6xl px-6 py-2">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(event) => go(event, id)}
                  className="block border-b border-border py-3 text-sm text-muted-foreground last:border-0 hover:text-foreground"
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
