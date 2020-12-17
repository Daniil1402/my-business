const menu = document.querySelector(".menu");
const closeMenu = menu.querySelector(".closeMenu");
const openMenu = menu.querySelector(".openMenu");
const menuLogo = menu.querySelector(".menu__logo");
const menuNav = menu.querySelector(".menu__nav");
const container = document.querySelector(".container");

const func = function () {
  container.style = "margin: 0 auto 0 auto;";
};

closeMenu.addEventListener("click", function () {
  menu.style = "width: 0; transition: .7s;";
  closeMenu.style = "display: none;";
  openMenu.style = "display: block;";
  menuLogo.style = "transition: .4s; visibility: hidden;";
  menuNav.style = "transition: .4s; visibility: hidden;";
  //setTimeout(func, 470);
  // menuLogo.classList.add("hidden");
  // menuNav.classList.add("hidden");
  // menuLogo.classList.remove("visible");
  // menuNav.classList.remove("visible");

  openMenu.addEventListener("click", function () {
    menu.style = "width: 100%; transition: .7s;";
    closeMenu.style = "display: block;";
    openMenu.style = "display: none;";
    menuLogo.style = "transition: .4s; visibility: visible;";
    menuNav.style = "transition: .4s; visibility: visible;";
    //container.style = "margin-left: 280px; transition: 2s;";
    // menuLogo.classList.remove("hidden");
    // menuNav.classList.remove("hidden");
    // menuLogo.classList.add("visible");
    // menuNav.classList.add("visible");
  });
});
