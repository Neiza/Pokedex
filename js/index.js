'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  const update = function() {
    render(root);
  }
  wrapper.append(Header(update));
  wrapper.append(PokeSearch(update));
  wrapper.append(PokeModal(update));
  //wrapper.append(StationDetails(update));

  root.append(wrapper);
}

const state = {
  pokemons: null,
  selectedPokemon: null
};

//$(function() {
//
//});
$( _ => {
  getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {

    if (err) { return alert(err.message);}

    state.pokemons = json;

    const root = $('.root');
    render(root);
  });

});
