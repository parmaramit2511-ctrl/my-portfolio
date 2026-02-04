const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

function toggleMenu(){
  document.getElementById("menu").classList.toggle("show");
}
