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

// // Step 3
// class stringCalculator {
//   constructor() {
//     this.regex_delimiter = /,|\n/;
//   }

//   Add(numbers) {
//     if (numbers === '') return 0;

//     const values = numbers.split(this.regex_delimiter).filter((element) => {
//       return element !== '';
//     }).map((value) => {
//       return parseInt(value, 10);
//     }).reduce((accumulator, value) => {
//       return accumulator + value;
//     });

//     return values;
//   }
// }

// Step 4
class stringCalculator {
  constructor() {
    this.default_delim = [',', '\n'];
  }

  BuildDelimiter() {
    var generate_string = '';
    this.default_delim.map((element) => {
      generate_string = generate_string + element + '|';
    })
    this.regex_delimiter = new RegExp(generate_string.slice(0, -1));
  }

  UpdateCustomDelimiter(numbers) {
    const results = numbers.match("//(.*)\n(.*)");
    if (results === null) {
      return numbers;
    }

    if (results.length === 3){
      this.default_delim.push(results[1]);
      return results[2]
    }
    return numbers
  }

  Add(numbers) {
    if (numbers === '') return 0;

    numbers = this.UpdateCustomDelimiter(numbers);
    this.BuildDelimiter();
    
    const values = numbers.split(this.regex_delimiter).filter((element) => {
      return element !== '';
    }).map((value) => {
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