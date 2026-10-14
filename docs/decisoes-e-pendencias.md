# Decisões e pendências

## Decidido

| Data | Decisão |
|---|---|
| 13/10/2026 | Site novo em **Next.js**, publicado como site estático (mesmo modelo do site da Ousadia na Hostinger). O WordPress atual serve só como fonte de conteúdo. |
| 13/10/2026 | Estrutura inspirada no **pykore.org.br**. |
| 13/10/2026 | Mapa do site aprovado (`mapa-do-site.md`). **Belo Monte vai dentro do menu Projetos.** |
| 13/10/2026 | **Produtos e Loja** entram no site. No lançamento, catálogo com "em breve"; a venda abre logo depois. |
| 13/10/2026 | Números da home confirmados: 16 aldeias · 387 pessoas · 111 famílias. |
| 14/10/2026 | **Fase 1 da auditoria + conteúdo do Panorama publicados.** Fotos responsivas (srcset), visualizador de galeria, imagens de compartilhamento JPG por página, canônico e títulos completos, erros 404 de pré-carregamento corrigidos no .htaccess, favicon.ico, CSP completa, HSTS com subdomínios, security.txt, "EN" removido. Conteúdo na voz da Associação: Sobre com missão, visão, governança, Rede Berê e trajetória; Território com dados e Belo Monte; Restaura completo (sem números de área nem valores); menire; Transparência com registro e financiadores; Glossário novo. Diretoria mantida como estava (cliente atualiza depois). Sede: Altamira. |
| 14/10/2026 | **Publicação pelo GitHub funcionando.** A Hostinger da Bere implanta a branch `deploy` de `xikrinbere/site` em `public_html`. Pegadinha: a primeira implantação só gravou depois que a `public_html` foi esvaziada (com os arquivos do zip lá, falhava sem aviso). Versão com rodapé novo e marca d'água no ar às 22h47 de 13/10 (Belém). |
| 14/10/2026 | **Grafismo só como marca d'água.** A faixa "Fita do R" saiu das costuras entre seções (e do topo dos cards); cada seção tem o grafismo no fundo, grande e quase transparente: quadrados do selo nas claras, listras em V nas escuras. Rótulos e marcadores de lista continuam. |
| 14/10/2026 | **Rodapé novo** inspirado no Fundo Brasil: marca, redes em ícones redondos, links, contato e newsletter (nome, e-mail, consentimento LGPD) sobre foto da aldeia escurecida. Política de privacidade atualizada para a newsletter. |
| 13/10/2026 | **No ar, só conteúdo do site antigo.** Rascunhos de Cultura (revisado: false) e o parágrafo das menire ficam fora até a Associação aprovar; a página Cultura publica só os temas revisados. |
| 13/10/2026 | **Conteúdo antes de subir:** fotos reais do site antigo em todo o site (galeria por projeto, diretoria com fotos, Plano de Vida, mapa da TI, artesanato das menire, capas); rascunhos de Cultura. A branch deploy NÃO foi atualizada: ainda tem a versão anterior. |
| 13/10/2026 | **Publicação autorizada.** Branch `deploy` enviada ao GitHub (commit c3f4823, fonte 09205e0). Falta ligar na Hostinger: backup do WordPress, esvaziar `public_html`, Implante de GitHub (repo OUSADIAMKT/BereXikrin, branch `deploy`). |
| 13/10/2026 | **Os 300 ha do Restaura Amazônia saem do site** a pedido do cliente (números, resumo do projeto, notícia e texto da página). |
| 13/10/2026 | Versão em **inglês** fica para a 2ª fase. |
| 13/10/2026 | Redes no site: Instagram, TikTok, YouTube e LinkedIn (links em `organizacao.md`). |
| 13/10/2026 | **Design system v2** em `design-system/`: paleta urucum/jenipapo/palha + acentos pequi/arara/floresta, Unbounded + Be Vietnam Pro, grafismos derivados do logo. Autocrítica em `design-system/critica.md`. |
| 13/10/2026 | Design system aprovado; site começado em Next.js, sem Tailwind, usando o CSS do design system. |
| 13/10/2026 | A prancha de grafismos recebida (Ajuawuiaki, Kumana, Jawarajuryna…) **não é usada**: os nomes são tupi, provavelmente Asurini do Xingu, não Mẽbêngôkre. Imagens geradas por IA (onça, arara, rio, folhagens, cestaria) também ficaram de fora. |

## Aguardando o cliente

