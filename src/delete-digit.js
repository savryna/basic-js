const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nums = [];
  const arr = [...n.toString()]
  for (let i = 0; i < arr.length; i++) {
    nums.push(+[...arr.slice(0, i), ...arr.slice(i + 1)].join(''))
  }
  return Math.max(...nums)
}

module.exports = {
  deleteDigit
};
