const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number") {
      this.arr = [];
      throw new Error("Error");
    }
    if (position < 1 || position > this.arr.length) {
      this.arr = [];
      throw new Error("Error");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    arr = this.arr.slice();
    this.arr = [];
    return arr.join("~~");
  },
};

module.exports = chainMaker;