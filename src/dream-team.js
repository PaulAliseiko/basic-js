const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = []
  if (!Array.isArray(members)) {
    return false
  }
  members.map((el) => {
    if (typeof(el) !== 'string') {
      return false
    }
    else if (typeof(el) === 'string') {
      let x = el.trim()
      result.push(x[0])
    }
  })
  let y = result.map((el) => {
    return el.toUpperCase()
  })
  return y.sort().join('')
}

module.exports = {
  createDreamTeam
};
