// 1. +userInput.value or
// 2. parseInt(userInput.value)
// currentResult.toString() -- to convert number to string

const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
   return parseInt(userInput.value);
}

function clearAndFocus() {
   userInput.value = '';
   userInput.focus();
}

function refreshPage() {
   location.reload();
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
   const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
   outputResult(currentResult, calcDescription);
}

function add() {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult = currentResult + enteredNumber;
   createAndWriteOutput('+', initialResult, enteredNumber);
   clearAndFocus();
}

function subtract() {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult = currentResult - enteredNumber;
   createAndWriteOutput('-', initialResult, enteredNumber);
   clearAndFocus();
}

function multiply() {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult = currentResult * enteredNumber;
   createAndWriteOutput('*', initialResult, enteredNumber);
   clearAndFocus();
}

function divide() {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult = currentResult / enteredNumber;
   createAndWriteOutput('/', initialResult, enteredNumber);
   clearAndFocus();
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
resetBtn.addEventListener('click', refreshPage);
