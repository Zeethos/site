let buttonMain = document.querySelector('.button__main');
let loginPopUp = document.querySelector('.login-popup');

buttonMain.addEventListener('click', showPopUp)

function showPopUp(evt) {
    console.log(evt);
    evt.preventDefault();

    loginPopUp.classList.toggle('show-popup')

};