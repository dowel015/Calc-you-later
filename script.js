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

function someFun(e) {
    if(e.target.textContent == "C") {
        clear();
    } else if(e.target.class == "operator") {
        
    } else {
        display = display + e.target.textContent;
        document.getElementById("display").textContent = display;
    }
}

function clear() {
    document.getElementById("display").textContent = "0";
    display = "";
}

let display = "";
const input = Array.from(document.querySelectorAll("button"));
input.forEach(button => button.addEventListener("click", someFun));