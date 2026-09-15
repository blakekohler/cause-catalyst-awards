function openModal() { document.getElementById('modal').classList.add('open'); }
function closeModal() { document.getElementById('modal').classList.remove('open'); }
function closeModalOutside(e) { if (e.target === document.getElementById('modal')) closeModal(); }
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.06 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Past Winners nav stays hidden until the program has announced winners
(function () {
  if (typeof PraizAPI === 'undefined' || !PraizAPI.getProgram) return;
  PraizAPI.getProgram().then(function (p) {
    if (p.has_winners) {
      document.querySelectorAll('[data-requires-winners]').forEach(function (el) {
        el.hidden = false;
      });
    }
  }).catch(function () {});
})();
