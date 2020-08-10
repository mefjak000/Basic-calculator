// object of calculator
class Calculator {
    constructor(getHistoryOutputVal, getResultOutputVal) {
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

    // negation - method
    negation() {
        this.currentNum *= -1;
        this.currentNum = parseFloat(this.currentNum).toString();
    };

    // choosing clicked number - method
    chooseNum(number) {
        if (number === '.' || this.currentNum.includes('.')) {
            if (number === '.' && this.currentNum.includes('.')) return;
            this.currentNum = this.currentNum.toString() + number.toString();
        } else {
            this.currentNum = this.currentNum.toString() + number.toString();
            this.currentNum = parseFloat(this.currentNum).toString();
        };
    };

    // choosing clicked operation - method
    chooseOperation(operation) {
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
// option & popup buttons
const getClosePopupBtn = document.querySelector('.popup-header-close');
const getOptionBtn = document.querySelector('.options-btn');
const getAllThemesBtn = document.querySelectorAll('.theme-btn');

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

// event handling for popup close button
getClosePopupBtn.addEventListener('click', () => {
    document.querySelector('.popup-window').style.display = 'none';
});

// event handling for option button
getOptionBtn.addEventListener('click', () => {
    document.querySelector('.popup-window').style.display = 'flex';
});

// event handling for themes
getAllThemesBtn.forEach((name) => {
    name.addEventListener('click', () => {
        switch (name.innerHTML) {
            case 'Default':
                document.documentElement.style.backgroundImage = 'linear-gradient(to left top, #000000, #3e3244, #4c6d98, #00b5db, #00ffe9)';
                break;
            case 'Light':
                document.documentElement.style.backgroundImage = 'linear-gradient(to left top, #465f60, #728489, #a1aab1, #d1d3d8, #ffffff)';
                break;
            case 'Dark':
                document.documentElement.style.backgroundImage = 'linear-gradient(to left top, #000000, #1c1c1c, #313131, #484848, #606060)';
                break;
            case 'Red':
                document.documentElement.style.backgroundImage = 'linear-gradient(to left top, #292929, #492f4c, #7e2457, #b30042, #d30606)';
                break;
            default:
                break;
        }
    });
});