// Particles.js Configuration
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.8,
      "random": false,
      "anim": {
        "enable": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});

// Navbar and title movement
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const navContainer = navbar.querySelector('.container');
  const heroContent = document.querySelector('.hero-content');
  const titleContainer = document.querySelector('.title-container');

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    if (!navContainer.contains(titleContainer)) {
      navContainer.insertBefore(titleContainer, navContainer.firstChild);
    }
  } else {
    navbar.classList.remove('scrolled');
    if (!heroContent.contains(titleContainer)) {
      heroContent.insertBefore(titleContainer, heroContent.firstChild);
    }
  }
});

// Toggle mobile menu and dropdowns
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      btn.closest('.dropdown').classList.toggle('active');
    }
  });
});

document.querySelectorAll('.dropdown-item > a').forEach(item => {
  item.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      item.closest('.dropdown-item').classList.toggle('active');
    }
  });
});

// Dynamically set content offset
function setContentOffset() {
  const navbar = document.getElementById('navbar');
  const hero = document.querySelector('.hero');
  const contentSections = document.querySelectorAll('.content-section');
  const navbarHeight = navbar.offsetHeight;

  hero.style.paddingTop = `${navbarHeight}px`;
  contentSections.forEach(section => {
    section.style.paddingTop = `${navbarHeight + 100}px`;
  });
}

window.addEventListener('load', setContentOffset);
window.addEventListener('resize', setContentOffset);
