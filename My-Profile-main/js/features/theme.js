export function initTheme() {
  const body = document.getElementById("body");

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("bg-black", "text-white");
  }

  document.getElementById("themeToggle").onclick = () => {
    body.classList.toggle("bg-black");
    body.classList.toggle("text-white");

    localStorage.setItem(
      "theme",
      body.classList.contains("bg-black") ? "dark" : "light"
    );
  };
}