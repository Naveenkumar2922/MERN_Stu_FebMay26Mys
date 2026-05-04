export function expandLogic(div, project) {
  let expanded = false;
  const short = project.description.slice(0, 20);

  div.querySelector(".view").onclick = () => {
    expanded = !expanded;
    div.querySelector(".desc").textContent =
      expanded ? project.description : short + "...";
  };
}