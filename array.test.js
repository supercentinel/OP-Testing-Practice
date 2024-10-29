import { analyzeArray } from './array.js'

describe('Array properties', () => {
  let properties;
  let array;

  beforeEach(() => {
    properties = {
      average: 0,
      max: Number.MAX_SAFE_INTEGER,
      min: Number.MIN_SAFE_INTEGER,
      length: 0,
    };

    array = Array.from({ length: Math.floor(Math.random() * 20) },
      () => Math.floor(Math.random() * 20));

    properties.length = array.length;

    let total = 0;

    array.forEach((e) => {
      total++;
      properties.max = (e <  properties.max) ? e : properties.max;
      properties.min = (e >  properties.min) ? e : properties.min;
    });

    properties.average = total/array.length;
  });

  test('analyzeArray() returns an Object', () => {
    expect(analyzeArray(array)).toStrictEqual(properties);
  });

  test('analyzeArray() returns an Object with the length of the array', () => {
    expect(analyzeArray(array).length).toBe(properties.length);
  });

  test('analyzeArray() returns an Object with the average of the array', () => {
    expect(analyzeArray(array).average).toBe(properties.average);
  });

  test('analyzeArray() returns an Object with the maximumn of the array', () => {
    expect(analyzeArray(array).max).toBe(properties.max);
  });

  test('analyzeArray() returns an Object with the minimumn of the array', () => {
    expect(analyzeArray(array).min).toBe(properties.min);
  });
});
