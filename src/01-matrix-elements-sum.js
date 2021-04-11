/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(a) {
  let answer = 0;
  for (let i = 0; i < a[0].length; i++) {
    answer += a[0][i];
  }
  for (let i = 1; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i - 1][j] !== 0) answer += a[i][j];
    }
  }
  return answer;
}

module.exports = getMatrixElementsSum;
