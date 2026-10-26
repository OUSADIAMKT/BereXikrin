const sharp = require("sharp");
/** Gera a versão toda branca (fundo transparente) de um logo: a tinta vira branco, o claro vira transparente.
 * Uso: node scripts/gera-logo-branco.cjs entrada.png saida.png */
const [,, src, dst] = process.argv;
(async () => {
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const m = Math.min(data[i], data[i + 1], data[i + 2]);
    // tinta (escura ou colorida) vira branco opaco; o que já era claro vira transparente
    const k = Math.max(0, Math.min(1, (235 - m) / 65));
    data[i + 3] = Math.round(data[i + 3] * k);
    data[i] = data[i + 1] = data[i + 2] = 255;
  }
  await sharp(data, { raw: info }).png({ compressionLevel: 9 }).toFile(dst);
})();
