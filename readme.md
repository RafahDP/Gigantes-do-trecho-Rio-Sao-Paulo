# 🚍 Gigantes do Trecho: Rio ⇆ São Paulo

Plataforma web interativa desenvolvida para mapear, analisar e comparar os dados técnicos, frotas, preços e diferenciais das principais operadoras de transporte rodoviário que atuam na rota Rio de Janeiro ⇆ São Paulo.

O projeto foi construído com foco em usabilidade e design responsivo, permitindo ao usuário uma tomada de decisão clara na escolha da melhor empresa para sua viagem.

## 🚀 Funcionalidades
* **Comparação Lado a Lado:** Seleção dinâmica de duas operadoras simultaneamente.
* **Mapeamento de Critérios:** Avaliação baseada em pilares como Grupo Econômico, Configuração da Frota, Destaque Técnico, Infraestrutura de Apoio, Preço Médio e Diferenciais de Mercado.
* **Injeção Dinâmica de Dados:** Atualização instantânea dos dados na tabela através do JavaScript, sem necessidade de recarregar a página (Single Page Experience para o comparador).
* **Imagens Responsivas:** Otimização de mídia para diferentes resoluções de tela.

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Estruturação semântica das páginas e formulários de seleção.
* **CSS3:** Estilização moderna em modo escuro (*dark mode*), com foco em legibilidade e experiência do usuário (UX).
* **JavaScript (ES6+):** Manipulação dinâmica do DOM para gerenciamento do banco de dados local das empresas e eventos de seleção.

## 📁 Estrutura de Arquivos

Abaixo está a organização estrutural do projeto para facilitar a manutenção:

```text
├── index.html                       # Página inicial e portal de entrada do projeto
├── companyComparator.html           # Tela principal do comparador interativo
└── assets/                          # Recursos estáticos do projeto
    ├── js/
    │   ├── companyComparator.js     # Lógica de manipulação da tabela e banco de dados
    │   └── scripts.js               # Comportamentos globais de navegação
    └── img/
        ├── Penha-480.jpeg           # Mídia otimizada para dispositivos móveis
        ├── Penha-768.jpeg           # Mídia otimizada para tablets
        └── Penha-1200.jpeg          # Mídia em alta resolução para desktops
