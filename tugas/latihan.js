function hitungjumlah(){
    let angka1 = parseFloat(document.getElementById('angka1').value);
    let angka2 = parseFloat(document.getElementById('angka2').value);

    let hasil = angka1 + angka2;

    document.getElementById('hasil').innerText = 'hasil: ' + hasil;
}