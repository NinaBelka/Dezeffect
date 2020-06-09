document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const questions = document.querySelectorAll('.question'),
    answers = document.querySelectorAll('.answer'),
    windowBtn = document.querySelector('.window-btn'),
    windowMod = document.querySelector('.window'),
    windowClose = document.querySelector('.window-close');
  
  // Реализация модального окна
  windowBtn.addEventListener('click', function () {
    windowMod.style.display = 'block';
  });
  windowClose.addEventListener('click', function (event) {
    windowMod.style.display = 'none';
  });

  // Реализация аккордеона

  // Перевод questions и answers в Array из Node для работы в IE метода forEach
  const questionsArr = Array.prototype.slice.call(questions);
  const answersArr = Array.prototype.slice.call(answers);

  questionsArr.forEach(function (itemQu) {

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

      answersArr.forEach(function (itemAn) {
        if (itemAn !== content) {
          itemAn.style.maxHeight = null;
        }
      });

      questionsArr.forEach(function (item) {
        if (item !== itemQu) {
          item.classList.remove('is-open');
        }
      });

    });

  });

});