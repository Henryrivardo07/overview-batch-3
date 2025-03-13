// "use strict";
// const numbers = [10, 5, 20, 8];

// thisArg, [arg, arg2, arg3];

// const maxNumber = Math.max.apply("Henry", numbers);
// const minNumber = Math.min.apply(null, numbers);

// console.log(maxNumber);
// console.log(minNumber);

// const person = {
//   name: "John",
//   greet: function (city) {
//     console.log(`Hello, my name is ${this.name} from ${city}`);
//   },
// };

// const anotherPerson = { name: "Alice" };

// person.greet.apply(anotherPerson, ["Ney Work"]);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Employee(name, age, job) {
  Person.apply(this, [name, age]);
  this.job = job;
}

const emp = new Employee("Alice", 25, "Software Engineer");
console.log(emp);

const emp2 = new Employee("Henry", 22, "Software Engineer");
console.log(emp2);

// function example() {
//   const args = Array.prototype.slice.apply(arguments);
//   console.log(args);
// }

// example(1, 2, 3, 4, 5);
