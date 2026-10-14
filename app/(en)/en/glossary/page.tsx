import { PaginaHero } from "@/components/PaginaHero";
import { metaPagina } from "@/lib/meta";

export const metadata = metaPagina({
  titulo: "Mẽbêngôkre glossary",
  descricao: "Mẽbêngôkre terms and acronyms used on the Berê Xikrin Indigenous Association website: kukradjà, Kubengêt, menire, Ngàb and more.",
  caminho: "/en/glossary/",
  foto: "/img/capas/ngab.webp",
});

/** lang="txu": ISO 639-3 code for Kayapó/Mẽbêngôkre. Spellings follow the cited sources. */
const TERMOS: [termo: string, significado: string, fonte: string, mbg: boolean][] = [
  ["Mẽbêngôkre", "The people’s own name: “people of the water hole”. Also the name of their language, the same spoken by the Kayapó.", "Xikrin Life Plan", true],
  ["Kukradjà", "The Xikrin way of being and living: living with the forest, together with the forest and for the forest.", "Xikrin PGTA", true],
  ["Kubengêt", "The elders, “those who truly know”. The council of elders and chiefs is the highest collective decision-making body.", "Xikrin Life Plan", true],
  ["Menire", "Xikrin women.", "Annex 1 of the Restaura Amazônia project", true],
  ["Meprire", "Childhood. “Since meprire”: since early childhood.", "Annex 1 of the Restaura Amazônia project", true],
  ["Ngàb", "The warriors’ house, the political space for decisions in each village.", "Xikrin Life Plan", true],
  ["Aben Kaben Marimei", "Name of the Xikrin Territorial and Environmental Management Plan: “knowledge shared by all”.", "Annex 1 of the Restaura Amazônia project", true],
  ["Kwyrykangô", "A Xikrin ritual and cultural festival.", "Berê Network Institutional Portfolio", true],
  ["Kuben", "Non-Indigenous people.", "Former Association website", true],
  ["TI (Terra Indígena)", "Indigenous Territory: land officially recognized by the Brazilian state for the exclusive use of an Indigenous people.", "Brazilian Federal Constitution", false],
  ["SAF", "Agroforestry system (sistema agroflorestal): native trees and crops grown together, like a forest that produces.", "Restoration Plan", false],
  ["CLPI", "Free, prior and informed consent (FPIC) of the community.", "Annex 1 of the Restaura Amazônia project", false],
  ["PGTA", "Territorial and Environmental Management Plan.", "Xikrin PGTA", false],
  ["PBA-CI", "Indigenous Component of the Basic Environmental Plan of the Belo Monte dam: the compensation and mitigation program for Indigenous peoples.", "Former Association website", false],
];

export default function GlossaryEn() {
  return (
    <>
      <PaginaHero
        lang="en"
        rotulo="Glossary"
        titulo={<><span className="destaque">Mẽbêngôkre</span> words</>}
        lead="Words in the Mẽbêngôkre language and acronyms used on this site, with their meaning and source."
        foto="/img/capas/ngab.webp"
        trilha={[{ rotulo: "Glossary", href: "/en/glossary/" }]}
      />
      <section className="secao">
        <div className="container" style={{ display: "grid", gap: "2rem" }}>
          <dl className="glossario">
            {TERMOS.map(([termo, significado, fonte, mbg]) => (
              <div key={termo}>
                <dt lang={mbg ? "txu" : "pt-BR"}>{termo}</dt>
                <dd>
                  {significado}
                  <small>Source: {fonte}</small>
                </dd>
              </div>
            ))}
          </dl>
          <p className="aviso">
            Spellings follow the cited sources. Standardization of written Mẽbêngôkre is carried out by the Association, with
            Kroire Xikrin.
          </p>
        </div>
      </section>
    </>
  );
}
