import { useState } from 'react'
import { Download } from 'lucide-react'
import { downloadCv } from '../lib/cv.js'
import { profile } from '../content/site.js'

const STYLES = {
  // Link discreto, como o "Download CV" do rodapé da seção de contato.
  link: 'flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group',
  // Botão com contorno.
  outline:
    'inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm rounded-sm hover:border-foreground/30 transition-colors',
}

export default function CvButton({ label, busyLabel, variant = 'link', className = '' }) {
  const [busy, setBusy] = useState(false)

  async function handleClick() {
    if (busy) return
    setBusy(true)
    try {
      await downloadCv(profile.cvFilename)
    } finally {
      setBusy(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={busy}
      aria-busy={busy}
      className={STYLES[variant] + ' disabled:opacity-60 ' + className}
    >
      {busy ? busyLabel : label}
      <Download
        size={12}
        aria-hidden="true"
        className={
          variant === 'link'
            ? 'opacity-0 transition-opacity group-hover:opacity-100'
            : 'opacity-70'
        }
      />
    </button>
  )
}
