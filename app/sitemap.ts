import type { MetadataRoute } from "next";
import { PARES } from "@/lib/rotas";
import { SITE } from "@/lib/site";

/** Exigido pelo `output: "export"`. Sem `new Date()`: o build precisa ser determinístico. */
export const dynamic = "force-static";

/** Cada página aparece nos dois idiomas, com a indicação da versão equivalente (hreflang). */
export default function sitemap(): MetadataRoute.Sitemap {
  return PARES.flatMap(([pt, en]) => {
    const languages = { "pt-BR": `${SITE.url}${pt}`, en: `${SITE.url}${en}` };
    return [
      { url: `${SITE.url}${pt}`, alternates: { languages } },
      { url: `${SITE.url}${en}`, alternates: { languages } },
    ];
  });
}
