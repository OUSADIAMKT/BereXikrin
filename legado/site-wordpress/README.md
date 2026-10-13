# Site atual em WordPress (legado)

Cópia do conteúdo de **berexikrin.org.br** feita em 13/10/2026, antes da troca pelo site novo.
O site atual usa WordPress com o tema OceanWP e o Elementor, ligado ao WordPress.com pelo Jetpack.

## `textos/`
Uma página por arquivo `.md`, com o texto extraído automaticamente e, no fim, a lista das imagens que a página usa. O rodapé "Contato", repetido em todas as páginas, foi removido. Revise antes de reaproveitar: a extração do Elementor perde parte da formatação.

| Arquivo | Conteúdo |
|---|---|
| home.md | Apresentação, diretoria, Plano de Vida, Belo Monte |
| quem-somos.md | Mẽbêngôkre, Ngàb, Kukradjà, a floresta |
| nosso-territorio.md | Produtos da floresta (texto curto) |
| plano-de-vida.md | Plano de Vida da TI (2017) |
| usina-belo-monte.md | Histórico de Belo Monte e o PBA |
| pba-ci.md | Parceria com a executora do PBA-CI |
| ci-brasil.md | Restaura Amazônia (2026–2030) |
| casa-do-guerreiro.md | Construção da Ngàb |
| rituais-tradicionais.md | Apoio aos rituais desde 2018 |
| monitoramento-do-pescado.md | Jovens monitorando o Rio Bacajá |
| fundo-casa-socioambiental.md | Internet nas aldeias |
| prefeitura-de-anapu.md | 1.000 mudas cítricas |
| produtos.md | Sociobiodiversidade da TI |
| transparencia.md | Vazia |
| politica-de-privacidade.md | Contém por engano o texto de exemplo de Transparência |

## `imagens/`
Biblioteca de mídia completa: 110 de 111 arquivos, 46 MB. O nome segue `ano_mes_arquivo-original`.
- `_lista.tsv`: data de upload, tipo, texto alternativo e URL original de cada arquivo.
- `_demo-de-tema-nao-e-da-bere/`: imagens de demonstração de tema antigo ("megagym"); não usar.
- Faltou só `mgym.png`, que estava num subdomínio antigo (`blog.berexikrin.org.br`) que não existe mais; também era demonstração do tema.
- Gerado por `scripts/exporta-wordpress.py` (`python -I scripts/exporta-wordpress.py legado/site-wordpress`). As imagens não vão para o Git; rode o script para baixá-las de novo enquanto o WordPress estiver no ar.
