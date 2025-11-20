// ===============================================
// Inject partials (header + footer)
// ===============================================
async function inject(id, url) {
  const el = document.getElementById(id);
  if (!el) return;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      el.innerHTML = "<!-- kon " + url + " niet laden (HTTP " + res.status + ") -->";
      return;
    }
    el.innerHTML = await res.text();
  } catch (e) {
    console.error("Fout bij laden partial:", id, url, e);
    el.innerHTML = "<!-- kon " + url + " niet laden (fetch error) -->";
  }
}

// ===============================================
// Back-to-top button
// ===============================================
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

// ===============================================
// Header + Footer injectie + active nav
// ===============================================
(async () => {
  let script = document.currentScript;
  if (!script) {
    const scripts = document.getElementsByTagName('script');
    script = scripts[scripts.length - 1];
  }
  const scriptSrc = script ? script.src : '';

  const root = scriptSrc.includes('/assets/js/')
    ? scriptSrc.split('/assets/js/')[0] + '/'
    : '/';

  const pathLower = window.location.pathname.toLowerCase();
  const isEnglish = pathLower.includes('/en/');

  const headerUrl = root + (isEnglish ? 'EN/partials/header.html' : 'partials/header.html');
  const footerUrl = root + (isEnglish ? 'EN/partials/footer.html' : 'partials/footer.html');

  await inject('site-header', headerUrl);

  let path = window.location.pathname.replace(/\/+/g, '/');
  let file = path.split('/').pop();
  if (!file || file === '') file = 'home.html';

  const links = document.querySelectorAll('.nav a[href]');
  links.forEach(a => {
    const href = a.getAttribute('href') || '';
    const targetPath = href.replace(/^\//, '');
    const targetFile = targetPath.split('/').pop() || 'home.html';
    a.classList.toggle('active', targetFile === file);
  });

  await inject('site-footer', footerUrl);
  initBackToTop();
})();

// ===============================================
// Fade-in sections
// ===============================================
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

// ===============================================
// FAVICON (automatisch voor NL + EN)
// ===============================================
(function() {
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";

  const isEnglish = window.location.pathname.toLowerCase().includes('/en/');
  link.href = isEnglish ? "../assets/img/favicon.png" : "assets/img/favicon.png";

  document.head.appendChild(link);
})();
