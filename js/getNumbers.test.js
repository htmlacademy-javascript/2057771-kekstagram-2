const { getNumbers } = require('./functions');

describe('getNumbers', () => {
  test('число в начале строки', () => {
    expect(getNumbers('2023 год')).toBe(2023);
  });

  test('число в конце строки', () => {
    expect(getNumbers('ECMAScript 2022')).toBe(2022);
  });

  test('числа в разных местах строки, между ними могут быть разные символы', () => {
    expect(getNumbers('1 кефир, 0.5 батона')).toBe(105);
  });

  test('если в начале есть ноль или ноли - они отбрасываются', () => {
    expect(getNumbers('агент 007')).toBe(7);
  });

  test('в строке нет ни одного числа', () => {
    expect(getNumbers('а я томат')).toBe(NaN);
  });

  test('вместо строки - положительное число', () => {
    expect(getNumbers(2023)).toBe(2023);
  });

  test('вместо строки - отрицательное число', () => {
    expect(getNumbers(-1)).toBe(1);
  });

  test('вместо строки - дробное число', () => {
    expect(getNumbers(1.5)).toBe(15);
  });
});
