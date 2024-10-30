let slideIndex = 0; // Indeks slide saat ini

// Fungsi untuk menampilkan slide pertama
function showSlides() {
  const slides = document.querySelectorAll('.slide'); // Mengambil semua elemen slide
  if (slideIndex >= slides.length) {
    slideIndex = 0; // Kembali ke slide pertama
  } 
  if (slideIndex < 0) {
    slideIndex = slides.length - 1; // Kembali ke slide terakhir
  }
  slides.forEach(slide => slide.classList.remove('active')); // Menghapus kelas active dari semua slide
  slides[slideIndex].classList.add('active'); // Menambahkan kelas active ke slide saat ini
}

// Fungsi untuk mengubah slide
function changeSlide(n) {
  slideIndex += n; // Mengubah indeks slide
  showSlides(); // Menampilkan slide baru
}

// Menampilkan slide pertama
showSlides();

// Menambahkan event listener pada tombol prev dan next
document.querySelector('.prev').addEventListener('click', () => {
  changeSlide(-1);
});

document.querySelector('.next').addEventListener('click', () => {
  changeSlide(1);
});