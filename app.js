
const equalsButton = document.querySelector("[data-equals]");
const numBut = document.querySelectorAll("[data-number]")
const opBut = document.querySelectorAll("[data-operator]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const pointButton = document.querySelector("[data-point]");
const screen = document.querySelector("[data-screen]");

let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetScreen = false;

numBut.forEach(x => x.addEventListener('click', () => appendNum(x.textContent)))
opBut.forEach(x => x.addEventListener('click', () => opX(x.textContent)))
equalsButton.addEventListener("click", evaluate)
clearButton.addEventListener("click", clear)
deleteButton.addEventListener("click", deleteX)
pointButton.addEventListener("click", addPoint)

function opX(operator) {
    if (currentOperation !== null) evaluate();
    firstOperand = screen.textContent;
    currentOperation = operator;
    shouldResetScreen = true;
    console.log(currentOperation)
}


function evaluate() {
    if (currentOperation === null || shouldResetScreen) return;
    if (currentOperation === "÷" && screen.textContent === "0") {
      alert("You can't divide by 0!");
      clear();
      return;
    }
    secondOperand = screen.textContent;
    let convertedOp = convertToName(currentOperation)
    screen.textContent = 
      operate(convertedOp, firstOperand, secondOperand);
    currentOperation = null;
  }


function appendNum(x) {
if(screen.textContent === "0"  || (shouldResetScreen)) resetScreen()
screen.textContent += x; 
}

function addPoint() {
    screen.textContent += '.'
}


function resetScreen() {
screen.textContent = ""
shouldResetScreen = false;
}

function clear() {
firstOperand = "";
secondOperand = "";
currentOperation = null;
shouldResetScreen = false;
screen.textContent = "0"
}

function deleteX() {
    screen.textContent = screen.textContent.slice(0, -1);
}


// add
function add(a, b) {
    return a + b;
}
// subtract
function subtract(a, b) {
    return a-b;
}
// multiply
function multiply(a, b) {
    return a * b;
}
// divide
function divide(a, b) {
    return a / b;
}



function operate(opp, a, b) {
    a = Number(a);
    b = Number(b);
    switch (opp) {
        case "+":
            return add(a, b);
        case "-": 
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            if(b === 0) return divide(a, b);
            else return divide(a, b);
    }
}

function convertToName(opsym) {
    if(opsym === "+") return "+";
    if(opsym === "-") return "-";
    if(opsym === "×") return "*";
    if(opsym === "÷") return "/";
}






