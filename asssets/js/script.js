// opening the menu

// const navMenu = document.querySelector(".nav__menu");
// const navBtnOpen = document.querySelector(".nav__toggle-open");
// const navBtnClose = document.querySelector(".nav__toggle-close");

// const handleMenuOpen = () => {
// 	navMenu.style.display = "flex";
// 	navBtnOpen.style.display = "none";
// 	navBtnClose.style.display = "inline-block";
// };

const navMenu = document.querySelector(".nav__menu");
const navBtnOpen = document.querySelector(".nav__toggle-open");
const navBtnClose = document.querySelector(".nav__toggle-close");
const openNavHandler = () => {
	navMenu.style.display = "flex";
	navBtnOpen.style.display = "none";
	navBtnClose.style.display = "inline-block";
};
