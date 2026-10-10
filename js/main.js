// ======================================
// AOS ANIMATION
// ======================================

AOS.init({
    duration: 1000,
    once: true,
    offset: 120
});

// ======================================
// COUNTER ANIMATION
// ======================================

const counters = document.querySelectorAll(".counter");

const animateCounter = (counter) => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const increment = target / 80;

    const update = () => {

        current += increment;

        if (current < target) {

            counter.textContent = Math.ceil(current);

            requestAnimationFrame(update);

        } else {

            counter.textContent = target;
        }
    };

    update();
};

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// ======================================
// HEADER EFFECT
// ======================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        header.style.background = "#081f3b";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    } else {

        header.style.background = "rgba(11,46,89,.95)";
        header.style.boxShadow = "none";
    }

});

// ======================================
// SMOOTH SCROLL
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});

// ======================================
// ACTIVE MENU
// ======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});