document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logout-btn');
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');

    // Navigation link handlers
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = e.target.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault(); // Mencegah navigasi default
                window.location.href = href; // Melakukan navigasi manual
            }
        });
    });

    // Logout Handler
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // Remove the user session
            localStorage.removeItem('userSession');
            // Show logout message
            alert('Anda telah logout.');
            // Redirect to home page
            window.location.href = 'index.html';
        });
    }

    // Contact Form Handler
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validasi input
            if (nameInput.value.trim() === '' || messageInput.value.trim() === '') {
                alert('Mohon isi semua field dengan lengkap');
                return;
            }

            // Simulasi pengiriman pesan (ganti dengan backend nyata nanti)
            try {
                const formData = {
                    name: nameInput.value,
                    message: messageInput.value
                };

                // Contoh simulasi fetch (uncomment dan sesuaikan dengan backend Anda)
                // fetch('/api/contact', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(formData)
                // })
                
                alert('Pesan Anda telah terkirim. Terima kasih!');
                contactForm.reset(); // Mengosongkan form setelah submit
            } catch (error) {
                console.error('Gagal mengirim pesan:', error);
                alert('Terjadi kesalahan. Silakan coba lagi.');
            }
        });
    }

    // Log untuk debugging
    console.log('contact.js loaded');
});
