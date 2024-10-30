// Fungsi untuk memeriksa apakah pengguna sudah login
function checkLoginStatus() {
    const user = localStorage.getItem('user');
    if (!user) {
        // Jika pengguna belum login, arahkan ke halaman login
        window.location.href = 'login.html';
    }
}

// Panggil fungsi checkLoginStatus saat halaman dimuat
window.onload = checkLoginStatus;

// Fungsi untuk logout pengguna
function logout() {
    // Hapus data pengguna dari localStorage
    localStorage.removeItem('user'); // Menghapus data spesifik jika diperlukan
    localStorage.clear(); // Bersihkan semua data dari localStorage

    // Tampilkan pesan konfirmasi logout
    alert('Anda telah logout.');

    // Arahkan pengguna kembali ke halaman index
    window.location.href = 'index.html'; // Pastikan path sesuai dengan lokasi index.html
}

// Event listener untuk tombol logout
// Pastikan tombol logout memiliki id 'logout-btn' di HTML
document.getElementById('logout-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah aksi default dari tombol
    logout(); // Panggil fungsi logout
});
