 document.addEventListener('DOMContentLoaded', function() {
            const form = document.querySelector('.validator-form');
            const ideaInput = document.getElementById('idea');
            const industrySelect = document.getElementById('industry');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const idea = ideaInput.value.trim();
                const industry = industrySelect.value;
                if (!idea) { alert('Please describe your startup idea'); return; }
                if (!industry) { alert('Please select an industry'); return; }
                alert(`Your idea "${idea.substring(0, 30)}..." has been submitted for validation! Results coming soon.`);
            });

            const logo = document.querySelector('.logo');
            setTimeout(() => {
                logo.style.transition = 'all 0.5s ease';
                logo.style.transform = 'scale(1.1)';
                setTimeout(() => { logo.style.transform = 'scale(1)'; }, 500);
            }, 1000);
        });

        const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    overlay.classList.toggle('show');
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const accordion = header.parentElement;
      accordion.classList.toggle('active');

      const body = accordion.querySelector('.accordion-body');
      const icon = header.querySelector('span');

      if (accordion.classList.contains('active')) {
        body.style.display = 'block';
        icon.textContent = '-';
      } else {
        body.style.display = 'none';
        icon.textContent = '+';
      }
    });
  });




// Navbar toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('show');
  menuIcon.classList.toggle('open');
});

// Scroll reveal
window.addEventListener('scroll', reveal);

function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}
