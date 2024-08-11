##  💻​ CodeConnect - Feed 💻​

Este projeto é um website dinâmico, construído com React, utilizando Vite como ferramenta de build e com atenção especial à organização e design.

## 💻 Tecnologias Utilizadas:

- React
- JavaScript
- Vite
- CSS

## 📂 Arquitetura do Projeto

### 📁 public/

Recursos estáticos, como imagens e ícones.

- `Group.svg`: Ícones publicos da aplicação.

### 📁 src/

Diretório principal do código-fonte.

- `main.jsx` 🚀: Ponto de entrada principal da aplicação.
- `App.jsx`: Componente principal da aplicação.
- `App.css`: Estilos globais da aplicação.
- `assets/`: Imagens e ícones específicos da aplicação.
- `componentes/`: Pasta contendo os componentes reutilizáveis da interface.
    - `BarraDePesquisa/`: Componente de barra de pesquisa.
        - `assets/`: Ícones específicos do componente.
        - `index.jsx`: Lógica do componente.
        - `style.css`: Estilos do componente.
    - `Card/`: Componente de card, provavelmente para exibir itens da galeria.
        - `assets/`: Imagens e ícones específicos do componente.
        - `index.jsx`: Lógica do componente.
        - `style.css`: Estilos do componente.
    - `Filtro/`, `Ordenacao/`: Componentes relacionados à filtragem e ordenação de itens.
    - `Sidebar/`: Componente de barra lateral para navegação.
        - `assets/`: Ícones específicos do componente.
        - `index.jsx`: Lógica do componente.
        - `styles.css`: Estilos do componente. 

### 📁 .git/

Pasta de controle de versão do Git. Contém histórico de commits, branches, etc.

### 📄 Arquivos da raiz:

- `.eslintrc.js`: Configurações do ESLint para estilo de código.
- `.gitignore`: Define arquivos e pastas ignorados pelo Git.
- `.vscodeignore`: Define arquivos e pastas ignorados pelo VS Code.
- `eslint.config.js`: Arquivo de configuração do ESLint.
- `index.html`: Arquivo HTML principal, onde o React será renderizado.
- `package-lock.json`, `package.json` 📦: Gerenciamento de dependências.
- `README.md` 📄: Este arquivo, com a documentação do projeto.
- `vite.config.js`: Configurações da ferramenta de build Vite.

## Descrição do Projeto
Este projeto está presente no curso "React: configurando e estruturando projetos com Vite" da plataforma alura.

## Desenvolvimento
Neste projeto foi estudado a forma de começar um projeto em React utilizando do servidor de desenvolvimento local chamado Vite, durante o curso foi-se desenvolvido os componentes presentes no figma disponibilizados e por fim utilizando-os em conjunto para produzir a tela de Feed.

## Funcionalidades
Como funcionalidades do CodeConnect temos o Feed dinamico que pesquisa os dados em uma API externa disponibilizada pela Alura que recolhe as informações e constrói o Feed.

## Screenshots

### Pagina de Feed
<img src="https://imgur.com/KNBZ6B1.jpg" alt="Tela de Feed do CodeConnect">
