function logout() {
    // Hapus data user dari localStorage
    localStorage.removeItem('user'); // Hapus data spesifik, jika ada
    localStorage.clear(); // Bersihkan semua data dari localStorage

    // Tampilkan pesan konfirmasi logout
    alert('Anda telah logout.');

    // Arahkan pengguna kembali ke halaman indek
    window.location.href = 'indek.html'; // Pastikan path ini sesuai dengan nama file
}

// Event listener untuk tombol logout
// Pastikan tombol logout memiliki id 'logout-btn' di HTML
document.getElementById('logout-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah aksi default dari tombol (misalnya jika ada link)
    logout(); // Panggil fungsi logout
});
