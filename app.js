//Core Module
//File System
const fs = require('fs');

//menuslis string ke file (synchronous)
// fs.writeFileSync('test.txt', 'Hello world secara synchronous');

// try{
//     fs.writeFileSync('data/test.txt', 'Hello world secara synchronous'); 
// } catch (e) {
//     console.log(e);
// }

//menuslis string ke file (asynchronous)
// fs.writeFile('data/test.txt', 'Hello World secara Asynchronous', (e) => {
//     console.log(e);
// })

//membaca isi file (synchronous)
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

//membaca isi file (asynchronous)
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

//Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('Masukkan no HP anda : ', (noHP) => {
        const contact = {nama , noHP};
        const file = fs.readFileSync('data/contacts.json', 'utf8');
        const contacts = JSON.parse(file);

        // console.log(contacts);
        contacts.push(contact);
        // console.log(contacts);

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
        // console.log(`Terima kasih ${nama}, sudah menginput ${noHP}`);
        console.log(`Terima sudah menginput`);
        rl.close();
    });
});