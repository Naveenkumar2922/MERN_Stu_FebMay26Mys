export function initSort(renderProjects, projects) {
  document.getElementById("sort").onchange = e => {
    const val = e.target.value;

    const sorted = [...projects].sort((a, b) =>
      val === "az"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

    renderProjects(sorted);
  };
}