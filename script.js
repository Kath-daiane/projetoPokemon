// Dados dos Pokémons
const pokemons = {
    pikachu: {
        nome: "Pikachu",
        tipo: "Elétrico",
        imagem: "imgs/pikachu.png",
        ataques: ["Choque do Trovão", "Ataque Rápido", "Investida Elétrica"],
        cor: "#fdd835"
    },
    charmander: {
        nome: "Charmander",
        tipo: "Fogo",
        imagem: "imgs/charmander.png",
        ataques: ["Lança-chamas", "Garra de Fogo", "Investida"],
        cor: "#ff7043"
    },
    squirtle: {
        nome: "Squirtle",
        tipo: "Água",
        imagem: "imgs/squirtle.png",
        ataques: ["Jato d'Água", "Bolhas", "Cauda de Água"],
        cor: "#4fc3f7"
    }
};

// Seleciona os elementos do DOM
const img = document.getElementById("pokemon-img");
const nome = document.getElementById("pokemon-name");
const tipo = document.getElementById("pokemon-type");
const listaAtaques = document.getElementById("attacks-list");
const card = document.getElementById("pokemon-card");

// Botões
document.getElementById("btn-pokemon-1").addEventListener("click", () => mostrarPokemon("pikachu"));
document.getElementById("btn-pokemon-2").addEventListener("click", () => mostrarPokemon("charmander"));
document.getElementById("btn-pokemon-3").addEventListener("click", () => mostrarPokemon("squirtle"));

// Função principal
function mostrarPokemon(pokemon) {
    const dados = pokemons[pokemon];

    img.src = dados.imagem;
    img.alt = dados.nome;
    nome.innerText = dados.nome;
    tipo.innerText = `Tipo: ${dados.tipo}`;
    
    // Atualiza lista de ataques
    listaAtaques.innerHTML = "";
    dados.ataques.forEach(ataque => {
        const li = document.createElement("li");
        li.innerText = ataque;
        listaAtaques.appendChild(li);
    });

    // Atualiza a cor do card
    card.style.backgroundColor = dados.cor;
}
