import Link from "next/link";
import { EmConstrucao } from "@/components/EmConstrucao";
import { PaginaHero } from "@/components/PaginaHero";
import { metaPagina } from "@/lib/meta";
import { PROJETOS } from "@/lib/site";
import { REGISTRO_EN, SITE_EN, projetosEn } from "@/lib/site-en";

export const metadata = metaPagina({
  titulo: "Transparency",
  descricao: "Institutional data, legal registration, projects, funders and partners of the Berê Xikrin Indigenous Association.",
  caminho: "/en/transparency/",
  foto: "/img/capas/reuniao-ngab.webp",
});

/** Projects with public and private funding mentioned in the Association’s history (Panorama 2026). */
const INCENTIVOS = [
  { ano: "2021", texto: "Kwyrykangô ritual", fonte: "Aldir Blanc Law (federal culture funding)" },
  { ano: "2023", texto: "Xikrin Cultural Festival", fonte: "Rouanet Law (federal culture incentive)" },
  { ano: "2023", texto: "Strengthening the menire handicraft value chain", fonte: "Paulo Gustavo Law (federal culture funding)" },
  { ano: "2024", texto: "Kwyrykangô Xikrin Cultural Festival", fonte: "Rouanet Law" },
  { ano: "2024", texto: "Cine Xikrin", fonte: "Paulo Gustavo Law" },
  { ano: "2025", texto: "Olhos d’Água — Menire Xikrin project", fonte: "Brazilian Ministry of Culture" },
  { ano: "2025", texto: "Leadership training", fonte: "Brazilian Ministry of Justice" },
  { ano: "2026", texto: "Kukràdjà Xikrin sports project", fonte: "Sports Incentive Law" },
  { ano: "2026", texto: "Territorial management and mobility between villages", fonte: "Fundo Semente/IOM" },
  { ano: "2026", texto: "Canteen, origin seal and Network governance", fonte: "FAS (Sustainable Amazon Foundation)" },
  { ano: "2026", texto: "Ecological restoration and value chains", fonte: "CI-Brasil, Amazon Fund/BNDES" },
];

const PARCEIROS_EN = [
  "Brazilian Ministry of Culture", "Brazilian Ministry of Justice", "FUNAI (National Foundation of Indigenous Peoples)", "DSEI Altamira (Indigenous Health District)",
  "Ideflor-Bio", "Transpetro", "Itaú", "Equatorial Energia", "Fundação Unibanco", "UNIFESSPA", "Instituto Unyleya", "Fundo Casa Socioambiental", "Anapu City Hall",
];

export default function TransparencyEn() {
  const comParceiro = projetosEn(PROJETOS).filter((p) => p.parceiros);
  return (
    <>
      <PaginaHero
        lang="en"
        rotulo="Transparency"
        titulo={<>Who we are, <span className="destaque">who we work with</span></>}
        lead="Institutional data, projects and partners of the Association. Full documents will be published here as they are released."
        foto="/img/capas/reuniao-ngab.webp"
        trilha={[{ rotulo: "Transparency", href: "/en/transparency/" }]}
      />

      <section className="secao" aria-labelledby="t-dados">
        <div className="container" style={{ display: "grid", gap: "2rem" }}>
          <div>
            <span className="eyebrow">Institutional data</span>
            <h2 id="t-dados" className="titulo-md" style={{ marginTop: "1rem" }}>
              {SITE_EN.nomeOficial}
            </h2>
            <p style={{ marginTop: "0.5rem", color: "var(--cor-texto-suave)" }}>{SITE_EN.nome}</p>
          </div>
          <dl className="ficha">
            <div>
              <dt>Legal nature</dt>
              <dd>Indigenous organization, non-profit association under Brazilian law</dd>
            </div>
            <div>
              <dt>Founded</dt>
              <dd>{SITE_EN.fundacaoData}, in Krãnh village</dd>
            </div>
            <div>
              <dt>Registration</dt>
              <dd>{REGISTRO_EN}</dd>
            </div>
            <div>
              <dt>Headquarters</dt>
              <dd>Altamira, Pará, Brazil</dd>
            </div>
          </dl>
          <EmConstrucao lang="en">
            Bylaws, minutes of the current board, tax ID (CNPJ), annual reports and financial statements will be published here
            as soon as the Association releases them.
          </EmConstrucao>
        </div>
      </section>

      <section className="escuro secao" aria-labelledby="t-incentivos">
        <div className="container">
          <span className="eyebrow">Projects and funders</span>
          <h2 id="t-incentivos" className="titulo-md" style={{ margin: "1rem 0 2rem" }}>
            Public and private funding already carried out
          </h2>
          <ol className="linha-tempo">
            {INCENTIVOS.map((i) => (
              <li key={i.texto}>
                <strong>{i.ano}</strong>
                <p>
                  {i.texto} · <em>{i.fonte}</em>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="secao" aria-labelledby="t-projetos">
        <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
          <div>
            <span className="eyebrow">Projects on this site</span>
            <h2 id="t-projetos" className="titulo-md" style={{ margin: "1rem 0 1.5rem" }}>
              Who supports each project
            </h2>
            <ul className="diretoria">
              {comParceiro.map((p) => (
                <li key={p.slug}>
                  <strong>
                    <Link href={`/en/projects/${p.slug}/`}>{p.nome}</Link>
                  </strong>
                  <span>{p.parceiros}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="prosa">
            <span className="eyebrow">Partners along the way</span>
            <p style={{ marginTop: "1rem" }}>{PARCEIROS_EN.join(" · ")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
