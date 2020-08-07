const { updateInventory } = require('./iu');

describe('updateInventory', () => { // Entry Point
  test('should return an array', () => { // Scenerio / Expected
    expect(updateInventory()).toEqual([]);
  });
  test('should return array of length 6', () => { 
    const array1 = [[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']];
    const array2 = [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']];
    expect(updateInventory(array1, array2).length).toEqual(6);
  });
  test('should return array in order', () => { 
    const array1 = [[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']];
    const array2 = [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']];
    const final_array = [[88, 'Bowling Ball'], [2, 'Dirty Sock'], [3, 'Hair Pin'], [3, 'Half-Eaten Apple'], [5, 'Microphone'], [7, 'Toothpaste']];
    expect(updateInventory(array1, array2)).toEqual(final_array);
  });
  test('should deal with zero inventory', () => { 
    const array1 = [[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]];
    const array2 = [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]];
    const final_array = [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]];
    expect(updateInventory(array1, array2)).toEqual(final_array);
  });
  test('should pass test 1', () => { 
    const value = updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
    const finalArray = [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]];
    expect(value).toEqual(finalArray);
  });
});
