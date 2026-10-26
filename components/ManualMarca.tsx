import type { Idioma } from "@/lib/rotas";

/**
 * Resumo do manual de uso da marca (PT e EN). O manual completo e os arquivos do logo
 * ficam na pasta do Drive da Associação: a página só resume e leva até eles.
 * Fonte do conteúdo: "Manual de Uso da Marca Berê Xikrin.pdf" (2026).
 */
const LINKS = {
  logos: "https://drive.google.com/drive/folders/1_CdrPoi_AYVqztErHA2x05UwPiswMLYR?usp=drive_link",
  manual: "https://drive.google.com/file/d/1bWKyoBIJr1gHZiVOiPZsLqFniEIWtWVd/view?usp=sharing",
};

const CORES: [nome: string, hex: string, texto: string][] = [
  ["Urucum", "#C8201A", "#FFFFFF"],
  ["Jenipapo", "#15110E", "#F7EFE3"],
  ["Palha", "#F7EFE3", "#15110E"],
  ["Pequi", "#F6B800", "#15110E"],
  ["Arara", "#1F3A93", "#FFFFFF"],
  ["Floresta", "#0B6E3F", "#FFFFFF"],
];

const T = {
  pt: {
    intro: {
      resumo:
        "Este é um resumo das regras para usar o nome, o logo, as cores, as letras, os grafismos e as fotos da Associação Indígena Berê Xikrin da TI Bacajá. Quem quiser usar a marca baixa os logos e lê o manual completo pelos links no fim desta página.",
      aviso:
        "A marca, os grafismos e as imagens pertencem ao povo Mẽbêngôkre-Xikrin. O uso por terceiros só acontece com autorização prévia da Associação.",
    },
    links: {
      titulo: "Logos e manual",
      logos: { nome: "Logos", texto: "Arquivos oficiais em PNG com fundo transparente: colorido, negativo, todo branco, todo preto e foto de perfil.", botao: "Abrir pasta de logos" },
      manual: { nome: "Manual de uso da marca", texto: "O manual completo, em PDF, com 20 páginas de regras, exemplos e checklist.", botao: "Abrir o manual" },
      externo: "abre no Google Drive",
      contato: "Autorização e dúvidas:",
    },
    resumoTitulo: "Em resumo",
    regras: {
      principios: {
        titulo: "Três princípios",
        itens: [
          "Pertence ao povo. O uso por terceiros só com autorização da Associação.",
          "Sempre o arquivo oficial. O logo nunca é redesenhado, recortado ou recomposto.",
          "A voz Xikrin conduz. Nenhuma peça inventa leituras sobre os elementos da marca.",
        ],
      },
      logo: {
        titulo: "O logo",
        texto: "A assinatura une o símbolo (o selo com as flechas) e o logotipo BERÊ XIKRIN. Use sempre o arquivo pronto, em três formatos: horizontal (a principal), vertical e símbolo.",
        versoes: ["Horizontal", "Vertical", "Símbolo"],
        alt: (n: string) => `Logo Berê Xikrin, versão ${n.toLowerCase()}`,
        cores: [
          ["Colorida", "sobre fundo claro (branco ou palha). Preferencial."],
          ["Negativa", "só na horizontal, sobre jenipapo liso."],
          ["Toda branca", "sobre foto escurecida e cores escuras da paleta."],
          ["Toda preta", "restrita: carimbo, laser, serigrafia de uma cor."],
        ] as [string, string][],
      },
      espaco: {
        titulo: "Espaço e tamanho",
        texto: "Deixe ao redor do logo uma margem livre de 1x, a altura da letra E de “Berê”. No símbolo isolado, 1/6 da largura.",
        minimos: "Tamanho mínimo (largura)",
        colunas: ["Versão", "Impresso", "Digital"],
        linhas: [
          ["Horizontal", "60 mm", "340 px"],
          ["Vertical", "35 mm", "200 px"],
          ["Símbolo", "25 mm", "150 px"],
          ["Logotipo isolado", "20 mm", "100 px"],
        ],
      },
      cores: {
        titulo: "Cores",
        texto: "Urucum, jenipapo e palha carregam a marca. Pequi, arara e floresta entram como acento, um por peça. Pequi só sobre jenipapo. Todas as combinações de texto aprovadas passam no contraste AA (4,5:1).",
      },
      tipografia: {
        titulo: "Tipografia",
        texto: "Unbounded nos títulos e Be Vietnam Pro no texto. As duas trazem o “ẽ” de Mẽbêngôkre. Fonte sem esse sinal quebra o nome do povo. Sem as fontes instaladas, use Arial.",
        amostra: "Mẽbêngôkre",
      },
      grafismos: {
        titulo: "Grafismos",
        texto: "Zigue-zague, quadrados, listras em V e faixa vêm do próprio logo. São divisor, marcador ou marca d’água, nunca fundo cheio atrás de texto, com no máximo 7% de opacidade. Grafismos da pintura corporal Xikrin só entram com autorização, nome e significado escritos pela comunidade.",
      },
      imagens: {
        titulo: "Imagens",
        texto: "Fotos reais, com crédito, texto alternativo e termo de uso de imagem. Nada de imagem gerada por IA, clichês da “Amazônia exótica”, fotos de crianças ou rituais sem autorização coletiva, nem artesanato de outros povos como se fosse Xikrin.",
      },
      voz: {
        titulo: "Nome e voz",
        texto: "Primeira menção: Associação Indígena Berê Xikrin da TI Bacajá. Depois: Berê Xikrin, a Berê ou a Associação. Escreva Mẽbêngôkre sempre com “ẽ” e “ê”. Use povo indígena, não “índios” ou “tribo”, e nunca trate a cultura como passado.",
      },
      nunca: {
        titulo: "O que nunca fazer",
        itens: ["Deformar, esticar ou inclinar", "Recolorir, inverter ou aplicar filtros", "Adicionar sombra, brilho ou contorno", "Rotacionar a assinatura", "Trocar as letras por uma fonte", "Separar ou recompor símbolo e logotipo", "Usar partes como logo, como o zigue-zague do R", "Emoldurar em caixas ou selos"],
      },
    },
    final: { titulo: "Vai usar a marca?", texto: "Baixe os arquivos oficiais, leia o manual completo e peça a aprovação da Associação antes de publicar." },
  },
  en: {
    intro: {
      resumo:
        "This is a summary of the rules for using the name, logo, colors, type, graphic patterns and photos of the Berê Xikrin Indigenous Association of the Bacajá Indigenous Territory. Anyone who wants to use the brand can download the logos and read the full guide through the links at the end of this page.",
      aviso:
        "The brand, graphic patterns and images belong to the Mẽbêngôkre-Xikrin people. Use by third parties requires the Association’s prior permission.",
    },
    links: {
      titulo: "Logos and guide",
      logos: { nome: "Logos", texto: "Official files as PNG with transparent background: color, negative, all white, all black and social profile picture.", botao: "Open logo folder" },
      manual: { nome: "Brand guidelines", texto: "The full guide, as a PDF, with 20 pages of rules, examples and a checklist.", botao: "Open the guide" },
      externo: "opens in Google Drive",
      contato: "Permission and questions:",
    },
    resumoTitulo: "In short",
    regras: {
      principios: {
        titulo: "Three principles",
        itens: [
          "It belongs to the people. Use by third parties only with the Association’s permission.",
          "Always the official file. The logo is never redrawn, cropped or recomposed.",
          "The Xikrin voice leads. No piece invents readings of the brand’s elements.",
        ],
      },
      logo: {
        titulo: "The logo",
        texto: "The signature joins the symbol (the seal with the arrows) and the BERÊ XIKRIN wordmark. Always use the ready-made file, in three formats: horizontal (the main one), vertical and symbol.",
        versoes: ["Horizontal", "Vertical", "Symbol"],
        alt: (n: string) => `Berê Xikrin logo, ${n.toLowerCase()} version`,
        cores: [
          ["Color", "on a light background (white or palha). Preferred."],
          ["Negative", "horizontal only, on flat jenipapo."],
          ["All white", "on a darkened photo and the palette’s dark colors."],
          ["All black", "restricted: stamp, laser, one-color screen printing."],
        ] as [string, string][],
      },
      espaco: {
        titulo: "Space and size",
        texto: "Leave a clear margin of 1x around the logo, the height of the letter E in “Berê”. For the symbol alone, 1/6 of its width.",
        minimos: "Minimum size (width)",
        colunas: ["Version", "Print", "Digital"],
        linhas: [
          ["Horizontal", "60 mm", "340 px"],
          ["Vertical", "35 mm", "200 px"],
          ["Symbol", "25 mm", "150 px"],
          ["Wordmark alone", "20 mm", "100 px"],
        ],
      },
      cores: {
        titulo: "Colors",
        texto: "Urucum, jenipapo and palha carry the brand. Pequi, arara and floresta come in as an accent, one per piece. Pequi only on jenipapo. All approved text pairings pass AA contrast (4.5:1).",
      },
      tipografia: {
        titulo: "Typography",
        texto: "Unbounded for headings and Be Vietnam Pro for text. Both carry the “ẽ” of Mẽbêngôkre. A font without that sign breaks the people’s name. Without the fonts installed, use Arial.",
        amostra: "Mẽbêngôkre",
      },
      grafismos: {
        titulo: "Graphic patterns",
        texto: "Zigzag, squares, V stripes and band come from the logo itself. They are dividers, markers or watermarks, never a solid fill behind text, at 7% opacity at most. Xikrin body-painting patterns only come in with permission, with names and meanings written by the community.",
      },
      imagens: {
        titulo: "Images",
        texto: "Real photos, with credit, alt text and a signed image-use release. No AI-generated images, no “exotic Amazon” clichés, no photos of children or rituals without collective permission, and no crafts of other peoples presented as Xikrin.",
      },
      voz: {
        titulo: "Name and voice",
        texto: "First mention: Berê Xikrin Indigenous Association of the Bacajá Indigenous Territory. Afterwards: Berê Xikrin, Berê or the Association. Always write Mẽbêngôkre with “ẽ” and “ê”. Say Indigenous people, not “Indians” or “tribe”, and never treat the culture as past.",
      },
      nunca: {
        titulo: "What never to do",
        itens: ["Distort, stretch or slant", "Recolor, invert or apply filters", "Add shadow, glow or outline", "Rotate the signature", "Swap the letters for a font", "Split or recompose symbol and wordmark", "Use parts as a logo, like the zigzag of the R", "Frame it in boxes or seals"],
      },
    },
    final: { titulo: "Going to use the brand?", texto: "Download the official files, read the full guide and ask the Association to approve before publishing." },
  },
};

