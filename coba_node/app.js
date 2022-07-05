const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('amarhapizhlauza@gmail.com'));
// console.log(validator.isMobilePhone('0812475847', 'id-ID'));
// console.log(validator.isNumeric('07a46348'));

console.log(chalk.italic.bgBlue.black('Hello World'));
const nama = 'Amar';
const pesan = chalk`Dunia penuh dengan {bgRed.black tantangan} yang tiada pernah {bgGreen.italic.black berhenti}. Nama saya : ${nama}`;
console.log(pesan);