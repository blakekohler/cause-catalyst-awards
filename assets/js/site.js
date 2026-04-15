// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = a.getAttribute('href');
    if (!target || target === '#') return;
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  });
});
