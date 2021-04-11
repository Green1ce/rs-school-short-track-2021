/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(a) {
  let answer = '';
  let counter = 1;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1]) counter++;
    else if (counter === 1) {
      answer += a[i];
    } else {
      answer += counter + a[i];
      counter = 1;
    }
  }
  return answer;
}

module.exports = encodeLine;
