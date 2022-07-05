// console.log('Hai Amar');
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama('Amar Hapizh Lauza'));
// console.log(window.alert('Hello World'));

function cetakNama (nama) {
    return `Hi, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama : 'Nisa Hidayatinah',
    umur : 20,
    cetakMhs() {
        return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`;
    }
}

class Orang {
    constructor() {
        console.log('Objek orang telah dibuat!!');
    }
}


// module.exports = cetakNama;

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang
// }

module.exports = { cetakNama, PI, mahasiswa, Orang };