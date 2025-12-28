interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">{label}</p>
      <h1 className="font-display text-3xl leading-tight sm:text-4xl">{title}</h1>
      {description ? <p className="max-w-3xl text-sm leading-relaxed text-muted">{description}</p> : null}
    </div>
  );
}
