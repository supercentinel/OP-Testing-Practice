const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('Calculator.add() returns the sum of x & y', () => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    const res = calculator.add(x, y);

    expect(res).toBe(x + y);
  });

  test('Calculator.substract() the substraction of y to x', () => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    const res = calculator.substract(x, y);
    expect(res).toBe(x - y);
  });

  test('Calculator.divide() is the division of x over y', () => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    const res = calculator.divide(x, y);
    expect(res).toBe(x / y);
  });

  test('Calculator.divide() cannot divide by zero; returns null', () => {
    const x = Math.floor(Math.random() * 10);

    const res = calculator.divide(x, 0);
    expect(res).toBe(null);
  });

  test('Calculator.multiply() returns the product of x times y', () => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    const res = calculator.multiply(x,y);
    expect(res).toBe(x * y);
  });
});
