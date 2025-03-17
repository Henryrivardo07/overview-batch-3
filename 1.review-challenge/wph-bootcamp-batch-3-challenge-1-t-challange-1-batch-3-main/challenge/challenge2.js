"use strict";
// Mengaktifkan mode strict agar membantu menangkap error potensial,
// seperti penggunaan variabel yang belum dideklarasikan.

// Function to check even number
const isEven = (num) => num % 2 === 0;
// Fungsi ini menerima sebuah angka `num`
// lalu mengembalikan `true` jika angka tersebut genap (habis dibagi 2),
// dan `false` jika tidak.

// Function to check odd number
const isOdd = (num) => num % 2 !== 0;
// Fungsi ini menerima sebuah angka `num`
// lalu mengembalikan `true` jika angka tersebut ganjil (tidak habis dibagi 2),
// dan `false` jika tidak.

// Function to check even and odd numbers
const checkEvenOdd = (userInput = "") => {
  // Fungsi ini menerima input string `userInput` yang berisi angka-angka
  // yang dipisahkan oleh koma (contoh: "1, 2, 3, 4").
  // Lalu, fungsi akan mengelompokkan angka tersebut menjadi bilangan genap dan ganjil.

  // Change the input to array
  let numbers = userInput
    .split(",") // Memisahkan string berdasarkan koma (",") sehingga menjadi array string.
    .map((num) => Number(num.trim())) // Menghapus spasi dan mengonversi ke tipe data angka.
    .filter((num) => !isNaN(num)); // Memfilter agar hanya angka yang valid (bukan NaN) yang masuk.

  // Initialize variables to store even and odd numbers arrays
  let evenNumbers = []; // Array untuk menyimpan angka genap
  let oddNumbers = []; // Array untuk menyimpan angka ganjil

  // Use iteration to check even and odd numbers
  for (let num of numbers) {
    // Melakukan iterasi pada setiap angka dalam array `numbers`
    if (isEven(num)) {
      // Jika angka adalah genap, masukkan ke dalam array `evenNumbers`
      evenNumbers.push(num);
    } else {
      // Jika angka adalah ganjil, masukkan ke dalam array `oddNumbers`
      oddNumbers.push(num);
    }
  }

  // Do not delete the code below.
  // Displaying final results
  console.log(`Angka genap: ${evenNumbers.join(", ")}`);
  // Menampilkan daftar angka genap yang ditemukan, dipisahkan dengan koma.

  console.log(`Angka ganjil: ${oddNumbers.join(", ")}`);
  // Menampilkan daftar angka ganjil yang ditemukan, dipisahkan dengan koma.

  return {
    even: evenNumbers, // Mengembalikan array angka genap dalam objek hasil
    odd: oddNumbers, // Mengembalikan array angka ganjil dalam objek hasil
  };
};

// Mengekspor fungsi agar bisa digunakan di file lain atau dalam unit test.
module.exports = { checkEvenOdd, isEven, isOdd };
