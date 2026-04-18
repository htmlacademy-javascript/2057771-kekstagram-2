import { renderThumbnails } from './thumbnails.js';
import { debounce } from './utils.js';

const RANDOM_COUNT = 10;

const filtersContainer = document.querySelector('.img-filters');
const filterButtons = filtersContainer.querySelectorAll('.img-filters__button');

let posts = [];

// показать блок
const showFilters = () => {
  filtersContainer.classList.remove('img-filters--inactive');
};

// утилита: случайные элементы
const getRandomPosts = (data) =>
  [...data]
    .sort(() => Math.random() - 0.5)
    .slice(0, RANDOM_COUNT);

// утилита: обсуждаемые
const getDiscussedPosts = (data) =>
  [...data].sort((a, b) => b.comments.length - a.comments.length);

// переключение активной кнопки
const setActiveButton = (activeBtn) => {
  filterButtons.forEach((btn) =>
    btn.classList.remove('img-filters__button--active')
  );

  activeBtn.classList.add('img-filters__button--active');
};

// debounce-отрисовка
const debouncedRender = debounce((filteredPosts) => {
  renderThumbnails(filteredPosts);
}, 500);

// обработчик клика
const onFilterClick = (evt) => {
  const button = evt.target.closest('.img-filters__button');

  if (!button) {
    return;
  }

  setActiveButton(button);

  let filtered = posts;

  if (button.id === 'filter-random') {
    filtered = getRandomPosts(posts);
  }

  if (button.id === 'filter-discussed') {
    filtered = getDiscussedPosts(posts);
  }

  debouncedRender(filtered);
};

// инициализация
const initFilters = (data) => {
  posts = data;

  showFilters();

  filtersContainer.addEventListener('click', onFilterClick);
};

export { initFilters };
