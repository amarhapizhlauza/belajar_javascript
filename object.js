var mhs = {
    nama : "Amar Hapizh Lauza",
    umur : 27,
    ips : [3.00, 2.50, 3.20],
    alamat : {
        jalan : "Jl. Kalisuren",
        kota : "Bogor",
        provinsi : "Jawa Barat"
    }
};

//Function Declaration
function buatObjectMahasiswa(nama, umur, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.umur = umur;
    mhs.jurusan = jurusan;
    return mhs;
};

var mhs2 = buatObjectMahasiswa('Nisa', '26', 'Informatika');

//Constructor
function Mahasiswa(nama, umur, jurusan){
    this.nama = nama;
    this.umur = umur;
    this.jurusan = jurusan;
};

var mhs3 = new Mahasiswa('Lulu', '24', 'Informatika');



