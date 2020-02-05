const button = document.querySelector('.hamburger');
const list = document.querySelector('.top-navigation-list');

const toggleNav = () => {
  list.classList.toggle('visible');
};

button.addEventListener('click', toggleNav);
