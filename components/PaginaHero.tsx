import Link from "next/link";
import type { ReactNode } from "react";
import { Divisor } from "@/components/Divisor";

type Props = {
  rotulo: string;
  titulo: ReactNode;
  lead?: ReactNode;
  foto?: string;
  trilha?: { rotulo: string; href: string }[];
};

/** Abertura das páginas internas: foto escurecida, trilha, título e o divisor. */
export function PaginaHero({
  rotulo,
  titulo,
  lead,
  foto = "/img/aldeia-circular-por-do-sol.webp",
  trilha = [],
}: Props) {
  return (
    <>
      <section className="pagina-hero sobre-foto">
        <img src={foto} alt="" />
        <div className="container">
          <nav className="trilha" aria-label="Você está em">
            <Link href="/">Início</Link>
            {trilha.map((t) => (
              <span key={t.href}>
                {" / "}
                <Link href={t.href}>{t.rotulo}</Link>
              </span>
            ))}
          </nav>
          <span className="eyebrow">{rotulo}</span>
          <h1 className="titulo-lg">{titulo}</h1>
          {lead && <p className="lead">{lead}</p>}
        </div>
      </section>
      <Divisor />
    </>
  );
}
