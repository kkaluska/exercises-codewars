/*
8 kyu
If you can't sleep, just count sheep!!

*/

let countSheep = function (num) {
  let sheeps = "";
  for (let i = 1; i <= num; i++) {
    sheeps += i + " sheep...";
  }
  return sheeps;
};

/* other solution:
let countSheep = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  return str;
}
*/
