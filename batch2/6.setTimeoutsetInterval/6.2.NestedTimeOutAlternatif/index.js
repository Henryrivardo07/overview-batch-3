function repeatMessage() {
  console.log("Pesan ini muncul setiap 2 detik!");

  setTimeout(repeatMessage, 2000); // Jadwalkan pemanggilan berikutnya
}

setTimeout(repeatMessage, 2000); // Memulai eksekusi pertama kali

// ZERO DELAY

setTimeout(() => console.log("Dijalankan terakhir"), 0);

console.log("Dijalankan pertama");
console.log("Dijalankan kedua");
// Output:
// "Dijalankan pertama"
// "Dijalankan kedua"
// "Dijalankan terakhir" (karena event loop menjalankannya setelah semua synchronous task selesai)
