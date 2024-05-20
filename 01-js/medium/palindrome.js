/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toUpperCase();
  let x = 0;
  let y = str.length-1;

  while (x < y) {
    const a = str.charAt(x);
    const b = str.charAt(y);
    if (a === ',' || a === '.' || a === '?' || a === '!' || a === ' ') {
      x++;
      continue;
    }

    if (b === ',' || b === '.' || b === '?' || b === '!' || b === ' ') {
      y--;
      continue;
    }

    if (a !== b) {
      return false;
    }

    x++;
    y--;
  }
  return true;
}

module.exports = isPalindrome;
