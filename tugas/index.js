class Mobil {
    // Konstruktor
    constructor(merk, kecepatan = 0) {
        this.merk = merk;
        this.kecepatan = kecepatan;    }
    // Metode untuk menambah kecepatan
    berakselerasi() {
        this.kecepatan += 10;  }
    // Metode untuk menampilkan kecepatan
    tampilkanKecepatan() {
        console.log(`Kecepatan mobil ${this.merk}: ${this.kecepatan} km/jam`);    }
}
// Membuat objek dari kelas Mobil
const mobil1 = new Mobil("Toyota");

mobil1.tampilkanKecepatan(); // Output: Kecepatan mobil Toyota: 0 km/jam
mobil1.berakselerasi();
mobil1.tampilkanKecepatan(); // Output: Kecepatan mobil Toyota: 10 km/jam
mobil1.berakselerasi();
mobil1.tampilkanKecepatan(); // Output: Kecepatan mobil Toyota: 20 km/jam
