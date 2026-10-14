import type { Metadata, Viewport } from "next";
import "../globals.css";
import { Moldura } from "@/components/Moldura";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.nome, template: `%s | ${SITE.nome}` },
  description: SITE.descricao,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    siteName: SITE.nome,
    url: SITE.url,
    images: [{ url: "/og/aldeia-circular-por-do-sol.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#15110E" };

export default function LayoutPortugues({ children }: LayoutProps<"/">) {
  return <Moldura lang="pt">{children}</Moldura>;
}
