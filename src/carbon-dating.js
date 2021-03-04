const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let f = parseFloat(sampleActivity);
  if (typeof sampleActivity === "string" && f > 0 && f < MODERN_ACTIVITY) {
    return Math.ceil(
      Math.log(MODERN_ACTIVITY / f) / (0.693 / HALF_LIFE_PERIOD)
    );
  } else {
    return false;
  }
};
