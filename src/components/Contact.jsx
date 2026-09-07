import { ExternalLink, Mail, Phone } from 'lucide-react'
import SectionLabel from './SectionLabel.jsx'
import CvButton from './CvButton.jsx'
import { contact, profile, ui } from '../content/site.js'
import retratoSecundario from '../assets/retrato-2.jpg'

export default function Contact({ lang, title }) {
  const copy = contact[lang]
  const t = ui[lang]

  return (
    <div className="grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-[1fr_auto] lg:py-32">
      <div>
        <SectionLabel number="06" title={title} />

        <h2 className="mb-6 font-display text-4xl leading-[1.1] font-normal md:text-5xl lg:text-6xl">
          {copy.headingStart}
          <br />
          <em className="text-accent italic">{copy.headingEm}</em>
        </h2>

        <p className="mb-8 max-w-md leading-relaxed font-light text-muted-foreground">
          {copy.text}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 rounded-sm bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            <Mail size={15} aria-hidden="true" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phoneHref}`}
            className="inline-flex items-center gap-3 rounded-sm border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground/30"
          >
            <Phone size={15} aria-hidden="true" />
            {profile.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-5 lg:items-end lg:text-right">
        <div className="aspect-[4/3] w-full max-w-xs overflow-hidden rounded-sm border border-border bg-secondary lg:w-64">
          <img
            src={retratoSecundario}
            alt={t.portraitAltSecondary}
            width="880"
            height="660"
            className="h-full w-full object-cover"
          />
        </div>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground lg:justify-end"
        >
          LinkedIn
          <ExternalLink
            size={12}
            aria-hidden="true"
            className="opacity-0 transition-opacity group-hover:opacity-100"
          />
        </a>

        <CvButton
          label={t.downloadCv}
          busyLabel={t.downloadingCv}
          variant="link"
          className="lg:justify-end"
        />
      </div>
    </div>
  )
}
