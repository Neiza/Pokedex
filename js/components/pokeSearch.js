"use strict";
const PokemonItem = (pokemon, update) => {
  const pokeItem = $('<div class="poke-item"></div>');
  const pokeImg = $('<img src= "http://serebii.net/art/th/"'+ pokemon.pokemon_entries.entry_number +'".png"></img>');
  const pokeIcons = $('<div class="poke-icons"></span>');
  const pokeball = $('<span class="pokeball"></span>');
  const pokeHeart = $('<span class="poke-heart"></span>');
  const pokeArrows = $('<span class="poke-arrows"></span>');
  const pokeName = $('<h4>'+ pokemon.pokemon_entries.pokemon_species.name +'</h4>');

  pokeball.on('click',(e) => {
    e.preventDefault();
    alert("elegiste un pokemon"); // aqui hay que poner la funcion del modal
    //state.selectedStation = station;
    update();
  });

  pokeIcons.append(pokeball);
  pokeIcons.append(pokeHeart);
  pokeIcons.append(pokeArrows);
  pokeItem.append(pokeImg);
  pokeItem.append(pokeIcons);
  pokeItem.append(pokeName);

  return pokeItem;
}

const reRender = (container, filter, update) => {
  container.empty();
  const filteredStations = filterByName(state.pokemons,filter);
  if (filteredStations.length > 0) {
    $.each(filteredStations,(index,pokemon) => {
      container.append(PokemonItem(pokemon,update));
    });
  } else {
    container.append($('<p>Pokemon no encontrado</p>'));
  }
}

const PokeSearch =  () => {
  const searchContainer = $('<div class="search-container"></div>');
  const searchInput = $('<input type="text" class="search-input">');
  const searchResult = $('<div class="search-result"></div>');

  searchContainer.append(searchInput);
  searchContainer.append(searchResult);

  searchInput.on('keyup',(e) => {
    const filter = searchInput.val();
    reRender(searchResult,filter);
  });
  reRender(searchResult,"");

  return searchContainer;
}
