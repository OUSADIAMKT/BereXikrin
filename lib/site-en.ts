/**
 * English versions of the site data (lib/site.ts). Same facts, same sources
 * (Panorama from the Coordination, 25/09/2026). Rules: the Association's voice,
 * no area figures, Mẽbêngôkre terms kept in the original language.
 */
import type { Foto, Projeto } from "@/lib/site";
import { SLUGS_PROJETOS } from "@/lib/rotas";

export const SITE_EN = {
  nome: "Berê Xikrin Indigenous Association",
  nomeOficial: "Associação Indígena Berê Xikrin da TI Bacajá",
  descricao:
    "Indigenous organization of the Mẽbêngôkre-Xikrin people, bringing together 16 villages of the Trincheira Bacajá Indigenous Territory in Pará, Brazil: rights, territorial management and ethnodevelopment.",
  endereco: ["Headquarters in Altamira, Pará, Brazil", "Villages in Anapu and Senador José Porfírio (Pará)"],
  fundacaoData: "October 23, 2018",
};

export const MISSAO_EN =
  "To represent and strengthen the Mẽbêngôkre Xikrin people, defending their territorial and cultural rights, preserving the socio-biodiversity of the Trincheira Bacajá Indigenous Territory and promoting the sustainable development of the communities, based on ethnodevelopment and autonomy.";

export const VISAO_EN =
  "To be a reference in the Amazon for Indigenous autonomy, sustainable territorial management and bioeconomy, ensuring the continuity of Xikrin culture and the well-being of its people for future generations.";

export const FRENTES_EN = [
  { nome: "Rights", texto: "Advocacy for and defense of the rights of the Xikrin people." },
  { nome: "Territory", texto: "Territorial and environmental management of the Trincheira Bacajá Indigenous Territory." },
  { nome: "Ethnodevelopment", texto: "Food security and income generated from the forest." },
];

export const TRAJETORIA_EN = [
  { ano: "Since 2013", texto: "Building of the Territorial and Environmental Management Plan (PGTA) “Aben Kaben Marimei”, “knowledge shared by all”, and cacao planting by the families." },
  { ano: "2018", texto: "The Association is founded on October 23 in the Ngàb of Krãnh village by the villages of Kabakrô, Krãnh, Pyudjan and Prindjam, to defend the Xikrin people from the impacts of large infrastructure projects in the region." },
  { ano: "2019", texto: "Legal registration in Anapu and, in December, the meeting that starts the alliance of villages that becomes the Berê Network." },
  { ano: "2021", texto: "Xikrin Life Plan; Kwyrykangô ritual; the assembly decides to create community canteens and bring internet to the villages." },
  { ano: "2023", texto: "Xikrin Cultural Festival, strengthening of the menire handicraft value chain, film club and environmental monitoring." },
  { ano: "2024", texto: "Kwyrykangô Xikrin Cultural Festival and Cine Xikrin; the 16 villages approve the Berê Network Work Plan." },
  { ano: "2025", texto: "Olhos d’Água — Menire Xikrin project; leadership training; selection in Call 3 of Restaura Amazônia." },
  { ano: "2026", texto: "Kukràdjà Xikrin sports project, Berê Xikrin Festival, food and water security, territorial management and mobility between villages, and the Restaura Amazônia contract signed on September 2." },
];

export const CITACAO_EN = {
  texto: "I think that if the forest keeps disappearing, our future disappears too.",
  autor: "Beptok Xikrin, Pytakô village",
  fonte: "Xikrin Life Plan, 2021 (translated from Portuguese)",
};

export const NUMEROS_EN = [
  { valor: "16", rotulo: "villages in the Association, out of 53 in the Indigenous Territory" },
  { valor: "387", rotulo: "people in Berê’s villages" },
  { valor: "111", rotulo: "families" },
  { valor: "98%", rotulo: "or more of the Xikrin territory preserved" },
];

export const FONTE_NUMEROS_EN = "Population Profile of the Association’s 16 villages (Sept 2026) and Annex 1 of the Restaura Amazônia project.";

export const MENU_EN = [
  { rotulo: "About", href: "/en/about/" },
  { rotulo: "Culture", href: "/en/culture/" },
  { rotulo: "Territory", href: "/en/territory/" },
  {
    rotulo: "Projects",
    href: "/en/projects/",
    filhos: [] as { rotulo: string; href: string }[],
  },
  { rotulo: "Products", href: "/en/products/" },
  { rotulo: "News", href: "/en/news/" },
  { rotulo: "Transparency", href: "/en/transparency/" },
];

