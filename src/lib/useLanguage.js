import { useEffect, useState } from 'react'
import { LANGS, ui } from '../content/site.js'

const STORAGE_KEY = 'isabela-portfolio-lang'
const CODES = LANGS.map((l) => l.code)

function detectLanguage() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved && CODES.includes(saved)) return saved
  } catch {
    /* localStorage pode estar bloqueado; seguimos com a detecção do navegador */
  }
  try {
    const preferred = navigator.languages?.length ? navigator.languages : [navigator.language]
    for (const tag of preferred) {
      const code = String(tag || '').slice(0, 2).toLowerCase()
      if (CODES.includes(code)) return code
    }
  } catch {
    /* ignora */
  }
  return 'pt'
}

export function useLanguage() {
  const [lang, setLang] = useState('pt')

  // A detecção acontece depois da montagem para não quebrar em ambientes
  // sem `window` e para manter o HTML inicial em português.
  useEffect(() => {
    setLang(detectLanguage())
  }, [])

  useEffect(() => {
    const meta = LANGS.find((l) => l.code === lang)
    const copy = ui[lang]
    if (!meta || !copy) return

    document.documentElement.lang = meta.htmlLang
    document.title = copy.htmlTitle

    let description = document.querySelector('meta[name="description"]')
    if (!description) {
      description = document.createElement('meta')
      description.setAttribute('name', 'description')
      document.head.appendChild(description)
    }
    description.setAttribute('content', copy.metaDescription)

    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignora */
    }
  }, [lang])

  return [lang, setLang]
}
