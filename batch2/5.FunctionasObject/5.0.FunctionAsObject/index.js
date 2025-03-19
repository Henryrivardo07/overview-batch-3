// Fungsi sebagai objek - kita bisa menambahkan properti ke dalam fungsi

/*
Dalam JavaScript, fungsi adalah nilai, dan setiap nilai dalam JavaScript memiliki tipe. Tipe dari fungsi (function) adalah object. Tentunya karena function adalah objek, kita dapat menambahkan/menghapus properti, dan sebagainya.

### Properti `name`

Setiap fungsi memiliki properti `name` yang menyimpan nama dari fungsi tersebut
*/
function sayHi() {
  console.log("Hi!");
}

// Menambahkan properti ke dalam fungsi
sayHi.customProperty = "Ini adalah properti custom";

console.log(sayHi.customProperty); // Output: "Ini adalah properti custom"
