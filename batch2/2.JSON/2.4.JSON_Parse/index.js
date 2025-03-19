/*
### JSON.parse

Untuk mengonversi string JSON kembali menjadi objek JavaScript, kita menggunakan metode `JSON.parse`.
*/
let json = '{"name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3]}';

let user = JSON.parse(json);

console.log(user.friends[1]); // 1
console.log(user); // object js

/*
### Ringkasan

- **JSON** adalah format data yang mendukung objek, array, string, angka, boolean, dan `null`.
- JavaScript menyediakan metode `JSON.stringify` untuk serialisasi ke JSON dan `JSON.parse` untuk membaca dari JSON.
*/
