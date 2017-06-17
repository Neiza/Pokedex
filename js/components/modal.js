"use strict";
const PokeModal = (pokemon) => {
  const modalContainer = $('<div class="modal-container hide"></div>');
  const pokeModal = $('<div class="poke-modal"></div>');
  const pokeImg = $('<img src="http://serebii.net/art/th/'+ pokemon.entry_number +'.png">');

   //cambiar pokemon.entry_number
  const closeModalButton = $('<span class="closemodal-button"></span>');

  modalContainer.append(pokeModal);
  modalContainer.append(closeModalButton);
  pokeModal.append(pokeImg);

  return modalContainer;
}
