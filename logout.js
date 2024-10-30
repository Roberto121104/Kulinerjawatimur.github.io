// Fungsi untuk logout pengguna
function logout() {
    // Hapus data user dari localStorage
    localStorage.removeItem('user'); // Hapus data spesifik, jika ada
    localStorage.clear(); // Bersihkan semua data dari localStorage jika diperlukan

    // Tampilkan pesan konfirmasi logout
    alert('Anda telah logout.');

    // Arahkan pengguna kembali ke halaman index
    // Sesuaikan dengan path yang benar jika berada di subfolder atau menggunakan GitHub Pages
    window.location.href = 'index.html';
}

// Event listener untuk tombol logout
// Pastikan tombol logout memiliki id 'logout-btn' di HTML
document.getElementById('logout-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah aksi default dari tombol (misalnya jika ada link)
    logout(); // Panggil fungsi logout
});
