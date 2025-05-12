'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

const openModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

document.addEventListener('keydown', function (e) {
    console.log(e.key);

    if (e.key == 'Escape' && !modal.classList.contains(this.hidden)) {
        closeModal();
    }
})

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', openModal);
