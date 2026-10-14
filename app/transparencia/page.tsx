import Link from "next/link";
import { EmConstrucao } from "@/components/EmConstrucao";
import { PaginaHero } from "@/components/PaginaHero";
import { metaPagina } from "@/lib/meta";
import { PARCEIROS_HISTORICOS, PROJETOS, REGISTRO, SITE } from "@/lib/site";

export const metadata = metaPagina({
  titulo: "Transparência",
  descricao:
    "Dados institucionais, registro, projetos, financiadores e parceiros da Associação Indígena Berê Xikrin da TI Bacajá.",
  caminho: "/transparencia/",
  foto: "/img/capas/reuniao-ngab.webp",
});

/** Projetos com incentivo público citados na trajetória (Panorama 2026). */
const INCENTIVOS = [
  { ano: "2021", texto: "Ritual Kwyrykangô", fonte: "Lei Aldir Blanc" },
  { ano: "2023", texto: "Festival Cultural Xikrin", fonte: "Lei Rouanet" },
  { ano: "2023", texto: "Fortalecimento da cadeia produtiva das menire", fonte: "Lei Paulo Gustavo" },
  { ano: "2024", texto: "Festival Cultural Xikrin Kwyrykangô", fonte: "Lei Rouanet" },
  { ano: "2024", texto: "Cine Xikrin", fonte: "Lei Paulo Gustavo" },
  { ano: "2025", texto: "Projeto Olhos d’Água — Menire Xikrin", fonte: "Ministério da Cultura" },
  { ano: "2025", texto: "Fortalecimento de lideranças", fonte: "Ministério da Justiça" },
  { ano: "2026", texto: "Projeto de esportes Kukràdjà Xikrin", fonte: "Lei de Incentivo ao Esporte" },
  { ano: "2026", texto: "Gestão territorial e mobilidade entre aldeias", fonte: "Fundo Semente/OIM" },
  { ano: "2026", texto: "Cantina, selo de origem e governança da Rede", fonte: "FAS" },
  { ano: "2026", texto: "Restauração ecológica e cadeias produtivas", fonte: "CI-Brasil, Fundo Amazônia/BNDES" },
];

export default function Transparencia() {
  const comParceiro = PROJETOS.filter((p) => p.parceiros);
  return (
    <>
      <PaginaHero
        rotulo="Transparência"
        titulo={<>Quem somos, <span className="destaque">com quem trabalhamos</span></>}
        lead="Dados institucionais, projetos e parceiros da Associação. Os documentos completos são publicados aqui à medida que forem liberados."
        foto="/img/capas/reuniao-ngab.webp"
        trilha={[{ rotulo: "Transparência", href: "/transparencia/" }]}
      />

      <section className="secao" aria-labelledby="t-dados">
        <div className="container" style={{ display: "grid", gap: "2rem" }}>
          <div>
            <span className="eyebrow">Dados institucionais</span>
            <h2 id="t-dados" className="titulo-md" style={{ marginTop: "1rem" }}>
              {SITE.nomeCompleto}
            </h2>
          </div>
          <dl className="ficha">
            <div>
              <dt>Natureza</dt>
              <dd>Organização indígena, associação sem fins lucrativos</dd>
            </div>
            <div>
              <dt>Fundação</dt>
              <dd>{SITE.fundacaoData}, na aldeia Krãnh</dd>
            </div>
            <div>
              <dt>Registro</dt>
              <dd>{REGISTRO}</dd>
            </div>
            <div>
              <dt>Sede</dt>
              <dd>Altamira (PA)</dd>
            </div>
          </dl>
          <EmConstrucao>
            Estatuto, ata da diretoria em exercício, CNPJ, relatórios anuais e prestações de contas serão publicados aqui
            assim que a Associação liberar os documentos.
          </EmConstrucao>
        </div>
      </section>

      <section className="escuro secao" aria-labelledby="t-incentivos">
        <div className="container">
          <span className="eyebrow">Projetos e financiadores</span>
          <h2 id="t-incentivos" className="titulo-md" style={{ margin: "1rem 0 2rem" }}>
            Recursos públicos e privados já executados
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
            <span className="eyebrow">Projetos no site</span>
            <h2 id="t-projetos" className="titulo-md" style={{ margin: "1rem 0 1.5rem" }}>
              Quem apoia cada projeto
            </h2>
            <ul className="diretoria">
              {comParceiro.map((p) => (
                <li key={p.slug}>
                  <strong>
                    <Link href={`/projetos/${p.slug}/`}>{p.nome}</Link>
                  </strong>
                  <span>{p.parceiros}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="prosa">
            <span className="eyebrow">Parceiros ao longo do caminho</span>
            <p style={{ marginTop: "1rem" }}>{PARCEIROS_HISTORICOS.join(" · ")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
