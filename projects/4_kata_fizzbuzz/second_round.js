function fizzBuzzWriter(index, multiple, outputString) {
  return (index % multiple === 0) ? outputString : '';
}

function fizzBuzz(number_of_lines) {
  for (let i = 1; i <= number_of_lines; i++) {
    let output = '';
    output += fizzBuzzWriter(i, 3, 'Fizz');
    output += fizzBuzzWriter(i, 5, 'Buzz');

    if (output === '') output = i.toString();

    console.log(output);
  }
}

module.exports = {
  fizzBuzz
}