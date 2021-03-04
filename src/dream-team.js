const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  return members
    .filter((v) => typeof v === "string")
    .map((v) => v.trim()[0].toUpperCase())
    .sort()
    .join("");
};
