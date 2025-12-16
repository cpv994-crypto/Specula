import Link from "next/link";

const highlights = [
  {
    title: "Marco de investigación",
    description: "Una atalaya para observar la transformación socio-económica desde una óptica humanista crítica.",
    href: "/about",
  },
  {
    title: "Investigación y notas",
    description: "Plantilla de publicaciones para explorar narrativas, riesgos y oportunidades estratégicas.",
    href: "/research",
  },
  {
    title: "Recursos",
    description: "Lecturas, referencias y herramientas seleccionadas para pensar con calma.",
    href: "/resources",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="grid gap-8 rounded-3xl bg-surface/90 px-8 py-12 shadow-glow fade-border sm:grid-cols-2">
        <div className="space-y-4">
          <p className="font-display text-sm uppercase tracking-[0.2em] text-ink/70">Specula</p>
          <h1 className="font-display text-4xl leading-tight text-charcoal sm:text-5xl">
            Observatorio y refugio de pensamiento estratégico
          </h1>
          <p className="text-lg text-ink/80">
            Una web sobria y serena para navegar las tensiones entre tecnología, instituciones y acción humana.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/research"
              className="rounded-full bg-navy px-5 py-2 text-sm font-medium text-canvas transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              Ver investigación
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-gold/60 px-5 py-2 text-sm font-medium text-ink transition hover:border-gold hover:text-navy"
            >
              Conocer el marco
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-surface via-surface to-mist/70 p-6 shadow-glow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(181,146,96,0.18),transparent_38%)]" />
          <div className="relative space-y-4 text-charcoal">
            <p className="font-display text-2xl">“Una atalaya observa más lejos cuanto más silenciosa se mantiene.”</p>
            <p className="text-ink/80">
              Specula articula observación paciente, pensamiento crítico y disciplina de inversión para orientarse en la
              incertidumbre radical.
            </p>
            <div className="flex gap-3 text-sm text-ink/70">
              <span className="rounded-full bg-surface px-3 py-1 shadow-sm">Humanismo crítico</span>
              <span className="rounded-full bg-surface px-3 py-1 shadow-sm">Praxeología</span>
              <span className="rounded-full bg-surface px-3 py-1 shadow-sm">Tecnología</span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-3">
        {highlights.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group relative flex flex-col justify-between rounded-2xl border border-gold/25 bg-surface/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="space-y-3">
              <p className="font-display text-xl text-charcoal">{item.title}</p>
              <p className="text-sm text-ink/80">{item.description}</p>
            </div>
            <span className="mt-4 text-sm font-semibold text-navy group-hover:underline group-hover:decoration-gold">Explorar →</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
