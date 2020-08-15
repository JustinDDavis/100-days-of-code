const { stringCalculator } = require('./app');


describe('stringCalculator', () => {
  test('should return 0 when passed empty string', async () => {
    const example = new stringCalculator();
    expect(example.Add('')).toEqual(0);
  });

  test('should return value when passed single value', async () => {
    const example = new stringCalculator();
    expect(example.Add('1')).toEqual(1);
  });

  test('should return value when passed multiple values', async () => {
    const example = new stringCalculator();
    expect(example.Add('1,2')).toEqual(3);
  });

  test('should return value when passed multiple values with new lines', async () => {
    const example = new stringCalculator();
    expect(example.Add('1\n2,3')).toEqual(6);
    expect(example.Add('1,2,3,\n')).toEqual(6);
    expect(example.Add('1,2,3\n')).toEqual(6);
  });

  test('should return value with special delimiter', async () => {
    const example = new stringCalculator();
    expect(example.Add('//;\n1;2;3')).toEqual(6);
  });

  test('should error when passed negative values', async () => {
    const example = new stringCalculator();

    expect(() => {
      example.Add('//;\n1;-2;-3');
    }).toThrowError(new Error('Negative numbers are not allowed. Passed: -2,-3'));

    expect(() => {
      example.Add('1,-2,-3');
    }).toThrowError(new Error('Negative numbers are not allowed. Passed: -2,-3'));

  });

  test('should ignore values >1000', async () => {
    const example = new stringCalculator();
    expect(example.Add('//;\n1;1001;3')).toEqual(4);
  });

  test('should deal with multiple character delimitters', async () => {
    const example = new stringCalculator();
    expect(example.Add('//[***]\n1***2***3')).toEqual(6);
  });

  test('should deal with multiple delimitters', async () => {
    const example = new stringCalculator();
    expect(example.Add('//[*][%]\n1*2%3')).toEqual(6);
  });
  
});