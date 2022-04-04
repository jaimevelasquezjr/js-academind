const defaultResult = 0;
let currentResult = defaultResult;
let result;

function add(num1, num2) {
   const result = num1 + num2;
   return result;
}

currentResult = add(1, 2);
alert(result); // this will cause an error if there's no variable declaration above in line #3

let calculationDescription = `( ${defaultResult} + 10)* 3 / 2 - 1`;
outputResult(currentResult, calculationDescription);
