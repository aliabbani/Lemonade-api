import commentCounter from '../commentCounter.js';

const array = [1, 2, 3, 4];

describe('test the total number of dishes', () => {
  test('return the correct number', () => {
    expect(commentCounter(array)).toBe(4);
  });
  test('return the correct number', () => {
    array.pop();
    expect(commentCounter(array)).toBe(3);
  });
  test('return the correct number', () => {
    array.pop();
    array.pop();
    array.pop();
    expect(commentCounter(array)).toBe(0);
  });
});