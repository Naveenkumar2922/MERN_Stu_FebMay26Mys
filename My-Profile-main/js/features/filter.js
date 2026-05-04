export function initFilter(renderProjects, projects) {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.onclick = () => {
      const cat = btn.dataset.cat;

      const filtered =
        cat === "All"
          ? projects
          : projects.filter(p => p.category === cat);

      renderProjects(filtered);
    };
  });
}