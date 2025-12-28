const futureYears = [
  {
    year: 2030,
    focus: "Infraestructura energética y automatización logística",
    note: "Seguimiento de electrificación, cadenas resilientes y regulación industrial.",
  },
  {
    year: 2040,
    focus: "Interfaces humano-máquina y gobernanza algorítmica",
    note: "Impacto social de IA ubicua, biometría y sistemas de control.",
  },
  {
    year: 2050,
    focus: "Transformaciones demográficas y biotecnología",
    note: "Recomposición de trabajo, longevidad y rediseño de ciudades.",
  },
];

export default function HorizonsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-ink/70">Horizontes</p>
        <h1 className="font-display text-4xl text-charcoal">Línea temporal de Specula</h1>
        <p className="max-w-2xl text-ink/80">
          Nodos de futuro para situar cambios tecnológicos, sociales y económicos. Cada año se expandirá con cronologías y
          escenarios en versiones posteriores.
        </p>
      </div>

      <div className="space-y-4 rounded-3xl border border-gold/25 bg-surface/85 p-8 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Estructura</p>
            <h2 className="font-display text-2xl text-charcoal">Calendario prospectivo</h2>
          </div>
          <p className="text-sm text-ink/70">Las conexiones entre nodos se activarán más adelante.</p>
        </div>
        <div className="relative mt-6 space-y-6">
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-gold/60 via-gold/30 to-transparent sm:left-1/2" />
          {futureYears.map((item, index) => (
            <div
              key={item.year}
              className={`relative flex flex-col gap-4 rounded-2xl border border-gold/20 bg-surface/80 p-5 sm:flex-row sm:items-center ${
                index % 2 === 0 ? "sm:pl-12 sm:pr-4 sm:text-left sm:translate-x-0" : "sm:flex-row-reverse sm:pr-12 sm:pl-4"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-navy text-sm font-semibold text-mist shadow-glow">
                  {item.year}
                </span>
                <p className="text-sm uppercase tracking-[0.18em] text-ink/60">Nodo</p>
              </div>
              <div className="space-y-1">
                <p className="font-display text-xl text-charcoal">{item.focus}</p>
                <p className="text-sm text-ink/75">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
