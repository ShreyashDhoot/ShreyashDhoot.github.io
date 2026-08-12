(function () {
  const page = document.body.getAttribute('data-page') || 'home';

  const links = [
    { id: 'home', href: 'index.html', label: 'Home', idx: '01' },
    { id: 'research', href: 'research.html', label: 'Research', idx: '02' },
    { id: 'work', href: 'work.html', label: 'Work', idx: '03' },
    { id: 'updates', href: 'updates.html', label: 'Updates', idx: '04' },
    { id: 'interests', href: 'interests.html', label: 'Interests', idx: '05' },
  ];

  const linksHTML = links.map(l =>
    `<a href="${l.href}" class="${l.id === page ? 'active' : ''}"><span class="idx">${l.idx}</span>${l.label}</a>`
  ).join('');

  const navHTML = `
    <div class="wrap">
      <a href="index.html" class="nav-brand" aria-label="Home"></a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <div class="nav-links" id="navLinks">${linksHTML}</div>
    </div>
  `;

  const nav = document.createElement('nav');
  nav.innerHTML = navHTML;
  document.body.insertBefore(nav, document.body.firstChild);

  document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });
})();
