//HAMBURGER MENU
const ham = document.querySelector('.hamburger');
const navMenu = document.querySelector('.header__ul');
const bar = document.querySelectorAll('.bar');
const x = document.querySelector('.x');
console.log(x);

const toggleMenu = function () {
  navMenu.classList.toggle('navigation--active');
  ham.classList.toggle('active');
};

// x?.addEventListener('click', closeMenu);

ham.addEventListener('click', toggleMenu);

//MODAL OPEN & CLOSE
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelectorAll('.card__button');
const btnCloseModal = document.querySelector('.close-modal');

// console.log(modal, overlay, btnCloseModal, btnOpenModal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
  }
});

for (i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//lINKS

const links = document.querySelectorAll('.list-item');

links.forEach(link => {
  link.addEventListener('click', function () {
    navMenu.classList.remove('navigation--active');
  });
});

// XXXX
