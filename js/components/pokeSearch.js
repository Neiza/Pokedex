"use strict";
const PokemonItem = (pokemon) => {
  const pokeItem = $('<div class="poke-item"></div>');
  const pokeImg = $('<img src= "http://serebii.net/art/th/'+ pokemon.entry_number +'.png"></img>');
  const pokeIcons = $('<div class="poke-icons"></span>');
  const pokeball = $('<img src="" class="pokeball">');
  const pokeHeart = $('<img src="assets/icon/valentines-heart.png" class="poke-heart">');
  const pokeArrows = $('<img src="" class="poke-arrows">');
  const pokeName = $('<h4>'+ pokemon.pokemon_species.name +'</h4>');
console.log(pokemon);
  pokeHeart.on('click',(e) => {
    e.preventDefault();
    $(".modal-container").addClass("show");
    $(".modal-container").removeClass("hide");    
     // aqui hay que poner la funcion del modals
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
  reRender(searchResult,"");

  searchInput.on('keyup',(e) => {
    const filter = searchInput.val();
    reRender(searchResult,filter);
  });
  return searchContainer;
}
