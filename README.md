# Site da Associação Indígena Berê Xikrin

Site novo de **berexikrin.org.br**, feito pela Ousadia Marketing. O código do site (Next.js) ainda vai ser criado nesta pasta.

## Onde está cada coisa

| Caminho | O que é |
|---|---|
| `docs/organizacao.md` | Dados da associação: povo, território, números, diretoria, contato, redes, parceiros, vocabulário |
| `docs/mapa-do-site.md` | Mapa do site aprovado: menu, páginas, seções e redirecionamentos |
| `docs/referencia-pykore.md` | Análise do pykore.org.br, o site de inspiração |
| `docs/decisoes-e-pendencias.md` | O que já foi decidido, o que falta receber do cliente e o que ainda vai ser decidido |
| `Logo/` | Logo da Berê: SVGs originais do Canva e versões leves em `Logo/leves/` |
| `scripts/` | Scripts de apoio: exportação do WordPress antigo e geração dos logos |
| `legado/site-wordpress/` | Cópia dos textos e das imagens do site atual em WordPress |

## Situação em 13/10/2026

Mapa do site aprovado. Próximo passo: identidade visual e construção da home.

## Logo

Os SVGs em `Logo/` são os originais exportados do Canva (2,5 a 6,5 MB cada). Use as versões leves de `Logo/leves/`:

| Arquivo | Uso |
|---|---|
| `bere-xikrin-horizontal.png` / `-1200.webp` / `-600.webp` | Cabeçalho do site, documentos, assinaturas |
| `bere-xikrin-vertical.png` / `-1200.webp` / `-600.webp` | Rodapé, capas, materiais quadrados ou verticais |
| `bere-xikrin-simbolo.png` / `-1200.webp` / `-600.webp` | Selo, marca d'água, espaços pequenos |
| `icone-512.png`, `icone-192.png`, `apple-touch-icon.png`, `favicon-32.png` | Ícone do site no navegador e no celular |
| `avatar-redes-1080.png` | Foto de perfil nas redes (fundo branco) |

Os PNG têm 2000 px no lado maior e fundo transparente. Para gerar de novo: `node scripts/gera-logos.cjs Logo Logo/leves`.
