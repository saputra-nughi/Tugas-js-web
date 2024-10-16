let hasil;
function plus(a,b){ 
    hasil = a + b;
    alert(`${a} + ${b} = ${hasil}`);
}
function kurang(a,b){ 
    hasil = a - b;
    alert(`${a} - ${b} = ${hasil}`);
}
function kali(a,b){ 
    hasil = a * b;
    alert(`${a} * ${b} = ${hasil}`);
}
function bagi(a,b){ 
    hasil = a / b;
    alert(`${a} / ${b} = ${hasil}`);
}



let input1 = Number(prompt("masukan bilangan"));
let input2 = Number(prompt("masukan bilangan"));
let operator = prompt("masukan operator");

if(operator == '+'){
    plus(input1, input2);
    alert(`${a} + ${b} = ${hasil}`);
}
else if(operator == '-'){
    kurang(input1, input2);
    alert(`${a} - ${b} = ${hasil}`);
}
else if(operator == '*'){
    kali(input1, input2);
    alert(`${a} * ${b} = ${hasil}`);
}
else if(operator == '/'){
    bagi(input1, input2);
    alert(`${a} / ${b} = ${hasil}`);
}
else{
    alert('error!!!!!!!!!!!!!!!!');
} 