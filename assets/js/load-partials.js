async function inject(id, url) {
  const el = document.getElementById(id);
  if (!el) return;
  const res = await fetch(url);
  el.innerHTML = res.ok ? await res.text() : "<!-- kon " + url + " niet laden -->";
}


function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  const SHOW_OFFSET = 300;

  function toggleButton() {
    if (window.scrollY > SHOW_OFFSET) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }

  window.addEventListener('scroll', toggleButton);

  btn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  toggleButton();
}

(async () => {


  const path = location.pathname.replace(/\/+/g, '/');
  const pathLower = path.toLowerCase();

 
  const isEnglish = pathLower.includes('/en/');

 
  const basePartials = isEnglish ? 'EN/partials' : 'partials';

  
  await inject('site-header', basePartials + '/header.html');

 
  let file = path.split('/').pop();
  if (!file || file === '') file = 'home.html';

  const links = document.querySelectorAll('.nav a[href]');
  links.forEach(a => {
    const href = a.getAttribute('href') || '';
    const targetPath = href.replace(/^\//, '');
    const targetFile = targetPath.split('/').pop() || 'home.html';
    a.classList.toggle('active', targetFile === file);
  });


  await inject('site-footer', basePartials + '/footer.html');
  initBackToTop();
})();


(function initInview() {
  document.querySelectorAll('.fade-section').forEach(section => {
    const items = section.querySelectorAll('[data-ani]');
    items.forEach((el, i) => {
      el.style.setProperty('--delay', (0.08 * i) + 's');
    });
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('inview');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-section').forEach(s => io.observe(s));
})();

