import type { Metadata, Viewport } from "next";
import "../../globals.css";
import { Moldura } from "@/components/Moldura";
import { SITE } from "@/lib/site";
import { SITE_EN } from "@/lib/site-en";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE_EN.nome, template: `%s | ${SITE_EN.nome}` },
  description: SITE_EN.descricao,
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    siteName: SITE_EN.nome,
    url: `${SITE.url}/en/`,
    images: [{ url: "/og/aldeia-circular-por-do-sol.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#15110E" };

export default function LayoutIngles({ children }: LayoutProps<"/en">) {
  return <Moldura lang="en">{children}</Moldura>;
}