- [ ] Nome, localização e fotos das **16 aldeias**
- [x] **Logo:** 3 versões SVG recebidas em 13/10/2026 (exportação do Canva, pesadas). Versões leves geradas em `Logo/leves/` (PNG 2000 px, WebP, ícones e avatar). Se existir o vetorial original do designer, ainda vale guardar
- [~] **Fotos:** 54 fotos do site antigo importadas (scripts/importa-fotos-legado.cjs). Ainda vale receber fotos novas do território, das aldeias, das pessoas e dos rituais (o material de drone está em `D:\BKP DRONE`)
- [ ] Cores ou grafismos que a Berê já usa, ou que quer evitar
- [ ] **Revisar os rascunhos de Cultura** (lib/cultura.ts, revisado: false): Pinturas corporais, Artesanato e adornos, Língua Mẽbêngôkre, Caça pesca e coleta, Kubengêt e as histórias, Comida e roça. Escritos em 13/10/2026 a partir do ISA (Povos Indígenas no Brasil) e de Lux Vidal; parte das fontes fala dos Kayapó/Xikrin em geral, não só do Bacajá. A página mostra aviso de revisão até todos virarem revisado: true
- [ ] Documentos da Transparência: prestações de contas, estatuto, CNPJ, atas
- [ ] **Ligar a newsletter do rodapé**: na conta Google da Berê, criar uma planilha, colar `docs/apps-script/newsletter-bere.gs` em Extensões > Apps Script, implantar como App da Web (Executar como: Eu; Acesso: Qualquer pessoa) e mandar a URL /exec. Até lá o formulário avisa que a newsletter está sendo ligada e indica o e-mail.
- [ ] Dados para o **Apoie**: chave PIX e conta bancária da associação
- [ ] PDF do **Plano de Vida**, se já puder ser publicado
- [ ] Logos dos parceiros
- [ ] Confirmar a grafia: Kukradjà ou Kukradjá
- [x] **Grafismos do design system validados** pelo cliente em 13/10/2026 (derivados do logo, uso como divisor e marcador liberado). Se surgirem grafismos Xikrin próprios (pintura com jenipapo), entram com nome e significado
- [x] **Autorizações de uso de imagem**: o cliente confirmou em 13/10/2026 que a Associação tem as autorizações
- [ ] Endereço completo da sede em Altamira e confirmação no estatuto de 2023 (a ata de 2018 registra a Krãnh)
- [ ] Diretoria atual com fotos (Panorama traz a nova composição)
- [ ] Autorização de Pedro Rafael Pojo S. para o mapa (crédito já publicado)
- [ ] Valores do Restaura e nomes da equipe: publicar? Régua de logos e manual da CI
- [ ] Crédito das fotos de drone: Ousadia Marketing ou nome do piloto?
- [x] Divisor entre seções: aprovado em 13/10 sem escolha explícita; aplicada a **Opção 1, Fita do R** (`components/Divisor.tsx`). Trocar é mudar um arquivo. Opções: (5 opções no design system: Fita do R, Quadrados do selo, Pontas de flecha, Listras em V, Triângulos alternados)
- [ ] Selo do logo em versão negativa (contorno branco) com o designer

## A decidir depois

- **Como a loja vai vender.** O site é estático, então a venda passa por um serviço de fora:
  1. pedido pelo WhatsApp: o mais simples, sem custo;
  2. link de pagamento do Mercado Pago ou PagSeguro em cada produto;
  3. Shopify embutido no site: o mais completo, com mensalidade.
- ~~Onde fica a hospedagem~~: **Hostinger**, confirmado em 13/10/2026. Publicação pelo mesmo fluxo do site da Ousadia (branch `deploy`, Implante de GitHub no painel). Publicar substitui o WordPress atual.

## Próximo passo

Site em Next.js construído em 13/10/2026 (home + todas as páginas do menu + 7 páginas de projeto), não publicado. Próximo: revisão do cliente, depois conteúdo pendente (aldeias, cultura, transparência, PIX) e newsletter/formulário de contato.

## Observações sobre o site atual

- A página Transparência está vazia, e o texto de exemplo do tema, em inglês, ficou na Política de Privacidade.
- A biblioteca de mídia tem imagens de demonstração de um tema antigo ("megagym"). Elas foram separadas em `legado/site-wordpress/imagens/_demo-de-tema-nao-e-da-bere/`.
- **Acesso:** a senha de login do usuário `xikrinbere` foi compartilhada no chat em 13/10/2026. Recomendado trocá-la. Para a API do WordPress é preciso uma senha de aplicativo; o conector WordPress.com exige Jetpack AI ou Complete (pago).
