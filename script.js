// object of calculator
class Calculator {
    constructor(getHistoryOutputVal, getResultOutputVal) {
        this.currentNumTextElementVal = getResultOutputVal;
        this.historyNumTextElementVal = getHistoryOutputVal;
        this.currentNum = '0';
        this.historyNum = '';
    };

    clear() {
        this.currentNum = '0';
        this.historyNum = '';
    };

    delete() {
        if (this.currentNum.length === 1) return this.currentNum = '0';
        if (this.currentNum === '0') return;
        this.currentNum = this.currentNum.slice(0, -1);
    };

    calculate() {
        let calculation;
        const hist = parseFloat(this.historyNum);
        const curr = parseFloat(this.currentNum);
        if (isNaN(hist) || curr === '0') return;
        switch (this.operation) {
            case '÷':
                calculation = hist / curr;
                break;
            case '×':
                calculation = hist * curr;
                break;
            case '-':
                calculation = hist - curr;
                break;
            case '+':
                calculation = hist + curr;
                break;
            case '%':
                calculation = hist % curr;
                break;
            default:
                return;
        };

        this.currentNum = calculation.toString();
        this.historyNum = ''
    };

    negation() {
        this.currentNum *= -1;
        this.currentNum = parseFloat(this.currentNum).toString();
    };

    modulo() {

    };

    chooseNum(number) {
        if (number === '.' || this.currentNum.includes('.')){
            if (number === '.' && this.currentNum.includes('.')) return;
            this.currentNum = this.currentNum.toString() + number.toString();
        } else {
            this.currentNum = this.currentNum.toString() + number.toString();
            this.currentNum = parseFloat(this.currentNum).toString();
        }
    };

    chooseOperation(operation) {
        this.operation = operation;
        this.historyNum = this.currentNum.toString() + this.operation.toString();
        this.currentNum = '0';
    };

    display() {
        this.currentNumTextElementVal.innerHTML = this.currentNum;
        this.historyNumTextElementVal.innerHTML = this.historyNum;
    };
};

// outputs
const getHistoryOutputVal = document.querySelector('.history-output-value');
const getResultOutputVal = document.querySelector('.result-output-value');
// buttons reference arrays
const getNumberButtonsVal = document.querySelectorAll('.number-btn');
const getOperatorButtonsVal = document.querySelectorAll('.operator-btn');
// single button reference variables
const getCancelButtonVal = document.querySelector('.cancel-btn');
const getNegationButtonVal = document.querySelector('.negation-btn');
const getModuloButtonVal = document.querySelector('.modulo-btn');
const getDeleteButtonVal = document.querySelector('.del-btn');
const getEqualButtonVal = document.querySelector('.equal-btn');

// calculator instance
const calc = new Calculator(getHistoryOutputVal, getResultOutputVal);

// event handling for numbers buttons
getNumberButtonsVal.forEach((button) => {
    button.addEventListener('click', () => {
        calc.chooseNum(button.innerHTML);
        calc.display();

        // test log
        console.log(button.innerHTML);
    });
});

// event handling for operations buttons
getOperatorButtonsVal.forEach((button) => {
    button.addEventListener('click', () => {
        calc.chooseOperation(button.innerHTML);
        calc.display();

        // test log
        console.log(button.innerHTML);
    });
});

// event handling for cancel button
getCancelButtonVal.addEventListener('click', () => {
    calc.clear();
    calc.display();

    // test log
    console.log(getCancelButtonVal.innerHTML);
});

// event handling for negation button
getNegationButtonVal.addEventListener('click', () => {
    calc.negation();
    calc.display();

    console.log(getNegationButtonVal.innerHTML);
});

// event handling for modulo button
getModuloButtonVal.addEventListener('click', () => {
    console.log(getModuloButtonVal.innerHTML);
});

// event handling for delete button
getDeleteButtonVal.addEventListener('click', () => {
    calc.delete();
    calc.display()

    // test log
    console.log(getDeleteButtonVal.innerHTML);
});

// event handling for equal button
getEqualButtonVal.addEventListener('click', () => {
    calc.calculate();
    calc.display();

    // test log
    console.log(getEqualButtonVal.innerHTML);
});
