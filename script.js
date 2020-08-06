// object of calculator
var Calculator = /** @class */ (function () {
    function Calculator(getHistoryOutputVal, getResultOutputVal) {
        this.currentNum = '0';
        this.historyNum = '';
        this.currentNumTextElementVal = getResultOutputVal;
        this.historyNumTextElementVal = getHistoryOutputVal;
        this.currentNum = '0';
        this.historyNum = '';
    }
    ;
    // clearing all outputs - method
    Calculator.prototype.clear = function () {
        this.currentNum = '0';
        this.historyNum = '';
    };
    ;
    // deleting one value - method
    Calculator.prototype["delete"] = function () {
        if (this.currentNum.length === 1)
            return this.currentNum = '0';
        if (this.currentNum === '0')
            return;
        this.currentNum = this.currentNum.slice(0, -1);
    };
    ;
    // calculating result - method
    Calculator.prototype.calculate = function () {
        var calculation;
        var hist = parseFloat(this.historyNum);
        var curr = parseFloat(this.currentNum);
        if (isNaN(hist) || curr === '0')
            return;
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
        }
        ;
        this.currentNum = calculation.toString();
        this.historyNum = '';
    };
    ;
    // negation - method
    Calculator.prototype.negation = function () {
        this.currentNum *= -1;
        this.currentNum = parseFloat(this.currentNum).toString();
    };
    ;
    // choosing clicked number - method
    Calculator.prototype.chooseNum = function (number) {
        if (number === '.' || this.currentNum.includes('.')) {
            if (number === '.' && this.currentNum.includes('.'))
                return;
            this.currentNum = this.currentNum.toString() + number.toString();
        }
        else {
            this.currentNum = this.currentNum.toString() + number.toString();
            this.currentNum = parseFloat(this.currentNum).toString();
        }
        ;
    };
    ;
    // choosing clicked operation - method
    Calculator.prototype.chooseOperation = function (operation) {
        if (this.historyNum !== '') {
            this.calculate();
        }
        ;
        this.operation = operation;
        this.historyNum = this.currentNum.toString() + this.operation.toString();
        this.currentNum = '0';
    };
    ;
    // displaying values - method
    Calculator.prototype.display = function () {
        this.currentNumTextElementVal.innerHTML = this.currentNum;
        this.historyNumTextElementVal.innerHTML = this.historyNum;
    };
    ;
    return Calculator;
}());
;
// outputs
var getHistoryOutputVal = document.querySelector('.history-output-value');
var getResultOutputVal = document.querySelector('.result-output-value');
// buttons reference arrays
var getNumberButtonsVal = document.querySelectorAll('.number-btn');
var getOperatorButtonsVal = document.querySelectorAll('.operator-btn');
// single button reference variables
var getCancelButtonVal = document.querySelector('.cancel-btn');
var getNegationButtonVal = document.querySelector('.negation-btn');
var getModuloButtonVal = document.querySelector('.modulo-btn');
var getDeleteButtonVal = document.querySelector('.del-btn');
var getEqualButtonVal = document.querySelector('.equal-btn');
// calculator instance
var calc = new Calculator(getHistoryOutputVal, getResultOutputVal);
// event handling for numbers buttons
getNumberButtonsVal.forEach(function (button) {
    button.addEventListener('click', function () {
        calc.chooseNum(button.innerHTML);
        calc.display();
    });
});
// event handling for operations buttons
getOperatorButtonsVal.forEach(function (button) {
    button.addEventListener('click', function () {
        calc.chooseOperation(button.innerHTML);
        calc.display();
    });
});
// event handling for cancel button
getCancelButtonVal.addEventListener('click', function () {
    calc.clear();
    calc.display();
});
// event handling for negation button
getNegationButtonVal.addEventListener('click', function () {
    calc.negation();
    calc.display();
});
// event handling for delete button
getDeleteButtonVal.addEventListener('click', function () {
    calc["delete"]();
    calc.display();
});
// event handling for equal button
getEqualButtonVal.addEventListener('click', function () {
    calc.calculate();
    calc.display();
});
