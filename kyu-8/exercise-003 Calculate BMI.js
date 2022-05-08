/*
Calculate BMI

Link: https://www.codewars.com/kata/57a429e253ba3381850000fb

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/

function bmi(weight, height) {
  let mybmi = weight / height ** 2;
  if (mybmi <= 18.5) return "Underweight";
  else if (mybmi <= 25) return "Normal";
  else if (mybmi <= 30) return "Overweight";
  else return "Obese";
}

/* 
 1. zamiast ** można zastosować Math.pow(weight,height)
 2. zamiast else można zastosować switch: 
 switch (true) {
    case formula <=18.5:
    return 'Underweight';
    case formula <=25.0:
    return 'Normal';
    case formula <=30:
    return 'Overweight';
    default:
    return 'Obese';
3. można też zastosowac operator warunkowy:
bmi <= 18.5 ? "Underweight" :
bmi <= 25 ? "Normal" :
bmi <= 30 ? "Overweight" : "Obese";
*/
