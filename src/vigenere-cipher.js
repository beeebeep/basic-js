const CustomError = require("../extensions/custom-error");

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
class VigenereCipheringMachine {

    constructor(direct = true) {
        this.reverse = !direct;
    }

    encrypt(message, key) {
        if (message == undefined || key == undefined) {
            throw new Error();
        }
        key = key.toUpperCase();
        let pointer = 0;
        let mapper = (m) => alphabet.includes(m) ? alphabet[(alphabet.indexOf(m) + alphabet.indexOf(key[pointer++ % key.length])) % alphabet.length] : m;
        let changed = message.toUpperCase().split('').map(mapper);
        return this.reverse ? changed.reverse().join('') : changed.join('');
    }

    decrypt(message, key) {
        if (message == undefined || key == undefined) {
            throw new Error();
        }
        key = key.toUpperCase();
        let pointer = 0;
        let mapper = (c) => alphabet.includes(c) ? alphabet[(alphabet.indexOf(c) + alphabet.length - alphabet.indexOf(key[pointer++ % key.length])) % alphabet.length] : c;
        let changed = message.toUpperCase().split('').map(mapper);
        return this.reverse ? changed.reverse().join('') : changed.join('');
    }
}

module.exports = VigenereCipheringMachine;

    // process(message, key, mapper) {
    //     this.pointer = 0; ?@!%//
    //     if (message == undefined || key == undefined) {
    //         throw new Error();
    //     }
    //     key = key.toUpperCase();
    //     let changed = message.toUpperCase().split('').map(mapper);
    //     return this.reverse ? changed.reverse().join('') : changed.join('');
    // }

