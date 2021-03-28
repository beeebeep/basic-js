const CustomError = require("../extensions/custom-error");

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
class VigenereCipheringMachine {

    constructor(direct = true) {
        this.reverse = !direct;
    }

    encrypt(message, key) {
        return this.process(message, key, (m) => alphabet.includes(m) ? alphabet[(alphabet.indexOf(m) + alphabet.indexOf(this.tkey[this.pointer++ % this.tkey.length])) % alphabet.length] : m);
    }

    decrypt(message, key) {
        return this.process(message, key, (c) => alphabet.includes(c) ? alphabet[(alphabet.indexOf(c) + alphabet.length - alphabet.indexOf(this.tkey[this.pointer++ % this.tkey.length])) % alphabet.length] : c);
    }

    process(message, key, mapper) {
        if (message == undefined || key == undefined) {
            throw new Error();
        }
        this.pointer = 0;
        this.tkey = key.toUpperCase();
        let changed = message.toUpperCase().split('').map(mapper);
        return this.reverse ? changed.reverse().join('') : changed.join('');
    }
}

module.exports = VigenereCipheringMachine;