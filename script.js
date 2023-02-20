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
    let answer;
    if(a=="+") {
        answer = add(b,c);
    }
    if(a=="-") {
        answer = subtract(b,c);
    }
    if(a=="X") {
        answer = multiply(b,c);
    }
    if(a=="%") {
        answer = divide(b,c);
    }
    answer = answer * 100;
    answer = Math.round(answer);
    answer = answer / 100;
    return answer;
}

function someFun(e) {
    if(e.target.textContent == "C") {
        clear();
    } else if(e.target.className == "operator") {
        if(operator == 0) {
            num1 = display;
            operator = e.target.textContent;
            clearDisplay();
            decimal = 0;
        } else {
            num2 = display;
            display = operate(operator, Number(num1), Number(num2));
            document.getElementById("display").textContent = display;
            num1 = display;
            num2 = 0;
            operator = e.target.textContent;
            clearDisplay();
            decimal = 0;
        }
    } else if(e.target.className == "equal") {
        if(operator == 0) {
        } else {
            num2 = display;
            display = operate(operator, Number(num1), Number(num2));
            document.getElementById("display").textContent = display;
            num1 = display;
            num2 = 0;
            operator = 0;
            decimal = 0;
        }
    } else if(e.target.textContent == ".") {
        if(decimal == 0) {
            decimal += 1;
            display = display + e.target.textContent;
            document.getElementById("display").textContent = display;
        } 
    } else {
        display = display + e.target.textContent;
        document.getElementById("display").textContent = display;
    }
}

function clear() {
    clearDisplay();
    num1 = 0;
    num2 = 0;
    operator = 0;
    document.getElementById("display").textContent = "0";
    decimal = 0;
}

function clearDisplay() {
    display = ""; 
}

let display = "";
let num1, num2; 
let operator = 0;
let decimal = 0;
const input = Array.from(document.querySelectorAll("button"));
input.forEach(button => button.addEventListener("click", someFun));