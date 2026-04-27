const NL_HEADER = `<div id="top"></div>
<header class="site-header">
  <div class="container">
    <a class="logo" href="/">
      <img src="/assets/img/logo.png" alt="Phrona Health">
    </a>
    <div class="lang-switch">
      <a href="/" aria-label="Nederlands" class="lang lang-nl">
        <svg viewBox="0 0 4 3" aria-hidden="true" focusable="false">
          <rect width="4" height="1" y="0" fill="#AE1C28"/>
          <rect width="4" height="1" y="1" fill="#FFFFFF"/>
          <rect width="4" height="1" y="2" fill="#21468B"/>
        </svg>
      </a>
      <a href="/EN/" aria-label="English" class="lang lang-en">
        <svg viewBox="0 0 4 3" aria-hidden="true" focusable="false">
          <clipPath id="uk-4x3"><path d="M0,0 v3 h4 v-3 z"/></clipPath>
          <g clip-path="url(#uk-4x3)">
            <rect width="4" height="3" fill="#012169"/>
            <path d="M0,0 L4,3 M4,0 L0,3" stroke="#fff" stroke-width="0.6"/>
            <path d="M0,0 L4,3 M4,0 L0,3" stroke="#C8102E" stroke-width="0.4" stroke-linecap="square"/>
            <path d="M2,0 v3 M0,1.5 h4" stroke="#fff" stroke-width="1"/>
            <path d="M2,0 v3 M0,1.5 h4" stroke="#C8102E" stroke-width="0.6"/>
          </g>
        </svg>
      </a>
    </div>
    <nav class="nav" aria-label="Hoofdmenu">
      <ul>
        <li><a href="/">Home</a></li>
        <li class="has-submenu">
          <a href="/diensten" aria-haspopup="true" aria-expanded="false">Diensten</a>
          <ul class="submenu" aria-label="Submenu Diensten">
            <li><a href="/dietetiek">Di&euml;tetiek</a></li>
            <li><a href="/fysiotherapie">Fysiotherapie</a></li>
            <li><a href="/advies">Advies</a></li>
          </ul>
        </li>
        <li><a href="/tarieven">Tarieven</a></li>
        <li><a href="/kennisbank">Kennisbank</a></li>
        <li><a href="/verwijzers">Verwijzers</a></li>
        <li><a href="/over">Over ons</a></li>
        <li><a class="btn-outline" href="/contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>`;

const NL_FOOTER = `<footer class="site-footer" role="contentinfo">
  <div class="footer-top container">
    <div class="footer-left">
      <a href="/" class="brand-logo" aria-label="Phrona Health">
        <img src="/assets/img/logo-footer.png" alt="Phrona Health logo">
      </a>
      <a class="social ig" href="https://instagram.com/phronahealth" target="_blank" rel="noopener" aria-label="Instagram">
        <span class="ig-inner">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="#fff" stroke-width="3.2"/>
            <circle cx="12" cy="12" r="4" fill="none" stroke="#fff" stroke-width="1.8"/>
            <circle cx="18" cy="6" r="1" fill="#fff"/>
          </svg>
        </span>
      </a>
    </div>
    <div class="footer-center">
      <p class="footer-contact">
        Banstraat 29<br>
        1071 JW Amsterdam<br>
        <a href="tel:+31617660635">06 17660635</a><br>
        <a href="mailto:info@phrona.nl">info@phrona.nl</a>
      </p>
      <a href="/contact" class="btn-ghost footer-cta-main">Meld je aan</a>
    </div>
    <nav class="footer-menu" aria-label="Footer menu">
      <h3 class="footer-menu-title">Menu</h3>
      <a href="/diensten">Diensten</a>
      <a href="/tarieven">Tarieven</a>
      <a href="/kennisbank">Kennisbank</a>
      <a href="/verwijzers">Verwijzers</a>
      <a href="/over">Over ons</a>
      <a href="/contact">Contact</a>
      <a href="/algemenevoorwaarden">Algemene voorwaarden</a>
      <a href="/privacy">Privacyverklaring</a>
    </nav>
  </div>
  <div class="footer-meta container">
    <p class="copyright">&copy; 2022&ndash;<span id="year"></span> <strong>Phrona Health</strong>. Alle rechten voorbehouden.</p>
  </div>
  <button id="back-to-top" class="back-to-top" type="button" aria-label="Terug naar boven">&#8593;</button>
  <script>document.getElementById('year').textContent = new Date().getFullYear();<\/script>
</footer>`;

