// const form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const nama = document.querySelector('input[type="text"]').value;
//   const email = document.querySelector('input[type="email"]').value;
//   const jenisKelamin = document.querySelector(
//     'input[type="radio"]:checked'
//   ).value;
//   const genreMusik = [];
//   document
//     .querySelectorAll('input[type="checkbox"]:checked')
//     .forEach(function (checkbox) {
//       genreMusik.push(checkbox.value);
//     });
//   const paketBerlangganan = document.querySelector("select").value;
//   const tanggapan = document.querySelector("textarea").value;

//   const data = {
//     nama: nama,
//     email: email,
//     jenisKelamin: jenisKelamin,
//     genreMusik: genreMusik,
//     paketBerlangganan: paketBerlangganan,
//     tanggapan: tanggapan,
//   };

//   sessionStorage.setItem("formData", JSON.stringify(data));
//   // simpan data ke session storage
//   let dataArray = JSON.parse(sessionStorage.getItem("formData")) || [];
//   dataArray.push(data);
//   sessionStorage.setItem("formData", JSON.stringify(dataArray));

//   alert("Data berhasil disimpan!");
// });

// ambil data dari form
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nama = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const jenisKelamin = document.querySelector(
    'input[name="Jenis Kelamin"]:checked'
  ).value;
  const genreMusik = [];
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      genreMusik.push(checkbox.value);
    }
  });
  const paketBerlangganan = document.querySelector("select").value;
  const tanggapan = document.querySelector("textarea").value;

  // buat objek data
  const data = {
    nama,
    email,
    jenisKelamin,
    genreMusik,
    paketBerlangganan,
    tanggapan,
  };

  // simpan data ke session storage
  let dataArray = JSON.parse(sessionStorage.getItem("dataArray")) || [];
  dataArray.push(data);
  sessionStorage.setItem("dataArray", JSON.stringify(dataArray));

  // tampilkan pesan sukses
  alert("Data berhasil disimpan ke session storage");
  window.location.href = "output.html";
});
