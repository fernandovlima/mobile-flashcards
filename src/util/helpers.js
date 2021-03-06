export const darkGray = '#42a';
export const gray = '#4a9';
export const red = 'brown';

export const deckColor = 'deckPage';
export const deckDetailsColor = 'deckDetails';
export const cardColor = 'cardPage';
export const quizColor = 'quizPage';

const bgs = {
  [deckColor]: ['#273b66', '#4286'],
  [deckDetailsColor]: ['#ffffff', '#222222', '#3333333'],
  [cardColor]: ['#ffd676', '#ad7f12'],
  [quizColor]: ['#4356a3', '#4350a0']
};

const randomKeyBg = () => {
  const keys = Object.keys(bgs);
  return keys[Math.random() * keys.length];
};

export function getBackgroundColor(name) {
  return name ? bgs[name] : bgs[randomKeyBg()];
}
