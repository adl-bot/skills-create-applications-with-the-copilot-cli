const { calculate } = require('../calculator');

describe('Calculator basic operations', () => {
  test('adds 2 + 3 to equal 5', () => {
    expect(calculate(2, 3, '+')).toBe(5);
  });

  test('subtracts 10 - 4 to equal 6', () => {
    expect(calculate(10, 4, '-')).toBe(6);
  });

  test('multiplies 45 * 2 to equal 90', () => {
    expect(calculate(45, 2, '*')).toBe(90);
    expect(calculate(45, 2, 'x')).toBe(90);
    expect(calculate(45, 2, '×')).toBe(90);
  });

  test('divides 20 / 5 to equal 4', () => {
    expect(calculate(20, 5, '/')).toBe(4);
    expect(calculate(20, 5, '÷')).toBe(4);
  });

  test('division by zero throws error', () => {
    expect(() => calculate(10, 0, '/')).toThrow('Division by zero is not allowed.');
    expect(() => calculate(10, 0, '÷')).toThrow('Division by zero is not allowed.');
  });

  test('invalid operation throws error', () => {
    expect(() => calculate(2, 2, '^')).toThrow('Unsupported operation.');
  });
});
