// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Scroll-reveal animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(
        '.about-card, .service-card, .gallery-col, .contact-grid, .portfolio-header, .title-center, .label-center, .insta-cta'
    ).forEach((el, i) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${Math.min(i * 0.07, 0.35)}s`;
        observer.observe(el);
    });
});

// Contact form handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = 'MESSAGE SENT!';
    btn.style.background = 'var(--gold)';
    btn.style.color = 'var(--bg)';
    setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.style.color = '';
        this.reset();
    }, 2500);
});
