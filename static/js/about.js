
// Toggle hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Accordion functionality
const toggles = document.querySelectorAll('.accordion-toggle');
toggles.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        const content = btn.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
