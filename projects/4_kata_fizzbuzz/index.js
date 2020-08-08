function fizzBuzz(numberOfLines) {
  const fizzBuzzOutput = (index) => {
    if (index === (numberOfLines + 1)) return;

    if ((index % 3 === 0) && (index % 5 === 0)) {
      console.log('FizzBuzz');
    } else if (index % 3 === 0) {
      console.log("Fizz");
    } else if (index % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(index);
    }
    fizzBuzzOutput(index + 1);
  };

  fizzBuzzOutput(1);
}

module.exports = {
  fizzBuzz,
};
