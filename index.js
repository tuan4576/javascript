function Nhan(a, b) {
    return a * b;
}
function Cong(a,b){
    return a + b;
}
function Tru(a,b){
    return a - b;
}
function Chia(a,b){
    return a / b;
}
function ChiaDu(a,b){
    return a % b;
}

function Option(operation, a, b) {
    let result;
    switch (operation) {
        case "Cong":
            result = Cong(a,b);
            break;
        case "Tru":
            result = Tru(a,b);
            break;
        case "Nhan":
            result = Nhan(a, b);
            break;
        case "Chia":
            result = Chia(a,b);
            break;
        case "ChiaDu":
            result = ChiaDu(a,b);
            break;
    }
    return result;
}

function Click() {
    const operation = document.getElementById("operation").value;
    const a = parseFloat(document.getElementById("inputA").value) || 0;
    const b = parseFloat(document.getElementById("inputB").value) || 0;
    const result = Option(operation, a, b);
    document.getElementById("demo").innerHTML = result;
}

function Delete() {
    document.getElementById("demo").innerHTML = '';
    document.getElementById("inputA").value = '';
    document.getElementById("inputB").value = '';
}

let a = [1,2,3]
let b = [...a,4,5,6]
console.log(b.length)