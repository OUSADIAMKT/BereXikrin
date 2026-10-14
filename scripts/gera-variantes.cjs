// Gera versões menores (640, 960, 1280 px) de cada foto de public/img, para o
// navegador baixar só o tamanho de que precisa (srcset). Rode depois de
// acrescentar fotos: node scripts/gera-variantes.cjs
let sharp;
try { sharp = require("sharp"); } catch { sharp = require("D:/CLAUDE/ousadiamarketing.com.br/node_modules/sharp"); }
const fs = require("fs");
const path = require("path");

const RAIZ = path.join(__dirname, "..", "public", "img");
const LARGURAS = [640, 960, 1280];
const VARIANTE = /-(\d+)w\.webp$/;

function arquivos(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? arquivos(path.join(dir, e.name)) : [path.join(dir, e.name)],
  );
}

(async () => {
  let n = 0;
  for (const f of arquivos(RAIZ)) {
    if (!f.endsWith(".webp") || VARIANTE.test(f)) continue;
    const { width } = await sharp(f).metadata();
    for (const w of LARGURAS) {
      if (w >= width) continue;
      const saida = f.replace(/\.webp$/, `-${w}w.webp`);
      if (fs.existsSync(saida)) continue;
      await sharp(f).resize({ width: w }).webp({ quality: 74 }).toFile(saida);
      n++;
    }
  }
  console.log(`${n} variantes geradas`);
})();
