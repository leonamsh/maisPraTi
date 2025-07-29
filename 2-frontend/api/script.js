function buscar() {
  const nome = document.getElementById("pokeInput").value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${nome}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("info").innerHTML = `
          <h2>${data.name}</h2>
          <img src="${data.sprites.front_default}" />
        `;

      document.getElementById("resultado").textContent = JSON.stringify(
        data,
        null,
        2,
      );
    })
    .catch((err) => {
      document.getElementById("resultado").textContent =
        "❌ Pokémon não encontrado!";
    });
}
