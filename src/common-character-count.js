const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const minStr = s1.length === Math.min(s1.length, s2.length) ? s1 : s2;
  let maxStr = minStr === s1 ? s2 : s1;
  let counter = 0;
  for (let i = 0; i < minStr.length; i++) {
    if (maxStr.includes(minStr[i])) {
      counter += 1;
      maxStr =
        maxStr.slice(0, maxStr.indexOf(minStr[i])) +
        maxStr.slice(maxStr.indexOf(minStr[i]) + 1);
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount,
};
