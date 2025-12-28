const briefs = [
  {
    title: "Brief 01",
    cadence: "Mensual",
    focus: "Selección de señales cruzando liquidez, tecnología e instituciones.",
  },
  {
    title: "Brief 02",
    cadence: "Mensual",
    focus: "Seguimiento de portafolio modelo y movimientos regulatorios relevantes.",
  },
  {
    title: "Brief 03",
    cadence: "Mensual",
    focus: "Lecturas esenciales y citas de campo para orientación estratégica.",
  },
];

export default function NewsletterPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-ink/70">Newsletter</p>
        <h1 className="font-display text-4xl text-charcoal">Briefs curados</h1>
        <p className="max-w-2xl text-ink/80">
          Resumen selectivo de inteligencia. No es un boletín frecuente: cada entrega prioriza calidad y filtros rigurosos.
          Suscripciones y distribución se activarán más adelante.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {briefs.map((brief) => (
          <div key={brief.title} className="space-y-2 rounded-3xl border border-gold/25 bg-surface/85 p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/70">{brief.cadence}</p>
            <h2 className="font-display text-xl text-charcoal">{brief.title}</h2>
            <p className="text-sm text-ink/80">{brief.focus}</p>
            <div className="rounded-2xl border border-dashed border-gold/30 bg-surface/70 p-4 text-sm text-ink/70">
              <p>Entrega pendiente de publicación.</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-gold/25 bg-surface/85 p-8 shadow-sm">
        <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Criterio</p>
        <p className="max-w-3xl text-sm text-ink/75">
          La newsletter de Specula actúa como filtro. Incluye señales verificadas, referencias esenciales y anotaciones breves
          que conectan con el resto de módulos del terminal.
        </p>
      </div>
    </div>
  );
}
