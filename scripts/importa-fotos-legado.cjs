// Converte as fotos do site antigo (legado/site-wordpress/imagens) para WebP
// leve em public/img/. Uso: node scripts/importa-fotos-legado.cjs
let sharp;
try { sharp = require("sharp"); } catch { sharp = require("D:/CLAUDE/ousadiamarketing.com.br/node_modules/sharp"); }
const fs = require("fs");
const path = require("path");

const ORIGEM = path.join(__dirname, "..", "legado", "site-wordpress", "imagens");
const DESTINO = path.join(__dirname, "..", "public", "img");

// [arquivo de origem, destino relativo, largura máxima, recorte opcional "LxA"]
const FOTOS = [
  ["2025_01_casa-guerreiro-1.webp", "projetos/casa-do-guerreiro-1", 1200],
  ["2025_01_casa-guerreiro-2.webp", "projetos/casa-do-guerreiro-2", 1200],
  ["2025_01_casa-guerreiro-3.webp", "projetos/casa-do-guerreiro-3", 1200],
  ["2025_01_casa-guerreiro-4.webp", "projetos/casa-do-guerreiro-4", 1200],
  ["2025_01_casa-guerreiro-5.webp", "projetos/casa-do-guerreiro-5", 1200],
  ["2025_01_rituais-1.webp", "projetos/rituais-1", 1200],
  ["2025_01_rituais-2.webp", "projetos/rituais-2", 1200],
  ["2025_01_rituais-3.webp", "projetos/rituais-3", 1200],
  ["2025_01_rituais-5.webp", "projetos/rituais-5", 1200],
  ["2025_01_pescado-1.webp", "projetos/pescado-1", 1200],
  ["2025_01_pescado-2.webp", "projetos/pescado-2", 1200],
  ["2025_01_socioambiental-1.webp", "projetos/internet-1", 1200],
  ["2025_01_socioambiental-2.webp", "projetos/internet-2", 1200],
  ["2025_01_socioambiental-3.webp", "projetos/internet-3", 1200],
  ["2025_01_socioambiental-4.webp", "projetos/internet-4", 1200],
  ["2025_01_prefeitura-1.webp", "projetos/mudas-1", 1200],
  ["2025_01_prefeitura-2.webp", "projetos/mudas-2", 1200],
  ["2025_01_prefeitura-3.webp", "projetos/mudas-3", 1200],
  ["2025_01_usina-1.webp", "projetos/belo-monte-usina", 1200],
  ["2025_01_projetos-1.webp", "menire/menire-1", 1200],
  ["2025_01_projetos-2.webp", "menire/menire-2", 1200],
  ["2025_01_projetos-4.webp", "menire/menire-4", 1200],
  ["2025_01_projetos-5.webp", "menire/menire-5", 1200],
  ["2025_01_projeto-6.webp", "menire/menire-6", 1200],
  ["2025_01_projetos-7.webp", "menire/menire-7", 1200],
  ["2025_01_projetos-8.webp", "menire/menire-8", 1200],
  ["2025_01_projetos-9.webp", "menire/menire-9", 1200],
  ["2025_01_produtos-01.webp", "produtos/cacau-muda", 1200],
  ["2025_01_produtos-02.webp", "produtos/sementes", 1200],
  ["2025_01_produtos-03.webp", "produtos/artefatos", 1200],
  ["2025_01_produtos-04.webp", "produtos/cacau-fruto", 1200],
  ["2024_11_capa-1-sem-logo.png", "capas/danca", 1920],
  ["2024_11_capa-2.jpg", "capas/pintura-corporal", 1920],
  ["2024_11_capa-3-_1_.jpg", "capas/ngab", 1920],
  ["2024_11_capa-4.jpg", "capas/rio-pedras", 1920],
  ["2024_11_capa-5.jpg", "capas/rio-canoa", 1920],
  ["2024_11_capa-6.jpg", "capas/aldeia-aerea", 1920],
  ["2024_11_capa-7.jpg", "capas/reuniao-ngab", 1920],
  ["2025_01_home-quem-somos-4.webp", "cultura/pintura", 1200],
  ["2025_01_home-quem-somos-5.webp", "cultura/floresta", 1200],
  ["2025_01_home-quem-somos-6.webp", "cultura/canoa", 1200],
  ["2025_01_home-quem-somos-3.webp", "cultura/danca-noite", 1200],
  ["2024_11_dobra-1-img-3.png", "cultura/kubenget", 1000],
  ["2025_01_plano00-1.webp", "sobre/plano-de-vida-capa", 929],
  ["2025_01_plano01-1-scaled.webp", "sobre/plano-de-vida-oficina", 1200],
  ["2025_01_mapa00.webp", "territorio/mapa-ti", 1800],
  ["2024_11_Captura-de-tela-2024-11-07-113522.png", "diretoria/bep-kamati", 600],
  ["2024_11_Captura-de-tela-2024-11-07-114221.png", "diretoria/kadjore", 600],
  ["2024_11_Captura-de-tela-2024-11-07-114226.png", "diretoria/bep-ketoj", 600],
  ["2024_11_kangore.png", "diretoria/kangore", 600],
  ["2024_11_diretoria-4.png", "diretoria/piydjo", 600],
  ["2024_11_diretoria-5.png", "diretoria/bep-djyre", 600],
  ["2024_11_irekoti.png", "diretoria/irekoti", 600],
  ["2024_11_diretoria-6.png", "diretoria/nhoko", 600],
];

(async () => {
  let total = 0;
  for (const [orig, dest, largura] of FOTOS) {
    const saida = path.join(DESTINO, dest + ".webp");
    fs.mkdirSync(path.dirname(saida), { recursive: true });
    let img = sharp(path.join(ORIGEM, orig)).rotate();
    if (dest.startsWith("diretoria/")) img = img.resize(480, 520, { fit: "cover", position: "top" });
    else img = img.resize({ width: largura, withoutEnlargement: true });
    const info = await img.webp({ quality: 78 }).toFile(saida);
    total += info.size;
    console.log(dest.padEnd(34), `${info.width}x${info.height}`, `${(info.size / 1024) | 0} KB`);
  }
  console.log(`\n${FOTOS.length} fotos, ${(total / 1024 / 1024).toFixed(1)} MB`);
})();
