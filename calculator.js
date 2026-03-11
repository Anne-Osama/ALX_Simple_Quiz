function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b !== 0 ? a / b : "Cannot divide by zero"; }

const resultSpan = document.getElementById('calculation-result');

document.getElementById('add').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    resultSpan.textContent = add(num1, num2);
});

document.getElementById('subtract').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    resultSpan.textContent = subtract(num1, num2);
});

document.getElementById('multiply').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    resultSpan.textContent = multiply(num1, num2);
});

document.getElementById('divide').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    resultSpan.textContent = divide(num1, num2);
});
