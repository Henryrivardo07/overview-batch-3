function sayHi() {
  console.log("Hi");

  // melacak berapa kali fungsi ini dipanggil
  sayHi.counter++;
}

sayHi.counter = 0; // nilai awal

sayHi(); // Hi
sayHi(); // Hi

console.log(`Called ${sayHi.counter} times`); // Called 2 times
