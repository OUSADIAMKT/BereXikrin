import type { Metadata } from "next";
import Link from "next/link";
import { CardProjeto } from "@/components/CardProjeto";
import { PaginaHero } from "@/components/PaginaHero";
import { PROJETOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Restauração da floresta, cultura, monitoramento do Rio Bacajá e o acompanhamento de Belo Monte: os projetos da Associação Berê Xikrin.",
};

export default function Projetos() {
  const beloMonte = PROJETOS.find((p) => p.slug === "belo-monte")!;
  const outros = PROJETOS.filter((p) => p.slug !== "belo-monte");
  const grupos = (["Em andamento", "Concluído"] as const).map((status) => ({
    status,
    itens: outros.filter((p) => p.status === status),
  }));

  return (
    <>
      <PaginaHero
        rotulo="Projetos"
        titulo={<>O que <span className="destaque">fazemos</span></>}
        lead="Projetos propostos e conduzidos pela Associação, com parceiros, para proteger o território e fortalecer a vida nas aldeias."
        foto="/img/aldeia-entardecer.webp"
        trilha={[{ rotulo: "Projetos", href: "/projetos/" }]}
      />

      <section className="secao" aria-labelledby="t-belo-monte">
        <div className="container duas-colunas">
          <div className="prosa">
            <span className="eyebrow">Contexto</span>
            <h2 id="t-belo-monte" className="titulo-md">{beloMonte.nome}</h2>
            <p>{beloMonte.resumo}</p>
            <p>
              <Link className="btn btn--marca" href="/projetos/belo-monte/">
                Entenda Belo Monte
              </Link>
            </p>
          </div>
          <img
            className="foto-arredondada"
            style={{ aspectRatio: "4 / 3" }}
            src={beloMonte.foto}
            alt={beloMonte.alt}
            width={1600}
            height={1200}
            loading="lazy"
          />
        </div>
      </section>

      {grupos.map((g) => (
        <section key={g.status} className="secao" style={{ paddingTop: 0 }} aria-labelledby={`t-${g.status}`}>
          <div className="container">
            <span className="eyebrow">{g.status === "Concluído" ? "Concluídos" : g.status}</span>
            <h2 id={`t-${g.status}`} className="visualmente-oculto">
              Projetos {g.status.toLowerCase()}
            </h2>
            <div className="grade" style={{ marginTop: "1.5rem" }}>
              {g.itens.map((p) => (
                <CardProjeto key={p.slug} projeto={p} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
