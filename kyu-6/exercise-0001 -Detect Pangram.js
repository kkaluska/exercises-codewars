/* kyu 6
Detect Pangram

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

function isPangram(string) {
  let isPang = true;
  let chars = string.toUpperCase();

  chars = Array.from(new Set(...chars.split()));
  for (let i = 65; i <= 90; i++)
    if (!chars.includes(String.fromCharCode(i))) return false;
  return true;
}

/*
other solution

function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}

https://www.codewars.com/kata/545cedaa9943f7fe7b000048/solutions/javascript


*/
