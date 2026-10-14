import type { ReactNode } from "react";
import { Cabecalho } from "@/components/Cabecalho";
import { Rodape } from "@/components/Rodape";
import { unbounded, vietnam } from "@/lib/fontes";
import { textos } from "@/lib/i18n";
import type { Idioma } from "@/lib/rotas";
import { REDES, SITE } from "@/lib/site";
import { SITE_EN } from "@/lib/site-en";

/** <html> e <body> comuns aos dois layouts raiz (português e inglês). */
export function Moldura({ lang, children }: { lang: Idioma; children: ReactNode }) {
  const t = textos(lang);
  const organizacao = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: lang === "en" ? SITE_EN.nome : SITE.nome,
    alternateName: lang === "en" ? SITE.nome : SITE_EN.nome,
    legalName: SITE.nomeCompleto,
    url: lang === "en" ? `${SITE.url}/en/` : SITE.url,
    email: SITE.email,
    foundingDate: "2018-10-23",
    description: lang === "en" ? SITE_EN.descricao : SITE.descricao,
    address: { "@type": "PostalAddress", addressLocality: "Altamira", addressRegion: "PA", addressCountry: "BR" },
    sameAs: REDES.map((r) => r.url),
  };
  return (
    <html lang={lang === "en" ? "en" : "pt-BR"} className={`${unbounded.variable} ${vietnam.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizacao) }} />
        <a className="pular" href="#conteudo">
          {t.pular}
        </a>
        <Cabecalho lang={lang} />
        <main id="conteudo">{children}</main>
        <Rodape lang={lang} />
      </body>
    </html>
  );
}
