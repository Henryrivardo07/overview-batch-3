function countCalls() {
  console.log("Fungsi dipanggil!");

  // Menambahkan atau meningkatkan nilai counter setiap kali fungsi dipanggil
  countCalls.counter++;
}

countCalls.counter = 0; // Menetapkan properti awal

countCalls(); // Output: "Fungsi dipanggil!"
countCalls(); // Output: "Fungsi dipanggil!"

console.log(`Fungsi ini telah dipanggil ${countCalls.counter} kali`);
// Output: "Fungsi ini telah dipanggil 2 kali"
