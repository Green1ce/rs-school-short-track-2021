/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(a, answer = []) {
  const number = a.toString().split('');
  let variable = 0;
  for (let i = 0; i < number.length; i++) {
    variable += +number[i];
  }
  answer.push(variable);
  if (variable > 9) getSumOfDigits(variable, answer);
  return Math.min(...answer);
}

module.exports = getSumOfDigits;
