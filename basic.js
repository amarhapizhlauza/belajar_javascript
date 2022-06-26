var arr = ['Amar', 'Hapizh', 'Lauza'];
//Memanggil
console.log(arr);
//Panjang Array
console.log(arr.length);
//Menggabungan Array
console.log(arr.join());
//Menggabungkan Array dengan pemisah -
console.log(arr.join(' - '));
//Menambahkan array elemen akhir
arr.push('Nisa', 'Hidayatinah');
console.log(arr.join(' - '));
//Menghapus array elemen akhir
arr.pop();
console.log(arr.join(' - '));
//Menambah array elemen awal
arr.unshift('Hidayatinah');
console.log(arr.join(' - '));
//Menghapus array elemen awal
arr.shift();
console.log(arr.join(' - '));

var arr2 = ['Amar', 'Hapizh', 'Lauza'];
//Splice - Menyisipkan
//splice(indexAwal, mau di hapus berapa, elemen baru 1, elemen baru 2)
arr2.splice(2, 0, 'Nisa', 'Hidayatinah');
console.log(arr2.join(' - '));
//Slice - Mengiris atau Mengambil dari array sebelumnya
//slice(awal, akhir)
var arr3 = arr2.slice(1, 3);
console.log(arr3.join(' - '));
//Perulangan forEach
arr2.forEach(function(e, i){
    console.log('Mahasiswa ke - ' + (i+1) + ' adalah : ' + e)
});
//Perulangan Map ada pengembalian nilai
var angka = [1,2,5,3,6,8,4];
var angka2 = angka.map(function(e){
    return e * 2;
});
console.log(angka2.join(' - '));
//Mengurutkan
angka2.reverse();
console.log(angka2.join(' - '));
angka2.sort();
console.log(angka2.join(' - '));
angka2.sort(function(a,b){
    return a-b;
});
console.log(angka2.join(' - '));
//Mencari nilai filter = mengembalikan banyak nilai, find hanya satu nilai
var angka3 = angka2.filter(function(x){
    return x > 5;
});
console.log(angka3.join(' - '));
var angka4 = angka2.find(function(x){
    return x > 5;
});
console.log(angka4);
