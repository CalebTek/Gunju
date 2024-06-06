function applyThemeBasedOnTime() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 18) {
    document.body.classList.add("light-theme");
    updateButtonClass("btn-outline-dark", "btn-outline-light");
    toggleNavbarClass(true);
  } else {
    document.body.classList.remove("light-theme");
    updateButtonClass("btn-outline-light", "btn-outline-dark");
    toggleNavbarClass(false);
  }
}

function updateButtonClass(addClass, removeClass) {
  const buttons = document.querySelectorAll("button.btn");
  buttons.forEach((button) => {
    button.classList.add(addClass);
    button.classList.remove(removeClass);
  });
}

function toggleNavbarClass(isLightTheme) {
  const navbar = document.querySelector(".navbar");
  if (isLightTheme) {
    navbar.classList.remove("navbar-dark", "bs-dark-bg-subtle");
  } else {
    navbar.classList.add("navbar-dark", "bs-dark-bg-subtle");
  }
}

applyThemeBasedOnTime();

setInterval(applyThemeBasedOnTime, 3600000);
