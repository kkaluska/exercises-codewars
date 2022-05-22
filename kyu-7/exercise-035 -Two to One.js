/*
Two to One

Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

function s(s1, s2) {
  function longest(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    let str1and2 = "";

    for (let i = 97; i <= 122; i++) {
      if (
        s1.includes(String.fromCharCode(i)) ||
        s2.includes(String.fromCharCode(i))
      ) {
        str1and2 += String.fromCharCode(i);
        console.log(str1and2);
      }
    }
    return str1and2;
  }
}

/*
other solution

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

*/
