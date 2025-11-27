// script.js - simple interactivity for the portfolio
document.addEventListener('DOMContentLoaded', function () {
  // mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle && navToggle.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') navLinks.style.display = 'none';
    else navLinks.style.display = 'flex';
  });

  // contact form handling (no backend) - show simulated success
  window.handleContact = function(e){
    e.preventDefault();
    const status = document.getElementById('formStatus');
    status.textContent = 'Sending...';
    setTimeout(()=>{
      status.textContent = 'Thanks — message simulated (no backend). Use Formspree or Getform for real email.';
      e.target.reset && e.target.reset();
    }, 900);
    return false;
  };

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });
});