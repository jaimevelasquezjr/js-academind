const task3Element = document.getElementById('task-3');

function showMessage() {
   alert('Hello JavaScript 2022');
}

function Goal(name) {
   alert(`I'm ${name} and I want to be a Javascript Developer`);
}

showMessage();
Goal('jaime');

task3Element.addEventListener('click', showMessage);

function concatenatedFunction(param1, param2, param3) {
   return param1 + param2 + param3;
}

alert(concatenatedFunction('Java', 'Script', 'Developer'));
