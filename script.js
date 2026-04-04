// Navbar scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 },
);

reveals.forEach((el) => observer.observe(el));

// Touch feedback
document.querySelectorAll(".contact-btn, .nav-link").forEach((el) => {
  el.addEventListener("touchstart", () => (el.style.opacity = "0.8"));
  el.addEventListener("touchend", () => (el.style.opacity = ""));
});
