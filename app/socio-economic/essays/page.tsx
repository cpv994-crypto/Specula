const essays = [
  {
    title: "La disciplina como refugio",
    theme: "Ética y estrategia",
    summary: "Explora la disciplina como herramienta para navegar incertidumbre y poder institucional.",
  },
  {
    title: "Tecnología como liturgia",
    theme: "Cultura y tecnología",
    summary: "Reflexiona sobre la adopción tecnológica como ritual colectivo y su impacto socio-económico.",
  },
  {
    title: "Liquidez y voluntad",
    theme: "Mercados",
    summary: "Relación entre mareas de liquidez, acción humana y arquitectura de mercados.",
  },
];

export default function EssaysPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-ink/70">Ensayos</p>
        <h1 className="font-display text-4xl text-charcoal">Archivo de ensayos</h1>
        <p className="max-w-2xl text-ink/80">
          Ensayos analíticos y filosóficos en formato largo. Cada entrada reservará espacio para una ilustración simbólica y
          referencias cruzadas con el resto del terminal.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {essays.map((essay) => (
          <div key={essay.title} className="space-y-3 rounded-3xl border border-gold/25 bg-surface/85 p-6 shadow-sm">
            <div className="aspect-[4/3] w-full rounded-2xl border border-dashed border-gold/30 bg-surface/70" />
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-ink/60">
              <span>{essay.theme}</span>
              <span className="rounded-full bg-mist px-3 py-1 text-[11px] text-charcoal">Ilustración pendiente</span>
            </div>
            <p className="font-display text-xl text-charcoal">{essay.title}</p>
            <p className="text-sm text-ink/80">{essay.summary}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-gold/25 bg-surface/85 p-8 shadow-sm">
        <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Nota editorial</p>
        <p className="max-w-3xl text-sm text-ink/75">
          Los ensayos son deliberadamente pausados. Se actualizarán con referencias a horizontes temporales, señales y
          investigaciones financieras para mantener coherencia en todo el terminal.
        </p>
      </div>
    </div>
  );
}
