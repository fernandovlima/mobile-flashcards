export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
export const REMOVE_DECK = 'REMOVE_DECK';

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    payload: decks
  };
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    payload: deck
  };
}

export function removeDeck(id) {
  return {
    type: REMOVE_DECK,
    payload: id
  };
}

export function addCard(deck, card) {
  return {
    type: ADD_CARD,
    payload: {
      card,
      deck
    }
  };
}
