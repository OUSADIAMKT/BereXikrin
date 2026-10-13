import type { MetadataRoute } from "next";
import { PROJETOS, SITE } from "@/lib/site";

/** Exigido pelo `output: "export"`. Sem `new Date()`: o build precisa ser determinístico. */
export const dynamic = "force-static";

const ROTAS = ["/", "/sobre/", "/cultura/", "/territorio/", "/projetos/", "/produtos/", "/conteudos/", "/transparencia/", "/apoie/", "/contato/", "/privacidade/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...ROTAS, ...PROJETOS.map((p) => `/projetos/${p.slug}/`)].map((r) => ({ url: `${SITE.url}${r}` }));
}
