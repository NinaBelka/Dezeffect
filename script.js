document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const questions = document.querySelectorAll('.question'),
    answers = document.querySelectorAll('.answer');

  questions.forEach((itemQu) => {

    itemQu.addEventListener('click', (event) => {
      event.preventDefault();
      const content = itemQu.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        itemQu.classList.remove('is-open');

      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        itemQu.classList.add('is-open');
      }

      answers.forEach((itemAn) => {
        if (itemAn !== content) {
          itemAn.style.maxHeight = null;
        }
      });

      questions.forEach((item) => {
        if (item !== itemQu) {
          item.classList.remove('is-open');
        }
      });

    });

  });

});