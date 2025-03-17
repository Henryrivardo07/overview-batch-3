// 1. Fungsi rekursif untuk menghitung faktorial
function factorial(n) {
  // Basis case: jika n === 1, kembalikan 1 (menghentikan rekursi)
  if (n === 1) return 1;

  // Memanggil fungsi factorial secara rekursif dengan n - 1
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 = 120

// 2. Fungsi rekursif untuk menghitung pangkat (power function)
function power(base, exponent) {
  // Basis case: jika exponent === 0, kembalikan 1 (menghentikan rekursi)
  if (exponent === 0) return 1;

  // Memanggil fungsi power secara rekursif dengan exponent - 1
  return base * power(base, exponent - 1);
}

console.log(power(2, 3)); // 2 * 2 * 2 = 8

// 3. Struktur data perusahaan dengan daftar karyawan (bersarang)
let company = {
  name: "Tech Corp",
  employees: [
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" },
    {
      name: "Charlie",
      role: "Manager",
      subordinates: [{ name: "David", role: "Intern" }],
    },
  ],
};

// Fungsi rekursif untuk mencetak daftar karyawan dalam struktur bersarang
function listEmployees(org) {
  // Jika `org` adalah array, lakukan iterasi untuk setiap elemen
  if (Array.isArray(org)) {
    org.forEach((person) => {
      console.log(`${person.name} - ${person.role}`);

      // Jika orang ini memiliki bawahan (`subordinates`), panggil rekursi
      if (person.subordinates) {
        listEmployees(person.subordinates);
      }
    });
  }
}

// Memanggil fungsi dengan daftar karyawan dari `company`
listEmployees(company.employees);

/*
Output:
Alice - Developer
Bob - Designer
Charlie - Manager
David - Intern
*/
