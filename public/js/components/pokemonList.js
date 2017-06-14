"use strict";
const PokemonList =  () => {
  const searchContainer = $('<div class="search-container"></div>');
  const searchInput = $('<input type="text" class="search-input">');
  const searchResult = $('<div class="search-result"></div>');

  searchContainer.append(searchInput);
  searchContainer.append(searchResult);




  return searchContainer;
}
