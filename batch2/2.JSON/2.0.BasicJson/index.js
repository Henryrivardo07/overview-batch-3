// 1. Mengonversi objek JavaScript menjadi JSON
let student = {
  name: "John", // String
  age: 30, // Number
  isAdmin: false, // Boolean
  courses: ["html", "css", "js"], // Array
  spouse: null, // Null
};

let json = JSON.stringify(student); // Mengubah objek ke format JSON

console.log(typeof json); // "string" → JSON adalah string
console.log(json);
/* Hasil JSON:
    {
      "name": "John",
      "age": 30,
      "isAdmin": false,
      "courses": ["html", "css", "js"],
      "spouse": null
    }
  */

// --------------------------------------------

// 2. Properti yang diabaikan oleh JSON.stringify()
let user = {
  sayHi() {
    // Fungsi akan diabaikan
    console.log("Hello");
  },
  [Symbol("id")]: 123, // Symbol juga diabaikan
  something: undefined, // undefined diabaikan
};

console.log(JSON.stringify(user)); // "{}" → Semua properti diabaikan, hasilnya objek kosong

// --------------------------------------------

// 3. Circular Reference: Objek yang saling mereferensikan akan menyebabkan error
let room = {
  number: 23, // Properti biasa
};

let meetup = {
  title: "Conference",
  participants: ["john", "ann"],
  place: room, // `meetup` menyimpan referensi ke `room`
};

room.occupiedBy = meetup; // `room` juga mereferensikan `meetup` (Circular Reference)

JSON.stringify(meetup); // ❌ Error: Converting circular structure to JSON
