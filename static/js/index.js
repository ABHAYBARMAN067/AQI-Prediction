
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

// Auto-scroll to result section if it exists
document.addEventListener('DOMContentLoaded', function () {
    const resultSection = document.getElementById('result-section');
    if (resultSection) {
        // Scroll to result section with smooth animation
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});

// Reset button functionality
const resetButton = document.getElementById('reset-button');
if (resetButton) {
    resetButton.addEventListener('click', function () {
        // Reset the form
        document.getElementById('aqi-form').reset();

        // Reload the page to clear the result
        window.location.href = window.location.pathname;
    });
}
