import { setupModal } from '../utils/modal';

const modals = document.querySelectorAll('.modal');
const modalFeedback = document.querySelector('.modal--feedback');
const modalFeedbackBtns = document.querySelectorAll('[data-modal="feedback"]');
const modalSuccess = document.querySelector('.modal--success');
const modalSuccessBtns = document.querySelectorAll('[data-modal="success"]');

// аргументы setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock)
// возможна инициализация только с первыми аргументом,
// если вам нужно открывать модалку в другом месте под какими-нибудь условиями
const initModals = () => {
  // фикс для редких случаев, когда модалка появляется при загрузке страницы
  window.addEventListener('load', () => {
    if (modals.length) {
      modals.forEach((el) => {
        setTimeout(() => {
          el.classList.remove('modal--preload');
        }, 100);
      });
    }
  });

  if (modalFeedback && modalFeedbackBtns.length) {
    setupModal(modalFeedback, false, modalFeedbackBtns, false, false);
  }
  if (modalSuccess && modalSuccessBtns.length) {
    setupModal(modalSuccess, false, modalSuccessBtns);
  }
};

export { initModals };

document.querySelector('.main-nav__toggle').onclick = function () {
  document.querySelector('.main-nav__toggle').classList.toggle('main-nav__toggle--opened');

  document.querySelector('.main-nav__wrapper').classList.toggle('main-nav__wrapper--opened');

};

document.querySelector('.main-nav__link--first').onclick = function () {
  document.querySelector('.main-nav__toggle--opened').classList.toggle('main-nav__toggle--opened');

  document.querySelector('.main-nav__wrapper--opened').classList.toggle('main-nav__wrapper--opened');

};

document.querySelector('.main-nav__link--second').onclick = function () {
  document.querySelector('.main-nav__toggle--opened').classList.toggle('main-nav__toggle--opened');

  document.querySelector('.main-nav__wrapper--opened').classList.toggle('main-nav__wrapper--opened');

};

document.querySelector('.main-nav__link--third').onclick = function () {
  document.querySelector('.main-nav__toggle--opened').classList.toggle('main-nav__toggle--opened');

  document.querySelector('.main-nav__wrapper--opened').classList.toggle('main-nav__wrapper--opened');

};

document.querySelector('.main-nav__link--fourth').onclick = function () {
  document.querySelector('.main-nav__toggle--opened').classList.toggle('main-nav__toggle--opened');

  document.querySelector('.main-nav__wrapper--opened').classList.toggle('main-nav__wrapper--opened');

};

document.querySelector('.product__btn').onclick = function () {
  document.querySelector('.product__btn').classList.toggle('product__btn--active');
};
