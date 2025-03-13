// Membuat objek `animal` dengan metode `speak`
const animal = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  },
};

// Membuat objek `dog` yang mewarisi dari `animal`
const dog = Object.create(animal);
dog.name = "Beki"; // Menambahkan properti `name` ke `dog`
dog.speak(); // Output: "Beki makes a noise."
// `dog` memanggil metode `speak`, yang diambil dari prototype `animal`

// Memeriksa apakah `dog.__proto__` sama dengan `animal`
console.log(dog.__proto__ === animal); // Output: true
// Ini berarti `dog` mewarisi properti dan metode dari `animal`

// Membuat objek `cat` yang juga mewarisi dari `animal`
const cat = Object.create(animal);
cat.name = "Tom"; // Menambahkan properti `name` ke `cat`
cat.speak(); // Output: "Tom makes a noise."
// Sama seperti `dog`, `cat` juga memanggil metode `speak` dari prototype `animal`

// Menimpa metode `speak` hanya untuk objek `dog`
dog.speak = function () {
  console.log(`${this.name} barks.`);
};
dog.speak(); // Output: "Beki barks."
// Metode `speak` pada `dog` sekarang telah diubah, sehingga memanggil versi barunya sendiri

// Menambahkan properti baru `legs` ke `animal`
animal.legs = 4;

// Menambahkan properti `legs` ke `dog`
dog.legs = 4;
console.log(dog.legs); // Output: 4
// `dog` memiliki properti `legs` sendiri, sehingga tidak mengambil dari `animal`

// Menambahkan metode baru `run` ke `animal`
animal.run = function () {
  console.log(`${this.name} is running.`);
};

// Memanggil metode `run` dari `dog`
dog.run(); // Output: "Beki is running."
// `dog` tidak memiliki metode `run` sendiri, tetapi mewarisinya dari `animal`
