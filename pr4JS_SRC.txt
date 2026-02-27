let expression = "";

// Append numbers and operators without clearing display
function appendValue(value) {
    // Prevent two operators in a row
    if (/[+\-*/]$/.test(expression) && /[+\-*/]/.test(value)) {
        alert("Two operators cannot be entered consecutively!");
        return;
    }

    expression += value;
    document.getElementById("display").value = expression;
}

// Clear display
function clearDisplay() {
    expression = "";
    document.getElementById("display").value = "";
}

// Calculate result
function calculate() {
    if (expression === "") {
        alert("Please enter a mathematical expression!");
        return;
    }

    // Validation: allow only numbers and operators
    if (/[^0-9+\-*/.]/.test(expression)) {
        alert("Invalid input! Only numbers and operators are allowed.");
        clearDisplay();
        return;
    }

    try {
        let result = eval(expression);

        // Handle divide by zero or invalid math
        if (!isFinite(result)) {
            alert("Math Error! Cannot divide by zero.");
            clearDisplay();
            return;
        }

        // Show result and keep it for further calculation
        document.getElementById("display").value = result;
        expression = result.toString();

    } catch (error) {
        alert("Invalid Expression!");
        clearDisplay();
    }
}

// Square using prompt (as required in assignment)
function squareNumber() {
    let num = prompt("Enter a number to find its square:");

    if (num === null || num.trim() === "") {
        alert("Input cannot be empty!");
        return;
    }

    if (isNaN(num)) {
        alert("Invalid input! Please enter a numeric value.");
        return;
    }

    let square = Number(num) * Number(num);

    alert("Square of " + num + " is: " + square);

    // Display square result and keep equation
    expression = square.toString();
    document.getElementById("display").value = expression;
}