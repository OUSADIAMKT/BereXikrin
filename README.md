# Site da Associação Indígena Berê Xikrin

Site novo de **berexikrin.org.br**, feito pela Ousadia Marketing em Next.js 16, exportado como site estático para a Hostinger (mesmo modelo do site da Ousadia).

## Rodar e publicar

| Comando | O que faz |
|---|---|
| `npm install` | Instala as dependências (Node 24) |
| `npm run dev` | Abre o site em http://localhost:3000 enquanto você edita |
| `npm run build` | Gera o site final em `out/` |
| `npm run deploy` | Gera o build e monta a branch `deploy`, que a Hostinger publica. O `git push origin deploy` fica para você conferir antes |

**Publicação:** no ar desde 13/10/2026. A Hostinger da Bere publica a partir da branch `deploy` do repositório **`xikrinbere/site`** (conta GitHub da própria Associação). O `origin` local envia para os dois repositórios ao mesmo tempo (`OUSADIAMKT/BereXikrin` e `xikrinbere/site`). Para publicar mudanças: commit na `main`, `npm run deploy` e `git push origin main deploy`.

## Código

| Caminho | O que é |
|---|---|
| `app/` | Páginas: início, sobre, cultura, território, projetos (+ uma por projeto), produtos, conteúdos, transparência, apoie, contato, privacidade |
| `components/` | Cabeçalho, rodapé, divisor (Fita do R), hero das páginas, card de projeto, aviso de página em construção |
| `lib/site.ts` | **Fonte única dos dados:** organização, redes, números, projetos, menu, notícias, parceiros |
| `lib/textos-projetos.ts` | Texto completo de cada projeto |
| `app/globals.css` | Importa `design-system/tokens.css` e `componentes.css` direto: o design system continua sendo a fonte das cores, fontes e grafismos |
| `public/.htaccess` | Redireciona os endereços do WordPress antigo para as páginas novas, cache e cabeçalhos de segurança |

## Documentação

| Caminho | O que é |
|---|---|
| `docs/organizacao.md` | Dados da associação: povo, território, números, diretoria, contato, redes, parceiros, vocabulário |
| `docs/mapa-do-site.md` | Mapa do site aprovado: menu, páginas, seções e redirecionamentos |
| `docs/referencia-pykore.md` | Análise do pykore.org.br, o site de inspiração |
| `docs/decisoes-e-pendencias.md` | O que já foi decidido, o que falta receber do cliente e o que ainda vai ser decidido |
| `Logo/` | Logo da Berê: SVGs originais do Canva e versões leves em `Logo/leves/` |
| `design-system/` | Cores, fontes, grafismos e componentes (v2) + autocrítica. Ver `design-system/README.md` |
| `referencias/` | Material de identidade recebido do cliente |
| `scripts/` | Scripts de apoio: exportação do WordPress antigo e geração dos logos |
| `legado/site-wordpress/` | Cópia dos textos e das imagens do site atual em WordPress |

## Situação em 13/10/2026

Mapa do site e design system aprovados. Site em Next.js construído (home e todas as páginas do menu), ainda não publicado. Páginas que dependem de material da Berê mostram um aviso de "em construção".

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
