const resources = [
  {
    title: "Economía",
    items: ["Escuela Austriaca: acción humana y ciclo", "Liquidez global y balanza del Tesoro", "Riesgo sistémico y colateral"],
  },
  {
    title: "Filosofía",
    items: ["Tecnología y poder — Ellul", "Libertad y responsabilidad — Arendt", "Metodología crítica — Polanyi"],
  },
  {
    title: "Tecnología",
    items: ["Infraestructura digital estratégica", "Modelos fundacionales en sector público", "Automatización logística y defensa"],
  },
  {
    title: "Biología",
    items: ["Biotecnología y longevidad", "Neurociencia y comportamiento", "Ecosistemas y resiliencia"],
  },
];

export default function ResourcesPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-ink/70">Resources</p>
        <h1 className="font-display text-4xl text-charcoal">Recursos y referencias</h1>
        <p className="max-w-2xl text-ink/80">
          Biblioteca curada para sostener la observación paciente. Listados sin enlaces todavía; servirán como guía para futuras
          integraciones.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {resources.map((group) => (
          <div key={group.title} className="space-y-3 rounded-2xl border border-gold/25 bg-surface/85 p-6 shadow-sm">
            <h2 className="font-display text-xl text-charcoal">{group.title}</h2>
            <ul className="space-y-2 text-sm text-ink/80">
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
