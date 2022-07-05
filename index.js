// const fs = require('fs'); //core module
// const cetakNama = require('./coba'); //local module
// const moment = require('moment'); //third party module / npm module / node_module 

const coba = require('./coba');

console.log(
    coba.cetakNama('Amar Hapizh Lauza'), 
    coba.PI, 
    coba.mahasiswa.cetakMhs(), 
    new coba.Orang()
);