

let menu = document.querySelector("#fullscreenMenu");
let menuButton = document.querySelector("#navMenuBtn");
let closeButton = document.querySelector("#menuCloseActionBtn");
let menuLinks = document.querySelectorAll(".menu-link-item, .menu-nav-home-btn, .menu-talk-action");

menuButton.addEventListener("click", function() {
  menu.classList.add("is-open");
  document.body.style.overflow = "hidden";
});


closeButton.addEventListener("click", function() {
  menu.classList.remove("is-open");
  document.body.style.overflow = "auto";
});


menuLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    menu.classList.remove("is-open");
    document.body.style.overflow = "auto";
  });
});


document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    menu.classList.remove("is-open");
    document.body.style.overflow = "auto";
  }
});
