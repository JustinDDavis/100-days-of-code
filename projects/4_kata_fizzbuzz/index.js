function fizzBuzz(numberOfLines) {
  const fizzBuzzOutput = (index) => {
    if (index === (numberOfLines + 1)) return;

    if (index % 3 == 0) {
      console.log("Fizz");
    }else {
      console.log(index);
    }
    
    fizzBuzzOutput(index + 1);
  };

  fizzBuzzOutput(1);
}

module.exports = {
  fizzBuzz,
};
