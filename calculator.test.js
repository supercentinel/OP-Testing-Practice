const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('Calculator.add() is defined', () => {
    const res = calculator.add(0, 0);
    expect(res).toBe(0);
  });

  test('Calculator.substract() is defined', () => {
    const res = calculator.substract(0, 0);
    expect(res).toBe(0);
  });

  test('Calculator.divide() is defined', () => {
    const res = calculator.divide(0, 0);
    expect(res).toBe(0);
  });

  test('Calculator.multiply() is defined', () => {
    const res = calculator.multiply(0,0);
    expect(res).toBe(0);
  });
});
