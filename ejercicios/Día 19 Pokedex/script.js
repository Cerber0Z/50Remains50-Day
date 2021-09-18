// API POKEMON
const pokeContainer = document.getElementById('poke-container')
const pokemonsNumber = 2
const typeColors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#f3f367',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};

const fetchPokemon = async() => {
    for (let i = 1; i <= pokemonsNumber; i++) {
        await getpokemons(i)
    }
}

const getpokemons = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const respuesta = await fetch(url);
    const pokemon = await respuesta.json();

    createPokemoncard(pokemon)
}


function createPokemoncard(pokemon) {
    const cardpokemon = document.createElement('div');
    cardpokemon.classList.add('pokemon');

    const pokemininnerdata = `<h1>${pokemon.name}</h1>`;
    cardpokemon.innerHTML = pokemininnerdata;
    pokeContainer.appendChild(cardpokemon);
}

fetchPokemon()