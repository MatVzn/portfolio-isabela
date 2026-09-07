import cvUrl from '../assets/curriculo-isabela-guimaraes.pdf'

export { cvUrl }

/* ---------------------------------------------------------------------------
   O PDF fica embutido no próprio arquivo do site (data URI), então o download
   funciona sem servidor. Quando a página é aberta dentro do visualizador do
   Claude, links de download comuns não funcionam: nesse caso usamos a API de
   downloads do visualizador. Em qualquer outro lugar (Vercel, Netlify, GitHub
   Pages, arquivo local) cai no link normal.
   --------------------------------------------------------------------------- */

let capabilityPromise = null

function resolveDownloadsCapability() {
  if (capabilityPromise) return capabilityPromise

  capabilityPromise = new Promise((resolve) => {
    let attempts = 0
    const poll = () => {
      const use = typeof window !== 'undefined' && window.claude && window.claude.use
      if (typeof use === 'function') {
        Promise.resolve(use.call(window.claude, 'downloads')).then(
          (cap) => resolve(cap || null),
          () => resolve(null),
        )
        return
      }
      if (++attempts > 20) return resolve(null)
      setTimeout(poll, 100)
    }
    poll()
  })

  return capabilityPromise
}

/** Aquece a checagem logo no carregamento, para o clique não esperar. */
export function warmUpDownloads() {
  resolveDownloadsCapability()
}

function dataUrlToBlob(url) {
  const [header, encoded] = url.split(',')
  const mime = header.match(/:(.*?);/)?.[1] || 'application/pdf'
  const binary = atob(encoded)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i)
  return new Blob([bytes], { type: mime })
}

function saveWithAnchor(filename) {
  const anchor = document.createElement('a')
  anchor.href = cvUrl
  anchor.download = filename
  anchor.rel = 'noopener'
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
}

export async function downloadCv(filename) {
  const timeout = new Promise((resolve) => setTimeout(() => resolve(null), 1500))
  let capability = null
  try {
    capability = await Promise.race([resolveDownloadsCapability(), timeout])
  } catch {
    capability = null
  }

  if (capability && typeof capability.save === 'function') {
    try {
      const blob = cvUrl.startsWith('data:')
        ? dataUrlToBlob(cvUrl)
        : await fetch(cvUrl).then((r) => r.blob())
      await capability.save({ filename, data: blob })
      return
    } catch (error) {
      // O visitante pode ter recusado o download: nesse caso não insistimos.
      if (error && error.code === 'declined') return
    }
  }

  saveWithAnchor(filename)
}
