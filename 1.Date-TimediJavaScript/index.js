let now = new Date();
console.log(now);

let specificDate = new Date(2025, 2, 13, 10, 30, 0);
console.log(specificDate);
let fromString = new Date("2023-12-31");
console.log(fromString);
let fromTimestamp = new Date(1000000);
console.log(fromTimestamp);
console.log(now.getFullYear()); // Tahun saat ini
console.log(now.getMonth()); // Bulan (0 = Jan, 11 = Des)
console.log(now.getDate()); // Tanggal dalam bulan
console.log(now.getDay()); // Hari dalam minggu (0 = Minggu)
console.log(now.getHours()); // Jam saat ini
console.log(now.getMinutes()); // Menit saat ini
console.log(now.getSeconds()); // Detik saat ini
now.setFullYear(2030);
console.log(now);
now.setDate(now.getDate() + 5);
console.log(now);
console.log(Date.now());
