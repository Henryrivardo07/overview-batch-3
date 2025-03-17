"use strict";
const numbers = [10, 5, 20, 8];

// Menggunakan apply untuk mencari nilai maksimum dari array numbers
// Argumen pertama ("Henry") tidak berpengaruh karena Math.max tidak memakai this
const maxNumber = Math.max.apply("Henry", numbers);

// Menggunakan apply untuk mencari nilai minimum dari array numbers
// Argumen pertama (null) juga tidak berpengaruh karena Math.min tidak memakai this
const minNumber = Math.min.apply(null, numbers);

console.log(maxNumber); // Output: 20
console.log(minNumber); // Output: 5

const person = {
  name: "John",
  greet: function (city) {
    // Menggunakan this.name dari objek yang memanggilnya
    console.log(`Hello, my name is ${this.name} from ${city}`);
  },
};

const anotherPerson = { name: "Alice" };

// Memanggil function greet dengan "this" dari anotherPerson
// Menggunakan apply agar this dalam greet mengacu ke anotherPerson
person.greet.apply(anotherPerson, ["New York"]);

// Output: Hello, my name is Alice from New York

function Person(name, age) {
  // Constructor untuk menyimpan nama dan usia
  this.name = name;
  this.age = age;
}

function Employee(name, age, job) {
  // Memanggil constructor Person dan menerapkan ke Employee
  // Supaya Employee bisa punya property dari Person tanpa harus menduplikasi kode
  Person.apply(this, [name, age]);
  this.job = job; // Menambahkan property job khusus untuk Employee
}

const emp = new Employee("Alice", 25, "Software Engineer");
console.log(emp);
// Output: Employee { name: 'Alice', age: 25, job: 'Software Engineer' }

const emp2 = new Employee("Henry", 22, "Software Engineer");
console.log(emp2);
// Output: Employee { name: 'Henry', age: 22, job: 'Software Engineer' }

function example() {
  // Menggunakan apply untuk mengubah arguments (array-like) menjadi array
  const args = Array.prototype.slice.apply(arguments);
  console.log(args);
}

example(1, 2, 3, 4, 5);
// Output: [1, 2, 3, 4, 5]
