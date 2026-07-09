/*=========================================
THE GRILL HOUSE
Premium Restaurant Website
script.js - Part 1
=========================================*/

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});

// Loader
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    gsap.to(loader, {
        opacity: 0,
        duration: 1,
        delay: 1.5,
        onComplete: () => {
            loader.style.display = "none";
        }
    });

});

// Hero Animation
gsap.from("#home h1", {
    y: 80,
    opacity: 0,
    duration: 1.2
});

gsap.from("#home p", {
    y: 40,
    opacity: 0,
    delay: 0.4,
    duration: 1
});

gsap.from(".hero-buttons", {
    y: 40,
    opacity: 0,
    delay: 0.8,
    duration: 1
});

gsap.from(".hero-food", {
    scale: 0.7,
    opacity: 0,
    rotation: 15,
    delay: 0.6,
    duration: 1.2
});

// Navbar Background on Scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// Scroll Progress Bar
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.pageYOffset / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});

// Smooth Anchor Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});

// Button Hover Animation
document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        gsap.to(btn, {
            scale: 1.05,
            duration: 0.3
        });

    });

    btn.addEventListener("mouseleave", () => {

        gsap.to(btn, {
            scale: 1,
            duration: 0.3
        });

    });

});
