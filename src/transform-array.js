const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let [disN, disP, dbN, dbP] = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let result = []
  for(let i = 0; i < arr.length; i++) {
      result.push(arr[i])
      console.log(result);
    
    if (arr[i] === disN) {
      if (arr.indexOf(disN) === (arr.length - 1)) {
        result.pop(arr[i])
        continue
      }
      result.pop(arr[i])
      i+=2
    }
    else if (arr[i] === disP) {
      if (arr.indexOf(disP) === 0) {
        result.pop(arr[i])
        continue
      }
      result.pop(arr[i])
      result.pop(arr[i - 1])
    }
    else if (arr[i] === dbN) {
      if (arr.indexOf(dbN) === (arr.length - 1)) {
        result.pop(arr[i])
        continue
      }
      result.pop(arr[i])
      result.push(arr[i + 1])
    }
    else if (arr[i] === dbP) {
      if (arr.indexOf(dbP) === 0) {
        result.pop(arr[i])
        continue
      }
      result.pop(arr[i])
      result.push(arr[i - 1])
    }
  }  
  return result
}

module.exports = {
  transform
};
