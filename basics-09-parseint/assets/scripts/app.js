// 1. +userInput.value or
// 2. parseInt(userInput.value)
// currentResult.toString() -- to convert number to string

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

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

function writeToLog(operationIdentifier, prevResult, userEnteredNumber, newResult) {
   const logEntry = {
      operation: operationIdentifier,
      prevResult: prevResult,
      number: userEnteredNumber,
      result: newResult
   }
   logEntries.push(logEntry);
   console.log(logEntries);
}

function add() {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult += enteredNumber;

   createAndWriteOutput('+', initialResult, enteredNumber);
   writeToLog('ADD', initialResult, enteredNumber, currentResult);
   clearAndFocus();
}

function subtract() {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult -= enteredNumber;

   createAndWriteOutput('-', initialResult, enteredNumber);
   writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
   clearAndFocus();
}

function multiply() {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult *= enteredNumber;

   createAndWriteOutput('*', initialResult, enteredNumber);
   writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
   clearAndFocus();
}

function divide() {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult /= enteredNumber;

   createAndWriteOutput('/', initialResult, enteredNumber);
   writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
   clearAndFocus();
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
resetBtn.addEventListener('click', refreshPage);

