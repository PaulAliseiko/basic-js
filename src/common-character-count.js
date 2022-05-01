const { NotImplementedError } = require('../extensions/index.js');

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
  if (s1.length === 0 || s2.length === 0) {
    return 0
  }
  let ss1 = s1.split('')
  let ss2 = s2.split('')
  let counter = 0
  for(let i = 0; i < ss1.length; i++) {
    if (ss2.includes(ss1[i])) {
      counter++
      ss2.splice(ss2.indexOf(ss1[i]), 1)
    }
  }
  return counter
}

module.exports = {
  getCommonCharacterCount
};
