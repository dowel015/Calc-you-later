function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(a,b,c) {
    if(a=="+") {
        return add(b,c);
    }
    if(a=="-") {
        return subtract(b,c);
    }
    if(a=="*") {
        return multiply(b,c);
    }
    if(a=="/") {
        return divide(b,c);
    }
}
let a=5, b=10;

let c = operate("+",a,b);
let d = operate("-",a,b);
let e = operate("*",a,b);
let f = operate("/",a,b);

console.log(a,b,c,d,e,f);