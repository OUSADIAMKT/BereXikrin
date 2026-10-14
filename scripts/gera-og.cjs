// Imagens de compartilhamento (Open Graph) em JPG 1200x630, a partir das fotos
// de public/img. LinkedIn e parte do WhatsApp não mostram WebP.
// Saída: public/og/<pasta>-<nome>.jpg. Uso: node scripts/gera-og.cjs
let sharp;
try { sharp = require("sharp"); } catch { sharp = require("D:/CLAUDE/ousadiamarketing.com.br/node_modules/sharp"); }
const fs = require("fs");
const path = require("path");
const PUB = path.join(__dirname, "..", "public");
const IMG = path.join(PUB, "img");
const OG = path.join(PUB, "og");
fs.mkdirSync(OG, { recursive: true });
function arquivos(d) {
  return fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? arquivos(path.join(d, e.name)) : [path.join(d, e.name)]));
}
(async () => {
  let n = 0;
  for (const f of arquivos(IMG)) {
    const rel = path.relative(IMG, f).split(path.sep).join("/");
    if (!rel.endsWith(".webp") || /-\d+w\.webp$/.test(rel) || rel.startsWith("diretoria/")) continue;
    const saida = path.join(OG, rel.replace(/\//g, "-").replace(/\.webp$/, ".jpg"));
    if (fs.existsSync(saida)) continue;
    await sharp(f).resize(1200, 630, { fit: "cover", position: "attention" }).jpeg({ quality: 78, mozjpeg: true }).toFile(saida);
    n++;
  }
  console.log(n, "imagens de compartilhamento");
})();
