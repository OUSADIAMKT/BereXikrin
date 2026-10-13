import Link from "next/link";
import type { Projeto } from "@/lib/site";

const COR_TAG: Record<Projeto["tema"], string> = {
  Território: "tag",
  Alimentação: "tag",
  Cultura: "tag tag--urucum",
  "Belo Monte": "tag tag--jenipapo",
  "Rio Bacajá": "tag tag--arara",
  Comunicação: "tag tag--arara",
};

export function CardProjeto({ projeto, titulo = "h3" }: { projeto: Projeto; titulo?: "h2" | "h3" }) {
  const Titulo = titulo;
  return (
    <article className="card">
      <img className="card__img" src={projeto.foto} alt={projeto.alt} loading="lazy" width={1600} height={1200} />
      <div className="card__corpo">
        <span>
          <span className={COR_TAG[projeto.tema]}>{projeto.tema}</span>
        </span>
        <Titulo className="titulo-sm">{projeto.nome}</Titulo>
        <p>{projeto.resumo}</p>
        <Link className="card__link" href={`/projetos/${projeto.slug}/`}>
          Conheça o projeto<span className="visualmente-oculto"> {projeto.nome}</span>
        </Link>
      </div>
    </article>
  );
}
