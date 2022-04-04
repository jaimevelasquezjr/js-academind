const defaultResult = 0;
let currentResult = defaultResult;

function add() {
   // 1. +userInput.value or
   // 2. parseInt(userInput.value)
   // currentResult.toString() -- to convert number to string

   currentResult = currentResult + parseInt(userInput.value);
   outputResult(currentResult, '');
   userInput.value = '';
   userInput.focus();
}

addBtn.addEventListener('click', add);
