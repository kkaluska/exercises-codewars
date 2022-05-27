/*
7 kyu
Find the next perfect square!

https://www.codewars.com/kata/56269eb78ad2e4ced1000013

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square

https://www.codewars.com/kata/56269eb78ad2e4ced1000013/solutions/javascript
*/
function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq))) {
    const x = sq + 1;
    while (!Number.isInteger(Math.sqrt(x))) {
      x++;
    }
    return x;
  } else return -1;
}

/* better solution:

function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}

or:

function findNextSquare(sq) {
  var number = Math.sqrt(sq);
  if(Math.round(number) === number) {
    return Math.pow(++number, 2)
  }
  return -1;
}

*/
