/*
8 kyu
Sum of differences in array

Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ).

*/

function sumOfDifferences(arr) {
  if (arr.length <= 1) return 0;
  else {
    const arrSort = arr.sort(function (a, b) {
      return b - a;
    });
    let sum = 0;
    for (let i = 0; i < arrSort.length - 1; i++)
      sum += arrSort[i] - arrSort[i + 1];

    return sum;
  }
}

/*
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/solutions/javascript

  */
