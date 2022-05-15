/*
8 kyu
Convert number to reversed array of digits
Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example:

348597 => [7,9,5,8,4,3]
0 => [0]

https://www.codewars.com/kata/5583090cbe83f4fd8c000051/solutions/javascript

*/

function digitize(n) {
  const arr = [];
  if (n == 0) return [0];
  let i = 0;
  while (n / 10 > 0) {
    arr[i] = n % 10;
    n = Math.floor(n / 10);
    i++;
  }
  return arr;
}
