/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Data Engineer' , 'Data Scientist' , 'Development Engineer'],
    typeSpeed: 100,
    backSpeed: 40,
    backDelay: 1700,
    loop: true
});

/*==================== read more button ====================*/

function toggleDescription(descriptionId, btnId) {
    var description = document.getElementById(descriptionId);
    var btn = document.getElementById(btnId);

    if (description.classList.contains("collapsed")) {
        // Expand the description
        description.classList.remove("collapsed");
        description.style.height = "auto";
        btn.textContent = "See Less";
    } else {
        // Collapse the description
        description.classList.add("collapsed");
        description.style.height = "10vh"; // Change to the initial height of the collapsed description
        btn.textContent = "Read More";
    }
}

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});

(function(){
  const link = document.getElementById('alike-pdf-link');
  const modal = document.getElementById('pdf-modal');
  const frame = document.getElementById('pdf-frame');
  const closeBtn = document.getElementById('pdf-close');

  if (!link || !modal || !frame || !closeBtn) return;

  link.addEventListener('click', (e) => {
    // keep default href as fallback if JS blocked
    e.preventDefault();
    frame.src = link.getAttribute('href') + '#toolbar=1&navpanes=0&view=FitH';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    // trap focus
    closeBtn.focus();
  });

  const close = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    frame.src = ''; // release PDF from memory
  };

  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();


