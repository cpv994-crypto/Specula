import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { researchPosts } from "@/content/research";

export default function ResearchPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        label="Research"
        title="Notas y prototipos"
        description="Entradas tácticas para explorar narrativas, riesgos y oportunidades estratégicas."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {researchPosts.map((post) => (
          <Panel
            key={post.slug}
            className="group flex h-full flex-col justify-between border-lines/80 bg-surface/70 p-6 transition hover:border-accent/70"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-muted">
                <span>{new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "short", day: "numeric" })}</span>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-sm border border-lines/60 bg-overlay/60 px-2 py-1 text-[11px] text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h2 className="font-display text-2xl text-foreground">{post.title}</h2>
              <p className="text-sm leading-relaxed text-muted">{post.summary}</p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
              Leer plantilla
              <span aria-hidden>→</span>
            </span>
            <Link href={`/research/${post.slug}`} className="absolute inset-0" aria-label={`Leer ${post.title}`} />
          </Panel>
        ))}
      </div>
    </div>
  );
}
