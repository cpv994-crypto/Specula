import Link from "next/link";

const panels = [
  {
    title: "Cartera modelo",
    description: "Estructura de asignación y registros históricos para observar disciplina de inversión.",
    href: "/portfolio",
  },
  {
    title: "Investigación financiera",
    description: "Archivo de modelos y casos de estudio para valorar empresas y marcos de liquidez.",
    href: "/financial-research",
  },
  {
    title: "Señales e inteligencia",
    description: "Flujo de señales estratégicas cruzando liquidez, tecnología e instituciones.",
    href: "/signals",
  },
  {
    title: "Análisis socio-económico",
    description: "Líneas de observación a largo plazo: horizontes futuros y ensayos en curso.",
    href: "/socio-economic",
  },
  {
    title: "Marco Specula",
    description: "Fundamentos de observación, método analítico e integración con la cartera.",
    href: "/specula-framework",
  },
  {
    title: "Newsletter curada",
    description: "Selección mensual de señales y lecturas esenciales, sin comentario accesorio.",
    href: "/newsletter",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="grid gap-8 rounded-3xl bg-surface/90 px-8 py-12 shadow-glow fade-border sm:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.24em] text-ink/70">Specula</p>
          <h1 className="font-display text-4xl leading-tight text-charcoal sm:text-5xl">
            Terminal de observación para el futuro
          </h1>
          <p className="text-lg text-ink/75">
            Observamos los vectores que redibujan la economía: liquidez, tecnología e instituciones. Un panel sobrio para
            orientarse y actuar con disciplina.
          </p>
          <div className="rounded-2xl border border-gold/20 bg-surface/80 p-5 text-ink/80">
            <p className="font-display text-sm uppercase tracking-[0.18em] text-ink/70">Lema</p>
            <p className="text-xl text-charcoal">“Observando el futuro desde el presente.”</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-surface via-surface to-mist/70 p-8 shadow-glow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(181,146,96,0.16),transparent_40%)]" />
          <div className="relative space-y-6 text-charcoal">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-ink/70">
              <span className="h-2 w-2 rounded-full bg-gold/70 shadow-glow" />
              <span>Estado del terminal</span>
            </div>
            <div className="space-y-3">
              <p className="font-display text-2xl">Observatorio activo</p>
              <p className="text-ink/80">
                Interfaces preparadas para: cartera modelo, investigación financiera, señales, análisis socio-económico y
                biblioteca de recursos.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm text-ink/75">
              <div className="rounded-xl border border-gold/20 bg-surface/80 p-3">
                <p className="text-xs uppercase tracking-[0.2em] text-ink/60">Horizontes</p>
                <p className="font-semibold text-charcoal">2030 · 2040 · 2050</p>
              </div>
              <div className="rounded-xl border border-gold/20 bg-surface/80 p-3">
                <p className="text-xs uppercase tracking-[0.2em] text-ink/60">Señales</p>
                <p className="font-semibold text-charcoal">Liquidez · Tecnología · Poder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {panels.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group relative flex h-full flex-col justify-between rounded-2xl border border-gold/25 bg-surface/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="space-y-3">
              <p className="font-display text-xl text-charcoal">{item.title}</p>
              <p className="text-sm text-ink/80">{item.description}</p>
            </div>
            <span className="mt-4 text-sm font-semibold text-navy group-hover:underline group-hover:decoration-gold">Acceder →</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
