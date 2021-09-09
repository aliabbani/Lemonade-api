import homeCounter from '../homeCounter.js';

const array = [1, 2, 3, 4];

describe('test the total number of dishes', () => {
  test('return the correct number', () => {
    expect(homeCounter(array)).toBe(4);
  });
});