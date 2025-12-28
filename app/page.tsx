import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
    <div className="space-y-10">
      <SectionHeader
        label="Specula"
        title="Terminal de observación socio-económica"
        description="Interfaz disciplinada para navegar señales, construir narrativas y sostener decisiones estratégicas."
      />

      <Panel className="grid gap-8 border-lines/80 bg-overlay/70 p-8 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">Estado del sistema</p>
          <h2 className="font-display text-2xl text-foreground">Observación activa</h2>
          <p className="text-sm leading-relaxed text-muted">
            Specula prioriza la lectura de infraestructuras críticas, política industrial y flujos de poder. Un panel diseñado
            para pensar con calma, registrar anomalías y mantener disciplina de ejecución.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/research"
              className="rounded-md border border-lines/80 bg-overlay/80 px-5 py-2 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
            >
              Abrir módulo de investigación
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-lines/70 px-5 py-2 text-sm font-medium text-muted transition hover:border-accent/60 hover:text-foreground"
            >
              Marco y enfoque
            </Link>
          </div>
        </div>
        <div className="space-y-4 rounded-lg border border-lines/70 bg-surface/60 p-6">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
            <span>Indicadores</span>
            <span className="flex items-center gap-2 text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
              Línea segura
            </span>
          </div>
          <div className="grid gap-3 text-sm text-muted sm:grid-cols-2">
            <div className="rounded-md border border-lines/60 bg-overlay/60 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Humanismo crítico</p>
              <p className="text-foreground">Observación institucional y tecnológica.</p>
            </div>
            <div className="rounded-md border border-lines/60 bg-overlay/60 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Praxeología</p>
              <p className="text-foreground">Disciplina de acción bajo incertidumbre radical.</p>
            </div>
            <div className="rounded-md border border-lines/60 bg-overlay/60 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Tecnología</p>
              <p className="text-foreground">Infraestructuras estratégicas y captura regulatoria.</p>
            </div>
            <div className="rounded-md border border-lines/60 bg-overlay/60 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Liquidez</p>
              <p className="text-foreground">Sensores macro, riesgo y ventanas tácticas.</p>
            </div>
          </div>
        </div>
      </Panel>

      <div className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <Panel
            key={item.title}
            className="group flex h-full flex-col justify-between border-lines/80 bg-surface/70 p-6 transition hover:border-accent/70"
          >
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.16em] text-muted">Módulo</p>
              <p className="font-display text-xl text-foreground">{item.title}</p>
              <p className="text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
              Explorar
              <span aria-hidden>→</span>
            </span>
            <Link href={item.href} className="absolute inset-0" aria-label={`Abrir ${item.title}`} />
          </Panel>
        ))}
      </div>
    </div>
  );
}
