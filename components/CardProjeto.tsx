import Link from "next/link";
import { Foto } from "@/components/Foto";
import { textos } from "@/lib/i18n";
import type { Idioma } from "@/lib/rotas";
import type { Projeto } from "@/lib/site";
import { temaEn } from "@/lib/site-en";

const COR_TAG: Record<Projeto["tema"], string> = {
  Território: "tag",
  Alimentação: "tag",
  Cultura: "tag tag--urucum",
  "Belo Monte": "tag tag--jenipapo",
  "Rio Bacajá": "tag tag--arara",
  Comunicação: "tag tag--arara",
};

export function CardProjeto({ projeto, titulo = "h3", lang = "pt" }: { projeto: Projeto; titulo?: "h2" | "h3"; lang?: Idioma }) {
  const Titulo = titulo;
  const t = textos(lang);
  const base = lang === "en" ? "/en/projects/" : "/projetos/";
  return (
    <article className="card">
      <Foto sizes="(max-width: 700px) 100vw, 33vw" className="card__img" src={projeto.foto} alt={projeto.alt} loading="lazy" width={1600} height={1200} />
      <div className="card__corpo">
        <span>
          <span className={COR_TAG[projeto.tema]}>{lang === "en" ? temaEn(projeto.tema) : projeto.tema}</span>
        </span>
        <Titulo className="titulo-sm">{projeto.nome}</Titulo>
        <p>{projeto.resumo}</p>
        <Link className="card__link" href={`${base}${projeto.slug}/`}>
          {t.conhecaProjeto}
          <span className="visualmente-oculto"> {projeto.nome}</span>
        </Link>
      </div>
    </article>
  );
}
