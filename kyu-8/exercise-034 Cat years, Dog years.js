/*
8 kyu
Cat years, Dog years

let humanYearsCatYearsDogYears = function(humanYears) {
  let catYears;
  let dogYears;
  humanYears === 1 ? catYears=15 : humanYears === 2 ? catYears = 24 : catYears = 24 + (humanYears-2)*4;
  humanYears === 1 ? dogYears=15 : humanYears === 2 ? dogYears = 24 : dogYears = 24 + (humanYears-2)*5;
  return [humanYears,catYears,dogYears];
}

https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/solutions/javascript

*/

let humanYearsCatYearsDogYears = function (humanYears) {
  let catYears;
  let dogYears;
  humanYears === 1
    ? (catYears = 15)
    : humanYears === 2
    ? (catYears = 24)
    : (catYears = 24 + (humanYears - 2) * 4);
  humanYears === 1
    ? (dogYears = 15)
    : humanYears === 2
    ? (dogYears = 24)
    : (dogYears = 24 + (humanYears - 2) * 5);
  return [humanYears, catYears, dogYears];
};

/*
other solution:

const humanYearsCatYearsDogYears = function(y) {
  if (y == 1) return [1, 15, 15]
  if (y == 2) return [2, 24, 24]
  return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
}

*/
