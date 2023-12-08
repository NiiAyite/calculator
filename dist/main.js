var display = document.getElementById("display");

// function to display number in display box
function appendNumber(number) {
    display.value += number;
}

//function to display operator in display box
function appendOperator(operator) {
    display.value += operator;
}

// function to clear display
function clearDisplay() {
    display.value = '';
}

//function to calculate result
function calculate() {
    var expression = display.value;
    var result = eval(expression);
    display.value = result;
  }