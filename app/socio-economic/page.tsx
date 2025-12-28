import Link from "next/link";

const sections = [
  {
    title: "Horizontes",
    description: "Línea temporal con nodos para 2030, 2040 y 2050, orientada a escenarios y tecnologías clave.",
    href: "/socio-economic/horizons",
  },
  {
    title: "Ensayos",
    description: "Archivo para ensayos analíticos y filosóficos con una ilustración simbólica por pieza.",
    href: "/socio-economic/essays",
  },
];

export default function SocioEconomicPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-ink/70">Análisis socio-económico</p>
        <h1 className="font-display text-4xl text-charcoal">Observación a largo plazo</h1>
        <p className="max-w-2xl text-ink/80">
          Dos módulos complementarios: horizontes futuros para visualizar trayectorias y ensayos para articular la reflexión
          profunda. Todo en construcción, sin datos operativos.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.title}
            href={section.href}
            className="group space-y-3 rounded-3xl border border-gold/25 bg-surface/85 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Sección</p>
                <h2 className="font-display text-2xl text-charcoal">{section.title}</h2>
              </div>
              <span className="text-sm font-semibold text-navy group-hover:underline group-hover:decoration-gold">Entrar →</span>
            </div>
            <p className="text-sm text-ink/80">{section.description}</p>
          </Link>
        ))}
      </div>

      <div className="rounded-3xl border border-gold/25 bg-surface/85 p-8 shadow-sm">
        <p className="text-xs uppercase tracking-[0.2em] text-ink/70">Método</p>
        <h3 className="font-display text-2xl text-charcoal">Archivo vivo</h3>
        <p className="max-w-3xl text-sm text-ink/75">
          El módulo socio-económico consolida las hipótesis de largo plazo de Specula. Aquí se organizarán tanto cronologías de
          tecnologías y políticas como ensayos sobre dinámicas sociales, culturales y financieras.
        </p>
      </div>
    </div>
  );
}
