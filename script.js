const pokemons = {
    pikachu: {
        nome: "Pikachu",
        tipo: "Elétrico",
        imagem: "img/pikachu.png",
        ataques: ["Choque do Trovão", "Ataque Rápido", "Investida Elétrica"],
        cor: "#fdd835"
    },
    charmander: {
        nome: "Charmander",
        tipo: "Fogo",
        imagem: "img/charmander.png",
        ataques: ["Lança-chamas", "Garra de Fogo", "Investida"],
        cor: "#ff7043"
    },
    squirtle: {
        nome: "Squirtle",
        tipo: "Água",
        imagem: "img/squirtle.png",
        ataques: ["Jato d'Água", "Bolhas", "Cauda de Água"],
        cor: "#4fc3f7"
    }
};

// Elementos do DOM
const img = document.getElementById("pokemon-img");
const nome = document.getElementById("pokemon-name");
const tipo = document.getElementById("pokemon-type");
const listaAtaques = document.getElementById("attacks-list");
const card = document.getElementById("pokemon-card");
const attacksContainer = document.getElementById("attacks-container");

// Botões
document.getElementById("btn-pokemon-1").addEventListener("click", () => mostrarPokemon("pikachu"));
document.getElementById("btn-pokemon-2").addEventListener("click", () => mostrarPokemon("charmander"));
document.getElementById("btn-pokemon-3").addEventListener("click", () => mostrarPokemon("squirtle"));

function mostrarPokemon(pokemon) {
    const dados = pokemons[pokemon];

    // Mostra imagem e ataques
    img.style.display = "block";
    attacksContainer.style.display = "block";

    img.src = dados.imagem;
    img.alt = dados.nome;
    nome.innerText = dados.nome;
    tipo.innerText = `Tipo: ${dados.tipo}`;

    listaAtaques.innerHTML = "";
    dados.ataques.forEach(ataque => {
        const li = document.createElement("li");
        li.innerText = ataque;
        listaAtaques.appendChild(li);
    });

    card.style.backgroundColor = dados.cor;
}
