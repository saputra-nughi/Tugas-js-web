 //luas segitiga
  // let alas = Number(prompt("masukan bilngan"));
  // let tinggi = Number(prompt("masukan bilangan"))

  // function luasSegitiga(a, t){
  //     luas = a * t / 2;
  //     alert(luas);
  // }
  // luasSegitiga(alas, tinggi);
 

//keliling lingakan

// let jari = Number(prompt("masukan jari jari"));

// function kelilingLingkaran(r){
//     keliling = 2 * 3.14 * r;
//     alert(keliling);
// }

// kelilingLingkaran(jari);

let bilangan = Number(prompt("masukan angka"));

fungsiPrima(bilangan);

function fungsiPrima(a){
  let prima = true;
  for(let i = 2; i < a; i++){
    if(a % i == 0){
      prima = false;
      break;
    }
  }
  if(prima){
    alert(`${bilangan} bilangan prima`);
  }else{
    alert(`${bilangan} bukan bilangan prima`);
  }
}