const STATUS: Record<Projeto["status"], string> = { "Em andamento": "Ongoing", Concluído: "Completed" };
export const statusEn = (s: Projeto["status"]) => STATUS[s];

const TEMA: Record<Projeto["tema"], string> = {
  Território: "Territory",
  Cultura: "Culture",
  "Rio Bacajá": "Bacajá River",
  Comunicação: "Communication",
  Alimentação: "Food",
  "Belo Monte": "Belo Monte",
};
export const temaEn = (t: Projeto["tema"]) => TEMA[t];

type TraducaoProjeto = { nome: string; resumo: string; parceiros?: string; periodo?: string; alt: string; galeria?: string[] };

/** Translations keyed by the Portuguese slug; galeria = alt texts in the same order as lib/site.ts. */
const TRADUCOES: Record<string, TraducaoProjeto> = {
  "belo-monte": {
    nome: "Belo Monte and PBA-⁠CI",
    resumo:
      "Since the 1970s, the Xikrin people have faced large infrastructure projects in the Middle Xingu. The Association monitors and co-executes the compensation programs of the Belo Monte dam, which changed the flow of the Bacajá River.",
    parceiros: "Norte Energia (PBA-CI)",
    alt: "Aerial view of the Belo Monte hydroelectric dam on the Xingu River",
  },
  "restaura-amazonia": {
    nome: "Restaura Amazônia",
    resumo:
      "A project proposed and led by the Association: restoration with agroforestry systems, value chains for cacao, Brazil nuts, babassu and menire handicrafts, Xikrin fire brigades and Environmental Agents, and care for the villages’ water.",
    parceiros: "CI-Brasil, Amazon Fund/BNDES",
    periodo: "Aug 2026 to Jul 2030",
    alt: "Village houses in front of the forest and the river at sunset",
  },
  "casa-do-guerreiro": {
    nome: "Warriors’ House",
    resumo:
      "Building the Ngàb, the warriors’ house, the political space where each village makes its decisions and learns from the Kubengêt.",
    parceiros: "PBA-CI, cultural and institutional strengthening programs",
    alt: "The newly built Ngàb: a large open house roofed with babassu thatch",
    galeria: [
      "A man carries a palm frond on his back for the roof",
      "A canoe on the river loaded with babassu thatch",
      "Babassu thatch spread on the ground, ready to be woven",
      "Men working on the wood and thatch structure of the Ngàb",
    ],
  },
  "rituais-tradicionais": {
    nome: "Traditional Rituals",
    resumo:
      "Since 2018, the Association has supported the rituals of the Xikrin calendar, which pass knowledge from one generation to the next.",
    parceiros: "Tangible and Intangible Cultural Heritage Program",
    periodo: "since 2018",
    alt: "A Xikrin woman paints a young woman’s body with genipap",
    galeria: [
      "A Xikrin woman paints a young woman’s body with genipap",
      "Women and children gathered while preparing for a ritual",
      "A group gathered with ceremonial adornments and sashes",
      "Community gathered under the roof of the Ngàb",
    ],
  },
  "monitoramento-do-pescado": {
    nome: "Fish Monitoring",
    resumo:
      "Young people from five villages trained to record fish catches and track changes in the Bacajá River after Belo Monte.",
    alt: "A young man weighs a fish with a hand scale, standing in a canoe on the river",
    galeria: [
      "A young man weighs a fish with a hand scale, standing in a canoe on the river",
      "Hands measure a fish with a tape measure for the record",
    ],
  },
  "internet-nas-aldeias": {
    nome: "Internet in the Villages",
    resumo:
      "Internet to bring the villages closer together, speed up invasion alerts to protection agencies and follow up on projects.",
    parceiros: "Fundo Casa Socioambiental",
    alt: "Solar panel installed on a roof to power the village internet",
    galeria: [
      "Solar panel installed on a roof to power the village internet",
      "Charge controller and sockets installed on the wall",
      "A technician installs the power equipment on the wall",
      "Community gathered in the Ngàb",
    ],
  },
  "mudas-citricas": {
    nome: "Citrus Seedlings",
    resumo: "One thousand lemon, tangerine and orange seedlings distributed among the member villages.",
    parceiros: "Anapu City Hall, EMATER Anapu",
    alt: "Citrus seedlings grouped on the grass, ready for planting",
    galeria: [
      "Seedlings being sorted under a shelter for distribution",
      "A Xikrin woman with seedlings in the village",
      "Citrus seedlings grouped on the grass, ready for planting",
    ],
  },
};