type Textos = (typeof T)[Idioma];

function Botoes({ t }: { t: Textos }) {
  const cartoes = [
    { ...t.links.logos, href: LINKS.logos },
    { ...t.links.manual, href: LINKS.manual },
  ];
  return (
    <ul className="manual-links">
      {cartoes.map((c) => (
        <li key={c.nome}>
          <h3 className="titulo-sm">{c.nome}</h3>
          <p>{c.texto}</p>
          <a className="btn btn--marca" href={c.href} target="_blank" rel="noopener">
            {c.botao}
          </a>
          <small>{t.links.externo}</small>
        </li>
      ))}
    </ul>
  );
}

export function ManualMarca({ lang = "pt", email }: { lang?: Idioma; email: string }) {
  const t = T[lang];
  const r = t.regras;
  return (
    <>
      {/* Apresentação e links */}
      <section className="secao" id="links">
        <div className="container" style={{ display: "grid", gap: "2rem" }}>
          <div className="prosa" style={{ maxWidth: "var(--largura-texto)" }}>
            <p className="lead">{t.intro.resumo}</p>
            <p className="aviso">{t.intro.aviso}</p>
          </div>
        </div>
      </section>

      {/* Resumo */}
      <section className="secao escuro" id="resumo">
        <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
          <div className="cabeca-secao">
            <span className="eyebrow">{t.resumoTitulo}</span>
            <h2 className="titulo-md">{r.principios.titulo}</h2>
          </div>
          <ol className="manual-principios">
            {r.principios.itens.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="secao">
        <div className="container" style={{ display: "grid", gap: "3rem" }}>
          {/* Logo */}
          <div className="manual-bloco" id="logo">
            <div className="prosa">
              <h2 className="titulo-md">{r.logo.titulo}</h2>
              <p>{r.logo.texto}</p>
              <ul className="lista-grafismo">
                {r.logo.cores.map(([nome, uso]) => (
                  <li key={nome}>
                    <span>
                      <strong>{nome}:</strong> {uso}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="manual-versoes">
              {(["horizontal", "vertical", "simbolo"] as const).map((v, i) => (
                <li key={v}>
                  <div className="manual-versoes__palco">
                    <img src={`/marca/bere-xikrin-${v}-600.webp`} alt={r.logo.alt(r.logo.versoes[i])} loading="lazy" />
                  </div>
                  <span>{r.logo.versoes[i]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Espaço e tamanho */}
          <div className="manual-bloco" id="espaco">
            <div className="prosa">
              <h2 className="titulo-md">{r.espaco.titulo}</h2>
              <p>{r.espaco.texto}</p>
            </div>
            <div>
              <h3 className="titulo-sm" style={{ marginBottom: "0.75rem" }}>{r.espaco.minimos}</h3>
              <table className="manual-tabela">
                <thead>
                  <tr>
                    {r.espaco.colunas.map((c) => (
                      <th key={c} scope="col">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {r.espaco.linhas.map(([v, mm, px]) => (
                    <tr key={v}>
                      <th scope="row">{v}</th>
                      <td>{mm}</td>
                      <td>{px}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cores */}
          <div id="cores" style={{ display: "grid", gap: "1.5rem" }}>
            <div className="prosa">
              <h2 className="titulo-md">{r.cores.titulo}</h2>
              <p>{r.cores.texto}</p>
            </div>
            <ul className="manual-cores">
              {CORES.map(([nome, hex, texto]) => (
                <li key={nome} style={{ background: hex, color: texto }}>
                  <strong>{nome}</strong>
                  <code>{hex}</code>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="secao escuro" id="linguagem">
        <div className="container manual-quatro">
          <div className="prosa">
            <h2 className="titulo-sm">{r.tipografia.titulo}</h2>
            <p className="manual-glifo" lang="txu">{r.tipografia.amostra}</p>
            <p>{r.tipografia.texto}</p>
          </div>
          <div className="prosa">
            <h2 className="titulo-sm">{r.grafismos.titulo}</h2>
            <p>{r.grafismos.texto}</p>
          </div>
          <div className="prosa">
            <h2 className="titulo-sm">{r.imagens.titulo}</h2>
            <p>{r.imagens.texto}</p>
          </div>
          <div className="prosa">
            <h2 className="titulo-sm">{r.voz.titulo}</h2>
            <p>{r.voz.texto}</p>
          </div>
        </div>
      </section>

      <section className="secao" id="erros">
        <div className="container" style={{ display: "grid", gap: "2rem" }}>
          <h2 className="titulo-md">{r.nunca.titulo}</h2>
          <ul className="manual-nunca">
            {r.nunca.itens.map((i) => (
              <li key={i}>
                <span aria-hidden="true">✕</span> {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="secao escuro" id="baixar">
        <div className="container" style={{ display: "grid", gap: "2rem" }}>
          <div className="cabeca-secao">
            <span className="eyebrow">{t.links.titulo}</span>
            <h2 className="titulo-md">{t.final.titulo}</h2>
            <p className="lead texto-corrido">{t.final.texto}</p>
          </div>
          <Botoes t={t} />
          <p>
            {t.links.contato} <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
