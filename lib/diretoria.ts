/**
 * Diretoria, Conselho Fiscal e Coordenação das Menires.
 * Enviado pelo cliente em 14/10/2026 (substitui a diretoria do site antigo).
 * Grafias como enviadas; conferir com Kroire Xikrin quando houver dúvida.
 * `foto`: arquivo em /img/diretoria/ (só Bep Kamaty tem foto por enquanto).
 */
export type Membro = { nome: string; cargo: { pt: string; en: string }; aldeia?: string; foto?: string };
export type Grupo = { titulo: { pt: string; en: string }; membros: Membro[] };

export const GOVERNANCA: Grupo[] = [
  {
    titulo: { pt: "Diretoria Executiva", en: "Executive Board" },
    membros: [
      { nome: "Bep Kamaty Xikrin", cargo: { pt: "Presidente", en: "President" }, foto: "bep-kamati" },
      { nome: "Mryare Xikrin", cargo: { pt: "Vice-presidente", en: "Vice-president" } },
      { nome: "Kroire Xikrin", cargo: { pt: "Secretário", en: "Secretary" } },
      { nome: "Nhoi Tore Curuaia Xikrin", cargo: { pt: "Vice-secretário", en: "Vice-secretary" } },
      { nome: "Bebere Xikrin", cargo: { pt: "Tesoureiro", en: "Treasurer" } },
      { nome: "Ngrenhpay Xikrin", cargo: { pt: "Vice-tesoureira", en: "Vice-treasurer" } },
    ],
  },
  {
    titulo: { pt: "Conselho Fiscal", en: "Fiscal Council" },
    membros: [
      { nome: "Rayane Pereira Curuaia Xikrin", cargo: { pt: "1ª titular", en: "1st member" }, aldeia: "Tepkajakanhôngô" },
      { nome: "Tedjore Xikrin", cargo: { pt: "1º suplente", en: "1st alternate" }, aldeia: "Pytakô" },
      { nome: "Bep Ngrati Xikrin", cargo: { pt: "2º titular", en: "2nd member" }, aldeia: "Tepkajakanhôngô" },
      { nome: "Bepnhibeti Xikrin", cargo: { pt: "2º suplente", en: "2nd alternate" }, aldeia: "Krendjãn" },
    ],
  },
  {
    titulo: { pt: "Coordenação das Menires Xikrin", en: "Menire Xikrin Coordination" },
    membros: [
      { nome: "Irei Xikrin", cargo: { pt: "Presidente", en: "President" }, aldeia: "Krendjãn" },
      { nome: "Nhàkrim Xikrin", cargo: { pt: "2ª substituta", en: "2nd deputy" }, aldeia: "Kruwanhongo" },
    ],
  },
];

export const iniciais = (nome: string) =>
  nome
    .split(" ")
    .filter((p) => p !== "Xikrin")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
