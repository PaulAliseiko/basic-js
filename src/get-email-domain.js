const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let result = []
  let arr = email.split('')
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i])
    if (email[i - 1] === '@') {
      break
    }
  }
  return result.reverse().join('')
}

module.exports = {
  getEmailDomain
};
