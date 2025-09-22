//Produk toko
let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

//Taambah produk
function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
    produkToko.push({id: idBaru, nama: nama, harga: harga, stok: stok});
}

//Hapus produk
function hapusProduk(id) {
    produkToko = produkToko.filter(p => p.id !== id);
}

//Menampilkan produk
function tampilkanProduk() {
    console.log("Daftar Produk Toko");
    produkToko.forEach(p => {
        console.log(`ID: ${p.id}, Nama: ${p.nama}, Harga: Rp${p.harga}, Stok: ${p.stok}`);
    });
}


tampilkanProduk();                //Tampilkan produk awal
tambahProduk("Headset", 500000, 4); //Tambah produk baru
hapusProduk(2);                   //Hapus produk
tampilkanProduk();                //Tampilkan produk update
