import '../scss/style.scss';

const search = document.querySelector('.search__mini');
const btn = document.querySelector('.search__mini__button');
const input = document.querySelector('.search__mini_input');

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
});
