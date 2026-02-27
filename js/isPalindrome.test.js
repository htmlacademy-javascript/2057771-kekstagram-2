const { isPalindrome } = require('./functions');

describe('isPalindrome', () => {
  test('палиндром из одного слова', () => {
    expect(isPalindrome('топот')).toBe(true);
  });

  test('палиндром - фраза с разным регистром', () => {
    expect(isPalindrome('Was it a Car or a Cat I saw')).toBe(true);
  });

  test('не палиндром!', () => {
    expect(isPalindrome('любая тестовая фраза')).toBe(false);
  });
});
