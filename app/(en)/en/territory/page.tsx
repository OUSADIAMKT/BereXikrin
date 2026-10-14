import { EmConstrucao } from "@/components/EmConstrucao";
import { Foto } from "@/components/Foto";
import { PaginaHero } from "@/components/PaginaHero";
import { metaPagina } from "@/lib/meta";

export const metadata = metaPagina({
  titulo: "Territory",
  descricao:
    "The Trincheira Bacajá Indigenous Territory: 1,650,939 recognized hectares in the Xingu basin, more than 98% preserved, outside pressures and the Association’s villages.",
  caminho: "/en/territory/",
  foto: "/img/capas/rio-pedras.webp",
});

const DADOS = [
  { valor: "1.65M", rotulo: "hectares (1,650,939 ha) of officially recognized Indigenous Territory, for the exclusive use of the Xikrin people" },
  { valor: "98%", rotulo: "or more of the territory preserved" },
  { valor: "53", rotulo: "villages in the Territory, represented by six Xikrin associations" },
  { valor: "16", rotulo: "Berê villages, in Anapu and Senador José Porfírio" },
];

export default function TerritoryEn() {
  return (
    <>
      <PaginaHero
        lang="en"
        rotulo="Territory"
        titulo={<>Trincheira Bacajá <span className="destaque">Indigenous Territory</span></>}
        lead="An Indigenous Territory in the Xingu basin, in Pará, Brazil, crossed by the Bacajá River. Most villages lie along its banks."
        foto="/img/capas/rio-pedras.webp"
        trilha={[{ rotulo: "Territory", href: "/en/territory/" }]}
      />

      <section className="escuro secao" aria-label="The territory in numbers">
        <div className="container numeros">
          {DADOS.map((d) => (
            <div className="numero" key={d.rotulo}>
              <strong>{d.valor}</strong>
              <span>{d.rotulo}</span>
            </div>
          ))}
          <p className="fonte-dado" style={{ gridColumn: "1 / -1" }}>
            Sources: Annex 1 of the Restaura Amazônia project and the Association’s Panorama (2026).
          </p>
        </div>
      </section>

      <section className="secao" aria-labelledby="t-pressoes">
        <div className="container duas-colunas">
          <div className="prosa">
            <span className="eyebrow">Pressure comes from outside</span>
            <h2 id="t-pressoes" className="titulo-md">Standing forest, threatened edges</h2>
            <p>
              The interior of the Indigenous Territory is preserved. The pressure comes from its surroundings: deforestation,
              past invasions by loggers, illegal gold mining, land grabbing at the borders and the effects of large
              infrastructure projects.
            </p>
            <p>
              The Belo Monte dam changed the river’s flow. The Xikrin say that “the Xingu River holds the Bacajá River”: when
              the Xingu rises, the Bacajá is full; when it falls, the Bacajá drops with it. In the reduced-flow stretch of the
              Xingu, floods fell from 80 to 9 days a year, and extreme droughts rose from 45 to 104 days (Revista Pesquisa
              FAPESP).
            </p>
            <p>
              The forest provides Brazil nuts, babassu, cacao, açaí, cumaru, andiroba, copaíba and many other resources that
              sustain the families.
            </p>
          </div>
          <Foto
            className="foto-arredondada"
            style={{ aspectRatio: "4 / 3" }}
            src="/img/aldeia-circular-por-do-sol.webp"
            alt="Circular village at sunset, surrounded by forest"
            width={1920}
            height={1440}
            loading="lazy"
          />
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }} aria-labelledby="t-mapa">
        <div className="container">
          <span className="eyebrow">Map</span>
          <h2 id="t-mapa" className="titulo-md" style={{ margin: "1rem 0 1.5rem" }}>
            The Indigenous Territory and its villages
          </h2>
          <figure className="galeria">
            <a href="/img/territorio/mapa-ti.webp" target="_blank" rel="noopener">
              <Foto
                src="/img/territorio/mapa-ti.webp"
                alt="Map of the Trincheira Bacajá Indigenous Territory showing its boundaries, rivers, roads and village locations, highlighting the Association’s villages"
                width={1800}
                height={1450}
                loading="lazy"
                sizes="(max-width: 1240px) 100vw, 1200px"
                style={{ aspectRatio: "auto", background: "var(--branco)" }}
              />
            </a>
            <figcaption>Map from 2021, by Pedro Rafael Pojo S. Labels in Portuguese. Click to enlarge.</figcaption>
          </figure>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }} aria-labelledby="t-aldeias">
        <div className="container" style={{ display: "grid", gap: "1.5rem" }}>
          <div>
            <span className="eyebrow">Villages</span>
            <h2 id="t-aldeias" className="titulo-md" style={{ marginTop: "1rem" }}>
              16 villages, one network
            </h2>
          </div>
          <EmConstrucao lang="en">Soon, each of the Association’s 16 villages will be listed here with its name, location and photos.</EmConstrucao>
        </div>
      </section>
    </>
  );
}
