const open_btn = document.getElementById('button-open');

const modal_container = document.getElementsByClassName('modal-container')


const close_btn = document.getElementById('close-button');

open_btn.addEventListener('click',() => {
    modal_container[0].classList.add('show');
});

close_btn.addEventListener('click',() => {
    modal_container[0].classList.remove('show');
});