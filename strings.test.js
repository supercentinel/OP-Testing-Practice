import { capitalize, reverseString, caesarCipher } from './strings.js'

test('capitalize() to return a capitalized string', () => {
  expect(capitalize('lalALAla ASasadd')).toBe('Lalalala Asasadd');
});

test('reverseString() returns a reversed string', () => {
  expect(reverseString('Alomomola')).toBe('alomomolA');
});

test('caesarCipher() returns a encrypted string in caesar cipher', () => {
  expect(caesarCipher('Hello, Worldz!', 3)).toBe('Khoor, Zruogc!');
});
