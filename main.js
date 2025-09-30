// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Dark mode toggle with localStorage
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme");
if (saved === "dark") root.classList.add("dark");
themeToggle.addEventListener("click", () => {
  root.classList.toggle("dark");
  localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
});
