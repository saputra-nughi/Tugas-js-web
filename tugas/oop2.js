// class person{
//     constructor(firstName, lastName , age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     }
//     showDetails(){
//         console.log(`hallo, nama saya ${this.firstName} ${this.lastName} umur ${this.age} `);
//     }
// }
// const rangga = new person("rangga","pandu","16");
// rangga.showDetails();
// console.info(rangga);

// const xann = new person("xann","sion","8");
// xann.showDetails();
// console.info(xann); 

// class persegiPanjang{
//     constructor(panjang, lebar){
//     this.panjang = panjang;
//     this.lebar = lebar;
//     }
//     luas(){
//         console.log(this.panjang * this.lebar);
//     }
//     keliling(){
//         console.log(2  * (this.panjang + this.lebar));
//     }
// }

// const persegipanjang = new persegiPanjang(50 , 20);
// persegipanjang.luas();
// persegipanjang.keliling();
// console.info(persegipanjang);

//soal 3

// class rekeningBank{
//     constructor(nomorRekening, saldo){
//         this.nomorRekening = nomorRekening;
//         this.saldo = saldo;
//     }
//     setorUang = function(uang){
//         console.log(`sisa saldo ${this.nomorRekening} ${this.saldo + uang}`);
//     }
//     tarikUang = function(ambil){
//         console.log(` sisa saldo ${this.nomorRekening} ${this.saldo - ambil}`);
//     }
// }
// const kevin = new rekeningBank(66734421, 50000);
// kevin.setorUang(5000);
// kevin.tarikUang(20000);

// const rangga = new rekeningBank(123456,10000000);
// rangga.setorUang(300000);
// rangga.tarikUang(500000);

// const xann = new rekeningBank(12345, 50000000);
// xann.setorUang(50000000);
// xann.tarikUang(800000);

//soal 4

//soal 5

// class book{
//     constructor(tittle, author, yers){
//         this.author = author;
//         this.tittle = tittle;
//         this.yers = yers;
//     }

//     bookDetails(){
//         console.log(`judul buku ${this.tittle} pembuat${this.author} tahun terbit${this.yers}`);   
//     }
// }

// class Ebook extends book{
//     constructor(tittle, author, yers, price){
//         super(tittle, author, yers);
//         this.price = price;
//     }
//     bookDetails(){
//         super.bookDetails();
//         console.log(`harga buku ${this.price}`);  
//     }
// }

// let nughi2  = new Ebook("solo-leveling" ," kevin", " 2019", "900000");
// nughi2.bookDetails();

//soal 6
class Employee{
        constructor(nama, gajibulanan){
            this.nama = nama;
            this.gajibulanan = gajibulanan;
        }
        hitungGajiTahunan(){
        return `${this.nama} ${this.gajibulanan*12}`;
        }
    }
    
    class Manager extends Employee{
        constructor(nama, gajibulanan, departemen){
            super(nama, gajibulanan);
            this.departemen = departemen;
        }
        hitungGajiTahunan(){
        return `nama karyawan :${this.nama}, gajibulanan :${this.gajibulanan}, nama manager :${this.nama} departemen: ${this.departemen}, bonus: 10%, total gaji: ${this.gajibulanan * 12 + (this.gajibulanan / 10)}`;
        }
    }
     let abix = new Manager('Abiyyu', 500000, 'Kominfo');
     console.log(abix.hitungGajiTahunan())
    let karyawan2 = new Manager('Denggol', 1000000, 'IT');
    console.log(karyawan2.hitungGajiTahunan())
