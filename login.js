// Fungsi untuk memvalidasi login
function validateLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Logika validasi sederhana
    if (email === "kuliner123@gmail.com" && password === "kulinerenak123") {
        localStorage.setItem('user', email); // Simpan email pengguna di localStorage
        
        // Arahkan ke halaman Kuliner setelah login berhasil
        window.location.href = 'Kuliner.html'; // Pastikan nama file sesuai
    } else {
        alert("Email atau password salah!");
    }

    // Mencegah form dari pengiriman default
    return false; 
}

// Mengatur event listener untuk form login
document.getElementById('login-form').onsubmit = function(event) {
    event.preventDefault(); // Mencegah pengiriman form default
    validateLogin(); // Memanggil fungsi validasi login
};

// Event listener untuk form registrasi
document.getElementById('register-form').onsubmit = function(event) {
    event.preventDefault(); // Mencegah pengiriman form default
    alert("Registrasi belum diimplementasikan."); // Pesan untuk registrasi
};
