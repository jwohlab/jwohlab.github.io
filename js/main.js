document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = navMenu.classList.contains('active') ? '✕' : '☰';
      mobileBtn.textContent = icon;
    });
  }

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          mobileBtn.textContent = '☰';
        }
      }
    });
  });

  // Navbar Scroll Effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
      header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
    }
  });
});
