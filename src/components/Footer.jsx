import { profile } from '../content/site.js'

export default function Footer({ t }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row">
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          {profile.fullName} · {new Date().getFullYear()}
        </span>

        <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
          <span>{t.footerTagline}</span>

          <span>·</span>

          <a
            href="https://matvzn.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition-colors hover:text-foreground"
          >
            {t.footerCredit}
          </a>
        </div>
      </div>
    </footer>
  )
}