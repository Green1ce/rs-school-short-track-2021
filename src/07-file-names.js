/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(name) {
  const obj = {};
  const answer = [];
  for (let i = 0; i < name.length; i++) {
    if (obj[name[i]] === undefined) {
      answer.push(name[i]);
      obj[name[i]] = 0;
    } else {
      obj[name[i]] += 1;
      obj[`${name[i]}(${obj[name[i]]})`] = 0;
      answer.push(`${name[i]}(${obj[name[i]]})`);
    }
  }
  return answer;
}

module.exports = renameFiles;
