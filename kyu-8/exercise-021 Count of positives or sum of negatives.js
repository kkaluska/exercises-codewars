/*
8 kyu
Count of positives / sum of negatives

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

https://www.codewars.com/kata/576bb71bbbcf0951d5000044/solutions/javascript
*/

function countPositivesSumNegatives(input) {
  if (input === undefined || input == null) return [];
  if (input.length == 0) return [];
  let countPositive = 0;
  let sumNegatives = 0;
  for (let i = 0; i < input.length; i++)
    input[i] > 0 ? (countPositive += 1) : (sumNegatives += input[i]);
  return [countPositive, sumNegatives];
}
