import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Reveal from './components/Reveal.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Academic from './components/Academic.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useLanguage } from './lib/useLanguage.js'
import { warmUpDownloads } from './lib/cv.js'
import { sectionTitles, ui } from './content/site.js'

const SECTION_IDS = ['about', 'experience', 'education', 'academic', 'skills', 'contact']

function Divider() {
  return <div className="h-px bg-border" />
}

export default function App() {
  const [lang, setLang] = useLanguage()
  const [active, setActive] = useState('')
  const t = ui[lang]
  const titles = sectionTitles[lang]

  useEffect(() => {
    warmUpDownloads()
  }, [])

  // Marca no menu a seção que está sendo lida.
  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    if (!elements.length || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        setActive(visible.length ? visible[0].target.id : '')
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-foreground"
      >
        {t.skipToContent}
      </a>

      <Header lang={lang} setLang={setLang} t={t} active={active} />

      <main className="mx-auto max-w-6xl px-6">
        <Hero lang={lang} />

        <Reveal id="about">
          <About lang={lang} title={titles.about} />
        </Reveal>
        <Divider />

        <Reveal id="experience">
          <Experience lang={lang} title={titles.experience} />
        </Reveal>
        <Divider />

        <Reveal id="education">
          <Education lang={lang} title={titles.education} />
        </Reveal>
        <Divider />

        <Reveal id="academic">
          <Academic lang={lang} title={titles.academic} />
        </Reveal>
        <Divider />

        <Reveal id="skills">
          <Skills lang={lang} title={titles.skills} />
        </Reveal>
        <Divider />

        <Reveal id="contact">
          <Contact lang={lang} title={titles.contact} />
        </Reveal>
      </main>

      <Footer t={t} />
    </div>
  )
}
