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
      <section className="grid gap-8 rounded-3xl bg-white/80 px-8 py-12 shadow-glow fade-border sm:grid-cols-2">
        <div className="space-y-4">
          <p className="font-display text-sm uppercase tracking-[0.2em] text-black/60">Specula</p>
          <h1 className="font-display text-4xl leading-tight text-charcoal sm:text-5xl">
            Observatorio y refugio de pensamiento estratégico
          </h1>
          <p className="text-lg text-black/70">
            Una web sobria y serena para navegar las tensiones entre tecnología, instituciones y acción humana.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/research"
              className="rounded-full bg-charcoal px-5 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              Ver investigación
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-charcoal/20 px-5 py-2 text-sm font-medium text-charcoal transition hover:border-charcoal/40"
            >
              Conocer el marco
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-white via-white to-mist/60 p-6 shadow-glow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(197,216,109,0.12),transparent_35%)]" />
          <div className="relative space-y-4 text-charcoal">
            <p className="font-display text-2xl">“Una atalaya observa más lejos cuanto más silenciosa se mantiene.”</p>
            <p className="text-black/70">
              Specula articula observación paciente, pensamiento crítico y disciplina de inversión para orientarse en la
              incertidumbre radical.
            </p>
            <div className="flex gap-3 text-sm text-black/60">
              <span className="rounded-full bg-white px-3 py-1 shadow-sm">Humanismo crítico</span>
              <span className="rounded-full bg-white px-3 py-1 shadow-sm">Praxeología</span>
              <span className="rounded-full bg-white px-3 py-1 shadow-sm">Tecnología</span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-3">
        {highlights.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group relative flex flex-col justify-between rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="space-y-3">
              <p className="font-display text-xl text-charcoal">{item.title}</p>
              <p className="text-sm text-black/70">{item.description}</p>
            </div>
            <span className="mt-4 text-sm font-semibold text-charcoal group-hover:underline">Explorar →</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
