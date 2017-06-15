'use strict';

const filterByName = (pokemons, query) => { //query es el value de input
  return pokemons.pokemon_entries.filter((pokemon) => {
    return pokemon.pokemon_species.name.toLowerCase().indexOf(query.toLowerCase()) != -1;
  });
}
