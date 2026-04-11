// импорты других модулей, вызовы общих функций, настройка скриптов
import {createPosts} from './generators.js';
import './thumbnails.js';
import './post-viewer.js';
import './form.js';

createPosts();

// посты загружаются
// НАПРЯМУЮ FETCH-ЗАПРОС ПИСАТЬ НЕ НАДО
fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json()) // получаем объект ответа. сервер отдаёт данные в формате json
  .then((posts) => {
    console.log(posts);
  });

