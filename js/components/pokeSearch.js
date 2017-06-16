"use strict";
const PokemonItem = (pokemon) => {
  const pokeItem = $('<div class="poke-item"></div>');
  const pokeImg = $('<img src= "http://serebii.net/art/th/"'+ pokemon.pokemon_entries.entry_number +'".png"></img>');
  const pokeIcons = $('<div class="poke-icons"></span>');
  const pokeball = $('<span class="pokeball"></span>');
  const pokeHeart = $('<span class="poke-heart"></span>');
  const pokeArrows = $('<span class="poke-arrows"></span>');
  const pokeName = $('<h4>'+ pokemon.pokemon_entries.pokemon_species.name +'</h4>');
console.log(pokemons);
  pokeball.on('click',(e) => {
    e.preventDefault();
     // aqui hay que poner la funcion del modal
    state.selectedPokemon = pokemon;
  });

  pokeIcons.append(pokeball);
  pokeIcons.append(pokeHeart);
  pokeIcons.append(pokeArrows);
  pokeItem.append(pokeImg);
  pokeItem.append(pokeIcons);
  pokeItem.append(pokeName);

  return pokeItem;
}

const reRender = (container, filter) => {
  container.empty();
  const filteredPokemons = filterByName(state.pokemons,filter);
  if (filteredPokemons.length > 0) {
    $.each(filteredPokemons,(index,pokemon) => {
      container.append(PokemonItem(pokemon));
    });
  } else {
    container.append($('<p>Pokemon no encontrado</p>'));
  }
}

const PokeSearch =  () => {
  const searchContainer = $('<div class="search-container"></div>');
  const searchInput = $('<input type="text" class="search-input">');
  const searchResult = $('<div class="search-result"></div>');
console.log(state.pokemons);
  searchContainer.append(searchInput);
  searchContainer.append(searchResult);

  searchInput.on('keyup',(e) => {
    const filter = searchInput.val();
    reRender(searchResult,filter);
  });
  return searchContainer;
}
