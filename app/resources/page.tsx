const resources = [
  {
    title: "Biblioteca de fundamentos",
    items: [
      "Psicología de las masas — Gustave Le Bon",
      "Human Action — Ludwig von Mises",
      "The Technological Society — Jacques Ellul",
      "Capitalismo de Estado y estrategia industrial — ensayos seleccionados",
    ],
  },
  {
    title: "Vigilancia macro y liquidez",
    items: [
      "Series de balance de la Reserva Federal (H.4.1)",
      "Cuenta del Tesoro de EE.UU. (TGA) y RRP",
      "Spreads de financiación y basis swaps (Bloomberg)",
      "Indicadores de colateral y repos",
    ],
  },
  {
    title: "Herramientas de campo",
    items: [
      "Mapas de poder institucional y flujos de capital",
      "Cuadros de mando para seguimiento de tesis",
      "Protocolos de entrevista y trabajo cualitativo",
      "Plantillas de valoración DCF disciplinadas",
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-black/60">Resources</p>
        <h1 className="font-display text-4xl text-charcoal">Recursos y referencias</h1>
        <p className="max-w-2xl text-black/70">
          Un inventario curado para sostener la observación paciente y la toma de decisiones estratégicas.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {resources.map((group) => (
          <div key={group.title} className="space-y-3 rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm">
            <h2 className="font-display text-xl text-charcoal">{group.title}</h2>
            <ul className="space-y-2 text-sm text-black/70">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-charcoal">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
