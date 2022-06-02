/*
6 kyu
Write Number in Expanded Form

Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

https://www.codewars.com/kata/5842df8ccbd22792a4000245/solutions/javascript
*/

function expandedForm(num) {
  let expanded = "";
  let i = 1;
  while (num / 10 != 0) {
    if (expanded == "") expanded = (num % 10) * i;
    else if (num % 10 != 0) {
      expanded = (num % 10) * i + " + " + expanded;
    }
    num = Math.floor(num / 10);
    i = i * 10;
  }
  return expanded.toString();
}

/*
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");
 */
