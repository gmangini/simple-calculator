
/* 
Calculator Main Prog 
-Gino Mangini 
*/

let operand1 = operand2 = ""; 
let operator = null;
let display = document.querySelector("#answer");

display.value = "0";
var clearDisplay = false;

document.querySelectorAll(".num").forEach(elmt => elmt.addEventListener("click", () => appendNumber(elmt)));
document.querySelector("#clear").addEventListener("click", () => clear());
document.querySelector("#deci").addEventListener("click", () => addDecimal()); 
document.querySelectorAll(".op").forEach(op => op.addEventListener("click", () => setOperator(op))); 
document.querySelector("#equal").addEventListener("click", () => equal());
document.querySelector("#backspace").addEventListener("click", () => backspace());

function backspace() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(elmt) {
    if (display.value == "0") { display.value = ""; }
    if (clearDisplay) { display.value = ""; clearDisplay = false;}
    display.value += elmt.value;
}

function addDecimal() {
    if (display.value.indexOf(".") !== -1 && !clearDisplay) { return; }
    if (clearDisplay) { display.value = "0"; clearDisplay = false;}
    display.value += ".";
}

function clear() {
    operand1 = operand2 = "";
    operator = null;
    display.value = "0";
    clearDisplay = false;
    return;
}

function setOperator(op) {
    if (operator !== null) equal();
    clearDisplay = true;
    operand1 = display.value;
    operator = op.value;
}

function equal() {
    if (operator === null || clearDisplay) { return; } 
    operand2 = display.value;
    display.value = round(operate(operator, operand1, operand2));
    operand2 = "";
    operator = null;
}

function round(value) {
    var number = value.toString();
    var pos = number.indexOf(".");
    if (pos === -1) { return number; }
    else { 
        return number.substring(0, pos) + number.substr(pos, 5)
    }
}

function operate(operator, operand1, operand2) {

    numOne = parseFloat(operand1);
    numTwo = parseFloat(operand2);

    if (operator == "÷" && operand2 == "0") {
        alert("You can NOT divide by 0!");
        clear();
        return "0";
    }

    switch (operator) {
        case "×":
            return multiply(numOne, numTwo);
        case "-":
            return subtract(numOne, numTwo);
        case "÷":
            return divide(numOne, numTwo);
        case "+":
            return add(numOne, numTwo);
        default:
            return "0";
    }
}

function add(numOne, numTwo) {
    return numOne + numTwo;
}

function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    return numOne / numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}
