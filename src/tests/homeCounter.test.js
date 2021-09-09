import homeCounter from '../homeCounter.js';

describe('test the total number of dishes', () => {
  test('return the correct number', () => {
    expect(homeCounter()).toBe(6);
  });
});