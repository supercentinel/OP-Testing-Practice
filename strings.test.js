import { capitalize, reverseString, caesarCipher } from './strings.js'

test('capitalize() exists', () => {
  expect(capitalize()).toBeDefined();
});

test('reverseString() exists', () => {
  expect(reverseString()).toBeDefined();
});

test('caesarCipher() exists', () => {
  expect(caesarCipher()).toBeDefined();
});
