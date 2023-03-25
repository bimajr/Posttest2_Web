// ambil data dari session storage
const data = JSON.parse(sessionStorage.getItem("dataArray"));

// tampilkan data pada elemen HTML
const namaOutput = document.querySelector("#nama-output");
const emailOutput = document.querySelector("#email-output");
const jkOutput = document.querySelector("#jk-output");
const genreOutput = document.querySelector("#genre-output");
const paketOutput = document.querySelector("#paket-output");
const tanggapanOutput = document.querySelector("#tanggapan-output");

namaOutput.innerText = data[data.length - 1].nama;
emailOutput.innerText = data[data.length - 1].email;
jkOutput.innerText = data[data.length - 1].jenisKelamin;
genreOutput.innerText = data[data.length - 1].genreMusik.join(", ");
paketOutput.innerText = data[data.length - 1].paketBerlangganan;
tanggapanOutput.innerText = data[data.length - 1].tanggapan;
