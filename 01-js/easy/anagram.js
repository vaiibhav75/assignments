/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let arr = [];

    for (let i = 0; i <2000; i++) {
        arr[i] = 0;
    }
    for (let i = 0; i < str1.length; i++) {
        arr[str1.charCodeAt(i)]++;
    }

    for (let i = 0; i < str2.length; i++) {
        arr[str2.charCodeAt(i)]--;
    }

    for (let i = 0; i < 2000; i++) {
        if (arr[i] !== 0) {
            return false;
        }
    }

    return true;
}

module.exports = isAnagram;
