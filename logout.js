function logout() {
    // Hapus sesi yang ada di sini jika menggunakan sesi penyimpanan
    localStorage.removeItem('userSession'); // Ganti dengan sesi yang sesuai jika perlu

    // Tampilkan pesan logout
    alert('Anda telah logout.');

    // Arahkan pengguna kembali ke halaman index
    window.location.href = 'indek.html'; // Ganti dengan halaman index yang sesuai

    // Tambahkan kode untuk menghapus semua item dari localStorage
    localStorage.clear();
  }