/** Builds the English project list from the Portuguese one (photos, status and theme come from there). */
export function projetosEn(projetos: Projeto[]): Projeto[] {
  return projetos.map((p) => {
    const t = TRADUCOES[p.slug];
    return {
      ...p,
      slug: SLUGS_PROJETOS[p.slug],
      nome: t.nome,
      resumo: t.resumo,
      parceiros: t.parceiros,
      periodo: t.periodo,
      alt: t.alt,
      galeria: p.galeria?.map((f: Foto, i: number) => ({ src: f.src, alt: t.galeria?.[i] ?? f.alt })),
    };
  });
}

export const TEXTOS_PROJETOS_EN: Record<string, string[]> = {
  "belo-monte": [
    "Since the 1970s, the Xikrin people and their relatives have faced large infrastructure projects in the Middle Xingu, such as the Trans-Amazonian Highway (BR-230) and the Kararaô Project, which became the Belo Monte hydroelectric dam. The Association itself was founded in 2018 to defend the Xikrin people from the impacts of these projects.",
    "The Xikrin say that “the Xingu River holds the Bacajá River”: when the Xingu rises, the Bacajá is full; when it falls, the Bacajá drops with it. In the reduced-flow stretch of the Xingu, floods fell from 80 to 9 days a year, and extreme droughts rose from 45 to 104 days (Revista Pesquisa FAPESP).",
    "Because of these impacts, the communities are served by compensation and mitigation measures under the Belo Monte Basic Environmental Plan (PBA), the responsibility of the company Norte Energia, in culture, territorial management, community organization, education, health and productive activities. Berê has seven years of experience in this field and works to lead the decisions: actions that require traditional knowledge are carried out with the PBA-CI (Indigenous Component) executing company, with the Association as co-executor and proponent.",
  ],
  "restaura-amazonia": [
    "“Ecological Restoration, Productive Strengthening and Xikrin Sustainability in the Trincheira Bacajá Indigenous Territory” is a project proposed and carried out by the Association itself. Berê is one of eight organizations selected in Call 3 of Restaura Amazônia, an initiative of Conservation International Brazil (CI-Brasil) funded by the Amazon Fund, managed by Brazil’s development bank BNDES.",
    "The project grows out of the Xikrin Life Plan and PGTA. The territory is preserved in its interior, but it has degraded areas and faces pressure at its edges; the value chains that already sustain the families have potential but lack infrastructure, logistics and market access. The proposal brings both together: restoring the forest in a way that also produces food and income, with decisions made by the villages.",
    "In practice: agroforestry systems with cacao and native species near the villages and forest recovery in more distant areas; the Xikrin Seed Network, in which families collect native seeds and are paid in food through the community canteen; village nurseries; cacao drying greenhouses, renovation of the Brazil nut storehouse in Krãnh village, babassu with a focus on women, and menire bio-jewelry with a quality seal; fire-prevention brigades using traditional fire management; Xikrin Environmental Agents; and a participatory assessment of the water sources of the 16 villages.",
    "All of it with the free, prior and informed consent of the villages, the Xikrin consultation protocol and a local steering committee. The project runs for 48 months, from August 2026 to July 2030: two years of implementation and two of monitoring and maintenance. The contract was signed on September 2, 2026; the Initial Assessment in the 16 villages takes place from October 7 to 23, and the Restoration Plan will be delivered by December, with planting at the start of the rainy season.",
    "The central idea is a forest that grows back and produces again, cared for by those who have always lived in it: kukradjà, the Xikrin way of life, “living with the forest, together with the forest and for the forest” (Xikrin PGTA).",
  ],
  "casa-do-guerreiro": [
    "The Ngàb, the warriors’ house, is the political space where each village makes its decisions and the place of ceremonies and rituals. Contact with non-Indigenous customs weakened Mẽbêngôkre practices, which made gatherings with elders and artisans even more important to keep knowledge alive.",
    "Building it was an activity foreseen in the Belo Monte PBA-CI to mitigate the project’s interference in daily village life. It was carried out with the cultural and institutional strengthening programs, combining traditional and institutional knowledge. Berê acted as proponent, in planning, organization, execution and documentation.",
    "Leaders first met in Krãnh village to plan the houses in four villages: size, resources and schedule. Then each village built its own with the help of the others, gathering the wood, the babassu thatch and the embira fiber. When the warriors’ house was finished, the community danced and sang for hours.",
  ],
  "rituais-tradicionais": [
    "Supporting traditional rituals is one of Berê’s main projects. With the Tangible and Intangible Cultural Heritage Program, the Association promotes rituals that are essential to the physical and cultural continuity of the Xikrin people in the villages it represents, such as the Kwyrykangô.",
    "The initiative has run since 2018 and follows the traditional Xikrin calendar, in which periods of the year are set aside for collective hunting and fishing, the making of artifacts, rites and rituals.",
    "Supporting these moments strengthens Xikrin culture and ensures knowledge passes between generations, in a young population: about three quarters of the people in the Association’s villages are under 30, and the elders are recognized as Living Heritage.",
  ],
  "monitoramento-do-pescado": [
    "To track the impacts of the Belo Monte dam on the Bacajá River, Berê co-executes the fish monitoring work in its member villages.",
    "Young people from the villages of Krãnh, Prindjãm, Kabakrô, Kameredjãm and Kenoro were trained in ecology and data collection on aquatic life. Each received a kit with a scale, clipboards and tape measures to measure and record the fish caught by the communities.",
    "The first records serve to test what was learned. The goal is for the Xikrin themselves to track, with data, the changes in the Bacajá River.",
  ],
  "internet-nas-aldeias": [
    "A project by Berê with Fundo Casa Socioambiental to improve communication within and beyond the Indigenous Territory, decided by the 2021 assembly.",
    "With internet in the villages, contact between them becomes easier and territorial surveillance improves: alerts reach enforcement and protection agencies faster.",
    "Internet also makes it easier to follow up on projects and on the Association’s work with partners and public institutions, accessing public policies and securing the rights of the Xikrin people.",
  ],
  "mudas-citricas": [
    "Berê distributed one thousand citrus seedlings, such as lemon, tangerine and orange, among its member villages.",
    "The seedlings were obtained by the Anapu City Hall, through its Department of Agriculture, Fisheries and Supply, with support from EMATER (Pará’s Technical Assistance and Rural Extension Company), Anapu office.",
  ],
};

