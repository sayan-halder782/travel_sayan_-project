
window.addEventListener('scroll', function() {
    // Add the "sticky" class if scrolled down more than 0px
    let header = document.querySelector('.header');
    if (window.scrollY > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });


