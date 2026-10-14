import type { Metadata } from "next";
import { equivalente, idiomaDe } from "@/lib/rotas";
import { SITE } from "@/lib/site";
import { SITE_EN } from "@/lib/site-en";

type Pagina = {
  titulo: string;
  descricao: string;
  /** Caminho com barra final, ex.: "/sobre/" ou "/en/about/". O idioma sai daqui. */
  caminho: string;
  /** Foto da página em /img/...webp; vira a imagem de compartilhamento em /og/. */
  foto?: string;
};

/** Remove caracteres invisíveis (como o ⁠ de "PBA-CI") de títulos e descrições. */
const limpo = (t: string) => t.replace(/[⁠​]/g, "");

/** Converte /img/capas/ngab.webp em /og/capas-ngab.jpg (gerado por scripts/gera-og.cjs). */
export function imagemOg(foto = "/img/aldeia-circular-por-do-sol.webp") {
  return foto.replace(/^\/img\//, "/og/").replace(/\//g, "-").replace(/^-og-/, "/og/").replace(/\.webp$/, ".jpg");
}

/** Metadados completos de uma página: título, descrição, canônico, hreflang e compartilhamento. */
export function metaPagina({ titulo, descricao, caminho, foto }: Pagina): Metadata {
  const lang = idiomaDe(caminho);
  const nome = lang === "en" ? SITE_EN.nome : SITE.nome;
  const t = limpo(titulo);
  const d = limpo(descricao);
  const pt = lang === "pt" ? caminho : equivalente(caminho, "pt");
  const en = lang === "en" ? caminho : equivalente(caminho, "en");
  const imagem = { url: imagemOg(foto), width: 1200, height: 630, alt: `${t} · ${nome}` };
  return {
    title: t,
    description: d,
    alternates: { canonical: caminho, languages: { "pt-BR": pt, en, "x-default": pt } },
    openGraph: {
      title: `${t} · ${nome}`,
      description: d,
      url: caminho,
      images: [imagem],
      type: "website",
      locale: lang === "en" ? "en_US" : "pt_BR",
      siteName: nome,
    },
    twitter: { card: "summary_large_image", title: `${t} · ${nome}`, description: d, images: [imagem.url] },
  };
}
