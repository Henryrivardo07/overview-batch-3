function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 = 120

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(power(2, 3)); // 2 * 2 * 2 = 8

let company = {
  name: "Tech Corp",
  employees: [
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" },
    { name: "Charlie", role: "Manager", subordinates: [{ name: "David", role: "Intern" }] },
  ],
};

function listEmployees(org) {
  if (Array.isArray(org)) {
    org.forEach((person) => {
      console.log(`${person.name} - ${person.role}`);
      if (person.subordinates) {
        listEmployees(person.subordinates);
      }
    });
  }
}

listEmployees(company.employees);
