import Link from "next/link";
import { EmConstrucao } from "@/components/EmConstrucao";
import { PaginaHero } from "@/components/PaginaHero";
import { SITE } from "@/lib/site";
import { metaPagina } from "@/lib/meta";

export const metadata = metaPagina({
  titulo: "Apoie a Berê",
  descricao: "Como apoiar a Associação Indígena Berê Xikrin na proteção do território, nos rituais e na renda que vem da floresta.",
  caminho: "/apoie/",
  foto: "/img/menire/menire-4.webp",
});

export default function Apoie() {
  return (
    <>
      <PaginaHero
        rotulo="Apoie"
        titulo={<>Fortaleça quem <span className="destaque">protege a floresta</span></>}
        lead="O apoio fortalece a proteção do território, os rituais e a renda que vem da floresta, com as decisões nas mãos das aldeias."
        foto="/img/menire/menire-4.webp"
        trilha={[{ rotulo: "Apoie", href: "/apoie/" }]}
      />
      <section className="secao">
        <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
          <div className="prosa">
            <span className="eyebrow">Para onde vai o apoio</span>
            <h2 className="titulo-md">O que o apoio fortalece</h2>
            <ul className="lista-grafismo">
              <li>Vigilância e proteção da TI Trincheira-Bacajá</li>
              <li>Rituais e transmissão de saberes entre gerações</li>
              <li>Renda com os produtos da floresta e o artesanato das menire</li>
              <li>Comunicação e mobilidade entre as 16 aldeias</li>
            </ul>
          </div>
          <EmConstrucao>
            A chave PIX, os dados bancários e as formas de apoio internacional serão publicados aqui. Para apoiar agora
            ou propor uma parceria, escreva para <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </EmConstrucao>
          <p>
            <Link className="btn btn--contorno" href="/transparencia/">
              Conheça a transparência da Associação
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
