// Create an HTML file that has two input fields to accept the two numbers to
// perform operations on.
// Create 4 buttons to perform each of the basic mathematical functions
// (add, subtract, multiply, divide).
// In your JavaScript, put an event listener on each of the buttons.
// When the user performs one of the operations, output the result to
// another DOM element of your choice.

var addBtn = document.getElementById("add-btn");
var subtractBtn = document.getElementById("subtract-btn");
var multiplyBtn = document.getElementById("multiply-btn");
var divideBtn = document.getElementById("divide-btn");
var firstNumberInput = document.getElementById("number1");
var secondNumberInput = document.getElementById("number2");
var resultOutput = document.getElementById("result");

addBtn.addEventListener("click", function() {
  resultOutput.innerHTML = add(firstNumberInput.value, secondNumberInput.value);
})
subtractBtn.addEventListener("click", function() {
  resultOutput.innerHTML = subtract(firstNumberInput.value, secondNumberInput.value);
})
multiplyBtn.addEventListener("click", function() {
  resultOutput.innerHTML = multiply(firstNumberInput.value, secondNumberInput.value);
})
divideBtn.addEventListener("click", function() {
  resultOutput.innerHTML = divide(firstNumberInput.value, secondNumberInput.value);
})
/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
var multiply = function(num1, num2) {
  var result = num1 * num2;
  return result;
}
/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
var add = function(num1, num2) {
  var result = num1 + num2;
  return result;
}
/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
var subtract = function(num1, num2) {
  var result = num1 - num2;
  return result;
}
/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
var divide = function(num1, num2) {
  var result = num1 / num2;
  return result;
}
/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */