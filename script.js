const getKeys = document.querySelectorAll('.op-num-btn');
const getCalcArea = document.querySelector('.calc-area');
const getAllClearBtn = document.querySelector('.all-clear-btn');
const getResultBtn = document.querySelector('.result-btn');
const regEx = /^[0-9]+\.[0-9]+[\+\-\/\*]{1}[0-9]+\.[0-9]+$/;

function clear(){
    getCalcArea.value = 0;
};

function result(){
    try{
        getCalcArea.value = eval(getCalcArea.value);
    } catch(err){
        getCalcArea.value += ''
    }
    
};

getKeys.forEach((item)=>{
    item.addEventListener('click', ()=>{
        if (isNaN(item.value)){
            switch (item.value){
                case '+':
                    if (getCalcArea.value.includes(item.value)) return
                    getCalcArea.value += item.value;
                    break;
                case '-':
                    if (getCalcArea.value.includes(item.value)) return
                    getCalcArea.value += item.value;
                    break;
                case '*':
                    if (getCalcArea.value.includes(item.value)) return
                    getCalcArea.value += item.value;
                    break;
                case '/':
                    if (getCalcArea.value.includes(item.value)) return
                    getCalcArea.value += item.value;
                    break;
                case '.':
                    if (getCalcArea.value.includes(item.value)) return
                    getCalcArea.value += item.value;
                    break;
                default:
                    return
            }
        } else {
            if (getCalcArea.value[0] === '0') {
                getCalcArea.value = getCalcArea.value.replace('0', item.value);
            } else {
                getCalcArea.value += item.value;
            };
        };
    });
});

getResultBtn.addEventListener('click', result);
getAllClearBtn.addEventListener('click', clear);