const EN_HEADER = `<div id="top"></div>
<header class="site-header">
  <div class="container">
    <a class="logo" href="/EN/">
      <img src="/assets/img/logo.png" alt="Phrona Health">
    </a>
    <div class="lang-switch">
      <a href="/" aria-label="Nederlands" class="lang lang-nl">
        <svg viewBox="0 0 4 3" aria-hidden="true" focusable="false">
          <rect width="4" height="1" y="0" fill="#AE1C28"/>
          <rect width="4" height="1" y="1" fill="#FFFFFF"/>
          <rect width="4" height="1" y="2" fill="#21468B"/>
        </svg>
      </a>
      <a href="/EN/" aria-label="English" class="lang lang-en">
        <svg viewBox="0 0 4 3" aria-hidden="true" focusable="false">
          <clipPath id="uk-4x3"><path d="M0,0 v3 h4 v-3 z"/></clipPath>
          <g clip-path="url(#uk-4x3)">
            <rect width="4" height="3" fill="#012169"/>
            <path d="M0,0 L4,3 M4,0 L0,3" stroke="#fff" stroke-width="0.6"/>
            <path d="M0,0 L4,3 M4,0 L0,3" stroke="#C8102E" stroke-width="0.4" stroke-linecap="square"/>
            <path d="M2,0 v3 M0,1.5 h4" stroke="#fff" stroke-width="1"/>
            <path d="M2,0 v3 M0,1.5 h4" stroke="#C8102E" stroke-width="0.6"/>
          </g>
        </svg>
      </a>
    </div>
    <nav class="nav" aria-label="Main menu">
      <ul>
        <li><a href="/EN/">Home</a></li>
        <li class="has-submenu">
          <a href="/EN/diensten">Services</a>
          <ul class="submenu">
            <li><a href="/EN/dietetiek">Dietetics</a></li>
            <li><a href="/EN/fysiotherapie">Physiotherapy</a></li>
            <li><a href="/EN/advies">Advisory</a></li>
          </ul>
        </li>
        <li><a href="/EN/tarieven">Fees</a></li>
        <li><a href="/EN/kennisbank">Knowledge base</a></li>
        <li><a href="/EN/verwijzers">Referrers</a></li>
        <li><a href="/EN/over">About us</a></li>
        <li><a class="btn-outline" href="/EN/contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>`;

const EN_FOOTER = `<footer class="site-footer" role="contentinfo">
  <div class="footer-top container">
    <div class="footer-left">
      <a href="/EN/" class="brand-logo" aria-label="Phrona Health">
        <img src="/assets/img/logo-footer.png" alt="Phrona Health logo">
      </a>
      <a class="social ig" href="https://instagram.com/phronahealth" target="_blank" rel="noopener" aria-label="Instagram">
        <span class="ig-inner">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="#fff" stroke-width="3.2"/>
            <circle cx="12" cy="12" r="4" fill="none" stroke="#fff" stroke-width="1.8"/>
            <circle cx="18" cy="6" r="1" fill="#fff"/>
          </svg>
        </span>
      </a>
    </div>
    <div class="footer-center">
      <p class="footer-contact">
        Banstraat 29<br>
        1071 JW Amsterdam<br>
        <a href="tel:+31617660635">06 17660635</a><br>
        <a href="mailto:info@phrona.nl">info@phrona.nl</a>
      </p>
      <a href="/EN/contact" class="btn-ghost footer-cta-main">Sign up</a>
    </div>
    <nav class="footer-menu" aria-label="Footer menu">
      <h3 class="footer-menu-title">Menu</h3>
      <a href="/EN/diensten">Services</a>
      <a href="/EN/tarieven">Fees</a>
      <a href="/EN/kennisbank">Knowledge base</a>
      <a href="/EN/verwijzers">Referrers</a>
      <a href="/EN/over">About us</a>
      <a href="/EN/contact">Contact</a>
      <a href="/EN/algemenevoorwaarden">Terms &amp; conditions</a>
      <a href="/EN/privacy">Privacy policy</a>
    </nav>
  </div>
  <div class="footer-meta container">
    <p class="copyright">&copy; 2022&ndash;<span id="year"></span> <strong>Phrona Health</strong>. All rights reserved.</p>
  </div>
  <button id="back-to-top" class="back-to-top" type="button" aria-label="Back to top">&#8593;</button>
  <script>document.getElementById('year').textContent = new Date().getFullYear();<\/script>
</footer>`;

// ===============================================
// Inject header + footer
// ===============================================
(function injectPartials() {
  const pathLower = window.location.pathname.toLowerCase();
  const isEnglish = pathLower.startsWith('/en/') || pathLower === '/en';

  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');

  if (headerEl) headerEl.outerHTML = isEnglish ? EN_HEADER : NL_HEADER;
  if (footerEl) footerEl.outerHTML = isEnglish ? EN_FOOTER : NL_FOOTER;

  // Active nav link
  let current = window.location.pathname.replace(/\/$/, '');
  if (current === '') current = '/';
  document.querySelectorAll('.nav a[href]').forEach(a => {
    let href = (a.getAttribute('href') || '').replace(/\/$/, '');
    if (href === '') href = '/';
    if (href === current) a.classList.add('active');
  });

  document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
})();

// ===============================================
// Back-to-top button
// ===============================================
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 300));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
initBackToTop();

// ===============================================
// Fade-in sections
// ===============================================
(function initInview() {
  document.querySelectorAll('.fade-section').forEach(section => {
    section.querySelectorAll('[data-ani]').forEach((el, i) => {
      el.style.setProperty('--delay', (0.08 * i) + 's');
    });
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('inview'); io.unobserve(e.target); }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-section').forEach(s => io.observe(s));
})();

// ===============================================
// Favicon
// ===============================================
(function() {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = '/assets/img/favicon.png';
  document.head.appendChild(link);
})();
