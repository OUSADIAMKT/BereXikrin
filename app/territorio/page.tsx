import { EmConstrucao } from "@/components/EmConstrucao";
import { Foto } from "@/components/Foto";
import { PaginaHero } from "@/components/PaginaHero";
import { metaPagina } from "@/lib/meta";

export const metadata = metaPagina({
  titulo: "Território",
  descricao:
    "A Terra Indígena Trincheira Bacajá: 1.650.939 hectares homologados na bacia do Xingu, mais de 98% preservados, as pressões de fora e as aldeias da Associação.",
  caminho: "/territorio/",
  foto: "/img/capas/rio-pedras.webp",
});

const DADOS = [
  { valor: "1,65 mi", rotulo: "de hectares (1.650.939 ha) de Terra Indígena homologada, de usufruto exclusivo do povo Xikrin" },
  { valor: "98%", rotulo: "ou mais do território preservado" },
  { valor: "53", rotulo: "aldeias na TI, representadas por seis associações Xikrin" },
  { valor: "16", rotulo: "aldeias da Berê, em Anapu e Senador José Porfírio" },
];

export default function Territorio() {
  return (
    <>
      <PaginaHero
        rotulo="Território"
        titulo={<>TI <span className="destaque">Trincheira Bacajá</span></>}
        lead="Terra Indígena na bacia do Xingu, no Pará, cortada pelo Rio Bacajá. A maioria das aldeias fica às suas margens."
        foto="/img/capas/rio-pedras.webp"
        trilha={[{ rotulo: "Território", href: "/territorio/" }]}
      />

      <section className="escuro secao" aria-label="O território em números">
        <div className="container numeros">
          {DADOS.map((d) => (
            <div className="numero" key={d.rotulo}>
              <strong>{d.valor}</strong>
              <span>{d.rotulo}</span>
            </div>
          ))}
          <p className="fonte-dado" style={{ gridColumn: "1 / -1" }}>
            Fontes: Anexo 1 do projeto Restaura Amazônia e Panorama da Associação (2026).
          </p>
        </div>
      </section>

      <section className="secao" aria-labelledby="t-pressoes">
        <div className="container duas-colunas">
          <div className="prosa">
            <span className="eyebrow">A pressão vem de fora</span>
            <h2 id="t-pressoes" className="titulo-md">Floresta de pé, bordas ameaçadas</h2>
            <p>
              O interior da Terra Indígena está preservado. A pressão vem do entorno: desmatamento, invasões de madeireiros
              no passado, garimpo ilegal, grilagem nas bordas e os efeitos de grandes obras.
            </p>
            <p>
              A Usina de Belo Monte mudou o regime do rio. Os Xikrin dizem que “o rio Xingu segura o rio Bacajá”: quando o
              Xingu enche, o Bacajá fica cheio; quando seca, o Bacajá baixa junto. No trecho de vazão reduzida do Xingu,
              as cheias caíram de 80 para 9 dias por ano, e as secas extremas passaram de 45 para 104 dias (Revista Pesquisa
              FAPESP).
            </p>
            <p>
              Da floresta vêm a castanha-do-pará, o babaçu, o cacau, o açaí, o cumaru, a andiroba, a copaíba e muitos
              outros recursos que sustentam as famílias.
            </p>
          </div>
          <Foto
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

      <section className="secao" style={{ paddingTop: 0 }} aria-labelledby="t-mapa">
        <div className="container">
          <span className="eyebrow">Mapa</span>
          <h2 id="t-mapa" className="titulo-md" style={{ margin: "1rem 0 1.5rem" }}>
            A Terra Indígena e as aldeias
          </h2>
          <figure className="galeria">
            <a href="/img/territorio/mapa-ti.webp" target="_blank" rel="noopener">
              <Foto
                src="/img/territorio/mapa-ti.webp"
                alt="Mapa da Terra Indígena Trincheira Bacajá com os limites da TI, os rios, as estradas e a localização das aldeias, destacando aldeias da Associação"
                width={1800}
                height={1450}
                loading="lazy"
                sizes="(max-width: 1240px) 100vw, 1200px"
                style={{ aspectRatio: "auto", background: "var(--branco)" }}
              />
            </a>
            <figcaption>
              Mapa de 2021. Elaboração: Pedro Rafael Pojo S. Clique para ampliar.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }} aria-labelledby="t-aldeias">
        <div className="container" style={{ display: "grid", gap: "1.5rem" }}>
          <div>
            <span className="eyebrow">Aldeias</span>
            <h2 id="t-aldeias" className="titulo-md" style={{ marginTop: "1rem" }}>
              16 aldeias, uma rede
            </h2>
          </div>
          <EmConstrucao>Em breve, cada uma das 16 aldeias da Associação terá aqui seu nome, localização e fotos.</EmConstrucao>
        </div>
      </section>
    </>
  );
}
