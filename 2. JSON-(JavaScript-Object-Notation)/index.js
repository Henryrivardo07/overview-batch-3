let user = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "gaming"],
  isStudent: false,
};

let jsonString = JSON.stringify(user);
console.log(jsonString);
let parsedObject = JSON.parse(jsonString);
console.log(parsedObject);
let filteredJson = JSON.stringify(user, ["name", "age"], 2);
console.log(filteredJson);
