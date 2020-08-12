// Step 1 & 2
// class stringCalculator {
//   Add(numbers) {
//     if (numbers === '') return 0;

//     const values = numbers.split(',').map((value) => {
//       return parseInt(value, 10);
//     }).reduce((accumulator, value) => {
//       return accumulator + value;
//     });

//     return values;
//   }
// }

// Step 3
class stringCalculator {
  constructor() {
    this.regex_delimiter = /,|\n/;
  }

  Add(numbers) {
    if (numbers === '') return 0;

    const values = numbers.split(this.regex_delimiter).map((value) => {
      return parseInt(value, 10);
    }).reduce((accumulator, value) => {
      return accumulator + value;
    });

    return values;
  }
}

module.exports = {
  stringCalculator
}