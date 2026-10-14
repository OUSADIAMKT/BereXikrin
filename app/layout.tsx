import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Unbounded } from "next/font/google";
import "./globals.css";
import { Cabecalho } from "@/components/Cabecalho";
import { Rodape } from "@/components/Rodape";
import { REDES, SITE } from "@/lib/site";

/*
 * O subconjunto "vietnamese" não é capricho: é ele que traz o "ẽ" de
 * Mẽbêngôkre. Sem ele o navegador troca a letra por outra fonte no meio do nome.
 */
const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
});

const vietnam = Be_Vietnam_Pro({
  variable: "--font-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.nome, template: `%s | ${SITE.nome}` },
  description: SITE.descricao,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE.nome,
    url: SITE.url,
    images: [{ url: "/og/aldeia-circular-por-do-sol.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#15110E" };

const organizacaoJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: SITE.nome,
  url: SITE.url,
  email: SITE.email,
  legalName: SITE.nomeCompleto,
  foundingDate: "2018-10-23",
  description: SITE.descricao,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Altamira",
    addressRegion: "PA",
    addressCountry: "BR",
  },
  sameAs: REDES.map((r) => r.url),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${unbounded.variable} ${vietnam.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizacaoJsonLd) }}
        />
        <a className="pular" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Cabecalho />
        <main id="conteudo">{children}</main>
        <Rodape />
      </body>
    </html>
  );
}
