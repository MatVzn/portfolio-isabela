import SectionLabel from './SectionLabel.jsx'
import { courses, coursesLabel, education } from '../content/site.js'

export default function Education({ lang, title }) {
  return (
    <div className="py-20 lg:py-28">
      <SectionLabel number="03" title={title} />

      <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
        {education.map((item) => (
          <div
            key={item.id}
            className="bg-background p-7 transition-colors hover:bg-secondary/30"
          >
            <div className="mb-4 font-mono text-xs tracking-widest text-accent uppercase">
              {item.period[lang]}
            </div>
            <h3 className="mb-2 font-display text-lg leading-snug font-normal">
              {item.degree[lang]}
            </h3>
            <div className="mb-1 text-sm font-medium">{item.institution}</div>
            <div className="mb-3 text-xs text-muted-foreground">{item.place[lang]}</div>
            <div className="text-xs leading-relaxed font-light text-muted-foreground">
              {item.note[lang]}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <div className="mb-4 font-mono text-xs tracking-widest text-muted-foreground uppercase">
          {coursesLabel[lang]}
        </div>
        <ul className="border-t border-border">
          {courses.map((course) => (
            <li
              key={course.provider + course.title[lang]}
              className="-mx-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-border px-6 py-3.5 transition-colors hover:bg-secondary/30"
            >
              <span className="text-sm font-light">{course.title[lang]}</span>
              <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                {course.provider}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
