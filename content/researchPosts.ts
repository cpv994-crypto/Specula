export type ResearchPost = {
  title: string;
  slug: string;
  date: string;
  summary: string;
  tags: string[];
};

export const researchPosts: ResearchPost[] = [
  {
    title: "Plantilla: vigías tecnológicos",
    slug: "plantilla-vigias-tecnologicos",
    date: "2024-10-01",
    summary:
      "Ejemplo de estructura de post para documentar hipótesis sobre disrupción tecnológica y sus implicaciones institucionales.",
    tags: ["Plantilla", "Tecnología", "Sociedad"],
  },
  {
    title: "Notas sobre liquidez y riesgo sistémico",
    slug: "notas-liquidez-riesgo",
    date: "2024-09-12",
    summary: "Borrador para seguir la relación entre liquidez global, volatilidad y valoraciones en activos estratégicos.",
    tags: ["Mercados", "Liquidez"],
  },
  {
    title: "Arquitecturas de control algorítmico",
    slug: "arquitecturas-control-algoritmico",
    date: "2024-08-20",
    summary: "Hipótesis sobre el despliegue de infraestructuras de IA en la administración pública y corporativa.",
    tags: ["IA", "Instituciones"],
  },
];
