// object of calculator
class Calculator {
    currentNumTextElementVal: HTMLDivElement;
    historyNumTextElementVal: HTMLDivElement;
    currentNum: any = '0';
    historyNum: any = '';
    operation: any;

    constructor(getHistoryOutputVal: HTMLDivElement, getResultOutputVal: HTMLDivElement) {
        this.currentNumTextElementVal = getResultOutputVal;
        this.historyNumTextElementVal = getHistoryOutputVal;
        this.currentNum = '0';
        this.historyNum = '';
    };

    // clearing all outputs - method
    clear() {
        this.currentNum = '0';
        this.historyNum = '';
    };

    // deleting one value - method
    delete() {
        if (this.currentNum.length === 1) return this.currentNum = '0';
        if (this.currentNum === '0') return;
        this.currentNum = this.currentNum.slice(0, -1);
    };

    // calculating result - method
    calculate() {
        let calculation;
        const hist: any = parseFloat(this.historyNum);
        const curr: any = parseFloat(this.currentNum);
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

        this.currentNum = calculation.toFixed(2).toString();
        this.historyNum = ''
    };

    // negation - method
    negation() {
        this.currentNum *= -1;
        this.currentNum = parseFloat(this.currentNum).toString();
    };

    // choosing clicked number - method
    chooseNum(number: string) {
        if (number === '.' || this.currentNum.includes('.')){
            if (number === '.' && this.currentNum.includes('.')) return;
            this.currentNum = this.currentNum.toString() + number.toString();
        } else {
            this.currentNum = this.currentNum.toString() + number.toString();
            this.currentNum = parseFloat(this.currentNum).toString();
        };
    };

    // choosing clicked operation - method
    chooseOperation(operation: string) {
        if (this.historyNum !== '') {
            this.calculate()
        };
        this.operation = operation;
        this.historyNum = this.currentNum.toString() + this.operation.toString();
        this.currentNum = '0';
    };

    // displaying values - method
    display() {
        this.currentNumTextElementVal.innerHTML = this.currentNum;
        this.historyNumTextElementVal.innerHTML = this.historyNum;
    };
};

// outputs
const getHistoryOutputVal = document.querySelector('.history-output-value') as HTMLDivElement;
const getResultOutputVal = document.querySelector('.result-output-value') as HTMLDivElement;
// buttons reference arrays
const getNumberButtonsVal = document.querySelectorAll('.number-btn');
const getOperatorButtonsVal = document.querySelectorAll('.operator-btn');
// single button reference variables
const getCancelButtonVal = document.querySelector('.cancel-btn') as HTMLButtonElement;
const getNegationButtonVal = document.querySelector('.negation-btn') as HTMLButtonElement;
const getModuloButtonVal = document.querySelector('.modulo-btn') as HTMLButtonElement;
const getDeleteButtonVal = document.querySelector('.del-btn') as HTMLButtonElement;
const getEqualButtonVal = document.querySelector('.equal-btn') as HTMLButtonElement;

// calculator instance
const calc = new Calculator(getHistoryOutputVal, getResultOutputVal);

// event handling for numbers buttons
getNumberButtonsVal.forEach((button) => {
    button.addEventListener('click', () => {
        calc.chooseNum(button.innerHTML);
        calc.display();
    });
});

// event handling for operations buttons
getOperatorButtonsVal.forEach((button) => {
    button.addEventListener('click', () => {
        calc.chooseOperation(button.innerHTML);
        calc.display();
    });
});

// event handling for cancel button
getCancelButtonVal.addEventListener('click', () => {
    calc.clear();
    calc.display();
});

// event handling for negation button
getNegationButtonVal.addEventListener('click', () => {
    calc.negation();
    calc.display();
});

// event handling for delete button
getDeleteButtonVal.addEventListener('click', () => {
    calc.delete();
    calc.display()
});

// event handling for equal button
getEqualButtonVal.addEventListener('click', () => {
    calc.calculate();
    calc.display();
});
