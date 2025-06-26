# 📚 Atividades Avaliativas - Módulo 01 (Introdução à Programação)

Este projeto contém a resolução dos exercícios avaliativos do módulo 01 do curso **MaisPraTi**. Cada exercício está modularizado em seu próprio arquivo, e há um menu interativo para execução via terminal.

---

## ✅ Pré-requisitos

- Node.js (versão recomendada: 18 ou superior)
- Terminal

---

## 🚀 Como rodar

1. **Abra o terminal dentro da pasta do projeto**:

```bash
cd modulo-01-introducao/atividades/atividadesAvaliativas
```

2. **Inicialize o projeto Node (se ainda não tiver feito):**

```bash
npm init -y
```

3. **Instale as dependências:**

```bash
npm install prompt-sync
```

---

## ▶️ Executando o menu de exercícios

Com tudo instalado, rode o menu principal:

```bash
node menu.js
```

Você verá algo assim:

```bash
Digite o número do exercício (1 a 15) ou '0' para sair:
```

Escolha um número e veja a execução correspondente.

---

## 🧩 Organização

- Cada exercício está em um arquivo separado: ex1.js, ex2.js, ..., ex15.js
- O arquivo menu.js carrega todos os exercícios e permite selecionar via terminal
- O projeto usa CommonJS (require/module.exports)

---

## 📌 Observações

- Todos os exercícios estão escritos em JavaScript puro
- Modularização facilita a manutenção e leitura do código
- Código 100% executável via terminal, sem necessidade de navegador

---

## 📁 Estrutura do projeto

```
atividadesAvaliativas/
│
├── ex1.js
├── ex2.js
├── ...
├── ex15.js
├── index.mjs
├── menu.js
├── package.json
└── README.md  ← (você está aqui!)
```

---

## ✍️ Autor

Leonam — Técnico em Eletrônica, entusiasta de Linux, segurança e programação full stack ⚡
