// Gera as versões leves do logo a partir dos SVGs do Canva.
// Uso: node scripts/gera-logos.cjs Logo Logo/leves
let sharp;
try { sharp = require('sharp'); } catch { sharp = require('D:/CLAUDE/ousadiamarketing.com.br/node_modules/sharp'); }
const fs = require('fs');
const [,, src, out] = process.argv;
fs.mkdirSync(out, { recursive: true });
const versoes = [[1, 'bere-xikrin-horizontal'], [2, 'bere-xikrin-vertical'], [3, 'bere-xikrin-simbolo']];
const kb = f => (fs.statSync(f).size / 1024).toFixed(0) + ' KB';
(async () => {
  for (const [n, nome] of versoes) {
    const full = await sharp(`${src}/Logo Bere (${n}).svg`, { density: 72 }).png().toBuffer();
    const { channels, hasAlpha } = await sharp(full).metadata();
    const base = await sharp(full).trim().png().toBuffer();
    const { width, height } = await sharp(base).metadata();
    console.log(`\n${nome}: ${width}x${height} (alpha=${hasAlpha}, canais=${channels})`);
    const pad = Math.round(Math.max(width, height) * 0.03);
    const comMargem = await sharp(base).extend({ top: pad, bottom: pad, left: pad, right: pad, background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
    const saidas = [
      [`${nome}.png`, s => s.resize({ width: 2000, height: 2000, fit: 'inside' }).png({ compressionLevel: 9, palette: true, quality: 95 })],
      [`${nome}-1200.webp`, s => s.resize({ width: 1200, height: 1200, fit: 'inside' }).webp({ quality: 90, alphaQuality: 100 })],
      [`${nome}-600.webp`, s => s.resize({ width: 600, height: 600, fit: 'inside' }).webp({ quality: 90, alphaQuality: 100 })],
    ];
    for (const [arq, fn] of saidas) {
      const f = `${out}/${arq}`;
      await fn(sharp(comMargem)).toFile(f);
      const m = await sharp(f).metadata();
      console.log(`  ${arq.padEnd(36)} ${m.width}x${m.height}  ${kb(f)}`);
    }
    if (nome.endsWith('simbolo')) {
      const quadrado = await sharp(comMargem).resize(1024, 1024, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
      for (const [arq, px, fundo] of [['icone-512.png', 512], ['icone-192.png', 192], ['apple-touch-icon.png', 180, '#ffffff'], ['favicon-32.png', 32], ['avatar-redes-1080.png', 1080, '#ffffff']]) {
        let s = sharp(quadrado).resize(px, px);
        if (fundo) s = sharp(await sharp(quadrado).resize(Math.round(px * 0.86), Math.round(px * 0.86)).png().toBuffer()).extend({ top: Math.round(px * 0.07), bottom: px - Math.round(px * 0.86) - Math.round(px * 0.07), left: Math.round(px * 0.07), right: px - Math.round(px * 0.86) - Math.round(px * 0.07), background: fundo }).flatten({ background: fundo });
        const f = `${out}/${arq}`;
        await s.png({ compressionLevel: 9 }).toFile(f);
        console.log(`  ${arq.padEnd(36)} ${px}x${px}  ${kb(f)}`);
      }
    }
  }
})().catch(e => { console.error(e); process.exit(1); });
