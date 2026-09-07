/** Cabeçalho de seção: número, título e a régua até a margem. */
export default function SectionLabel({ number, title }) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{number}</span>
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
        {title}
      </span>
      <div className="h-px flex-1 bg-border" />
    </div>
  )
}
