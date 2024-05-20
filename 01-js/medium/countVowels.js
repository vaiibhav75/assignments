/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let ans = 0;
    console.log(str)
    for (let i = 0; i < str.length; i++) {
        const x = str.charAt(i);
        if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u' || x === 'A' || x === 'E' || x === 'I' || x === 'O' || x === 'U') {
            ans++;
        }

    }
    console.log(ans)

    return ans;
    // Your code here
}

module.exports = countVowels;