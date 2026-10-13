import type { Metadata } from "next";
import Link from "next/link";
import { EmConstrucao } from "@/components/EmConstrucao";
import { PaginaHero } from "@/components/PaginaHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apoie",
  description: "Apoie a Associação Indígena Berê Xikrin na proteção do território, da cultura e da renda das famílias Xikrin.",
};

export default function Apoie() {
  return (
    <>
      <PaginaHero
        rotulo="Apoie"
        titulo={<>Fortaleça quem <span className="destaque">protege a floresta</span></>}
        lead="Sua doação apoia a proteção do território, os rituais e a renda das famílias Xikrin."
        trilha={[{ rotulo: "Apoie", href: "/apoie/" }]}
      />
      <section className="secao">
        <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
          <div className="prosa">
            <span className="eyebrow">Como sua doação ajuda</span>
            <h2 className="titulo-md">Recurso que chega às aldeias</h2>
            <ul className="lista-grafismo">
              <li>Vigilância e proteção da TI Trincheira-Bacajá</li>
              <li>Rituais e transmissão de saberes entre gerações</li>
              <li>Renda com os produtos da floresta e o artesanato das menire</li>
              <li>Comunicação entre as 16 aldeias</li>
            </ul>
          </div>
          <EmConstrucao>
            A chave PIX e os dados bancários da Associação serão publicados aqui. Para apoiar agora ou propor uma
            parceria, escreva para <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </EmConstrucao>
          <p>
            <Link className="btn btn--contorno" href="/transparencia/">
              Veja nossa prestação de contas
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
