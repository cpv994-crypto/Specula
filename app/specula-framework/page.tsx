const pillars = [
  {
    title: "Observación paciente",
    note: "Registrar señales de liquidez, tecnología e instituciones antes que opiniones.",
  },
  {
    title: "Análisis socio-económico integrado",
    note: "Cruce entre poder estatal, mercados y dinámicas culturales para entender trayectorias.",
  },
  {
    title: "Disciplina de inversión",
    note: "Cartera modelo con reglas claras de asignación, valoración y cobertura.",
  },
];

export default function SpeculaFrameworkPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-ink/70">Marco Specula</p>
        <h1 className="font-display text-4xl text-charcoal">Fundamento y arquitectura</h1>
        <p className="max-w-2xl text-ink/80">
          Base conceptual del terminal: cómo Specula observa, analiza y actúa. Este espacio sustituye a una página tradicional
          de presentación y sirve como ancla del resto de secciones.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="space-y-2 rounded-3xl border border-gold/25 bg-surface/85 p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Pilar</p>
            <h2 className="font-display text-xl text-charcoal">{pillar.title}</h2>
            <p className="text-sm text-ink/80">{pillar.note}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-gold/25 bg-surface/85 p-8 shadow-sm">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Socio-económico</p>
            <p className="font-display text-lg text-charcoal">Humanismo crítico</p>
            <p className="text-sm text-ink/75">
              Observa las tensiones entre progreso tecnológico, estructuras de poder y libertad humana.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Metodología</p>
            <p className="font-display text-lg text-charcoal">Praxeología aplicada</p>
            <p className="text-sm text-ink/75">
              Parte de la acción humana para interpretar mercados y decisiones institucionales.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Inversión</p>
            <p className="font-display text-lg text-charcoal">Voluntad + instituciones</p>
            <p className="text-sm text-ink/75">
              Selección de actores capaces de moldear reglas, apoyada en valoración disciplinada y coberturas de liquidez.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
