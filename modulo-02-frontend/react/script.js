const inputItem = document.getElementById("inputItem");
const listaItens = document.getElementById("listaItens");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnLimpar = document.getElementById("btnLimpar");

let itens = [
  { text: "Maças", comprado: false },
  { text: "Carne", comprado: true },
  { text: "Pães", comprado: false },
];

function salvarDados() {
  localStorage.setItem("listaCompras", JSON.stringify(itens));
}

function renderizarLista() {
  listaItens.innerHTML = "";
  itens.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.title = "Remover item";
    btnRemover.classList.add("btn-remover-item");

    btnRemover.addEventListener("click", () => {
      removerItem(index);
    });

    li.appendChild(btnRemover);
    listaItens.appendChild(li);
  });
}

btnAdicionar.addEventListener("click", () => {
  const novoItem = inputItem.value.trim();

  if (novoItem === "") {
    return;
  }

  itens.push(novoItem);
  salvarDados();
  renderizarLista();

  inputItem.value = "";
  inputItem.focus();
});

function removerItem(index) {
  itens.splice(index, 1);
  salvarDados();
  renderizarLista();
}

btnLimpar.addEventListener("click", () => {
  itens = [];
  salvarDados();
  renderizarLista();
});

document.addEventListener("DOMContentLoaded", () => {
  const dadosSalvos = localStorage.getItem("listaCompras");
  if (dadosSalvos) {
    itens = JSON.parse(dadosSalvos);
  }
  renderizarLista();
});
