# 📚 Atividades Avaliativas 2 - Módulo 01 (Introducao a Programacao)

Este projeto contem a resolucao dos exercicios avaliativos 2 do modulo 01 do curso **MaisPraTi**. Cada exercicio esta modularizado em seu proprio arquivo, e ha um menu interativo para execucao via terminal.

---

## ✅ Pre-requisitos

- **Node.js** (versao recomendada: 18 ou superior)
- **Terminal**

---

## 🚀 Como rodar

1.  **Abra o terminal dentro da pasta do projeto**:

    ```bash
    git clone https://github.com/leonamsh/maisPraTi.git
    cd maisPraTi/modulo-01-introducao/atividades/atividadesAvaliativas/listaExercicios2
    ```

2.  **Inicialize o projeto Node (se ainda nao tiver feito):**

    ```bash
    npm init -y
    ```
---

## ▶️ Executando os exercicios

Abra o seu terminal na pasta do projeto e use o comando `node` seguido do nome do arquivo `.js`:

```bash
node exercicio1.js
# ou
node exercicio2.js
# e assim por diante para cada exercicio (exercicio1.js ate exercicio9.js)
```

🧩 Organizacao

    Cada exercicio esta em um arquivo separado: exercicio1.js, exercicio2.js, ..., exercicio9.js

📌 Observacoes

    Todos os exercicios estao escritos em JavaScript puro.

    Modularizacao facilita a manutencao e leitura do codigo.

    Codigo 100% executavel via terminal, sem necessidade de navegador.

    Pergunta respondida com sucesso

Peço desculpas! Entendi o que "ficou estranho". A imagem que você me enviou mostra uma estrutura de pastas um pouco diferente da que eu estava presumindo no README.md. No seu exemplo, parece que os arquivos .js estão diretamente sob listaExercicios2/, e não dentro de uma subpasta como modulo-01-introducao/atividades/atividadesAvaliativas.

Além disso, a forma como eu exportei as funções no menu.js e a sugestão de modificação dos arquivos de exercício pode ter tornado o projeto mais complexo do que você gostaria para um iniciante.

Vamos corrigir isso para que fique o mais simples e direto possível, mantendo a estrutura da imagem e a proposta de "apenas rodar node exercicio.js" ou node menu.js (com a adaptação para o menu interativo).

Vou fazer as seguintes mudanças:

    Ajustar o README.md:

        Atualizar o caminho na seção "Como rodar" para listaExercicios2/ de acordo com sua imagem.

        Ajustar a seção "Estrutura do projeto" para refletir a pasta listaExercicios2/.

        Simplificar a explicação do menu.js e como ele funcionaria com a estrutura atual.

    Ajustar os arquivos .js dos exercícios:

        Vou remover as linhas module.exports do final de cada arquivo de exercício. O objetivo é que cada arquivo .js possa ser executado de forma independente (rode node exercicio1.js e ele mesmo teste e mostre os resultados).

        Manter a remoção de acentos e citações.

    Ajustar o menu.js:

        Como os arquivos de exercício não exportarão mais funções (para manter a simplicidade de "rodar direto"), o menu.js terá uma lógica um pouco diferente: ele vai chamar o Node para executar o arquivo de exercício selecionado, em vez de importar e chamar funções diretamente. Isso simula o comando node exercicioX.js.

        Para o Exercício 2, que é interativo, ele continuará com a instrução de rodar diretamente, pois child_process não lida bem com interatividade readline embutida assim.

Vamos lá!

Novo README.md

Markdown

# 📚 Atividades Avaliativas - Modulo 01 (Introducao a Programacao)

Este projeto contem a resolucao dos exercicios avaliativos do modulo 01 do curso **MaisPraTi**. Cada exercicio esta modularizado em seu proprio arquivo, e ha um menu interativo para execucao via terminal.

---

## ✅ Pre-requisitos

- Node.js (versao recomendada: 18 ou superior)
- Terminal

---

## 🚀 Como rodar

1.  **Abra o terminal dentro da pasta do projeto `listaExercicios2`**:

    ```bash
    # Navegue ate a pasta onde salvou os arquivos
    cd listaExercicios2
    ```

2.  **Inicialize o projeto Node (se ainda nao tiver feito, para instalar 'prompt-sync'):**

    ```bash
    npm init -y
    ```

3.  **Instale a dependencia `prompt-sync` (necessario apenas para o `menu.js`):**

    ```bash
    npm install prompt-sync
    ```

---

## ▶️ Executando os exercicios

Com tudo instalado, voce tem duas opcoes para executar os exercicios:

### Opcao 1: Executar um exercicio individualmente

Abra o seu terminal na pasta do projeto (`listaExercicios2`) e use o comando `node` seguido do nome do arquivo `.js`. Cada arquivo ja contem seus proprios testes e exibira a saida no terminal.

```bash
node exercicio1.js
# ou
node exercicio2.js
# e assim por diante para cada exercicio (exercicio1.js ate exercicio9.js)

Opcao 2: Executar via menu interativo

Para uma experiencia mais organizada, voce pode usar o arquivo menu.js. Ele listara todos os exercicios e permitira que voce escolha qual rodar.

Execute o menu principal na pasta listaExercicios2:
Bash

node menu.js

Voce vera algo assim:
Bash

Escolha um exercicio para executar:
1 - Validacao de Datas
2 - Jogo de Adivinhacao
...
0 - Sair
Digite o numero do exercicio:

Escolha um numero e o menu.js ira executar o arquivo correspondente. Para o Exercicio 2 (Jogo de Adivinhacao), o menu ira instrui-lo a executa-lo diretamente, devido a sua natureza interativa.

🧩 Organizacao

    Cada exercicio esta em um arquivo separado: exercicio1.js, exercicio2.js, ..., exercicio9.js

    O arquivo menu.js (fornecido) permite selecionar e executar os exercicios via terminal.

    O projeto usa CommonJS (require).

📌 Observacoes

    Todos os exercicios estao escritos em JavaScript puro.

    Modularizacao facilita a manutencao e leitura do codigo.

    Codigo 100% executavel via terminal, sem necessidade de navegador.

📁 Estrutura do projeto

listaExercicios2/
│
├── exercicio1.js
├── exercicio2.js
├── exercicio3.js
├── exercicio4.js
├── exercicio5.js
├── exercicio6.js
├── exercicio7.js
├── exercicio8.js
├── exercicio9.js
├── menu.js
├── package.json
└── README.md   <-- (Voce esta aqui!)



