import users from "./data.js";

const index = () => {
    let teks = "<br></br><ul>";
    users.map((user) => {
        teks += `<li>${user.nama},   Umur: ${user.umur},   Alamat: ${user.alamat},   Email: ${user.email}</li>`;
    });
    teks += "</ul>";
    document.getElementById("kotak").innerHTML = teks;
};

//Tambah data
const store = (user) => {
    users.push(user);
    alert("Data berhasil ditambahkan: " + user.nama);
};

//Hapus data
const destroy = () => {
    const deleted = users.pop();
    alert("Data dihapus: " + deleted.nama);
};

export { index, store, destroy };
