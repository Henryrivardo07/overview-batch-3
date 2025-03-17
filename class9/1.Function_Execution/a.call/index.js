// 1. Function Declaration: Membuat fungsi greet
function greet(greeting, x) {
  // 2. Mencetak pesan dengan memanfaatkan "this.name"
  console.log(`${greeting}, ${this.name}`, x);
}

// 3. Membuat objek user yang memiliki properti "name"
const user = { name: "Henry" };

// 4. Memanggil fungsi greet dengan "call()"
// - Argumen pertama: `user` (untuk menentukan `this` di dalam fungsi greet)
// - Argumen kedua: "Hello" (untuk parameter `greeting`)
// - Argumen ketiga: "Apa Kabar" (untuk parameter `x`)
greet.call(user, "Hello", "Apa Kabar");
//function.call(thisArg, arg1, arg2, ...)
// Output yang akan dicetak ke console:
// "Hello, Henry Apa Kabar"
