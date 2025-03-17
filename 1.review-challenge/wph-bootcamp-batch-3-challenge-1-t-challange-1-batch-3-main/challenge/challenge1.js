"use strict";
// Mengaktifkan mode strict di JavaScript agar membantu menangkap error potensial,
// seperti penggunaan variabel yang belum dideklarasikan.

// Do not delete the code below.
function calculateFinance(inputIncome, inputExpense) {
  // Fungsi ini menerima dua parameter, yaitu `inputIncome` (pendapatan)
  // dan `inputExpense` (pengeluaran), lalu menghitung saldo (balance).

  // Please complete the task below.
  // For income and expenses, use the parameters inputIncome and inputExpenses.

  // Initialize variables
  // Menambahkan Income (Pendapatan)
  // Tips: Anda perlu mengonversi `inputIncome` menjadi angka
  let totalIncome = Number(inputIncome);
  // Mengubah input pendapatan menjadi angka menggunakan `Number()`
  // agar bisa digunakan dalam perhitungan aritmatika.

  // Menambahkan Expense (Pengeluaran)
  // Tips: Anda perlu mengonversi `inputExpense` menjadi angka
  let totalExpense = Number(inputExpense);
  // Mengubah input pengeluaran menjadi angka menggunakan `Number()`
  // agar bisa digunakan dalam perhitungan aritmatika.

  // Menghitung balance (saldo) dan menggunakan nullish coalescing (??)
  // jika saldo bernilai null atau undefined, maka akan diset ke 0.
  let balance = totalIncome - totalExpense ?? 0;
  // Namun, pada kode ini, nullish coalescing (?? 0) sebenarnya tidak diperlukan
  // karena operator `??` memiliki prioritas lebih rendah dibandingkan pengurangan (-).
  // Sehingga, `totalIncome - totalExpense` akan dihitung terlebih dahulu,
  // lalu hasilnya tidak mungkin `null` atau `undefined` karena sudah dikonversi ke angka.
  // Perbaikan yang lebih baik adalah:
  // let balance = (totalIncome - totalExpense) ?? 0;

  // Membandingkan Income vs Expense dan menentukan status saldo
  // Tips: Anda perlu menggunakan if-else dan perbandingan
  if (balance > 0) {
    // Jika saldo positif, berarti pendapatan lebih besar dari pengeluaran.
    console.log("Success: Your balance is positive!");
    console.log("Your income is greater than your expenses.");
  } else if (balance < 0) {
    // Jika saldo negatif, berarti pengeluaran lebih besar dari pendapatan.
    console.log("Warning: Your balance is negative!");
    console.log("Warning: Your expenses are greater than your income!");
  } else {
    // Jika saldo nol, berarti pendapatan dan pengeluaran sama.
    console.log("Your balance is zero.");
    console.log("Your income and expenses are balanced.");
  }

  // Menampilkan hasil akhir dari perhitungan
  console.log(`Total Income: ${totalIncome}`);
  console.log(`Total Expense: ${totalExpense}`);
  console.log(`Total Balance: ${balance}`);

  // Mengembalikan hasil dalam bentuk objek
  return {
    totalIncome, // Pendapatan total
    totalExpense, // Pengeluaran total
    balance, // Saldo akhir
  };
}

// Do not delete the code below.
// Mengekspor fungsi `calculateFinance` agar bisa digunakan di file lain atau di dalam unit test.
module.exports = { calculateFinance };
