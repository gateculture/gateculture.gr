// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

// Responsive Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 5%';
        nav.style.background = 'rgba(8, 8, 8, 0.98)';
    } else {
        nav.style.padding = '20px 5%';
        nav.style.background = 'rgba(8, 8, 8, 0.95)';
    }
});