/*
8 kyu
Double Char

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

function doubleChar(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr = newStr + str.charAt(i) + str.charAt(i);
  }
  return newStr;
}

/*
const doubleChar = (str) => str.split("").map(c => c + c).join("");
*/
