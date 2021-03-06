const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Error");
  }
  let res = [];
  let arrLength = arr.length;
  let discardedIndex = 0;
  for (let i = 0; i < arrLength; i++) {
    const e = arr[i];
    switch (e) {
      case "--discard-next":
        discardedIndex = ++i;
        break;
      case "--double-next":
        if (i + 1 < arrLength) {
          res.push(arr[i + 1]);
        }
        break;
      case "--discard-prev":
        if (res.length && discardedIndex != i - 1) {
          discardedIndex = i - 1;
          res.pop();
        }
        break;
      case "--double-prev":
        if (i - 1 > 0 && discardedIndex != i - 1) {
          res.push(arr[i - 1]);
        }
        break;
      default:
        res.push(e);
    }
  }
  return res;
};
