// Lexical Environment: Fungsi dalam fungsi bisa mengakses variabel luar
function outerFunction() {
  let outerVariable = "Saya dari Outer Function";

  function innerFunction() {
    console.log(outerVariable); // Bisa mengakses outerVariable dari outerFunction
  }

  return innerFunction;
}

const myFunc = outerFunction(); // outerFunction dieksekusi dan mengembalikan innerFunction
myFunc(); // Output: "Saya dari Outer Function"
// Karena innerFunction masih memiliki akses ke Lexical Environment dari outerFunction (Closure)
