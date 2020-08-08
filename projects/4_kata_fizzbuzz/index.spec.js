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
    spy = jest.spyOn(console, 'log');

    fizzBuzz(1);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(1);
  });
  test('should print 1->2', () => {
    spy = jest.spyOn(console, 'log');

    fizzBuzz(2);
    expect(spy).toHaveBeenCalled();
    expect(spy.mock.calls[0]).toEqual([1], [2]);
  });
  test('should print 1->3', () => {
    spy = jest.spyOn(console, 'log');

    fizzBuzz(3);
    expect(spy).toHaveBeenCalled();
    expect(spy.mock.calls).toEqual([[1], [2], ['Fizz']]);
  });
});
