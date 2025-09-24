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
const vario = new Motor("Vario");
const kijang = new Mobil("Kijang");

//pelanggan
const pelanggan1 = new Pelanggan("Chintya", "08968278192");
const pelanggan2 = new Pelanggan("Hairulina", "089876521344");
const pelanggan3 = new Pelanggan("Mirza", "08974125546");
const pelanggan4 = new Pelanggan("Abil", "08942185711");

//sewa kendaraan
pelanggan1.sewaKendaraan(Bugati);
pelanggan2.sewaKendaraan(beat);
pelanggan3.sewaKendaraan(vario);
pelanggan4.sewaKendaraan(kijang);

//Masukkan ke sistem
const sistem = new SistemTransportasi();
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);
sistem.tambahPelanggan(pelanggan3);
sistem.tambahPelanggan(pelanggan4);

//daftar pelanggan
sistem.tampilkanPelanggan();
