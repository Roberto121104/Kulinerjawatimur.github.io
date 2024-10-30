// Fungsi untuk memvalidasi login
function validateLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Logika validasi sederhana
    if (email === "kuliner123@gmail.com" && password === "kulinerenak123") {
        localStorage.setItem('user', email); // Simpan email pengguna di localStorage

        // Arahkan ke halaman kuliner menggunakan URL absolut jika di GitHub Pages
        window.location.href = "/repository-name/Kuliner.html"; 
    } else {
        alert("Email atau password salah!");
    }

    // Mencegah form dari pengiriman default
    return false; 
}

// Fungsi untuk mengalihkan antara formulir login dan registrasi
function toggleForms() {
    const loginContainer = document.getElementById('login-container');
    const registerContainer = document.getElementById('register-container');

    loginContainer.style.display = loginContainer.style.display === "none" ? "block" : "none";
    registerContainer.style.display = registerContainer.style.display === "none" ? "block" : "none";
}

// Mengatur event listener untuk form login
document.getElementById('login-form').onsubmit = function(event) {
    event.preventDefault(); // Mencegah pengiriman form default
    validateLogin(); // Memanggil validateLogin untuk memvalidasi
};

// Mengatur event listener untuk form registrasi
document.getElementById('register-form').onsubmit = function(event) {
    event.preventDefault(); // Mencegah pengiriman form default
    alert("Registrasi belum diimplementasikan."); // Pesan untuk registrasi
};
