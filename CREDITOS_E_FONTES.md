# CRÉDITOS, LICENÇA E FONTES DE DADOS

**Projeto:** Livro "A Tecnologia na Fronteira da Justiça Climática e Democratização de
Crédito de Carbono" + Plataforma ECOMNIX v2
**Autor/PI:** Optimus · **Agentes:** Pesquisador (Sentinel), Agente Clima, Estúdio,
Dev-Sênior, Defesa Cibernética, QA Editorial
**Data de fechamento:** 2026

---

## 1. Licença

- **Código da plataforma (ECOMNIX v2):** MIT — ver `LICENSE` no repositório
  `github.com/onecio/ecomnix`.
- **Conteúdo do livro (21 capítulos + front matter):** proposto **CC BY 4.0**
  (atribuição), coerente com o princípio de Ciência Aberta da `DIRETRIZ_GOVERNANCA.md`.
  ⚠️ Confirmar com o autor antes de aplicar.
- **Ilustrações:** geradas via ComfyUI local. A licença final depende do
  **checkpoint/modelo** usado em cada geração (registrado no `manifest.json` do pacote
  de imagens). ⚠️ Verificar a licença de cada checkpoint antes de redistribuir.

## 2. Créditos de imagem

21 ilustrações (uma por capítulo) em estilo editorial vetorial, paleta "Amazônia +
terra", geradas pelo agente **Estúdio** via ComfyUI. Pacote completo (PNG + SVG
editável + prompts + seeds + parâmetros + QA) em:

```
~/LIVRO_CARBONO_ECOMNIX/imagens/climate-justice-book-illustrations/
```

Cada imagem tem prompt, seed e checkpoint registrados (ver `prompts/*.md`,
`verification.json` e `manifest.json`). Os SVGs garantem resolução de impressão.

## 3. Fontes de dados (consolidadas por domínio)

### Emissões e clima
- **SEEG / Observatório do Clima** — emissões de GEE do Brasil (12ª e 13ª edições). https://seeg.eco.br
- **IPCC AR6** — WG1 (base física), WG2 (impactos), WG3 (mitigação), Synthesis Report. DOIs Cambridge UP.
- **MCTI** — Inventário Nacional de GEE.

### Território e monitoramento
- **MapBiomas** — Fogo, Alerta (RAD), Mineração. https://brasil.mapbiomas.org
- **INPE** — PRODES, DETER, Programa Queimadas. https://terrabrasilis.dpi.inpe.br
- **IBGE** — Censo Demográfico 2022; Características Urbanísticas.
- **ANA / SINIRH** — Conjuntura dos Recursos Hídricos.

### Mercado de carbono e regulação
- **Lei nº 15.042/2024 (SBCE)** e Decretos regulamentadores. gov.br/Planalto.
- **CVM** — Resolução 223/2024 e FAQ Mercado Regulado de Carbono.
- **FGV Agro / OCBio (2022)** — participação de certificadoras (Verra 92,2%).
- **Ecosystem Marketplace / Forest Trends** — State of the Voluntary Carbon Markets.
- **Banco Mundial** — State and Trends of Carbon Pricing; danos de incêndio 2024.
- **BNDES** — Fundo Clima, Relatório Anual, consulta pública de certificação.
- **Sylvera** — análise do mercado brasileiro.

### Fontes de casos e irregularidades (atribuídas à fonte)
- Polícia Federal — Operação Greenwashing (2024).
- Jornalismo investigativo: The Guardian (2023), Washington Post (2024), Mongabay (2025),
  SUMAÚMA (2024), Human Rights Watch (2024), G1, CNN Brasil, InfoMoney.

### Ciência aplicada e acadêmica
- **EMBRAPA** — Pecuária Sudeste (3-NOP), Cerrados (queima prescrita).
- Oliveira (2018, tese UFV); Pivello et al. (2021); Guidotti et al. (2017); Silva et
  al. (2022); Palazzo Corner et al. (2023); Bond & Keeley (2005).
- Teoria da justiça: Schlosberg (2007); Fraser (2008).

> A lista completa, com URL/DOI e data de acesso de cada referência, está em
> `~/LIVRO_CARBONO_ECOMNIX/dossiers/` e nas seções "Fontes citadas" de cada capítulo.

## 4. Declaração de uso de IA

Este projeto foi produzido com assistência de inteligência artificial (agentes de
pesquisa, redação, ilustração e revisão), sob supervisão humana do autor. Toda
afirmação factual foi verificada contra a fonte primária antes de entrar no texto;
nenhuma saída de IA foi incorporada como fato sem verificação. Referências foram
checadas individualmente (DOI/URL resolvível). Itens sem fonte primária estão marcados
**NÃO VERIFICADO**.

## 5. Rastreabilidade

- Projeto versionado em Git; dossiês com URL/DOI + data de acesso.
- Trilha de auditoria: `DIRETRIZ_GOVERNANCA.md`, `DECISOES_METODOLOGICAS.md`,
  pareceres de QA em `~/LIVRO_CARBONO_ECOMNIX/QA/`.
- Anti-alucinação: zero referência inventada; 3 monetizações marcadas NÃO VERIFICADO.
