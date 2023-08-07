const authBtn = document.querySelector('.header__auth');
const authForm = document.querySelector('.header__form');

let active = authBtn.dataset.active;
console.log(active);
console.log(typeof active);

document.addEventListener('DOMContentLoaded', () => {
    authBtn.dataset.active = "false"
    let isAuth = false
})

let displayAuthForm = () => {
    if (active == "false") {
        authBtn.dataset.active = "true"
        authForm.style.right = "-1px"
    } else {
        authBtn.dataset.active = "false"
        authForm.style.right = "-100%"
    }
}

authBtn.addEventListener('click', () => {
    active = authBtn.dataset.active;
    if (isAuth == false) displayAuthForm()
})