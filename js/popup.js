const buttonMain = document.querySelector('.button__main');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.popup__close');
const buttonBurger = document.querySelector('.button__main__burger');

if (localStorage.getItem('popupState') === 'opened') {
    openPopup();
}

function openPopup() {
    overlay.classList.add('show-popup');
    localStorage.setItem('popupState', 'opened');
}

function closePopup() {
    overlay.classList.remove('show-popup')
    localStorage.setItem('popupState', 'closed');
}

buttonBurger.addEventListener('click', openPopup);
buttonMain.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
overlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('show-popup')) {
        closePopup();
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePopup();
    }
})