export function initRecent() {
  function render() {
    const rec = JSON.parse(localStorage.getItem("recent")) || [];
    document.getElementById("recent").innerHTML =
      rec.map(p => `<p>${p.title}</p>`).join("");
  }

  window.addRecent = project => {
    let rec = JSON.parse(localStorage.getItem("recent")) || [];

    if (!rec.some(p => p.id === project.id)) {
      rec.push(project);
      localStorage.setItem("recent", JSON.stringify(rec));
    }

    render();
  };

  render();
}