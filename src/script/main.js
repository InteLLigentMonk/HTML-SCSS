const navButton = document.querySelector('.mobile-nav-button');
const navMenu = document.querySelector('.mobile-nav');

navButton.addEventListener('click', ()=> {
  const isOpened = navButton.getAttribute('aria-expanded');
  if (isOpened === 'false') {
    navButton.setAttribute('aria-expanded', 'true');
    navMenu.style.display = 'block';
  } else {
    navButton.setAttribute('aria-expanded', 'false');
    navMenu.style.display = 'none';
  }
});

document.addEventListener('mouseup', function(e) {
 if (!navMenu.contains(e.target) && !navButton.contains(e.target)) {
      navMenu.style.display = 'none';
      navButton.setAttribute('aria-expanded', 'false');
  }
});
