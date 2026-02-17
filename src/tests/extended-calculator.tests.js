describe('Calculator extended operations', () => {
  const { modulo, power, squareRoot } = require('../calculator');

  test('modulo with 5 % 2 to equal 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('modulo division by zero throws error', () => {
    expect(() => modulo(5, 0)).toThrow('Division by zero is not allowed.');
  });

  test('power with 2 ^ 3 to equal 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('power with negative exponent', () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test('square root with √16 to equal 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('square root of 0 to equal 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('square root of negative number throws error', () => {
    expect(() => squareRoot(-9)).toThrow('Cannot take square root of a negative number.');
  });
});
