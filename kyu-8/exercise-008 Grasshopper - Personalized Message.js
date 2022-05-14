/*
8 kyu

Grasshopper - Personalized Message

https://www.codewars.com/kata/5772da22b89313a4d50012f7/javascript
https://www.codewars.com/kata/5772da22b89313a4d50012f7/solutions/javascript

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/

function greet(name, owner) {
  return name === owner ? `Hello ${name}` : `Hello guest`;
}

/* można też tak:
function greet (name, owner) {
  return `Hello ${name==owner?'boss':'guest'}`
}
*/
