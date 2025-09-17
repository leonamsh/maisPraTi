# Mini-Loja (4 versões de CSS)

Projeto de estudo que implementa a mesma tela em **4 abordagens diferentes de estilização** no React + Vite:

1. **CSS Global**
2. **CSS Modules**
3. **Tailwind CSS**
4. **styled-components**

Todas as versões incluem:
- Navbar fixa (logo, toggle de tema com persistência, badge do carrinho)
- Grid de produtos responsivo (1/2/3/4 colunas nos breakpoints definidos)
- Cards com imagem 1:1, título, preço, rating, tag, botão
- Estados de hover, focus, disabled, loading (skeleton)
- Dark mode aplicado em cores/sombras/bordas
- Acessibilidade (teclado, aria, contraste ≥ 4.5:1)
- Animações leves (150–250ms)

---

## 🚀 Como rodar cada projeto

Clone o repositório e troque para a branch:

```bash
git clone https://github.com/leonamsh/maisPraTi.git
cd maisPraTi
git checkout mini-loja
```

## 1) CSS Global

```bash
cd 01-css-global
npm i
npm run dev
```

## 2) CSS Modules

```bash
cd 02-css-modules
npm i
npm run dev
```

## 3) Tailwind CSS

```bash
cd 03-tailwind
npm i
npm run dev
```

## 4) styled-components

```bash
cd 04-styled-components
npm i
npm run dev
```

Abra no navegador a URL que o Vite indicar (geralmente http://localhost:5173)

## 📦 Pré-requisitos

- Node.js 18+ (recomendado 20+)
- npm (vem junto com Node)

Se algo der errado:

```bash
rm -rf node_modules package-lock.json
npm i
```
