import { createPosts } from './generators.js';

const posts = createPosts();
const template = document.querySelector('#picture').content.querySelector('.picture');

const post = posts[0];
const image = template.querySelector('.picture__img');
image.src = post.url;
image.alt = post.description;

template.querySelector('.picture__comments').textContent = post.comments.length;
template.querySelector('.picture__likes').textContent = post.likes;

const container = document.querySelector('.pictures');
container.appendChild(template);


/* <a href="#" class="picture">
      <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
      <p class="picture__info">
        <span class="picture__comments"></span>
        <span class="picture__likes"></span>
      </p>
    </a>

Адрес изображения url подставьте как атрибут src изображения.
Описание изображения description подставьте в атрибут alt изображения.
Количество лайков likes выведите в блок .picture__likes.
Количество комментариев comments выведите в блок .picture__comments. */
