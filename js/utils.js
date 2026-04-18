import { findTemplate } from './dom.js';

const REMOVE_MESSAGE_TIMEOUT = 5000;

/**
 * Проверяет, нажата ли клавиша Escape.
 *
 * @param {KeyboardEvent} evt - Объект события клавиатуры.
 * @returns {boolean} Возвращает true, если нажата клавиша Escape, иначе false.
 */
const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

// =======
// ошибка загрузки миниатюр  - ОБРАБОТКА ВОЗМОЖНЫХ ОШИБОК ПРИ ЗАГРУЗКЕ

const errorLoadDataTemplate = document.querySelector('#data-error').content;
const body = document.body;

const showErrorMessage = (message) => {
  const errorElement = errorLoadDataTemplate.cloneNode(true);

  if (message) {
    errorElement.querySelector('.data-error__title').textContent = message;
  }

  body.append(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

const showDataError = () => {
  const template = findTemplate('data-error');
  const node = template.cloneNode(true);

  document.body.append(node);

  setTimeout(() => {
    node.remove();
  }, 5000);
};

// debounce
function debounce(callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback.apply(this, rest);
    }, timeoutDelay);
  };
}

// throttle
function throttle(callback, delayBetweenFrames) {
  let lastTime = 0;

  return (...rest) => {
    const now = Date.now();

    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

export {
  isEscapeKey,
  isEnterKey,
  showErrorMessage,
  showDataError,
  debounce,
  throttle
};
