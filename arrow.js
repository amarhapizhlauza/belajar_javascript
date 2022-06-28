//Function Expression
// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Amar'));

// const tampilNama = (nama) => { return `Halo, ${nama}`; }
// console.log(tampilNama('Amar'));

// const tampilNama = (nama, waktu) => { 
//     return `Selamat ${waktu}, ${nama}`; 
// }
// console.log(tampilNama('Amar', 'Malam'));

//implisit return
// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('Amar'));

// const tampilNama = () => `Hello World`;
// console.log(tampilNama());

let mahasiswa = ['Amar', 'Hapizh', 'Lauza'];

//Array
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

//Object
let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length }));
console.log(jumlahHuruf);
console.table(jumlahHuruf);