import { Panel } from "@/components/ui/Panel";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
      <SectionHeader
        label="Resources"
        title="Recursos y referencias"
        description="Un inventario curado para sostener la observación paciente y la toma de decisiones estratégicas."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {resources.map((group) => (
          <Panel key={group.title} className="space-y-3 border-lines/80 bg-surface/70 p-6">
            <h2 className="font-display text-xl text-foreground">{group.title}</h2>
            <ul className="space-y-2 text-sm text-muted">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>
    </div>
  );
}
