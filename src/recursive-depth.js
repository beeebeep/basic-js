const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1, max = 1) {
    if (max < depth) {
      max = depth;
    }
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        max = this.calculateDepth(arr[i], depth + 1, max);
      }
    }

    return max;
  }
};
