// Fungsi sebagai objek - kita bisa menambahkan properti ke dalam fungsi
function sayHi() {
  console.log("Hi!");
}

// Menambahkan properti ke dalam fungsi
sayHi.customProperty = "Ini adalah properti custom";

console.log(sayHi.customProperty); // Output: "Ini adalah properti custom"
