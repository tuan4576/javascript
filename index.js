function Ham(){
    const a = parseFloat(document.getElementById("inputA").value) || 0;
    const b = parseFloat(document.getElementById("inputB").value) || 0;
    return a + b;
}

Click = () => {
    const Ketqua =  Ham()
    document.getElementById("demo").innerHTML = Ketqua;
}
Delete = () => {
    document.getElementById("demo").innerHTML = '';
    document.getElementById("inputA").value = '';
    document.getElementById("inputB").value = '';
}
