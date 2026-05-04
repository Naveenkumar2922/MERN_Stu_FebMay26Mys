export function initTyping() {
  const roles = ["Web Dev", "Cybersecurity"];
  let i = 0, j = 0;
  const el = document.getElementById("typing");

  function type() {
    if (j < roles[i].length) {
      el.textContent += roles[i][j++];
      setTimeout(type, 100);
    } else {
      setTimeout(() => {
        el.textContent = "";
        j = 0;
        i = (i + 1) % roles.length;
        type();
      }, 1000);
    }
  }

  type();
}