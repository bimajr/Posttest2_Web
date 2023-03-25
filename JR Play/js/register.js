const registerForm = document.querySelector(".login-card-form");

// Menambahkan event listener ketika form di-submit
registerForm.addEventListener("submit", function (event) {
  // Menghentikan form agar tidak di-submit ke halaman lain
  event.preventDefault();

  // Mendapatkan nilai dari input form
  const nama = document.querySelector("#nama").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#pass").value;

  // Membuat objek dengan data dari form
  const user = {
    nama,
    email,
    password,
  };

  // Mendapatkan data yang sudah tersimpan di local storage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Menambahkan data user ke dalam array users
  users.push(user);

  // Menyimpan data users ke dalam local storage
  localStorage.setItem("users", JSON.stringify(users));

  // Mengosongkan form setelah data berhasil disimpan
  registerForm.reset();

  // Memberikan feedback bahwa data berhasil disimpan
  alert("Data berhasil disimpan!");
  window.location.href = "login.html";
});
