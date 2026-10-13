# Site Berê Xikrin

Antes de qualquer trabalho neste projeto, leia `README.md` e os arquivos de `docs/`. Eles guardam o mapa do site aprovado, os dados da associação e as decisões já tomadas com o cliente.

- Ao tomar uma decisão nova com o cliente ou receber material dele, atualize `docs/decisoes-e-pendencias.md`.
- `legado/site-wordpress/` é cópia de referência do site antigo: não edite, só consulte.
- O site da Ousadia (`D:\CLAUDE\ousadiamarketing.com.br`) usa a mesma stack (Next.js com export estático e deploy na Hostinger) e serve de modelo técnico.

## Código
- Next.js 16 com `output: "export"` (ver `next.config.ts`). Sem Tailwind: o CSS vem do design system (`app/globals.css` importa `design-system/*.css`). Dados em `lib/site.ts`.
- Antes de mexer em APIs do Next, consulte `node_modules/next/dist/docs/`: esta versão difere do que você conhece (ex.: `params` é Promise, `PageProps`/`LayoutProps` são globais).
- Redirecionamento só pelo `public/.htaccess` (a exportação estática não suporta `redirects`).
- Para capturas de celular, o Chrome headless no Windows não desenha viewport menor que ~500 px: use um iframe de 390 px.
