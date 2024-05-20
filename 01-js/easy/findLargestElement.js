/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    let max =numbers[0];
    console.log(numbers);
    console.log(max);
    for (let i = 1; i < numbers.length; i++) {
        max = Math.max(max,numbers[i]);
    }
    console.log(max)

    return max;
}

module.exports = findLargestElement;