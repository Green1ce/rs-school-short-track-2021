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
function deleteDigit(a) {
  const number = a.toString().split('');
  let answer = +number.slice(1, a.length).join('');
  for (let i = 1; i < number.length; i++) {
    if (+(number.slice(0, i).join('') + number.slice(i + 1, a.length).join('')) > answer) {
      answer = +(number.slice(0, i).join('') + number.slice(i + 1, a.length).join(''));
    }
  }
  return answer;
}

module.exports = deleteDigit;
