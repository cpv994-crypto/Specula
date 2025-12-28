const researchEntries = [
  {
    title: "DCF disciplinado",
    category: "Valoración",
    note: "Plantilla para flujos descontados con supuestos conservadores y control de margen de seguridad.",
  },
  {
    title: "Análisis institucional",
    category: "Cualitativo",
    note: "Mapa de poder y dependencia regulatoria para compañías estratégicas.",
  },
  {
    title: "Coberturas de liquidez",
    category: "Hedging",
    note: "Estructuras de protección basadas en régimen de liquidez y volatilidad implícita.",
  },
  {
    title: "Notas de campo sectoriales",
    category: "Industria",
    note: "Esqueletos de investigación por vertical: energía, defensa, infraestructura digital.",
  },
];

export default function FinancialResearchPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-ink/70">Investigación financiera</p>
        <h1 className="font-display text-4xl text-charcoal">Archivo metodológico</h1>
        <p className="max-w-2xl text-ink/80">
          Plantillas y registros de investigación financiera orientados a método y disciplina. Sin datos en vivo; sirve como
          mapa de archivos para modelos, casos y cobertura de riesgos.
        </p>
      </div>

      <div className="rounded-3xl border border-gold/25 bg-surface/85 p-8 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Archivo</p>
            <h2 className="font-display text-2xl text-charcoal">Entradas de investigación</h2>
          </div>
          <p className="text-sm text-ink/70">Fechas, anexos y descargas se activarán cuando el backend esté listo.</p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {researchEntries.map((entry) => (
            <div key={entry.title} className="space-y-2 rounded-2xl border border-gold/20 bg-surface/80 p-5">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-ink/60">
                <span>{entry.category}</span>
                <span className="rounded-full bg-mist px-3 py-1 text-[11px] text-charcoal">Archivado</span>
              </div>
              <p className="font-display text-xl text-charcoal">{entry.title}</p>
              <p className="text-sm text-ink/80">{entry.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-gold/20 bg-surface/80 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Metodología</p>
          <p className="font-display text-lg text-charcoal">Valorar para disciplinar</p>
          <p className="text-sm text-ink/75">Las valoraciones anclan la narrativa y permiten aplicar reglas de entrada y salida.</p>
        </div>
        <div className="rounded-2xl border border-gold/20 bg-surface/80 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Archivo</p>
          <p className="font-display text-lg text-charcoal">Todo queda registrado</p>
          <p className="text-sm text-ink/75">Los casos de estudio se ordenarán por fecha, sector y tipo de riesgo.</p>
        </div>
        <div className="rounded-2xl border border-gold/20 bg-surface/80 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Próximos módulos</p>
          <p className="font-display text-lg text-charcoal">Integraciones</p>
          <p className="text-sm text-ink/75">Descargas, gráficos y anexos estarán disponibles cuando la capa de datos esté activa.</p>
        </div>
      </div>
    </div>
  );
}
