# ☕ Cafeteria Serenatto

Este repositório contém o código-fonte e a documentação do projeto, incluindo instruções para instalação e uso. Sinta-se à vontade para explorar e sugerir melhorias.

Este projeto é uma landing page moderna e responsiva para a **Cafeteria Serenatto**, desenvolvida com foco em HTML semântico, estilização avançada com Sass (SCSS) e otimização de fluxo de trabalho. O projeto foi construído com base nos aprendizados das aulas da Alura, visando demonstrar habilidades em desenvolvimento web front-end.

## ✨ Visão Geral do Projeto

A Cafeteria Serenatto busca oferecer uma experiência digital que reflita a qualidade e o aconchego de seus produtos. A página apresenta informações sobre os cafés, smoothies, pães, doces e salgados, com uma interface amigável e design moderno.

## 🚀 Tecnologias Utilizadas

* **HTML5:** Estruturação semântica do conteúdo da página.
* **Sass (SCSS):** Pré-processador CSS essencial para uma estilização robusta, organizada e de fácil manutenção, com destaque para o uso de:
    * **Mixins:** Para reutilização de blocos de estilo CSS, como estilos de botões, responsividade e transições (`@include`).
    * **Functions:** Para realizar cálculos e manipulações de valores (ex: cores, tamanhos), tornando o CSS mais dinâmico e inteligente.
    * **%Placeholders (Extend):** Para compartilhar conjuntos de propriedades CSS de forma eficiente e evitar duplicação de código.
* **JavaScript:** Para interatividade leve e funcionalidades dinâmicas (como navegação, carrosséis, etc., se aplicável).
* **Vite:** Ferramenta de build de próxima geração que garante um ambiente de desenvolvimento rápido e eficiente.
* **Vercel:** Plataforma para deploy e hospedagem da aplicação.

## ⚙️ Como Rodar o Projeto (Desenvolvimento)

Para rodar este projeto em sua máquina local, siga os passos abaixo:

1.  **Baixe ou clone o código:** Obtenha os arquivos do projeto para sua máquina.
2.  **Navegue até o diretório do projeto:** Abra o terminal na pasta raiz do projeto.
3.  **Instale as dependências:**
    ```bash
    npm install
    # ou yarn install
    # ou pnpm install
    ```
4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou yarn dev
    # ou pnpm dev
    ```
    O projeto será aberto no seu navegador, geralmente em `http://localhost:5173`.

## 📦 Como Gerar a Build para Produção

Para criar uma versão otimizada do projeto para deploy:

```bash
npm run build
# ou yarn build
# ou pnpm build