/*
8 kyu
Simple multiplication

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

*/

function simpleMultiplication(number) {
  return number % 2 ? number * 9 : number * 8;
}

/*
other solution

function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}
*/
