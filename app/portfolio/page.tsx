const allocations = [
  { label: "Estrategia núcleo", weight: "45%" },
  { label: "Tecnología crítica", weight: "25%" },
  { label: "Infraestructura y energía", weight: "18%" },
  { label: "Reserva de liquidez", weight: "12%" },
];

const historical = [
  { title: "Cartera 2023", status: "Archivo", note: "Primer prototipo disciplinado." },
  { title: "Cartera 2024", status: "Revisión", note: "Ajustes por régimen de liquidez." },
  { title: "Cartera 2025", status: "Borrador", note: "En construcción." },
];

export default function PortfolioPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-ink/70">Cartera modelo</p>
        <h1 className="font-display text-4xl text-charcoal">Estructura de asignación</h1>
        <p className="max-w-2xl text-ink/80">
          Vista preliminar de la cartera modelo de Specula. Sin datos en vivo: solo contenedores para la asignación, seguimiento
          de liquidez y registro histórico.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6 rounded-3xl border border-gold/25 bg-surface/85 p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Modelo</p>
              <h2 className="font-display text-2xl text-charcoal">Asignación estratégica</h2>
            </div>
            <div className="relative h-32 w-32 rounded-full border border-gold/40 bg-gradient-to-br from-surface via-surface to-mist/70 shadow-glow">
              <div className="absolute inset-4 rounded-full border border-gold/30" />
              <div className="absolute inset-8 rounded-full border border-ink/30" />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {allocations.map((item) => (
              <div key={item.label} className="rounded-2xl border border-gold/20 bg-surface/80 p-4">
                <p className="text-sm uppercase tracking-[0.12em] text-ink/70">{item.label}</p>
                <p className="text-2xl font-semibold text-charcoal">{item.weight}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-ink/70">
            Gráfico circular y métricas de riesgo pendientes de implementación. Este módulo mostrará pesos, bandas y alertas de
            disciplina.
          </p>
        </div>

        <div className="space-y-4 rounded-3xl border border-gold/25 bg-surface/85 p-8 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Liquidez</p>
          <h3 className="font-display text-xl text-charcoal">Panel de liquidez pendiente</h3>
          <p className="text-sm text-ink/80">
            Placeholder para integrar curvas de liquidez, spreads y buffers de efectivo. Sin conexión a datos en esta versión.
          </p>
          <div className="rounded-2xl border border-gold/20 bg-surface/80 p-4 text-sm text-ink/70">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-mist" />
              <span>Última actualización: espera</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 rounded-3xl border border-gold/25 bg-surface/85 p-8 shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Histórico</p>
            <h3 className="font-display text-2xl text-charcoal">Versiones de cartera</h3>
          </div>
          <p className="text-sm text-ink/70">Enlace a detalle pendiente de implementación.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {historical.map((entry) => (
            <div key={entry.title} className="space-y-2 rounded-2xl border border-gold/20 bg-surface/80 p-4">
              <p className="font-display text-lg text-charcoal">{entry.title}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-ink/60">{entry.status}</p>
              <p className="text-sm text-ink/80">{entry.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
