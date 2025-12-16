import { notFound } from "next/navigation";
import { researchPosts } from "@/content/researchPosts";

export default function ResearchDetail({ params }: { params: { slug: string } }) {
  const post = researchPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-black/60">Research</p>
        <h1 className="font-display text-4xl text-charcoal">{post?.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-xs text-black/60">
          <span className="rounded-full bg-mist px-3 py-1 uppercase tracking-[0.2em] text-charcoal">
            {new Date(post?.date || "").toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          {post?.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-black/10 px-3 py-1 text-charcoal">
              {tag}
            </span>
          ))}
        </div>
        <p className="max-w-2xl text-black/70">{post?.summary}</p>
      </header>

      <section className="grid gap-6 rounded-3xl border border-black/5 bg-white/80 p-8 shadow-sm sm:grid-cols-3">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-black/60">Tesis</p>
          <h2 className="font-display text-xl text-charcoal">Hipótesis central</h2>
          <p className="text-sm text-black/70">
            Resume la tensión principal que se quiere observar. ¿Qué está cambiando? ¿Qué evidencias iniciales existen?
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-black/60">Señales</p>
          <h2 className="font-display text-xl text-charcoal">Indicadores y fuentes</h2>
          <p className="text-sm text-black/70">
            Lista datos, informes, discursos o políticas que debes seguir. Prioriza las que vinculen tecnología, Estado y
            liquidez.
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-black/60">Disciplina</p>
          <h2 className="font-display text-xl text-charcoal">Próximos pasos</h2>
          <p className="text-sm text-black/70">
            Define qué decisiones o modelos revisarás a la luz de las señales. Incluye criterios de entrada, salida o
            cobertura.
          </p>
        </div>
      </section>

      <section className="space-y-3 rounded-2xl border border-dashed border-charcoal/15 bg-white/70 p-8">
        <h3 className="font-display text-2xl text-charcoal">Plantilla rápida</h3>
        <ul className="list-disc space-y-2 pl-6 text-sm text-black/80">
          <li><strong>Contexto:</strong> línea temporal breve de los eventos relevantes.</li>
          <li><strong>Actores:</strong> quiénes moldean el tablero (Estado, capital, tecnólogos).</li>
          <li><strong>Instituciones:</strong> marcos legales, infraestructuras o monopolios de información.</li>
          <li><strong>Riesgos:</strong> qué puede romperse y cómo afecta a la libertad humana.</li>
          <li><strong>Oportunidades:</strong> asimetrías de información o capacidad de captura regulatoria.</li>
          <li><strong>Disciplina:</strong> cómo validar o descartar la hipótesis en los próximos 90 días.</li>
        </ul>
      </section>
    </article>
  );
}