export const NOTICIAS_EN = [
  {
    data: "2026-10-07",
    dataTexto: "October 7–23, 2026",
    categoria: "Restaura Amazônia",
    titulo: "Initial Assessment visits the 16 villages",
    resumo:
      "In the first field stage, families map the restoration areas and survey soil, water, seeds, value chains and social cartography. The Restoration Plan will be delivered by December.",
  },
  {
    data: "2026-10-08",
    dataTexto: "October 8, 2026",
    categoria: "Governance",
    titulo: "General assembly of the 16 villages",
    resumo:
      "The assembly validates the project’s message and the villages’ consent for communication, following the Xikrin consultation protocol.",
  },
  {
    data: "2026-09-02",
    dataTexto: "September 2, 2026",
    categoria: "Restaura Amazônia",
    titulo: "Association signs contract with CI-Brasil",
    resumo:
      "Selected among eight organizations in Call 3 of Restaura Amazônia, Berê begins a 48-month project funded by the Amazon Fund/BNDES.",
  },
];

export const REDE_BERE_EN = [
  { nome: "Berê Xikrin Indigenous Association", aldeias: "16 villages" },
  { nome: "Katap-Ti Association", aldeias: "Prindjãm village" },
  { nome: "Bep Tok Association", aldeias: "Tepkoika Nho Ngo, Pytakô and Pokamrôre villages" },
];

export const PARTICIPACOES_EN = [
  "Indigenous Steering Committee",
  "Indigenous Education Council (TEMEX)",
  "District Council of Indigenous Health (CONDISI)",
  "APIB, the Articulation of Indigenous Peoples of Brazil",
  "Trincheira Bacajá Indigenous Territory Subcommittee",
];

export const REGISTRO_EN =
  "Registered at the Single Notary Office of the District of Anapu (Pará), Registration no. 14, Book A of Legal Entities, on January 17, 2019.";

export const CREDITO_FOTO_EN = "Photo: Ousadia Marketing for the Berê Xikrin Association";
export const CREDITO_ACERVO_EN = "Photos: Berê Xikrin Indigenous Association archive";
