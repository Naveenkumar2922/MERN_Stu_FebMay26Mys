export function initScrollProgress() {
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    document.getElementById("progressBar").style.width =
      (scrollTop / height) * 100 + "%";
  });
}