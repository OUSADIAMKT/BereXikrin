import type { Metadata } from "next";
import Link from "next/link";
import { EmConstrucao } from "@/components/EmConstrucao";
import { PaginaHero } from "@/components/PaginaHero";
import { PROJETOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Transparência",
  description: "Prestação de contas, recursos por projeto e documentos institucionais da Associação Indígena Berê Xikrin.",
};

export default function Transparencia() {
  const comParceiro = PROJETOS.filter((p) => p.parceiros);
  return (
    <>
      <PaginaHero
        rotulo="Transparência"
        titulo={<>Para onde vai <span className="destaque">cada recurso</span></>}
        lead="Prestação de contas, recursos por projeto e documentos da Associação."
        trilha={[{ rotulo: "Transparência", href: "/transparencia/" }]}
      />
      <section className="secao">
        <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
          <EmConstrucao>
            Os relatórios de prestação de contas, o estatuto, o CNPJ e as atas serão publicados aqui assim que a
            Associação enviar os documentos.
          </EmConstrucao>
          <div>
            <span className="eyebrow">Projetos e parceiros</span>
            <h2 className="titulo-md" style={{ margin: "1rem 0 1.5rem" }}>Quem apoia cada projeto</h2>
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
        </div>
      </section>
    </>
  );
}
