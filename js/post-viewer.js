import {isEscapeKey, isEnterKey} from './utils.js';

const userModalElement = document.querySelector('.big-picture');
const userModalOpenElement = document.querySelector('.pictures');
const userModalCloseElement = document.querySelector('#picture-cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal () {
  userModalElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeUserModal () {
  userModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
}

// ОТКРЫТИЕ — делегирование
userModalOpenElement.addEventListener('click', (evt) => {
  const picture = evt.target.closest('.picture');

  if (!picture) {
    return;
  }

  evt.preventDefault(); // т.к. это <a>
  openUserModal();
});

// Клавиатура (Enter)
userModalOpenElement.addEventListener('keydown', (evt) => {
  const picture = evt.target.closest('.picture');

  if (!picture) {
    return;
  }

  if (isEnterKey(evt)) {
    evt.preventDefault();
    // userModalElement.classList.remove('hidden');
    openUserModal();
  }
});

// ЗАКРЫТИЕ
userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
});
