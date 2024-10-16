




// soal 1
// let x = Number(prompt("masukan bilangan (X):"));
// let y = Number(prompt("masukan bilangan (y):"));

// if ( x > y){
//     alert(bilangan terbesar adalah ${x});
// }else if (x < y){
//     alert(bilangan terbesar adalah ${y});
// }else{
//     alert("kedua bilangan sama besar");
// }

// soal2
// let a = Number(prompt("masukan nilai a", ""));
// let b = Number(prompt("masukan nilai b", ""));
// let c = Number(prompt("masukan nilai b", ""));

// let d = b**2 - (4(a*c));
 
// if(d > 0){
//     alert(d - ${d})
// }else if(d == 0){
//     alert(d = sama dengan ${d})
// }else{
//     alert(d = sama dengan ${d})
// }

//soal 3

// soal 4
// let x = Number(prompt("masukan bilangan X"));
// let y = Number(prompt("masukan bilangan y"));
// let z = Number(prompt("masukan bilangan z"));

// if ( y > z && x){
//     alert(bilangannya adalah ${x});
// }else if ( x > z && y){
//     alert(bilangannya adalah ${y});
// }else if ( z > y && x){
//     alert(bilangannya adalah ${z});
// }else{
//     alert("sistem eror")
// }


//soal 5 


//soal 6
let tanggal = Number(prompt("masukan tanggal"));
let bulan = Number(prompt("masukan bulan"));
let hari = 0

if(bulan == 2) {
    hari = 31 + tanggal
} else if(bulan == 3) {
    hari =31 + 28 + tanggal
}else if(bulan == 4 ){
    hari = 31 + 28 + 31 + tanggal

}else if (bulan == 5 ){
    hari = 31 + 28 + 31 + 30 + tanggal
}else if (bulan == 6 ){
    hari = 31 + 28 + 31 + 30 + 31 + 30 + tanggal
}else if (bulan == 7 ){
    hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + tanggal
}else if (bulan == 8 ){
    hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 +30 +tanggal
}else if (bulan == 9 ){
    hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30 + 31 +tanggal
}else if (bulan == 10 ){
   hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30 + tanggal
}else if (bulan == 11 ){
   hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30 + 31 +tanggal
}else if (bulan == 12 ){
   hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30 +tanggal
}else {
    alert('eror')
}

alert(hari)