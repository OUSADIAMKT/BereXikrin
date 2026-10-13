import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CardProjeto } from "@/components/CardProjeto";
import { PaginaHero } from "@/components/PaginaHero";
import { PROJETOS } from "@/lib/site";
import { TEXTOS_PROJETOS } from "@/lib/textos-projetos";

/** Exportação estática: só existem as páginas listadas aqui. */
export const dynamicParams = false;

export function generateStaticParams() {
  return PROJETOS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = PROJETOS.find((x) => x.slug === slug);
  return p ? { title: p.nome, description: p.resumo } : {};
}

export default async function PaginaProjeto({ params }: PageProps<"/projetos/[slug]">) {
  const { slug } = await params;
  const projeto = PROJETOS.find((p) => p.slug === slug);
  if (!projeto) notFound();

  const texto = TEXTOS_PROJETOS[slug] ?? [projeto.resumo];
  const outros = PROJETOS.filter((p) => p.slug !== slug && p.tema === projeto.tema).concat(
    PROJETOS.filter((p) => p.slug !== slug && p.tema !== projeto.tema),
  ).slice(0, 3);

  return (
    <>
      <PaginaHero
        rotulo={`Projeto · ${projeto.tema}`}
        titulo={projeto.nome}
        lead={projeto.resumo}
        foto={projeto.foto}
        trilha={[
          { rotulo: "Projetos", href: "/projetos/" },
          { rotulo: projeto.nome, href: `/projetos/${projeto.slug}/` },
        ]}
      />

      <section className="secao">
        <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
          <dl className="ficha">
            <div>
              <dt>Situação</dt>
              <dd>{projeto.status}</dd>
            </div>
            {projeto.periodo && (
              <div>
                <dt>Período</dt>
                <dd>{projeto.periodo}</dd>
              </div>
            )}
            {projeto.parceiros && (
              <div>
                <dt>Parceiros</dt>
                <dd>{projeto.parceiros}</dd>
              </div>
            )}
            <div>
              <dt>Quem conduz</dt>
              <dd>Associação Indígena Berê Xikrin</dd>
            </div>
          </dl>
          <div className="prosa">
            {texto.map((par) => (
              <p key={par.slice(0, 40)}>{par}</p>
            ))}
          </div>
          <p>
            <Link className="btn btn--marca" href="/apoie/">
              Apoie este trabalho
            </Link>
          </p>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }} aria-labelledby="t-outros">
        <div className="container">
          <span className="eyebrow">Outros projetos</span>
          <h2 id="t-outros" className="visualmente-oculto">Outros projetos</h2>
          <div className="grade" style={{ marginTop: "1.5rem" }}>
            {outros.map((p) => (
              <CardProjeto key={p.slug} projeto={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
