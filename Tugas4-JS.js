//Parent Class 
class Kendaraan {
    constructor(nama, jenis, kapasitas) {
        this.nama = nama;
        this.jenis = jenis;
    }

    info() {
        return `${this.nama} (${this.jenis})`;
    }
}

//Class Mobil
class Mobil extends Kendaraan {
    constructor(nama) {
        super(nama, "Mobil");
    }

    info() {
        return `${this.nama} - ${this.jenis}`;
    }
}

//Class Motor
class Motor extends Kendaraan {
    constructor(nama) {
        super(nama, "Motor");
    }

    info() {
        return `${this.nama} - ${this.jenis}`;
    }
}


//Class Pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
        console.log(`${this.nama} menyewa ${kendaraan.info()}`);
    }

    info() {
        return `${this.nama} (${this.nomorTelepon}) menyewa: ${this.kendaraanDisewa.info()}`;
    }
}


class SistemTransportasi {
    constructor() {
        this.daftarPelanggan = [];
    }

    tambahPelanggan(pelanggan) {
        this.daftarPelanggan.push(pelanggan);
    }

    tampilkanPelanggan() {
        console.log("\nDaftar Pelanggan yang sedang menyewa kendaraan:");
        this.daftarPelanggan.forEach((p, index) => {
            console.log(`${index + 1}. ${p.info()}`);
        });
    }
}


//kendaraan
const Bugati = new Mobil("Bugati");
const beat = new Motor("Honda Beat");

//pelanggan
const pelanggan1 = new Pelanggan("Chintya", "08968278192");
const pelanggan2 = new Pelanggan("Hairulina", "089876521344");

//sewa kendaraan
pelanggan1.sewaKendaraan(Bugati);
pelanggan2.sewaKendaraan(beat);

//Masukkan ke sistem
const sistem = new SistemTransportasi();
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

//daftar pelanggan
sistem.tampilkanPelanggan();
