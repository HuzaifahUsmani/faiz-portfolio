// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Selective scroll-reveal — only gallery + about card animate
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.gallery-col').forEach((el, i) => {
        el.classList.add('reveal-up');
        el.style.transitionDelay = `${i * 0.09}s`;
        observer.observe(el);
    });

    const aboutCard = document.querySelector('.about-card');
    if (aboutCard) {
        aboutCard.classList.add('reveal-scale');
        observer.observe(aboutCard);
    }
});

// Subtle hero parallax
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-bg');
    if (hero) {
        hero.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    }
});

// Contact form handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
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
}
