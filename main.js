const shareBtn1 = document.querySelector('.container__content__icon-share');

const shareBtn2 = document.querySelector('.container__share__icon-share');
const socialIcon = document.querySelector('.container__share');


shareBtn1.addEventListener('click', ()=> {
    socialIcon.classList.toggle('show');
});

shareBtn2.addEventListener('click', ()=> {
    socialIcon.classList.toggle('show');
});