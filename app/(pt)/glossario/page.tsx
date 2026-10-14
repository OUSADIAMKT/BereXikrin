import { PaginaHero } from "@/components/PaginaHero";
import { metaPagina } from "@/lib/meta";

export const metadata = metaPagina({
  titulo: "Glossário Mẽbêngôkre",
  descricao: "Termos em Mẽbêngôkre e siglas usados no site da Associação Indígena Berê Xikrin: kukradjà, Kubengêt, menire, Ngàb e outros.",
  caminho: "/glossario/",
  foto: "/img/capas/ngab.webp",
});

/** lang="txu": código ISO 639-3 do Kayapó/Mẽbêngôkre.
 * Glossário do Panorama da Coordenação (25/09/2026). Grafias em padronização com Kroire Xikrin. */
const TERMOS: [termo: string, significado: string, fonte: string][] = [
  ["Mẽbêngôkre", "Autodenominação do povo: “povo do buraco d’água”. Também o nome da língua, a mesma dos Kayapó.", "Plano de Vida Xikrin"],
  ["Kukradjà", "Modo de ser e de viver Xikrin: viver com a floresta, junto à floresta e para a floresta.", "PGTA Xikrin"],
  ["Kubengêt", "Os anciãos, “aqueles que sabem de verdade”. O conselho de anciãos e caciques é a instância máxima de decisão coletiva.", "Plano de Vida Xikrin"],
  ["Menire", "As mulheres Xikrin.", "Anexo 1 do projeto Restaura Amazônia"],
  ["Meprire", "A infância. “Desde meprire”: desde pequenas.", "Anexo 1 do projeto Restaura Amazônia"],
  ["Ngàb", "A casa do guerreiro, espaço político das decisões em cada aldeia.", "Plano de Vida Xikrin"],
  ["Aben Kaben Marimei", "Nome do Plano de Gestão Territorial e Ambiental Xikrin: “o saber por todos compartilhado”.", "Anexo 1 do projeto Restaura Amazônia"],
  ["Kwyrykangô", "Ritual e festival cultural Xikrin.", "Portfólio Institucional da Rede Berê"],
  ["SAF", "Sistema agroflorestal: árvores nativas e cultivos juntos, como numa floresta que produz.", "Plano de Restauração"],
  ["CLPI", "Consentimento livre, prévio e informado da comunidade.", "Anexo 1 do projeto Restaura Amazônia"],
  ["PGTA", "Plano de Gestão Territorial e Ambiental.", "PGTA Xikrin"],
];

export default function Glossario() {
  return (
    <>
      <PaginaHero
        rotulo="Glossário"
        titulo={<>Palavras <span className="destaque">Mẽbêngôkre</span></>}
        lead="Termos da língua Mẽbêngôkre e siglas que aparecem no site, com o significado e a fonte."
        foto="/img/capas/ngab.webp"
        trilha={[{ rotulo: "Glossário", href: "/glossario/" }]}
      />
      <section className="secao">
        <div className="container" style={{ display: "grid", gap: "2rem" }}>
          <dl className="glossario">
            {TERMOS.map(([termo, significado, fonte]) => (
              <div key={termo}>
                <dt lang={["SAF", "CLPI", "PGTA"].includes(termo) ? "pt-BR" : "txu"}>{termo}</dt>
                <dd>
                  {significado}
                  <small>Fonte: {fonte}</small>
                </dd>
              </div>
            ))}
          </dl>
          <p className="aviso">
            As grafias seguem as fontes citadas. A padronização da escrita em Mẽbêngôkre é feita pela Associação, com
            Kroire Xikrin.
          </p>
        </div>
      </section>
    </>
  );
}
