const hamburger = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");
const overlay = document.querySelector(".nav-overlay");

// Buka / tutup menu
hamburger.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
  overlay.classList.toggle("active");
});

// Klik di luar menu = tutup
overlay.addEventListener("click", () => {
  navbarNav.classList.remove("active");
  overlay.classList.remove("active");
});

