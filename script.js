// Menu toggle for mobile view
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Basic form handling (demo only)
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const response = document.getElementById('form-response');
  response.textContent = "Thanks for reaching out! We'll contact you soon.";
  response.style.color = "green";
  this.reset();
});
