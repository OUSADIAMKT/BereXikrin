/**
 * Equivalência de endereços entre português (raiz) e inglês (/en/).
 * Usado pelo seletor PT · EN, pelo hreflang e pelo sitemap.
 */
export type Idioma = "pt" | "en";

/** Projetos: mesmo projeto, slug em cada idioma. */
export const SLUGS_PROJETOS: Record<string, string> = {
  "belo-monte": "belo-monte",
  "restaura-amazonia": "restaura-amazonia",
  "casa-do-guerreiro": "warriors-house",
  "rituais-tradicionais": "traditional-rituals",
  "monitoramento-do-pescado": "fish-monitoring",
  "internet-nas-aldeias": "internet-in-the-villages",
  "mudas-citricas": "citrus-seedlings",
};

export const PARES: [pt: string, en: string][] = [
  ["/", "/en/"],
  ["/sobre/", "/en/about/"],
  ["/cultura/", "/en/culture/"],
  ["/territorio/", "/en/territory/"],
  ["/projetos/", "/en/projects/"],
  ["/produtos/", "/en/products/"],
  ["/conteudos/", "/en/news/"],
  ["/transparencia/", "/en/transparency/"],
  ["/apoie/", "/en/support/"],
  ["/contato/", "/en/contact/"],
  ["/privacidade/", "/en/privacy/"],
  ["/glossario/", "/en/glossary/"],
  ["/manual-da-marca/", "/en/brand-guidelines/"],
  ...Object.entries(SLUGS_PROJETOS).map(([pt, en]) => [`/projetos/${pt}/`, `/en/projects/${en}/`] as [string, string]),
];

/** Endereço equivalente no outro idioma (ou a página inicial dele, se não houver par). */
export function equivalente(caminho: string, para: Idioma): string {
  const c = caminho.endsWith("/") ? caminho : `${caminho}/`;
  const par = PARES.find(([pt, en]) => pt === c || en === c);
  if (par) return para === "pt" ? par[0] : par[1];
  return para === "pt" ? "/" : "/en/";
}

export const idiomaDe = (caminho: string): Idioma => (caminho.startsWith("/en") ? "en" : "pt");
