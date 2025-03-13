// Membuat konstruktor `Mammal`
function Mammal(name) {
  this.name = name;
}

// Menambahkan metode `speak` ke `Mammal.prototype`
Mammal.prototype.speak = function () {
  console.log(`${this.name} is speaking.`);
};

// Membuat konstruktor `Dog` yang mewarisi dari `Mammal`
function Dog(name, breed) {
  Mammal.call(this, name); // Memanggil konstruktor `Mammal`
  this._breed = breed; // Menyimpan breed sebagai properti private
}

// Mengatur prototype `Dog` agar mewarisi dari `Mammal.prototype`
Dog.prototype = Object.create(Mammal.prototype);

// Memperbaiki constructor `Dog`
Dog.prototype.constructor = Dog;

// Menambahkan metode `bark` ke `Dog.prototype`
Dog.prototype.bark = function () {
  console.log(`${this.name} is barking.`);
};

// Menjadikan `breed` sebagai metode yang langsung mencetak ke console
Dog.prototype.breed = function () {
  console.log(this._breed);
};

// Membuat instance `Dog`
const myDog = new Dog("Beki", "Golden Retriever");

myDog.speak(); // "Beki is speaking."
myDog.bark(); // "Beki is barking."
myDog.breed(); // Sekarang langsung mencetak "Golden Retriever" ke console.
