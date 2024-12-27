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


// String method
// vị trí , cắt , chuyển đổi , nối , xóa khoảng trống hai bên , thêm , lặp , thay thế , chuyển đôi
// vị trí : at(), charAt()
//cắt slice , subtring, str[]
// chuyển đổi : toUppercase , toLowercase
// nối : concat()
//xóa không khoảng trống: trim , trimStart, trimEnd
// thêm  : padStart , padEnd
// lặp repeat
// thay thế : replace
//chuyển đổi : split  

//Array method  
let array = ['Táo', 'Chuối', 'Mận', 'Mit',[1,2,3]];
console.log(array); 

// độ dài, vị trí, nối,
// delete array[number]
// độ dài  : lenght
// vị trí : at ,
// nối : join 
// xóa phần tử cuối : pop()
// thêm phần tử ở cuối : push() != đến mảng trả về
// xóa phần tử đầu : shift() 
// thêm phần đầu : unshift
// thay đổi giá trị bằng chỉ số []
// gộp mảng : concat != thêm cuối được 
// copy giá trị ghi đè lên : copyWithin()
// flat làm phẳng 
// slice 
// splice  khó vl 
// flatMap() khó
// toString
//


