// Membuat objek person dengan properti name dan method greet
const person = {
  name: "Henry",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

// Menggunakan bind() untuk membuat fungsi baru dengan this mengacu ke objek baru { name: "Bob" }
const greetBob = person.greet.bind({ name: "Bob" });

// Memanggil greetBob, sekarang this.name akan mengambil dari objek { name: "Bob" }
greetBob(); // Output: Hello, Bob

function greet() {
  console.log(`Hello, ${this.name}`);
}

const user = { name: "Alice" };
const user2 = { name: "Henry" };

// Menggunakan bind untuk mengikat this ke objek user
const greetAlice = greet.bind(user);
const greetHenry = greet.bind(user2);

// Memanggil fungsi yang sudah terikat dengan this masing-masing
greetAlice(); // Output: Hello, Alice
greetHenry(); // Output: Hello, Henry

function multiply(a, b) {
  return a * b;
}

// Menggunakan bind untuk membuat fungsi baru yang sudah memiliki nilai a = 2
const double = multiply.bind(null, 2);

// Memanggil double dengan parameter kedua (b)
console.log(double(5)); // Output: 10 (karena 2 * 5)
console.log(double(10)); // Output: 20 (karena 2 * 10)

// Penjelasan Konsep bind()
// bind() mengembalikan fungsi baru dengan this yang sudah terikat ke objek tertentu.
// Berbeda dengan call() dan apply(), bind() tidak langsung memanggil fungsi, tetapi hanya mengikatnya untuk dipanggil nanti.
// bind() juga bisa digunakan untuk preset argument seperti dalam contoh multiply.bind(null, 2), yang membuat fungsi baru dengan nilai a selalu 2.
// Semoga jelas! 🚀
