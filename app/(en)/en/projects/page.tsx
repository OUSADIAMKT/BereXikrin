import Link from "next/link";
import { CardProjeto } from "@/components/CardProjeto";
import { Foto } from "@/components/Foto";
import { PaginaHero } from "@/components/PaginaHero";
import { metaPagina } from "@/lib/meta";
import { PROJETOS } from "@/lib/site";
import { projetosEn } from "@/lib/site-en";

export const metadata = metaPagina({
  titulo: "Projects",
  descricao:
    "Restaura Amazônia, Belo Monte, the Warriors’ House, rituals, Bacajá River monitoring and more: the Berê Xikrin Association’s projects.",
  caminho: "/en/projects/",
  foto: "/img/capas/aldeia-aerea.webp",
});

export default function ProjectsEn() {
  const projetos = projetosEn(PROJETOS);
  const beloMonte = projetos.find((p) => p.slug === "belo-monte")!;
  const outros = projetos.filter((p) => p.slug !== "belo-monte");
  const grupos = [
    { status: "Em andamento" as const, rotulo: "Ongoing" },
    { status: "Concluído" as const, rotulo: "Completed" },
  ].map((g) => ({ ...g, itens: outros.filter((p) => p.status === g.status) }));

  return (
    <>
      <PaginaHero
        lang="en"
        rotulo="Projects"
        titulo={<>What we <span className="destaque">do</span></>}
        lead="Projects proposed and led by the Association, with partners, to protect the territory, strengthen culture and generate income from the forest."
        foto="/img/capas/aldeia-aerea.webp"
        trilha={[{ rotulo: "Projects", href: "/en/projects/" }]}
      />

      <section className="secao" aria-labelledby="t-belo-monte">
        <div className="container duas-colunas">
          <div className="prosa">
            <span className="eyebrow">Context</span>
            <h2 id="t-belo-monte" className="titulo-md">{beloMonte.nome}</h2>
            <p>{beloMonte.resumo}</p>
            <p>
              <Link className="btn btn--marca" href="/en/projects/belo-monte/">
                Understand Belo Monte
              </Link>
            </p>
          </div>
          <Foto
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
        <section key={g.status} className="secao" style={{ paddingTop: 0 }} aria-labelledby={`t-${g.rotulo}`}>
          <div className="container">
            <span className="eyebrow">{g.rotulo}</span>
            <h2 id={`t-${g.rotulo}`} className="visualmente-oculto">
              {g.rotulo} projects
            </h2>
            <div className="grade" style={{ marginTop: "1.5rem" }}>
              {g.itens.map((p) => (
                <CardProjeto key={p.slug} projeto={p} lang="en" />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
