// Calculator JavaScript
const display = document.getElementById('display');
const previousOperandDisplay = document.getElementById('previous-operand');
const operationDisplay = document.getElementById('operation');

const numberBtns = document.querySelectorAll('.number-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');
const clearBtn = document.querySelector('.clear-btn');
const deleteBtn = document.querySelector('.delete-btn');
const equalsBtn = document.querySelector('.equals-btn');

let currentOperand = '';
let previousOperand = '';
let operation = null;

// Update display
function updateDisplay() {
    display.value = currentOperand || '0';
    
    if (operation) {
        operationDisplay.textContent = operation;
        previousOperandDisplay.textContent = previousOperand;
    } else {
        operationDisplay.textContent = '';
        previousOperandDisplay.textContent = '';
    }
}

// Clear calculator
function clear() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
}

// Delete last digit
function deleteDigit() {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay();
}

// Add number
function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

// Choose operation
function chooseOperation(op) {
    if (currentOperand === '') return;
    
    if (previousOperand !== '') {
        calculate();
    }
    
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

// Calculate
function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    
    if (isNaN(prev) || isNaN(current)) return;
    
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Cannot divide by zero!');
                clear();
                return;
            }
            computation = prev / current;
            break;
        default:
            return;
    }
    
    currentOperand = computation.toString();
    operation = null;
    previousOperand = '';
    updateDisplay();
}

// Event listeners
numberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        appendNumber(btn.getAttribute('data-number'));
    });
});

operatorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        chooseOperation(btn.getAttribute('data-operator'));
    });
});

clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deleteDigit);
equalsBtn.addEventListener('click', calculate);

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') appendNumber(e.key);
    if (e.key === '.') appendNumber('.');
    if (e.key === '+' || e.key === '-') chooseOperation(e.key);
    if (e.key === '*') {
        e.preventDefault();
        chooseOperation('*');
    }
    if (e.key === '/') {
        e.preventDefault();
        chooseOperation('/');
    }
    if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        calculate();
    }
    if (e.key === 'Backspace') deleteDigit();
    if (e.key === 'Escape') clear();
});

// Initialize display
updateDisplay();
