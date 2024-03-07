const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const pokemonImg = document.getElementById('pokemon-img');

const pokemonEndPoint = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon';

const searchPokemon = async () => {
    try {
        const idOrName = searchInput.value.toLowerCase();
        const url = pokemonEndPoint + `/${idOrName}/`;
        const res = await fetch(url);
        const data = await res.json();

        //Display data
        pokemonName.textContent = `${data.name.toUpperCase()}`;
        pokemonId.textContent = `#${data.id}`;
        weight.textContent = `Weight: ${data.weight}`;
        height.textContent = `Height: ${data.height}`;
        pokemonImg.innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}">`;
        types.innerHTML = data.types.map(obj => `<div class="badge ${obj.type.name.toLowerCase()}">${obj.type.name}</div>`).join('');

        hp.textContent = `${data.stats[0].base_stat}`;
        attack.textContent = `${data.stats[1].base_stat}`;
        defense.textContent = `${data.stats[2].base_stat}`;
        specialAttack.textContent = `${data.stats[3].base_stat}`;
        specialDefense.textContent = `${data.stats[4].base_stat}`;
        speed.textContent = `${data.stats[5].base_stat}`;

    } catch (err) {
        resetStatsTable();
        alert("Pokémon not found");
        console.log(err);
    }
}

const resetStatsTable = () => {
    pokemonName.textContent = '';
    pokemonId.textContent = '';
    weight.textContent = '';
    height.textContent = '';
    pokemonImg.innerHTML = '';
    types.innerHTML = '';

    hp.textContent = '';
    attack.textContent = '';
    defense.textContent = '';
    specialAttack.textContent = '';
    specialDefense.textContent = '';
    speed.textContent = '';
}

searchButton.addEventListener('click', () => {
    searchPokemon(); 
});

searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        searchPokemon();
        return;
    }
});