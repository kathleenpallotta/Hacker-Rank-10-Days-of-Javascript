let btn0 = document.querySelector('#btn0');
let btn1 = document.querySelector('#btn1');
let btnClr = document.querySelector('#btnClr');
let btnEql = document.querySelector('#btnEql');
let btnSum = document.querySelector('#btnSum');
let btnSub = document.querySelector('#btnSub');
let btnMul = document.querySelector('#btnMul');
let btnDiv = document.querySelector('#btnDiv');
let res = document.querySelector('#res');

let operation;

btn0.addEventListener('click', function(){
    res.textContent += '0';
});

btn1.addEventListener('click', function(){
    res.textContent += '1';
});

btnSum.addEventListener('click', function(){
    let verify = res.textContent;
    if (res.textContent && (verify.endsWith('0') ||
    verify.endsWith('1'))) {
        res.textContent += '+'; 
    }
});

btnSub.addEventListener('click', function(){
    let verify = res.textContent;
    if (res.textContent && (verify.endsWith('0') ||
    verify.endsWith('1'))) {
        res.textContent += '-'; 
    }
});

btnMul.addEventListener('click', function(){
    let verify = res.textContent;
    if (res.textContent && (verify.endsWith('0') ||
    verify.endsWith('1'))) {
        res.textContent += '*'; 
    }
});

btnDiv.addEventListener('click', function(){
    let verify = res.textContent;
    if (res.textContent && (verify.endsWith('0') ||
    verify.endsWith('1'))) {
        res.textContent += '/'; 
    }
});

btnEql.addEventListener('click', function(){
    operation = res.textContent;
    operate(operation);
});

btnClr.addEventListener('click', function(){
    res.textContent = '';
});


function operate(string) {
    if (string.search(/\+/) != -1) {
        sum(string);
    } else if (string.search(/\-/) != -1) {
        sub(string);
    } else if (string.search(/\*/) != -1) {
        mul(string);
    } else if (string.search(/\//) != -1) {
        div(string);
    }
}

function sum(string) {
    let arr = '';
    let operand1 = 0;
    let operand2 = 0;
    let resultado = 0;
    arr = string.split('+');
    operand1 = parseInt(arr[0], 2);
    operand2 = parseInt(arr[1], 2);
    resultado = operand1 + operand2;
    resultado = (resultado >>> 0).toString(2);
    res.textContent = resultado;
}

function sub(string) {
    let arr = '';
    let operand1 = 0;
    let operand2 = 0;
    let resultado = 0;
    arr = string.split('-');
    operand1 = parseInt(arr[0], 2);
    operand2 = parseInt(arr[1], 2);
    resultado = operand1 - operand2;
    resultado = (resultado >>> 0).toString(2);
    res.textContent = resultado;
}

function mul(string) {
    let arr = '';
    let operand1 = 0;
    let operand2 = 0;
    let resultado = 0;
    arr = string.split('*');
    operand1 = parseInt(arr[0], 2);
    operand2 = parseInt(arr[1], 2);
    resultado = operand1 * operand2;
    resultado = (resultado >>> 0).toString(2);
    res.textContent = resultado;
}

function div(string) {
    let arr = '';
    let operand1 = 0;
    let operand2 = 0;
    let resultado = 0;
    arr = string.split('/');
    operand1 = parseInt(arr[0], 2);
    operand2 = parseInt(arr[1], 2);
    resultado = operand1 / operand2;
    resultado = (resultado >>> 0).toString(2);
    res.textContent = resultado;
}