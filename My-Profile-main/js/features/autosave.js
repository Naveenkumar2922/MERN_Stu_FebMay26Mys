export function initAutoSave() {
  ["name", "email"].forEach(id => {
    const input = document.getElementById(id);

    input.value = localStorage.getItem(id) || "";

    input.addEventListener("input", () => {
      localStorage.setItem(id, input.value);
    });
  });
}