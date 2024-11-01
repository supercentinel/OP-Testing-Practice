export function capitalize(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i-1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }

  return result;
}

export function reverseString(str) {
  let result = ''

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

export function caesarCipher(str, shift) {
  let caesar = '';

  for(let i = 0; i < str.length; i++){
    let c = str[i].charCodeAt();

    if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122)) {
      c += shift;
      if(c > 90 && str[i] <= 'Z' || c > 122) {
        c -= 26;
      }
    }

    caesar += String.fromCharCode(c);
  }

  return caesar;
}
