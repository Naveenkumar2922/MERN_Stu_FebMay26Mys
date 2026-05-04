document.addEventListener("DOMContentLoaded", function(){
    //Render skills
    renderSkills();
    initModal();
    initContactValidation();
    initThemeToggle();
    renderProjects();
    languageSelect();
})

import { initScrollProgress } from "./features/scrollProgress.js";
import { initScrollSpy } from "./features/scrollSpy.js";
import { initBackToTop } from "./features/backToTop.js";
import { initSearch } from "./features/search.js";
import { initFilter } from "./features/filter.js";
import { initSort } from "./features/sort.js";
import { initTyping } from "./features/typing.js";
import { initSkills } from "./features/skills.js";
import { initAutoSave } from "./features/autosave.js";
import { initRecent } from "./features/recent.js";
import { initTheme } from "./features/theme.js";
import { initGreeting } from "./features/greeting.js";
import { initGeo } from "./features/geolocation.js";

const container = document.getElementById("projectsContainer");

function renderProjects(list) {
  container.innerHTML = "";

  list.forEach(p => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${p.title}</h3>
      <p class="desc">${p.description.slice(0,20)}...</p>
      <button class="view">View</button>
    `;

    div.onclick = () => addRecent(p);

    container.appendChild(div);
  });

  document.getElementById("count").textContent =
    list.length + " projects";
}

renderProjects(projects);

initScrollProgress();
initScrollSpy();
initBackToTop();
initSearch(renderProjects, projects);
initFilter(renderProjects, projects);
initSort(renderProjects, projects);
initTyping();
initSkills(skills);
initAutoSave();
initRecent();
initTheme();
initGreeting();
initGeo();