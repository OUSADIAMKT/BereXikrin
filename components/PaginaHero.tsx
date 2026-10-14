import Link from "next/link";
import type { ReactNode } from "react";
import { Foto } from "@/components/Foto";
import { textos } from "@/lib/i18n";
import type { Idioma } from "@/lib/rotas";

type Props = {
  rotulo: string;
  titulo: ReactNode;
  lead?: ReactNode;
  foto?: string;
  trilha?: { rotulo: string; href: string }[];
  lang?: Idioma;
};

/** Abertura das páginas internas: foto escurecida, trilha e título. */
export function PaginaHero({
  rotulo,
  titulo,
  lead,
  foto = "/img/aldeia-circular-por-do-sol.webp",
  trilha = [],
  lang = "pt",
}: Props) {
  const t = textos(lang);
  return (
    <section className="pagina-hero sobre-foto">
      <Foto sizes="100vw" src={foto} alt="" />
      <div className="container">
        <nav className="trilha" aria-label={t.voceEsta}>
          <Link href={lang === "en" ? "/en/" : "/"}>{t.inicio}</Link>
          {trilha.map((item) => (
            <span key={item.href}>
              {" / "}
              <Link href={item.href}>{item.rotulo}</Link>
            </span>
          ))}
        </nav>
        <span className="eyebrow">{rotulo}</span>
        <h1 className="titulo-lg">{titulo}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}
