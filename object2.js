//Cara membuat object ada javascript
//1. Object Literal
//Tidak efektif membuat objek banyak
let mhs = {
    nama : 'Amar',
    energi : 10,
    makan : function(porsi){
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }
}

//2. Function Declaration
// function Mahasiswa(nama, energi){
//     let mahasiswa= {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     mahasiswa.main = function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }

//     return mahasiswa;
// }

const methodMahasiswa = {
    makan: function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    },

    main: function(jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }
};

// function Mahasiswa(nama, energi){
//     let mahasiswa= {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;

//     return mahasiswa;
// };

function Mahasiswa(nama, energi){
    let mahasiswa= Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
};

let nisa = Mahasiswa('Nisa', 8);

//3. Constructor Function
//keyword new
function Mahasiswa2(nama, energi){
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }

    this.main = function(jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }
}

let lulu = new Mahasiswa2('Lulu', 8);

//4. Prototype
function Mahasiswa3(nama, energi){
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa3.prototype.makan = function(porsi){
    this.energi += porsi;
    `Halo ${this.nama}, selamat makan!`;
}

Mahasiswa3.prototype.main = function(jam){
    this.energi -= jam;
    `Halo ${this.nama}, selamat bermain!`;
}

let hapizh = new Mahasiswa3('Hapizh', 8);

//versi Class
class Mahasiswa4{
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan (porsi){
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }
    
    main (jam){
        this.energi -= jam;
        `Halo ${this.nama}, selamat bermain!`;
    }
}
let lauza = new Mahasiswa4('Lauza', 8);