const { updateInventory } = require('./iu');

describe('updateInventory', () => { // Entry Point
  test('should return an array', () => { // Scenerio / Expected
    expect(updateInventory()).toEqual([]);
  });
  test('should return array of length 6', () => { 
    const array1 = [[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']];
    const array2 = [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']];
    expect(updateInventory(array1, array2)).toEqual(6);
  });
});
