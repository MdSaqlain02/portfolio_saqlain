// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollToTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dynamic Year in Footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Theme Toggle
const themeToggleBtn = document.getElementById("themeToggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(mode) {
  document.body.classList.toggle("dark-mode", mode === "dark");
  themeToggleBtn.textContent = mode === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", mode);
}

const savedTheme = localStorage.getItem("theme") || (prefersDark ? "dark" : "light");
setTheme(savedTheme);

themeToggleBtn.addEventListener("click", () => {
  const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  setTheme(currentTheme === "dark" ? "light" : "dark");
});
