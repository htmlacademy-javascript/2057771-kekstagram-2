import { findTemplate } from './dom.js';

const container = document.querySelector('.pictures');
const template = findTemplate('picture');

const createThumbnail = (post) => {
  const thumbnail = template.cloneNode(true);

  thumbnail.href = post.url;
  thumbnail.dataset.id = post.id;

  const image = thumbnail.querySelector('.picture__img');
  image.src = post.url;
  image.alt = post.description;

  thumbnail.querySelector('.picture__comments').textContent = post.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = post.likes;

  return thumbnail;
};

// очистка старых элементов
const clearThumbnails = () => {
  container.querySelectorAll('.picture').forEach((el) => el.remove());
};

const renderThumbnails = (posts) => {
  clearThumbnails();

  const fragment = document.createDocumentFragment();

  posts.forEach((post) => {
    fragment.append(createThumbnail(post));
  });

  container.append(fragment);
};

export { renderThumbnails, clearThumbnails };
