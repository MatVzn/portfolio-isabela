import { useCallback, useEffect, useState } from 'react'

export const THEMES = ['light', 'dark', 'pastel', 'auto']
export const DEFAULT_THEME = 'light'

// A mesma chave é lida pelo script do `index.html`, que aplica o tema antes
// da página aparecer (evita o "piscar" de tema claro ao abrir em modo escuro).
const STORAGE_KEY = 'isabela-portfolio-theme'

function readStoredTheme() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved && THEMES.includes(saved)) return saved
  } catch {
    /* localStorage pode estar bloqueado; seguimos com o padrão */
  }
  return DEFAULT_THEME
}

// Mantém a cor da barra do navegador (celular) igual ao fundo do tema atual.
function syncThemeColor() {
  const background = getComputedStyle(document.documentElement)
    .getPropertyValue('--c-background')
    .trim()
  if (!background) return

  let meta = document.querySelector('meta[name="theme-color"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', 'theme-color')
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', background)
}

export function useTheme() {
  const [theme, setThemeState] = useState(() =>
    typeof window === 'undefined' ? DEFAULT_THEME : readStoredTheme(),
  )

  const setTheme = useCallback((next) => {
    if (THEMES.includes(next)) setThemeState(next)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    syncThemeColor()

    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* ignora */
    }

    // No modo automático, o CSS já acompanha o sistema sozinho; aqui só
    // atualizamos a cor da barra quando o sistema troca de claro para escuro.
    if (theme !== 'auto' || typeof window.matchMedia !== 'function') return
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    query.addEventListener('change', syncThemeColor)
    return () => query.removeEventListener('change', syncThemeColor)
  }, [theme])

  return [theme, setTheme]
}
