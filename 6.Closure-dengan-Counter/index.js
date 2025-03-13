function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log("Count:", count);
    },
    decrement() {
      count--;
      console.log("Count:", count);
    },
  };
}

let counter = createCounter();
counter.increment(); // Count: 1
counter.increment(); // Count: 2
counter.decrement(); // Count: 1

// -----------------------

function secretMessage() {
  let secret = "Ini rahasia!";

  return {
    reveal() {
      console.log(secret);
    },
    update(newSecret) {
      secret = newSecret;
    },
  };
}

let mySecret = secretMessage();
mySecret.reveal(); // "Ini rahasia!"
mySecret.update("Rahasia baru!");
mySecret.reveal(); // "Rahasia baru!"
