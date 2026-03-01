/**
 * Checks if a string contains an allowed number of characters.
 * @param {string} charset - The string to validate.
 * @param {number} maxLength - The maximum allowed length.
 * @returns {boolean} Returns true if the string length is less than or equal to maxLength.
 */
const checkLength = (charset, maxLength) => charset.length <= maxLength;

/**
 * Checks if a string is a palindrom
 * @param {string} string - The string to check
 * @returns {boolean} Returns true if the string is a palindrome.
 *
 * @example
 * isPalindrome('Race car'); // true
 * isPalindrome('Keks is a cat'); // false
 */
function isPalindrome(string) {
  const normalizedString = string.replace(/\s/g, '').toLowerCase();
  return normalizedString === [...normalizedString].reverse().join('');
}

/**
 * Extracts digits from a string or number and returns them as a positive integer
 * If no digits are found, returns NaN
 * @param {string|number} charset - The value to extract digits from
 * @returns {number} A number composed of the extracted digits, or NaN if none are found
 *
 * @example
 * getNumbers('abc123d4'); // 1234
 * getNumbers('no digits'); // NaN
 */
const getNumbers = (charset) => Math.abs(parseInt(String(charset).replace(/\D+/g, ''), 10));

module.exports = {
  checkLength,
  isPalindrome,
  getNumbers
};
