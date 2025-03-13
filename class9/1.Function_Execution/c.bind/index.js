const person = {
  name: "Henry",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

const greetBob = person.greet.bind({ name: "Bob" });
greetBob(); // Output: Hello, Bob

// const person = {
//   name: "Henry",
//   greet: function () {
//     console.log(`Hello, ${this.name}`);
//   },
// };

// const greetBob = person.greet.bind({ name: "Bob" });
// greetBob();

function greet() {
  console.log(`Hello, ${this.name}`);
}

const user = { name: "Alice" };
const user2 = { name: "Henry" };

const greetAlice = greet.bind(user);
const greetHenry = greet.bind(user2);
greetAlice();
greetHenry();

// function multiply(a, b) {
//   return a * b;
// }

// const double = multiply.bind(null, 2);
// console.log(double(5));
// console.log(double(10));
