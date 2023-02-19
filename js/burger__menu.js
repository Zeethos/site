const burgerMenu = document.querySelector('.burger');
const burgerLineOne = burgerMenu.querySelector('.burger__item__one');
const burgerLineTwo = burgerMenu.querySelector('.burger__item__two');
const burgerLineFree = burgerMenu.querySelector('.burger__item__free');
const burgerPopup = document.querySelector('.burger__popup')

function toggleBurgerMenu() {
    burgerLineOne.classList.toggle('burger__item__one__opened');
    burgerLineTwo.classList.toggle('burger__item__two__opened');
    burgerLineFree.classList.toggle('burger__item__free__opened');
}

function toggleBurgerPopup() {
    burgerPopup.classList.toggle('burger__popup__opened');
}

burgerMenu.addEventListener('click', () => {
    toggleBurgerMenu();
    toggleBurgerPopup();
});