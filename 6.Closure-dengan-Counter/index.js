// 1. Fungsi createCounter menggunakan closure untuk menjaga variabel `count`
function createCounter() {
  let count = 0; // Variabel `count` bersifat private dalam closure

  return {
    // Method untuk menambah nilai count
    increment() {
      count++;
      console.log("Count:", count);
    },
    // Method untuk mengurangi nilai count
    decrement() {
      count--;
      console.log("Count:", count);
    },
  };
}

// Membuat instance dari counter
let counter = createCounter();
counter.increment(); // Count: 1
counter.increment(); // Count: 2
counter.decrement(); // Count: 1

// -----------------------

// 2. Fungsi secretMessage menggunakan closure untuk menyimpan `secret`
function secretMessage() {
  let secret = "Ini rahasia!"; // Variabel `secret` bersifat private dalam closure

  return {
    // Method untuk menampilkan nilai `secret`
    reveal() {
      console.log(secret);
    },
    // Method untuk mengupdate nilai `secret`
    update(newSecret) {
      secret = newSecret;
    },
  };
}

// Membuat instance dari secretMessage
let mySecret = secretMessage();
mySecret.reveal(); // "Ini rahasia!"
mySecret.update("Rahasia baru!");
mySecret.reveal(); // "Rahasia baru!"
