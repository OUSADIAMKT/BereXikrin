import type { Metadata } from "next";
import { SITE } from "@/lib/site";

type Pagina = {
  titulo: string;
  descricao: string;
  /** Caminho com barra final, ex.: "/sobre/". */
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

/** Metadados completos de uma página: título, descrição, canônico e compartilhamento. */
export function metaPagina({ titulo, descricao, caminho, foto }: Pagina): Metadata {
  const t = limpo(titulo);
  const d = limpo(descricao);
  const imagem = { url: imagemOg(foto), width: 1200, height: 630, alt: `${t} · ${SITE.nome}` };
  return {
    title: t,
    description: d,
    alternates: { canonical: caminho },
    openGraph: { title: `${t} · ${SITE.nome}`, description: d, url: caminho, images: [imagem], type: "website", locale: "pt_BR", siteName: SITE.nome },
    twitter: { card: "summary_large_image", title: `${t} · ${SITE.nome}`, description: d, images: [imagem.url] },
  };
}
