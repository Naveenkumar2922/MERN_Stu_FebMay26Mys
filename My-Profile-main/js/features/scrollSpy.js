export function initScrollSpy() {
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(sec => {
      if (scrollY >= sec.offsetTop - 100) {
        current = sec.id;
      }
    });

    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
}