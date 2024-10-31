document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logout-btn');
    const contactForm = document.getElementById('contact-form');

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

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Here you would typically send the form data to a server
            // For this example, we'll just show a success message
            alert('Pesan Anda telah terkirim. Terima kasih!');

            // Clear the form
            contactForm.reset();
        });
    }
});

// Log untuk debugging
console.log('contact.js loaded');
