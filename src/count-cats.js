const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(x) {
  let number = 0
  x.map((el) => {
    for(let i = 0; i < el.length; i++) {
      if (el[i] === '^^') {
        number++
      }
    }
  })
  return number
}

module.exports = {
  countCats
};
