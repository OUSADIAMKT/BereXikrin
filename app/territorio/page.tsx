import type { Metadata } from "next";
import { EmConstrucao } from "@/components/EmConstrucao";
import { PaginaHero } from "@/components/PaginaHero";

export const metadata: Metadata = {
  title: "Território",
  description: "A Terra Indígena Trincheira-Bacajá, o Rio Bacajá, a sociobiodiversidade da floresta e as 16 aldeias representadas pela Berê.",
};

export default function Territorio() {
  return (
    <>
      <PaginaHero
        rotulo="Território"
        titulo={<>TI <span className="destaque">Trincheira-Bacajá</span></>}
        lead="Terra cortada pelo Rio Bacajá, que deságua no Xingu, no Pará. É onde ficam as 16 aldeias representadas pela Berê."
        foto="/img/aldeia-e-rio.webp"
        trilha={[{ rotulo: "Território", href: "/territorio/" }]}
      />
      <section className="secao">
        <div className="container duas-colunas">
          <div className="prosa">
            <span className="eyebrow">A floresta</span>
            <h2 className="titulo-md">Rica em vida</h2>
            <p>
              Nosso território é rico em produtos da floresta, como a castanha-do-pará, o coco da palmeira babaçu, o
              jatobá, o açaí, o cumaru, a andiroba, o ingá e a copaíba.
            </p>
            <p>
              Lutamos contra as invasões de fazendeiros, madeireiros e garimpeiros, e acompanhamos de perto os impactos
              da Usina de Belo Monte no Rio Bacajá.
            </p>
          </div>
          <img
            className="foto-arredondada"
            style={{ aspectRatio: "4 / 3" }}
            src="/img/aldeia-circular-por-do-sol.webp"
            alt="Aldeia circular ao entardecer, cercada pela floresta"
            width={1920}
            height={1440}
            loading="lazy"
          />
        </div>
      </section>
      <section className="secao" style={{ paddingTop: 0 }} aria-labelledby="t-aldeias">
        <div className="container" style={{ display: "grid", gap: "1.5rem" }}>
          <div>
            <span className="eyebrow">Aldeias</span>
            <h2 id="t-aldeias" className="titulo-md" style={{ marginTop: "1rem" }}>
              16 aldeias, uma só luta
            </h2>
          </div>
          <EmConstrucao>
            Em breve, cada uma das 16 aldeias terá aqui seu nome, localização e fotos.
          </EmConstrucao>
        </div>
      </section>
    </>
  );
}
