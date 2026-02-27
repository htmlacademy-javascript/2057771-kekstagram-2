/* Функция для проверки длины строки */
const checkLength = (charset = '', maxLength = 1) => charset.length <= maxLength;

/* Функция для проверки, является ли строка палиндромом. */
function isPalindrome(string = '') {
  let normalizedString = string.replace(/\s/g, '').toLowerCase();
  return normalizedString === [...normalizedString].reverse().join('');
}

/* Функция,извлекающая из строки цифры */
let getNumbers = (charset) => Math.abs(parseInt(String(charset).replace(/\D+/g, ''), 10));

module.exports = {
  checkLength,
  isPalindrome,
  getNumbers
}
