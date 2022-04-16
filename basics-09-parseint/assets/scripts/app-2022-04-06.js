const inputNumber = document.getElementById('input-number');
const currentResult = document.getElementById('current-result');
const currentCalc = document.getElementById('current-calculation');

// Buttons
const addBtn = document.getElementById('btn-add');
const subBtn = document.getElementById('btn-subtract');

let showCurrentResult = 0;

function clearAndFocus() {
   inputNumber.value = '';
   inputNumber.focus();
}

function add() {
   showCurrentResult += parseInt(inputNumber.value);
   currentCalc.innerHTML += inputNumber.value;
   currentCalc.innerHTML += '+';
   currentResult.textContent = showCurrentResult;
   clearAndFocus();
   console.log(showCurrentResult);
}

function subtract() {
   const strCurrentCalc = currentCalc.innerHTML;
   const getLastChar = strCurrentCalc.substring(strCurrentCalc.length - 1);
   const convertToNum = parseInt(getLastChar);

   if(!convertToNum && convertToNum !== '-') {
      const removeLastOperator = strCurrentCalc.substring(0, strCurrentCalc.length - 1);
      currentCalc.innerHTML = removeLastOperator
      currentCalc.innerHTML += '-';
      currentCalc.innerHTML += inputNumber.value;
      currentResult.textContent = eval(currentCalc.innerHTML);
   } else {
      currentCalc.innerHTML += inputNumber.value;
      currentResult.textContent = eval(currentCalc.innerHTML);
   }

   clearAndFocus();
   
   // currentCalc.innerHTML = removeLastOperator;
   // currentCalc.innerHTML += '-';
   // currentCalc.innerHTML += inputNumber.value;
   // currentResult.textContent = eval(currentCalc.innerHTML);

}

function inputOnChange() {
   console.log('hello');
}

addBtn.addEventListener('click', add);
subBtn.addEventListener('click', subtract);
inputNumber.addEventListener('change', inputOnChange);
