import type { Metadata } from "next";
import { Galeria } from "@/components/Galeria";
import { PaginaHero } from "@/components/PaginaHero";
import { CREDITO_ACERVO, type Foto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Produtos da sociobiodiversidade da TI Trincheira-Bacajá e o artesanato das menire. Loja em breve.",
};

const RECURSOS =
  "cipó timbó, inajá, copaíba, jenipapo, tuturubá, pau-preto, urucum, marfim, bambu, castanha, açaí, cacau do mato, ingá, banana, palmito, cipó titica, coco de babaçu, jatobá, cajá, mel, cipó kupá, pequi, cumaru, sapucaia, embaúba, tatajuba, frutão, bacaba, andiroba".split(", ");

const FOTOS_FLORESTA: Foto[] = [
  { src: "/img/produtos/cacau-fruto.webp", alt: "Frutos de cacau no pé, na mata" },
  { src: "/img/produtos/cacau-muda.webp", alt: "Agricultor Xikrin cuida de um pé de cacau" },
  { src: "/img/produtos/sementes.webp", alt: "Garrafas com sementes coletadas na floresta" },
  { src: "/img/produtos/artefatos.webp", alt: "Artefatos de palha trançada e madeira" },
];

const FOTOS_MENIRE: Foto[] = [
  { src: "/img/menire/menire-6.webp", alt: "Três artesãs Xikrin mostram bolsas com grafismos" },
  { src: "/img/menire/menire-4.webp", alt: "Artesã pinta um grafismo à mão sobre o tecido" },
  { src: "/img/menire/menire-2.webp", alt: "Tecido com grafismo de listras pintado em preto" },
  { src: "/img/menire/menire-5.webp", alt: "Bolsa de tecido com grafismo pintado" },
  { src: "/img/menire/menire-7.webp", alt: "Artesãs trabalham em máquinas de costura numa oficina coberta" },
  { src: "/img/menire/menire-8.webp", alt: "Artesã costura uma peça na máquina" },
  { src: "/img/menire/menire-1.webp", alt: "Mulheres reunidas em oficina de artesanato" },
  { src: "/img/menire/menire-9.webp", alt: "Artesã dá acabamento a uma peça de tecido" },
];

export default function Produtos() {
  return (
    <>
      <PaginaHero
        rotulo="Produtos"
        titulo={<>Da floresta, <span className="destaque">com cuidado</span></>}
        lead="O que a TI Trincheira-Bacajá produz, colhido e feito pelas próprias comunidades."
        foto="/img/menire/menire-6.webp"
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
          <Galeria fotos={FOTOS_FLORESTA} credito={CREDITO_ACERVO} />
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }} aria-labelledby="t-menire">
        <div className="container" style={{ display: "grid", gap: "2rem" }}>
          <div className="prosa">
            <span className="eyebrow">Artesanato das menire</span>
            <h2 id="t-menire" className="titulo-md">Feito pelas mulheres Xikrin</h2>
            {/* Texto descritivo aguardando aprovação da Associação (ver docs/revisao).
                Esta frase vem do site antigo (página CI Brasil). */}
            <p>O artesanato das menire faz parte do Restaura Amazônia.</p>
          </div>
          <Galeria fotos={FOTOS_MENIRE} credito={CREDITO_ACERVO} />
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
