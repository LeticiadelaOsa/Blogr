const buttonMenu = document.getElementById("button-menu");
const menu = document.getElementById("menu");
const header = document.getElementById("header");

const submenuConnect = document.getElementById("submenu-connect");
const submenuCompany = document.getElementById("submenu-company");
const submenuProduct = document.getElementById("submenu-product");

const buttonMenuImg = document.getElementById("button-img");
buttonMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    buttonMenuImg.src = "assets/images/icon-close.svg";
    document.body.classList.add("no-scroll");
  } else {
    buttonMenuImg.src = "assets/images/icon-hamburger.svg";
    document.body.classList.remove("no-scroll");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    header.classList.add("header__background");
  } else {
    header.classList.remove("header__background");
  }
});

submenuConnect.addEventListener("click", () => {
  submenus(submenuConnect);
});
submenuProduct.addEventListener("click", () => {
  submenus(submenuProduct);
});
submenuCompany.addEventListener("click", () => {
  submenus(submenuCompany);
});

function submenus(submenu) {
  submenu.childNodes[3].classList.toggle("active");
  submenu.classList.toggle("submenu__title--active");
}
