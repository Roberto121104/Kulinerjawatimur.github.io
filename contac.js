document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logout-btn');
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');

    // Tambahkan event listener untuk semua link navigasi
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Ambil href dari link
            const href = this.getAttribute('href');
            
            // Cegah default navigation
            event.preventDefault();
            
            // Lakukan navigasi manual
            window.location.href = href;
        });
    });

    // Logout Handler
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('userSession');
            alert('Anda telah logout.');
            window.location.href = 'index.html';
        });
    }

    // Contact Form Handler
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            if (nameInput.value.trim() === '' || messageInput.value.trim() === '') {
                alert('Mohon isi semua field dengan lengkap');
                return;
            }

            try {
                alert('Pesan Anda telah terkirim. Terima kasih!');
                contactForm.reset();
            } catch (error) {
                console.error('Gagal mengirim pesan:', error);
                alert('Terjadi kesalahan. Silakan coba lagi.');
            }
        });
    }

    console.log('contact.js loaded');
});
