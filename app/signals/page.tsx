const signals = [
  {
    date: "2024-11-01",
    category: "Liquidez",
    description: "Tensión moderada en RRP y TGA; alerta para exposición táctica.",
    strength: "Alta",
  },
  {
    date: "2024-11-03",
    category: "Tecnología",
    description: "Aceleración de despliegue de modelos fundacionales en administración pública.",
    strength: "Media",
  },
  {
    date: "2024-11-05",
    category: "Instituciones",
    description: "Nuevos incentivos regulatorios para infraestructura crítica y defensa.",
    strength: "Alta",
  },
  {
    date: "2024-11-07",
    category: "Geopolítica",
    description: "Reconfiguración de rutas logísticas estratégicas en Eurasia.",
    strength: "Baja",
  },
];

export default function SignalsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-ink/70">Señales</p>
        <h1 className="font-display text-4xl text-charcoal">Tablero de inteligencia</h1>
        <p className="max-w-2xl text-ink/80">
          Flujo condensado de señales estratégicas. No es un feed de noticias: cada tarjeta se centra en cambios de régimen,
          liquidez y poder institucional.
        </p>
      </div>

      <div className="rounded-3xl border border-gold/25 bg-surface/85 p-8 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Estado</p>
            <h2 className="font-display text-2xl text-charcoal">Señales preliminares</h2>
          </div>
          <p className="text-sm text-ink/70">Intensidad visual, sin datos en vivo.</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {signals.map((signal) => (
            <div key={signal.date + signal.category} className="space-y-3 rounded-2xl border border-gold/20 bg-surface/80 p-5">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-ink/60">
                <span>{signal.date}</span>
                <span className="rounded-full bg-mist px-3 py-1 text-[11px] text-charcoal">{signal.category}</span>
              </div>
              <p className="text-sm text-ink/80">{signal.description}</p>
              <div className="flex items-center gap-3">
                <div className="h-2 w-full rounded-full bg-surface">
                  <div
                    className={`h-2 rounded-full bg-gold/70 ${signal.strength === "Alta" ? "w-full" : signal.strength === "Media" ? "w-2/3" : "w-1/3"}`}
                  />
                </div>
                <span className="text-xs uppercase tracking-[0.18em] text-ink/70">{signal.strength}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-gold/20 bg-surface/80 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Liquidez</p>
          <p className="font-display text-lg text-charcoal">Régimen de mareas</p>
          <p className="text-sm text-ink/75">Pendiente de integrar curvas y spreads para contextualizar cada señal.</p>
        </div>
        <div className="rounded-2xl border border-gold/20 bg-surface/80 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Tecnología</p>
          <p className="font-display text-lg text-charcoal">Despliegues críticos</p>
          <p className="text-sm text-ink/75">Seguimiento de infraestructuras, modelos y adopción institucional.</p>
        </div>
        <div className="rounded-2xl border border-gold/20 bg-surface/80 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Instituciones</p>
          <p className="font-display text-lg text-charcoal">Cambios de reglas</p>
          <p className="text-sm text-ink/75">Alertas sobre política industrial, defensa y marcos regulatorios.</p>
        </div>
      </div>
    </div>
  );
}
