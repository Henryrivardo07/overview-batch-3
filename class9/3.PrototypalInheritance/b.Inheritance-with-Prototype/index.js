// Membuat konstruktor `Mammal`
function Mammal(name) {
  this.name = name; // Menyimpan nama hewan dalam properti `name`
}

// Menambahkan metode `speak` ke `Mammal.prototype`
// Semua instance dari Mammal (atau turunannya) bisa menggunakan method ini
Mammal.prototype.speak = function () {
  console.log(`${this.name} is speaking.`);
};

// Membuat konstruktor `Dog` yang mewarisi dari `Mammal`
function Dog(name, breed) {
  // Memanggil konstruktor `Mammal` agar Dog memiliki properti `name`
  Mammal.call(this, name);
  // Menyimpan breed sebagai properti private (konvensi dengan _)
  this._breed = breed;
}

// Mengatur prototype `Dog` agar mewarisi dari `Mammal.prototype`
// Object.create(Mammal.prototype) membuat objek baru yang memiliki prototype dari `Mammal`
Dog.prototype = Object.create(Mammal.prototype);

// Memperbaiki constructor `Dog`
// Karena kita mengubah prototype, constructor aslinya hilang, jadi kita set ulang ke `Dog`
Dog.prototype.constructor = Dog;

// Menambahkan metode `bark` ke `Dog.prototype`
// Semua instance `Dog` bisa memanggil method ini
Dog.prototype.bark = function () {
  console.log(`${this.name} is barking.`);
};

// Menjadikan `breed` sebagai metode yang langsung mencetak ke console
Dog.prototype.breed = function () {
  console.log(this._breed);
};

// Membuat instance `Dog`
const myDog = new Dog("Beki", "Golden Retriever");

// Memanggil method dari `Mammal.prototype`
myDog.speak(); // "Beki is speaking."

// Memanggil method dari `Dog.prototype`
myDog.bark(); // "Beki is barking."
myDog.breed(); // "Golden Retriever"
