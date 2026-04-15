// Shared site behavior for Cause Catalyst Awards
(() => {
  // Nav scroll state
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // Login modal
  window.openLogin = function() {
    document.getElementById('loginModal').style.display = 'flex';
  };
  window.closeLogin = function() {
    document.getElementById('loginModal').style.display = 'none';
  };
  window.closeLoginOutside = function(e) {
    if (e.target === document.getElementById('loginModal')) closeLogin();
  };

  // Fade-up reveal on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
})();
