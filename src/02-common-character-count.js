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
function getCommonCharacterCount(a, b) {
  const first = a.split('');
  const second = b.split('');
  let answer = 0;
  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) >= 0) {
      second.splice(second.indexOf(first[i]), 1);
      answer++;
    }
  }
  return answer;
}

module.exports = getCommonCharacterCount;
