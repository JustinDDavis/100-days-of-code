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

// // Step 4
// class stringCalculator {
//   constructor() {
//     this.default_delim = [',', '\n'];
//   }

//   BuildDelimiter() {
//     var generate_string = '';
//     this.default_delim.map((element) => {
//       generate_string = generate_string + element + '|';
//     })
//     this.regex_delimiter = new RegExp(generate_string.slice(0, -1));
//   }

//   UpdateCustomDelimiter(numbers) {
//     const results = numbers.match("//(.*)\n(.*)");
//     if (results === null) {
//       return numbers;
//     }

//     if (results.length === 3){
//       this.default_delim.push(results[1]);
//       return results[2]
//     }
//     return numbers
//   }

//   Add(numbers) {
//     if (numbers === '') return 0;

//     numbers = this.UpdateCustomDelimiter(numbers);
//     this.BuildDelimiter();
    
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

// // Step 5
// class stringCalculator {
//   constructor() {
//     this.default_delim = [',', '\n'];
//   }

//   BuildDelimiter() {
//     var generate_string = '';
//     this.default_delim.map((element) => {
//       generate_string = generate_string + element + '|';
//     })
//     this.regex_delimiter = new RegExp(generate_string.slice(0, -1));
//   }

//   UpdateCustomDelimiter(numbers) {
//     const results = numbers.match("//(.*)\n(.*)");
//     if (results === null) {
//       return numbers;
//     }

//     if (results.length === 3){
//       this.default_delim.push(results[1]);
//       return results[2]
//     }
//     return numbers
//   }

//   Add(numbers) {
//     if (numbers === '') return 0;

//     numbers = this.UpdateCustomDelimiter(numbers);
//     this.BuildDelimiter();

//     // Split string into an collection.
//     let values = numbers.split(this.regex_delimiter)
    
//     // Remove elements that are not usable values
//     values = values.filter((element) => {
//       return element !== '';
//     });

//     // Make sure the values are numerical so math operations are functioning.
//     values = values.map((value) => {
//       return parseInt(value, 10);
//     });

//     var non_positive_values = values.filter((value) => {
//       return value < 0;
//     });

//     if (non_positive_values.length > 0) {
//       var error_message = `Negative numbers are not allowed. Passed: ${non_positive_values}`
//       throw Error(error_message);
//     }

//     // Sum up the values
//     values = values.reduce((accumulator, value) => {
//       return accumulator + value;
//     });

//     return values;
//   }
// }

// // Step 6
// class stringCalculator {
//   constructor() {
//     this.default_delim = [',', '\n'];
//   }

//   BuildDelimiter() {
//     var generate_string = '';
//     this.default_delim.map((element) => {
//       generate_string = generate_string + element + '|';
//     })
//     this.regex_delimiter = new RegExp(generate_string.slice(0, -1));
//   }

//   UpdateCustomDelimiter(numbers) {
//     const results = numbers.match("//(.*)\n(.*)");
//     if (results === null) {
//       return numbers;
//     }

//     if (results.length === 3){
//       this.default_delim.push(results[1]);
//       return results[2]
//     }
//     return numbers
//   }

//   Add(numbers) {
//     if (numbers === '') return 0;

//     numbers = this.UpdateCustomDelimiter(numbers);
//     this.BuildDelimiter();

//     // Split string into an collection.
//     let values = numbers.split(this.regex_delimiter)
    
//     // Remove elements that are not usable values
//     values = values.filter((element) => {
//       return element !== '';
//     });

//     // Make sure the values are numerical so math operations are functioning.
//     values = values.map((value) => {
//       return parseInt(value, 10);
//     });

//     // Handle Negative Numbers
//     var non_positive_values = values.filter((value) => {
//       return value < 0;
//     });

//     if (non_positive_values.length > 0) {
//       var error_message = `Negative numbers are not allowed. Passed: ${non_positive_values}`
//       throw Error(error_message);
//     }

//     // Create upperbound
//     values = values.filter((value) => {
//       return value <= 1000;
//     });

//     // Sum up the values
//     values = values.reduce((accumulator, value) => {
//       return accumulator + value;
//     });

//     return values;
//   }
// }

// Step 7/8/9
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

    if (results.length === 3) {
      // '[*][%]'
      // var check_if_multiple_delims = results[1].match(/(?<=\[)(.*?)(?=\])/g); (If I only wanted the characters)
      var check_if_multiple_delims = results[1].match(/\[(.*?)\]/g);

      if (check_if_multiple_delims === null) {
        this.default_delim.push(results[1]);
        return results[2]
      }

      check_if_multiple_delims.map((element) => {
        this.default_delim.push(element);
      });

      return results[2]      
    }

    return numbers
  }

  Add(numbers) {
    if (numbers === '') return 0;

    numbers = this.UpdateCustomDelimiter(numbers);
    this.BuildDelimiter();

    // Split string into an collection.
    let values = numbers.split(this.regex_delimiter)
    
    // Remove elements that are not usable values
    values = values.filter((element) => {
      return element !== '';
    });

    // Make sure the values are numerical so math operations are functioning.
    values = values.map((value) => {
      return parseInt(value, 10);
    });

    // Handle Negative Numbers
    var non_positive_values = values.filter((value) => {
      return value < 0;
    });

    if (non_positive_values.length > 0) {
      var error_message = `Negative numbers are not allowed. Passed: ${non_positive_values}`
      throw Error(error_message);
    }

    // Create upperbound
    values = values.filter((value) => {
      return value <= 1000;
    });

    // Sum up the values
    values = values.reduce((accumulator, value) => {
      return accumulator + value;
    });

    return values;
  }
}

module.exports = {
  stringCalculator
}