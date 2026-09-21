(function () {
  const page = document.body.getAttribute('data-page') || 'home';

  const links = [
    { id: 'home', href: 'index.html', label: 'Home', idx: '01' },
    { id: 'research', href: 'research.html', label: 'Research', idx: '02' },
    { id: 'work', href: 'work.html', label: 'Work', idx: '03' },
    { id: 'certifications', href: 'certificates.html', label: 'Certifications', idx: '04' },
    { id: 'updates', href: 'updates.html', label: 'Updates', idx: '05' },
    { id: 'interests', href: 'interests.html', label: 'Interests', idx: '06' },
  ];

  const linksHTML = links.map(l =>
    `<a href="${l.href}" class="${l.id === page ? 'active' : ''}"><span class="idx">${l.idx}</span>${l.label}</a>`
  ).join('');

  const cvButtonHTML = '<a href="cv/Shreyash_Dhoot_Resume_June2026.pdf" class="cv-button" target="_blank" rel="noopener" aria-label="Open CV PDF">CV</a>';

  const navHTML = `
    <div class="wrap">
      <a href="index.html" class="nav-brand" aria-label="Home"><span class="dot"></span>Shreyash Dhoot</a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="navLinks">
        <span></span><span></span><span></span>
      </button>
      <div class="nav-links" id="navLinks">${linksHTML}${cvButtonHTML}</div>
    </div>
  `;

  const nav = document.createElement('nav');
  nav.innerHTML = navHTML;
  document.body.insertBefore(nav, document.body.firstChild);

  document.getElementById('navToggle').addEventListener('click', event => {
    const isOpen = document.getElementById('navLinks').classList.toggle('open');
    event.currentTarget.setAttribute('aria-expanded', String(isOpen));
  });
})();
