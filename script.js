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

// Preloader fade out after 3.5 seconds (no window load wait)
setTimeout(function() {
  $('.loading').fadeOut('slow', function() {
    $(this).remove();
  });
  $('.landing').addClass('loaded');
  $('body').addClass('loaded');
}, 3500);

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



// about container
const scrollRevealOption = {
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
  reset: false, // 👈 makes it trigger every time
};

ScrollReveal().reveal(".about_image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about_content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about_content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about_content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about_btn", {
  ...scrollRevealOption,
  delay: 2000,
});


// LIVING ROOM
ScrollReveal().reveal(".living-room .section-subheading", {
  ...scrollRevealOption,
  origin: "top",
});

ScrollReveal().reveal(".living-room h2", {
  ...scrollRevealOption,
  delay: 500,
  origin: "bottom",
});

// ROOM CARDS
ScrollReveal().reveal(".room-card", {
  ...scrollRevealOption,
  origin: "bottom",
  interval: 300, // 👈 delay between each card
});

// SERVICES SECTION
// Headline subheading
ScrollReveal().reveal(".creative-cards .headline .section-subheading", {
  ...scrollRevealOption,
  origin: "right",
});

// Headline h2
ScrollReveal().reveal(".creative-cards .headline h2", {
  ...scrollRevealOption,
  origin: "left",
  delay: 500,
});

//testimonials slider
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
let current = 0;

function showTestimonial(idx) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === idx);
    dots[i].classList.toggle('active', i === idx);
  });
  current = idx;
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showTestimonial(i);
    clearInterval(autoChange);
    autoChange = setInterval(nextTestimonial, 3000);
  });
});

function nextTestimonial() {
  let next = (current + 1) % testimonials.length;
  showTestimonial(next);
}

let autoChange = setInterval(nextTestimonial, 3000);

//scroll reveal for amneties
const srOptions = {
    distance: "50px",
    duration: 800,
    easing: "ease-out",
    opacity: 0
  };

  // Text reveal (slides from its side)
  ScrollReveal().reveal(".highlight-text", {
    ...srOptions,
    origin: "right",
    interval: 200
  });

  // Image reveal (slides from its side)
  ScrollReveal().reveal(".highlight-img", {
    ...srOptions,
    origin: "left",
    interval: 200
  });

  //contact form

  document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const toast = document.getElementById("toast");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        if (response.ok) {
          form.reset();
          showToast("Message sent successfully ✅");
        } else {
          showToast("Something went wrong ❌");
        }
      } catch (err) {
        showToast("Network error ❌");
      }
    });
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
});
