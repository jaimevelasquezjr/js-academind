// 34. Executing Functions Indirectly

const defaultResult = 0;
let currentResult = defaultResult;
let result;

function add() {
   currentResult = userInput.value;
   outputResult(currentResult, currentResult);
   userInput.value = '';
   userInput.focus();
}

addBtn.addEventListener('click', add);
