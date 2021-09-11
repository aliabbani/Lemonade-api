import homeCounter from '../homeCounter.js';

const array = [1, 2, 3, 4];

const array2 = [
  {
    idMeal: '52791',
    strMeal: 'Eton Mess',
    strDrinkAlternate: null,
    strCategory: 'Dessert',
    strArea: 'British',
  },
  {
    idMeal: '52888',
    strMeal: 'Eccles Cakes',
    strDrinkAlternate: null,
    strCategory: 'Dessert',
    strArea: 'British',
  },
];

describe('test the total number of dishes', () => {
  test('return the correct number', () => {
    expect(homeCounter(array)).toBe(4);
  });
  test('return the correct number', () => {
    expect(homeCounter(array2)).toBe(2);
  });
});
