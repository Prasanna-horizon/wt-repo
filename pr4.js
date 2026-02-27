let firstValue = "";
let operator = "";
let secondValue = "";

function appendValue(value) {
    document.getElementById("display").value += value;
}

function setOperator(op) {
    let display = document.getElementById("display").value;

    if (display === "") {
        alert("Please enter a number first!");
        return;
    }

    if (isNaN(display)) {
        alert("Invalid input! Only numbers allowed.");
        clearDisplay();
        return;
    }

    firstValue = display;
    operator = op;
    document.getElementById("display").value = "";
}

function calculate() {
    secondValue = document.getElementById("display").value;

    if (secondValue === "") {
        alert("Please enter second value!");
        return;
    }

    if (isNaN(secondValue)) {
        alert("Invalid input! Only numeric values allowed.");
        clearDisplay();
        return;
    }

    let result;

    if (operator === "+") {
        result = Number(firstValue) + Number(secondValue);
    } else if (operator === "-") {
        result = Number(firstValue) - Number(secondValue);
    } else if (operator === "*") {
        result = Number(firstValue) * Number(secondValue);
    } else if (operator === "/") {
        if (Number(secondValue) === 0) {
            alert("Cannot divide by zero!");
            clearDisplay();
            return;
        }
        result = Number(firstValue) / Number(secondValue);
    }

    document.getElementById("display").value = result;
}

function clearDisplay() {
    document.getElementById("display").value = "";
    firstValue = "";
    secondValue = "";
    operator = "";
}

function squareNumber() {
    let num = prompt("Enter a number to find its square:");

    if (num === null || num === "") {
        alert("No input provided!");
        return;
    }

    if (isNaN(num)) {
        alert("Invalid input! Please enter a numeric value.");
        return;
    }

    let square = num * num;
    alert("Square of " + num + " is: " + square);
    document.getElementById("display").value = square;
}