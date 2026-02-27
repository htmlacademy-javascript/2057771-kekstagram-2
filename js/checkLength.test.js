const { checkLength } = require('./functions');

describe('checkLength', () => {
  test('true: строка короче maxLength', () => {
    expect(checkLength('Тест', 10)).toBe(true);
  });

  test('false: строка длиннее maxLength', () => {
    expect(checkLength('Тестовая строка подлиннее', 5)).toBe(false);
  });

  test('true: длина равна maxLength', () => {
    expect(checkLength('01234', 5)).toBe(true);
  });

  test('true: пустая строка', () => {
    expect(checkLength('', 0)).toBe(true);
  });
});
