const { fizzBuzz } = require('./index');

describe('fizzBuzz', () => {
  let spy;

  beforeAll(() => {
    spy = jest.fn();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
  test('should print 1', () => {
    spy.mockClear();
    spy = jest.spyOn(console, 'log');

    fizzBuzz(1);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(1);
    spy.mockClear();
  });
  test('should print 1->2', () => {
    spy.mockClear();
    spy = jest.spyOn(console, 'log');

    fizzBuzz(2);
    expect(spy).toHaveBeenCalled();
    expect(spy.mock.calls[0]).toEqual([1], [2]);
    spy.mockClear();
  });
  test('should print first Fizz', () => {
    spy.mockClear();
    spy = jest.spyOn(console, 'log');

    fizzBuzz(3);
    expect(spy).toHaveBeenCalled();
    expect(spy.mock.calls).toEqual([[1], [2], ['Fizz']]);
    spy.mockClear();
  });
  test('should print first Fizz and Buzz', () => {
    spy.mockClear();
    spy = jest.spyOn(console, 'log');

    fizzBuzz(5);
    expect(spy).toHaveBeenCalled();
    const expectedInteration = [[1], [2], ['Fizz'], [4], ['Buzz']];
    expect(spy.mock.calls).toEqual(expectedInteration);
    spy.mockClear();
  });
  test('should print first fizz, buzz, and fizzbuzz', () => {
    spy.mockClear();
    spy = jest.spyOn(console, 'log');

    fizzBuzz(15);
    expect(spy).toHaveBeenCalled();
    const expectedInteration = [
      [1],
      [2],
      ['Fizz'], // 3
      [4],
      ['Buzz'], // 5
      ['Fizz'], // 6
      [7], // 7
      [8],
      ['Fizz'], // 9
      ['Buzz'], // 10
      [11],
      ['Fizz'], // 12
      [13],
      [14],
      ['FizzBuzz'], // 15
    ];
    expect(spy.mock.calls).toEqual(expectedInteration);
    spy.mockClear();
  });
});
