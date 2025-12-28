import { notFound } from "next/navigation";
import { Panel } from "@/components/ui/Panel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { researchPosts } from "@/content/research";

interface Props {
  params: {
    slug: string;
  };
}

export default function ResearchPostPage({ params }: Props) {
  const post = researchPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <SectionHeader label="Research" title={post?.title ?? ""} description={post?.summary} />

      <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted">
        <span className="rounded-sm border border-lines/60 bg-overlay/60 px-3 py-1">{post?.category}</span>
        <span className="rounded-sm border border-lines/60 bg-overlay/60 px-3 py-1 text-muted">
          {new Date(post?.date ?? "").toLocaleDateString("es-ES", { year: "numeric", month: "short", day: "numeric" })}
        </span>
        {post?.tags.map((tag) => (
          <span key={tag} className="rounded-sm border border-lines/60 bg-overlay/60 px-3 py-1 text-muted">
            {tag}
          </span>
        ))}
      </div>

      <Panel className="grid gap-6 border-lines/80 bg-surface/70 p-8 sm:grid-cols-3">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Tesis</p>
          <h2 className="font-display text-xl text-foreground">Hipótesis central</h2>
          <p className="text-sm leading-relaxed text-muted">{post?.thesis}</p>
        </div>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Señales</p>
          <h2 className="font-display text-xl text-foreground">Indicadores y fuentes</h2>
          <p className="text-sm leading-relaxed text-muted">{post?.signals}</p>
        </div>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Disciplina</p>
          <h2 className="font-display text-xl text-foreground">Próximos pasos</h2>
          <p className="text-sm leading-relaxed text-muted">{post?.discipline}</p>
        </div>
      </Panel>

      <Panel className="space-y-3 border-dashed border-lines/60 bg-overlay/60 p-8">
        <h3 className="font-display text-2xl text-foreground">Plantilla rápida</h3>
        <ul className="list-disc space-y-2 pl-6 text-sm text-muted">
          <li>¿Cuál es la anomalía detectada y quién la está explotando?</li>
          <li>¿Qué instituciones modulan el espacio de acción?</li>
          <li>¿Cómo cambia la narrativa dominante y qué señales anticipan el giro?</li>
          <li>¿Dónde está la liquidez y qué ventanas tácticas se abren?</li>
        </ul>
      </Panel>
    </div>
  );
}
