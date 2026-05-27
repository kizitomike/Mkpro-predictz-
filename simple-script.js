// Simple JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✅ Message sent successfully! We will contact you soon.');
            contactForm.reset();
        });
    }

    // Bet button
    const betBtn = document.querySelector('.btn-large');
    if (betBtn) {
        betBtn.addEventListener('click', () => {
            alert('🎯 Ready to place your bet? Click here to go to your betting platform!');
        });
    }

    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    console.log('✅ MKPro Predictz loaded successfully!');
});
