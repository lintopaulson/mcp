// Scroll to top on refresh
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

// Preloader animation
var p = document.querySelector('.animate'),
    offset = 1800;
function offsetMe() {
  if (offset < 0) offset = 1800;
  p.style.strokeDashoffset = offset;
  offset = offset - 10;
  requestAnimationFrame(offsetMe);
}
offsetMe();

// Preloader fade out using jQuery
jQuery(document).ready(function($) {
  $(window).on('load', function() {
    $('.loading').delay(2000).fadeOut('slow', function() {
      $(this).remove();
    });
    setTimeout(function() {
      $('.landing').addClass('loaded');
      $('body').addClass('loaded');
    }, 2000);
  });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > window.innerHeight - 50) {
    navbar.classList.add('scrolled');
    navbar.classList.remove('transparent');
  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.add('transparent');
  }
});

// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});


