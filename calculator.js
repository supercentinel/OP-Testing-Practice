class Calculator {
  add(x, y) {
    return x + y;
  }
  substract(x, y) {
    return x - y;
  }
  divide(x, y) {
    if(y === 0) { return Infinity }
    return x / y;
  }
  multiply(x, y) {
    return x * y;
  }
};

module.exports = Calculator;
