/*
8 kyu
What is between?

https://www.codewars.com/kata/55ecd718f46fba02e5000029

https://www.codewars.com/kata/55ecd718f46fba02e5000029/solutions/javascript

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

*/

function between(a, b) {
  const arr = [];
  let i = a;
  while (i <= b) {
    arr.push(i);
    i++;
  }
  return arr;
}

/* better solution:
function between(a, b) {
  // your code here
  const arr = []
  for(i = a;i <= b; i++){ 
      arr.push(i)
  }
  return arr
}
*/
