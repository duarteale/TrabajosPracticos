let displayValue = '';
const pi = Math.PI;

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearLastEntry() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function clearAll() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}

function sqrt() {
    try {
        const result = Math.sqrt(eval(displayValue));
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}

function log() {
    try {
        const result = Math.log(eval(displayValue));
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}

function sin() {
    try {
        const result = Math.sin(eval(displayValue));
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}

function cos() {
    try {
        const result = Math.cos(eval(displayValue));
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}

function tan() {
    try {
        const result = Math.tan(eval(displayValue));
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}

function exponencial() {
    try {
        const currentValue = parseFloat(displayValue);
        if (!isNaN(currentValue)) {
            const result = Math.exp(currentValue);
            document.getElementById('display').value = result;
            displayValue = result.toString();
        } else {
            document.getElementById('display').value = 'Error';
            displayValue = '';
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}
function factorial() {
    try {
        const currentValue = parseFloat(displayValue);
        if (!isNaN(currentValue)) {
            if (currentValue < 0) {
                document.getElementById('display').value = 'Error';
                displayValue = '';
                return;
            }
            let result = 1;
            for (let i = 2; i <= currentValue; i++) {
                result *= i;
            }
            document.getElementById('display').value = result;
            displayValue = result.toString();
        } else {
            document.getElementById('display').value = 'Error';
            displayValue = '';
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}