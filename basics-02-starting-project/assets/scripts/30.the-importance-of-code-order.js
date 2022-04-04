// 30. The (Un)Importance of Code Order

const defaultResult = 0;
let currentResult;

function add(num1, num2) {
   const result = num1 + num2;
   return result;
}

currentResult = add(1, 2);

let compute = add(4, 4);

// currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = `( ${defaultResult} + 10)* 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
