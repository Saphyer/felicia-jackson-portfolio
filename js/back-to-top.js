const backToTopButton = document.querySelector('.back-to-top');

const toggleBackToTop = () => {
  if (window.scrollY > 700) {
    backToTopButton.classList.remove('hidden');
  } else {
    backToTopButton.classList.add('hidden');
  }
};


window.addEventListener('scroll', toggleBackToTop);
