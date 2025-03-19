/*
📌 README.md (Penjelasan teori dan contoh dasar)
*/

// 1. Membuat Objek Date (Waktu saat ini)
let sekarang = new Date();
console.log("Waktu saat ini:", sekarang);

// 2. Membuat Date dari timestamp (milidetik sejak 1 Januari 1970 UTC+0)

/*
1. Mengapa 1970?
JavaScript menggunakan Epoch Time, yaitu sistem waktu yang dimulai dari 1 Januari 1970, 00:00:00 UTC sebagai referensi waktu dasar.
Setiap waktu di JavaScript dihitung dalam milidetik sejak 1 Januari 1970 (UTC+0).

new Date(0) → berarti 1 Januari 1970, 00:00:00 UTC
new Date(24 * 3600 * 1000) → berarti 1 hari setelah 1 Januari 1970, yaitu 2 Januari 1970, 00:00:00 UTC
*/
let Jan01_1970 = new Date(0); // 0 milidetik sejak 1 Januari 1970
console.log("1 Januari 1970:", Jan01_1970);

let Jan02_1970 = new Date(24 * 3600 * 1000); // Tambah 24 jam (1 hari)
console.log("2 Januari 1970:", Jan02_1970);

/*
2. Arti Parameter (24 * 3600 * 1000)
Parameter yang diberikan pada new Date() adalah jumlah milidetik sejak 1 Januari 1970.

Mari kita pecah perhitungannya:

1000 → 1 detik = 1000 milidetik
3600 → 1 jam = 60 menit × 60 detik = 3600 detik
24 * 3600 * 1000 → 1 hari = 24 jam × 3600 detik × 1000 milidetik
Hasil dari 24 * 3600 * 1000 adalah 86.400.000 milidetik atau 1 hari setelah 1 Januari 1970.
Sehingga, new Date(24 * 3600 * 1000) menghasilkan 2 Januari 1970, 00:00:00 UTC.



*/

// 3. Membuat Date dari string (format YYYY-MM-DD)
let tanggalDariString = new Date("2017-01-26"); // Parsing string menjadi tanggal
console.log("Dari string:", tanggalDariString);

// 4. Membuat Date dengan format komponen (tahun, bulan, tanggal, jam, menit, detik, ms)
let tanggalKomponen = new Date(2023, 2, 15, 14, 30, 0, 0); // Bulan dimulai dari 0 (Januari = 0)
console.log("Dari komponen:", tanggalKomponen);

// 5. Mengakses Komponen Tanggal
console.log("Tahun:", tanggalKomponen.getFullYear()); // Mendapatkan tahun
console.log("Bulan:", tanggalKomponen.getMonth()); // Mendapatkan bulan (0-11)
console.log("Tanggal:", tanggalKomponen.getDate()); // Mendapatkan tanggal dalam bulan
console.log("Jam:", tanggalKomponen.getHours()); // Mendapatkan jam
console.log("Menit:", tanggalKomponen.getMinutes()); // Mendapatkan menit
console.log("Detik:", tanggalKomponen.getSeconds()); // Mendapatkan detik
console.log("Milidetik:", tanggalKomponen.getMilliseconds()); // Mendapatkan milidetik

// 6. Mengatur Komponen Tanggal
let today = new Date();
today.setHours(0, 0, 0, 0); // Mengatur jam, menit, detik, milidetik ke 00:00:00
console.log("Set waktu ke 00:00:00:", today);

// 7. Koreksi Otomatis
let autoCorrectDate = new Date(2023, 0, 32); // 32 Januari? JS akan otomatis mengubah ke 1 Februari
console.log("32 Januari 2023? Menjadi:", autoCorrectDate);

// 8. Perhitungan Selisih Waktu
let mulai = Date.now(); // Timestamp sebelum proses dimulai
for (let i = 0; i < 100000; i++) {
  let dummy = i * i * i; // Proses looping untuk mengukur waktu eksekusi
}
let selesai = Date.now(); // Timestamp setelah proses selesai
console.log(`Looping memakan waktu ${selesai - mulai} ms`); // Hitung selisih waktu

// 9. Date.now() untuk mendapatkan timestamp saat ini
totalMs = Date.now();
console.log("Timestamp sekarang:", totalMs);

// 10. Parsing Date dari String dengan Date.parse()
let parsedMs = Date.parse("2022-12-01T14:30:00Z"); // Parsing string ISO 8601 menjadi timestamp
console.log("Timestamp dari string:", parsedMs);
console.log("Date dari timestamp:", new Date(parsedMs)); // Konversi timestamp ke objek Date
