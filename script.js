// Carousel (if used in index.html)
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}
if (slides.length) setInterval(nextSlide, 6000);

// Navbar scroll effect
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile menu toggle
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");
if (toggle) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// Light/Dark Mode Toggle
const toggleButton = document.getElementById("theme-toggle");
const html = document.documentElement;

function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  if (toggleButton) toggleButton.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", theme);
}

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });
}

const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);
