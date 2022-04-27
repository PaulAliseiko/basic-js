const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const DECAY_CONSTANT = 0.693;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(x) {
  if (typeof(x) === 'number' || typeof(x) === 'object') {
    return false
  }
  if (Number(x) === 0 || isNaN(x)) {
    return false
  }
  if (Number(x) <= 0 || Number(x) > 15) {
    return false
  }
  else {
    return Math.ceil(((Math.log(15/Number(x))/ (0.693/5730))))
  }
}

module.exports = {
  dateSample
};
