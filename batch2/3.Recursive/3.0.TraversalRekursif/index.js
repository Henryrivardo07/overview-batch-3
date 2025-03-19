// Objek `company` berisi data gaji karyawan yang dikelompokkan berdasarkan departemen
let company = {
  sales: [
    // Departemen "sales" berisi array karyawan
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    // Departemen "development" memiliki sub-departemen
    sites: [
      // Sub-departemen "sites" berisi array karyawan
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [
      // Sub-departemen "internals" juga berisi array karyawan
      { name: "Jack", salary: 1300 },
    ],
  },
};

// Fungsi untuk menghitung total gaji dalam suatu departemen
function sumSalaries(department) {
  // Jika `department` adalah array, maka itu adalah daftar karyawan
  if (Array.isArray(department)) {
    // Gunakan `.reduce()` untuk menjumlahkan semua gaji karyawan
    return department.reduce((sum, employee) => sum + employee.salary, 0);
  } else {
    // Jika `department` adalah objek (berisi sub-departemen), lakukan rekursi
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // Panggil fungsi secara rekursif
    }
    return sum;
  }
}

// Memanggil fungsi `sumSalaries()` dengan seluruh struktur `company`
console.log(sumSalaries(company)); // Output: 7700

/*

Penjelasan utama:

Fungsi sumSalaries berjalan secara rekursif untuk menelusuri semua level departemen dalam company.
Jika department berupa array (berisi daftar karyawan), fungsi langsung menjumlahkan gaji mereka.
Jika department adalah objek (memiliki sub-departemen), fungsi akan memanggil dirinya sendiri (recursion) untuk menghitung total dari semua sub-departemen.
Hasil akhirnya adalah total seluruh gaji dalam company, yaitu 7700





### Struktur Rekursif

Struktur data rekursif adalah struktur yang mereplikasi dirinya sendiri dalam bagian-bagiannya. Dalam contoh perusahaan di atas, departemen dapat berupa array karyawan atau objek yang berisi subdepartemen. Ini adalah contoh dari definisi rekursif.

### Kesimpulan

Recursion adalah alat yang sangat berguna dalam pemrograman, terutama ketika berhadapan dengan struktur data yang kompleks atau masalah yang dapat dipecah menjadi bagian-bagian yang lebih kecil. Meskipun recursion memiliki keterbatasan, seperti kedalaman recursion yang terbatas, dalam banyak kasus, recursion menghasilkan kode yang lebih bersih dan mudah dipelihara dibandingkan dengan solusi iteratif.
*/
