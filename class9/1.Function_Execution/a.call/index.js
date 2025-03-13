//1.Function Declaration menggunakan call
function greet(greeting, x) {
  console.log(`${greeting}, ${this.name}`, x);
}
const user = { name: "Henry" };
greet.call(user, "Hello", "Apa Kabar"); // Output: Hello, Henry
