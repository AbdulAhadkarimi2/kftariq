javascript
// ================= HEADER =================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


// Close mobile menu after clicking a link

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current} `) {
            link.classList.add("active");
        }

    });

});


// ================= SCROLL REVEAL =================

const revealItems = document.querySelectorAll(
    ".section-heading, .about-grid, .skill-card, .project-card, .contact-grid"
);

revealItems.forEach(item => {
    item.classList.add("reveal");
});


const reveal = () => {

    revealItems.forEach(item => {

        const position =
            item.getBoundingClientRect().top;

        if (position < window.innerHeight - 80) {
            item.classList.add("show");
        }

    });

};

window.addEventListener("scroll", reveal);

reveal();


// ================= CONTACT FORM =================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const button = contactForm.querySelector("button");

    button.innerHTML =
        'Message Sent <i class="fas fa-check"></i>';

    button.disabled = true;

    setTimeout(() => {

        button.innerHTML =
            'Send Message <i class="fas fa-paper-plane"></i>';

        button.disabled = false;

        contactForm.reset();

    }, 2500);

});
