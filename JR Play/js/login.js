const loginForm = document.querySelector(".login-card-form");

// Menambahkan event listener ketika form di-submit
loginForm.addEventListener("submit", function (event) {
  // Menghentikan form agar tidak di-submit ke halaman lain
  event.preventDefault();

  // Mendapatkan nilai dari input form
  const email = document.querySelector("#emailForm").value;
  const password = document.querySelector("#passwordForm").value;

  // Mendapatkan data yang sudah tersimpan di local storage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Mencari apakah ada user dengan email dan password yang cocok
  const user = users.find((u) => u.email === email && u.password === password);

  // Jika user ditemukan, redirect ke halaman utama
  if (user) {
    window.location.href = "index.html";
  } else {
    // Jika user tidak ditemukan, tampilkan pesan kesalahan
    alert("Email atau password salah!");
  }
});
