/*=========================================================
                    PORTFOLIO JAVASCRIPT
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================================
                    MOBILE MENU
    =====================================================*/

    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {

        menuIcon.addEventListener("click", () => {

            menuIcon.classList.toggle("bx-x");
            navbar.classList.toggle("active");

        });

        document.querySelectorAll(".navbar a").forEach(link => {

            link.addEventListener("click", () => {

                menuIcon.classList.remove("bx-x");
                navbar.classList.remove("active");

            });

        });

    }

    /*=====================================================
                    STICKY HEADER
    =====================================================*/

    const header = document.querySelector(".header");

    function stickyHeader() {

        if (!header) return;

        if (window.scrollY > 100) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    }

    stickyHeader();

    window.addEventListener("scroll", stickyHeader);

    /*=====================================================
                    ACTIVE NAVIGATION
    =====================================================*/

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    function activeMenu() {

        let current = "";

        sections.forEach(section => {

            const top = window.scrollY;
            const offset = section.offsetTop - 180;
            const height = section.offsetHeight;

            if (top >= offset && top < offset + height) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    activeMenu();

    window.addEventListener("scroll", activeMenu);

    /*=====================================================
                    SMOOTH SCROLL
    =====================================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

    /*=====================================================
                    SCROLL TO TOP BUTTON
    =====================================================*/

    const scrollBtn = document.querySelector(".scroll-top");

    function toggleScrollButton() {

        if (!scrollBtn) return;

        if (window.scrollY > 500) {

            scrollBtn.classList.add("active");

        } else {

            scrollBtn.classList.remove("active");

        }

    }

    toggleScrollButton();

    window.addEventListener("scroll", toggleScrollButton);

    if (scrollBtn) {

        scrollBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*=====================================================
                SIMPLE REVEAL ANIMATION
    =====================================================*/

    const revealElements = document.querySelectorAll(
        ".project-card, .timeline-item, .skill-category, .certificate-card, .education-card, .achievement-card, .stat-box, .contact-card"
    );

    const revealObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: 0.15

    });

    revealElements.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "all .8s ease";

        revealObserver.observe(item);

    });

    /*=====================================================
                STATS COUNTER ANIMATION
    =====================================================*/

    const counters = document.querySelectorAll(".stat-box h2");

    const counterObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = parseInt(counter.innerText.replace(/\D/g, ""));

            if (isNaN(target)) return;

            let value = 0;

            const speed = target / 80;

            function updateCounter() {

                value += speed;

                if (value < target) {

                    counter.innerText = Math.floor(value) + "+";

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target + "+";

                }

            }

            updateCounter();

            counterObserver.unobserve(counter);

        });

    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

});

/*=========================================================
            TYPING TEXT ANIMATION
=========================================================*/

const typingElement = document.querySelector(".profession");

if (typingElement) {

    const texts = [
        "Data Scientist",
        "Full-stack Engineer",
        "Data Engineer",
        "Bioinformatics Researcher",

    ];

    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const current = texts[textIndex];

        if (!deleting) {

            typingElement.textContent = current.substring(0, charIndex++);
        } else {

            typingElement.textContent = current.substring(0, charIndex--);
        }

        let speed = deleting ? 45 : 90;

        if (!deleting && charIndex > current.length) {

            deleting = true;
            speed = 1800;

        } else if (deleting && charIndex < 0) {

            deleting = false;
            textIndex++;

            if (textIndex >= texts.length) {

                textIndex = 0;

            }

            speed = 300;
        }

        setTimeout(typeEffect, speed);

    }

    typeEffect();

}

/*=========================================================
            ANIMATED SKILL BARS
=========================================================*/

const skillBars = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const bar = entry.target;
        const width = bar.dataset.width || "90%";

        bar.style.width = "0";

        setTimeout(() => {

            bar.style.transition = "width 2s ease";
            bar.style.width = width;

        }, 200);

        skillObserver.unobserve(bar);

    });

}, {

    threshold: 0.4

});

skillBars.forEach(bar => {

    skillObserver.observe(bar);

});

/*=========================================================
                PARALLAX HERO IMAGE
=========================================================*/

const heroImage = document.querySelector(".image-circle");

window.addEventListener("mousemove", e => {

    if (!heroImage) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});

/*=========================================================
            SCROLL PROGRESS BAR
=========================================================*/

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.left = "0";
progressBar.style.top = "0";
progressBar.style.height = "4px";
progressBar.style.width = "0";
progressBar.style.background = "#00e5ff";
progressBar.style.zIndex = "99999";
progressBar.style.boxShadow = "0 0 10px #00e5ff";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});

/*=========================================================
            FADE IN PAGE ON LOAD
=========================================================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    document.body.style.transition =
        "opacity .8s ease";

    requestAnimationFrame(() => {

        document.body.style.opacity = "1";

    });

});


/*=========================================================
            PROJECT CARD HOVER TILT
=========================================================*/

document.querySelectorAll(".project-card")
.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const rotateX =
            (y - rect.height / 2) / 20;

        const rotateY =
            (rect.width / 2 - x) / 20;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0)";

    });

});

/*=========================================================
                CONSOLE MESSAGE
=========================================================*/

console.log("%cWelcome to my Portfolio",
"color:#00e5ff;font-size:20px;font-weight:bold");

console.log("%cDesigned & Developed by Anushka Dissanayaka",
"color:white;font-size:14px;");