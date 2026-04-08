// ======================
// ЭЛЕМЕНТЫ
// ======================

const uploadInput = document.querySelector('.img-upload__input');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeButton = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');

const previewImage = document.querySelector('.img-upload__preview img');

// масштаб
const scaleValue = document.querySelector('.scale__control--value');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');

// эффекты
const effectsList = document.querySelector('.effects__list');

// слайдер
const effectLevelContainer = document.querySelector('.img-upload__effect-level');
const effectLevelInput = document.querySelector('.effect-level__value');

// текст
const hashtagsInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');


// ======================
// КОНСТАНТЫ
// ======================

const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;

const effects = {
  none: {
    style: 'none',
    unit: '',
    min: 0,
    max: 0,
    step: 0
  },
  chrome: {
    style: 'grayscale',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1
  },
  sepia: {
    style: 'sepia',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1
  },
  marvin: {
    style: 'invert',
    unit: '%',
    min: 0,
    max: 100,
    step: 1
  },
  phobos: {
    style: 'blur',
    unit: 'px',
    min: 0,
    max: 3,
    step: 0.1
  },
  heat: {
    style: 'brightness',
    unit: '',
    min: 1,
    max: 3,
    step: 0.1
  }
};


// ======================
// ОТКРЫТИЕ / ЗАКРЫТИЕ
// ======================

const openForm = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onEscKeydown);
};

const closeForm = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onEscKeydown);

  form.reset();
  resetScale();
  resetEffects();

  uploadInput.value = '';
};

function onEscKeydown(evt) {
  const isInputFocused =
    document.activeElement === hashtagsInput ||
    document.activeElement === commentInput;

  if (evt.key === 'Escape' && !isInputFocused) {
    evt.preventDefault();
    closeForm();
  }
}

uploadInput.addEventListener('change', openForm);
closeButton.addEventListener('click', closeForm);


// ======================
// МАСШТАБ
// ======================

let currentScale = 100;

const updateScale = () => {
  scaleValue.value = `${currentScale}%`;
  previewImage.style.transform = `scale(${currentScale / 100})`;
};

function resetScale () {
  currentScale = 100;
  updateScale();
}

scaleSmaller.addEventListener('click', () => {
  if (currentScale > SCALE_MIN) {
    currentScale -= SCALE_STEP;
    updateScale();
  }
});

scaleBigger.addEventListener('click', () => {
  if (currentScale < SCALE_MAX) {
    currentScale += SCALE_STEP;
    updateScale();
  }
});


// ======================
// ЭФФЕКТЫ + СЛАЙДЕР
// ======================

const sliderElement = document.querySelector('.effect-level');
const valueElement = document.querySelector('.effect-level__value');
const effectElement = document.querySelector('.level-form__special');

valueElement.value = 80;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});


// let currentEffect = 'none';

// // создаём простой range вместо noUiSlider
// const slider = document.createElement('input');
// slider.type = 'range';
// slider.classList.add('effect-slider');
// effectLevelContainer.appendChild(slider);

// const updateEffect = () => {
//   const effect = effects[currentEffect];

//   if (currentEffect === 'none') {
//     previewImage.style.filter = 'none';
//     effectLevelContainer.classList.add('hidden');
//     return;
//   }

//   effectLevelContainer.classList.remove('hidden');

//   const value = slider.value;
//   previewImage.style.filter = `${effect.style}(${value}${effect.unit})`;

//   effectLevelInput.value = value;
// };

// function resetEffects () {
//   currentEffect = 'none';
//   slider.value = 0;
//   previewImage.style.filter = 'none';
//   effectLevelContainer.classList.add('hidden');
// }

// effectsList.addEventListener('change', (evt) => {
//   if (!evt.target.classList.contains('effects__radio')) {
//     return;
//   }

//   currentEffect = evt.target.value;
//   const effect = effects[currentEffect];

//   slider.min = effect.min;
//   slider.max = effect.max;
//   slider.step = effect.step;
//   slider.value = effect.max;

//   updateEffect();
// });

// slider.addEventListener('input', updateEffect);


// ======================
// ПОДГОТОВКА ФОРМЫ
// ======================

// скрываем слайдер по умолчанию
// effectLevelContainer.classList.add('hidden');
// resetScale();
// resetEffects();
