/*
7 kyu
Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark

Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

Examples
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"
*/

function remove(string) {
  string = string.split(" ");
  let newstr = "";
  let count = 0;
  for (let i = 0; i < string.length; i++)
    if (!string[i].includes("!")) {
      if (count == 0) {
        newstr += string[i];
        count = 1;
      } else newstr = newstr + " " + string[i];
    } else if (string[i].indexOf("!") != string[i].lastIndexOf("!")) {
      if (count == 0) {
        newstr += string[i];
        count = 1;
      } else newstr = newstr + " " + string[i];
    }
  return newstr;
}

/*
function remove(s){
  return s.split(' ').filter(i => i.split('!').length != 2).join(' ');
}
*/
