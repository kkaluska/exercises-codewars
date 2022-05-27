/*
8 kyu
Sum Mixed Array

*/

function sumMix(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    typeof x[i] === "string" ? (sum += Number(x[i])) : (sum += x[i]);
  }
  return Number(sum);
}

/* shorter solution

function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}

*/
