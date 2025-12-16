import Link from "next/link";
import { researchPosts } from "@/content/researchPosts";

export default function ResearchPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-black/60">Research</p>
        <h1 className="font-display text-4xl text-charcoal">Notas y prototipos</h1>
        <p className="max-w-2xl text-black/70">
          Una colección de observaciones, hipótesis y estructuras de análisis. Incluye una plantilla de post para documentar
          nuevas líneas de investigación socio-económica.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {researchPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/research/${post.slug}`}
            className="group flex h-full flex-col justify-between rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-black/50">
                <span>{new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "short", day: "numeric" })}</span>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-mist px-3 py-1 text-[11px] text-charcoal">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h2 className="font-display text-2xl text-charcoal">{post.title}</h2>
              <p className="text-sm text-black/70">{post.summary}</p>
            </div>
            <span className="mt-6 text-sm font-semibold text-charcoal group-hover:underline">Leer plantilla →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
