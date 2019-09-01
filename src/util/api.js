import { AsyncStorage } from 'react-native';

export const FLASHCARD_STORAGE_KEY = '@FlashcardHeroes:flashcard';

/**
 * DECK
 */
export function fetchDeckResults() {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(results =>
    JSON.parse(results)
  );
}

export function submitDeckEntry({ key, entry }) {
  return AsyncStorage.mergeItem(
    FLASHCARD_STORAGE_KEY,
    JSON.stringify({
      [key]: entry
    })
  );
}

export function removeDeckEntry(key) {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(results => {
    const { [key]: del, ...data } = JSON.parse(results);
    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data));
  });
}

/**
 * CARD
 */
export function submitCardEntry({ key, entry }) {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[key] = {
      ...data[key],
      numOfCards: data[key].numOfCards + 1,
      questions: data[key].questions.concat(entry)
    };
    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data));
  });
}
