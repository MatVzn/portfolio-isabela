import { useEffect, useRef, useState } from 'react'
import { Check, Monitor, Moon, Palette, Sun } from 'lucide-react'
import { THEMES } from '../lib/useTheme.js'

const ICONS = { light: Sun, dark: Moon, pastel: Palette, auto: Monitor }

/**
 * Botão com o ícone do tema atual que abre um pequeno menu com as quatro
 * opções. Funciona com mouse, toque e teclado (setas, Home/End, Esc).
 */
export default function ThemeSwitcher({ theme, onChange, copy }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const triggerRef = useRef(null)
  const itemRefs = useRef([])

  const CurrentIcon = ICONS[theme] ?? Monitor

  // Fecha ao clicar/tocar fora do menu.
  useEffect(() => {
    if (!open) return
    function onPointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  // Ao abrir, o foco vai para a opção marcada.
  useEffect(() => {
    if (!open) return
    const index = Math.max(THEMES.indexOf(theme), 0)
    itemRefs.current[index]?.focus()
  }, [open, theme])

  function close({ restoreFocus = false } = {}) {
    setOpen(false)
    if (restoreFocus) triggerRef.current?.focus()
  }

  function select(code) {
    onChange(code)
    close({ restoreFocus: true })
  }

  function onMenuKeyDown(event) {
    const current = itemRefs.current.indexOf(document.activeElement)
    let next = null

    switch (event.key) {
      case 'ArrowDown':
        next = (current + 1) % THEMES.length
        break
      case 'ArrowUp':
        next = (current - 1 + THEMES.length) % THEMES.length
        break
      case 'Home':
        next = 0
        break
      case 'End':
        next = THEMES.length - 1
        break
      case 'Escape':
        event.preventDefault()
        close({ restoreFocus: true })
        return
      case 'Tab':
        close()
        return
      default:
        return
    }

    event.preventDefault()
    itemRefs.current[next]?.focus()
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="menu-tema"
        aria-label={`${copy.label}: ${copy[theme]}`}
        title={copy.label}
        className="flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
      >
        <CurrentIcon size={16} aria-hidden="true" />
      </button>

      {open && (
        <div
          id="menu-tema"
          role="menu"
          aria-label={copy.label}
          onKeyDown={onMenuKeyDown}
          className="absolute top-full right-0 z-50 mt-3 w-52 border border-border bg-background py-1 shadow-lg"
        >
          {THEMES.map((code, index) => {
            const Icon = ICONS[code]
            const selected = code === theme
            return (
              <button
                key={code}
                ref={(node) => {
                  itemRefs.current[index] = node
                }}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                tabIndex={-1}
                onClick={() => select(code)}
                className={
                  'flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-secondary ' +
                  (selected ? 'text-accent' : 'text-foreground')
                }
              >
                <Icon size={15} aria-hidden="true" className="shrink-0" />
                <span className="flex-1">{copy[code]}</span>
                {selected && <Check size={14} aria-hidden="true" className="shrink-0" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
