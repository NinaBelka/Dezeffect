document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const questions = document.querySelectorAll('.question'),
    answers = document.querySelectorAll('.answer'),
    windowBtn = document.querySelector('.window-btn'),
    window = document.querySelector('.window'),
    windowClose = document.querySelector('.window-close');

  // Реализация аккордеона
  questions.forEach(function (itemQu) {

    itemQu.addEventListener('click', function (event) {
      event.preventDefault();
      const content = itemQu.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        itemQu.classList.remove('is-open');

      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        itemQu.classList.add('is-open');
      }

      answers.forEach(function (itemAn) {
        if (itemAn !== content) {
          itemAn.style.maxHeight = null;
        }
      });

      questions.forEach(function (item) {
        if (item !== itemQu) {
          item.classList.remove('is-open');
        }
      });

    });

  });

// Реализация модального окна
  windowBtn.addEventListener('click', function () {
    window.style.display = 'block';
  });
  windowClose.addEventListener('click', function (event) {
    window.style.display = 'none';
  });

});