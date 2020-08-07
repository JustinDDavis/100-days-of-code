function updateInventory(arr1, arr2) {
  const inventory = {};
  // Build the inventory with name ane counts
  if (arr1) {
    arr1.map((item) => {
      const [count, name] = item;
      inventory[name] = count;
    });
  }

  if (arr2) {
    // Build the inventory, but if it exists, add to the count.
    arr2.map((item) => {
      const [count, name] = item;
      inventory[name] = (name in inventory) ? inventory[name] + count : count;
    });
  }

  const results = Object.entries(inventory).sort((a, b) => {
    return a[0] > b[0];
  }).map(([key, value]) => {
    return [value, key];
  });

  return results;
}


module.exports = {
  updateInventory,
};

// const found = arr2.find((newItem) => item[1] === newItem[1]);
    // const count = (found) ? item[0] + found[0] : item[0];

    // return [count, arr1[1]];