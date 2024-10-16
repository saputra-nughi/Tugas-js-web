// function person(firstName, lastName , age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;

//     this.showDetails = function(){
//         console.log(`hallo, nama saya ${this.firstName} ${this.lastName} umur ${this.age} `);
//     }
// }
// const rangga = new person("rangga","pandu","16");
// rangga.showDetails();

// const xann = new person("xann","sion","8");
// xann.showDetails(); 

function persegiPanjang(panjang, lebar){
    this.panjang = panjang;
    this.lebar = lebar;

    this.luas = function(){
        console.log(this.panjang * this.lebar);
    }
    this.keliling = function(){
        console.log(2 * (this.panjang + this.lebar));
    }
}

let persegipanjang = new persegiPanjang(50 , 20);
persegipanjang.luas();
persegipanjang.keliling();