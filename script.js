function applyThemeBasedOnTime() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 18) {
    document.body.classList.add("light-theme");
    updateButtonClass("btn-outline-dark", "btn-outline-light");
  } else {
    document.body.classList.remove("light-theme");
    updateButtonClass("btn-outline-light", "btn-outline-dark");
  }
}

function updateButtonClass(addClass, removeClass) {
  const buttons = document.querySelectorAll("button.btn");
  buttons.forEach((button) => {
    button.classList.add(addClass);
    button.classList.remove(removeClass);
  });
}

applyThemeBasedOnTime();

setInterval(applyThemeBasedOnTime, 3600000);
