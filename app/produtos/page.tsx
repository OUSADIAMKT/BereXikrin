import type { Metadata } from "next";
import { PaginaHero } from "@/components/PaginaHero";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Produtos da sociobiodiversidade da TI Trincheira-Bacajá e o artesanato das menire. Loja em breve.",
};

const RECURSOS =
  "cipó timbó, inajá, copaíba, jenipapo, tuturubá, pau-preto, urucum, marfim, bambu, castanha, açaí, cacau do mato, ingá, banana, palmito, cipó titica, coco de babaçu, jatobá, cajá, mel, cipó kupá, pequi, cumaru, sapucaia, embaúba, tatajuba, frutão, bacaba, andiroba".split(", ");

export default function Produtos() {
  return (
    <>
      <PaginaHero
        rotulo="Produtos"
        titulo={<>Da floresta, <span className="destaque">com cuidado</span></>}
        lead="O que a TI Trincheira-Bacajá produz, colhido e feito pelas próprias comunidades."
        foto="/img/aldeia-entardecer.webp"
        trilha={[{ rotulo: "Produtos", href: "/produtos/" }]}
      />
      <section className="secao">
        <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
          <div className="prosa">
            <span className="eyebrow">Sociobiodiversidade</span>
            <h2 className="titulo-md">O que a floresta oferece</h2>
            <p>
              Nossos artesãos e conhecedores coletam os recursos da floresta para a alimentação, a medicina tradicional,
              a música, a pintura do corpo e a produção de artefatos. A Berê busca parcerias para gerar renda de forma
              sustentável com essa riqueza e divulgar a cultura Xikrin.
            </p>
          </div>
          <ul className="lista-grafismo" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 180px), 1fr))" }}>
            {RECURSOS.map((r) => (
              <li key={r}>{r.charAt(0).toUpperCase() + r.slice(1)}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="escuro secao" aria-labelledby="t-loja">
        <div className="container prosa">
          <span className="eyebrow">Loja</span>
          <h2 id="t-loja" className="titulo-md">Em breve</h2>
          <p className="lead">
            Castanha, babaçu, cacau e o artesanato das menire vão poder ser comprados aqui, com a renda indo direto para
            as aldeias.
          </p>
        </div>
      </section>
    </>
  );
}
