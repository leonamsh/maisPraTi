# 🎬 React Consumindo API (OMDb)

Aplicação em **React** que consome a [OMDb API (The Open Movie Database)](https://www.omdbapi.com/)  
Permite buscar filmes, ver detalhes e salvar favoritos no navegador.

---

## 🚀 Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/leonamsh/maisPraTi.git
cd maisPraTi
```

2. Acessar a branch correta
```bash
git checkout consumoAPI_ReactJS
```

3. Instalar as dependências
```bash
npm install
```

4. Criar o arquivo .env.local
Na raiz do projeto, crie um arquivo chamado .env.local e adicione sua chave da OMDb API:
```env
VITE_OMDB_API_KEY=SUA_CHAVE_AQUI
```
Você pode solicitar uma chave gratuita em omdbapi.com/apikey.aspx.

5. Rodar o servidor de desenvolvimento
```bash
npm run dev
```

6. Abrir no navegador
O terminal mostrará um endereço, geralmente:

<http://localhost:5173/> 

Acesse esse link no navegador para ver a aplicação rodando.

## 🛠️ Tecnologias utilizadas
- React

- Vite

- React Router

- Context API (para favoritos)

- LocalStorage (persistência de favoritos)

## 📂 Funcionalidades
- Página de busca: pesquisar filmes e navegar por páginas de resultados

- Página de detalhes: informações completas de um filme

- Lista de favoritos: adicionar/remover filmes e manter salvos no navegador

- Loading & erros: feedback visual durante requisições

## 💡 Observação
- Este projeto foi desenvolvido como desafio prático para o curso Trilha Dev. Full Stack Jr. 2025 da +praTi / Codifica.
