import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// O build gera um único arquivo `dist/index.html`, com CSS, JS, fotos e PDF
// embutidos. Isso facilita hospedar em qualquer lugar (Vercel, Netlify,
// GitHub Pages) sem se preocupar com caminhos de arquivos.
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  build: {
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000,
  },
})
