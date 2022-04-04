// 1. +userInput.value or
// 2. parseInt(userInput.value)
// currentResult.toString() -- to convert number to string

const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
   return parseInt(userInput.value);
}

function createAndWriteOutput() {} // continue this

function add() {
   const enteredNumber = getUserInput();
   const calcDescription = `${currentResult} + ${enteredNumber}`;
   currentResult = currentResult + enteredNumber;
   outputResult(currentResult, calcDescription);
   userInput.value = '';
   userInput.focus();
}

addBtn.addEventListener('click', add);
