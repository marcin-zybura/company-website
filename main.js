function hamburgerToggle(x) {
  x.classList.toggle("hamburger-toggle");
  let navigationListMobile = document.getElementById("navigation-list--mobile");
  navigationListMobile.classList.toggle("navigation-list--mobile-show");
}