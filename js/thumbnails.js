import { createPosts } from './generators.js';

const posts = createPosts();
const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

posts.forEach((post) => {
  const thumbnail = template.cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');

  image.src = post.url;
  image.alt = post.description;

  thumbnail.querySelector('.picture__comments').textContent = post.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = post.likes;

  container.appendChild(thumbnail);
});
