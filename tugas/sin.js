class hewan{
    constructor(nama){
        this.nama = nama
    }
    suara(){
        console.log(`${this.nama} bersuara`);
        return "hewan bersuara";
        
    }
}

class Kucing extends hewan {
    suara(){
        return (`${this.nama} meong`);
    }
}
const kucing = new Kucing ("kucing");

console.log(kucing.suara());

