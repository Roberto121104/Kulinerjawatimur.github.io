// Fungsi untuk memvalidasi login
function validateLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Logika validasi sederhana
    if (email === "kuliner123@gmail.com" && password === "kulinerenak123") {
        localStorage.setItem('user', email); // Simpan email pengguna di localStorage
        window.location.href = "Kuliner.html"; // Arahkan ke halaman kuliner
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

    if (loginContainer.style.display === "none") {
        loginContainer.style.display = "block";
        registerContainer.style.display = "none";
    } else {
        loginContainer.style.display = "none";
        registerContainer.style.display = "block";
    }
}

// Ubah form untuk memanggil validateLogin saat disubmit
document.getElementById('login-form').onsubmit = function() {
    return validateLogin(); // Menggunakan validateLogin untuk memvalidasi
};

// Event listener untuk form registrasi
document.getElementById('register-form').onsubmit = function(event) {
    event.preventDefault(); // Mencegah pengiriman form default
    alert("Registrasi belum diimplementasikan."); // Pesan untuk registrasi
};
