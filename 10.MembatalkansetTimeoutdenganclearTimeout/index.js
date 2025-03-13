let timerId = setTimeout(() => console.log("Ini tidak akan muncul"), 3000);

// Membatalkan eksekusi sebelum terjadi
clearTimeout(timerId);
console.log("Timer dibatalkan sebelum sempat dieksekusi!");

// ----------------------
let count = 0;

let intervalId = setInterval(() => {
  count++;
  console.log(`Tick ke-${count}`);

  if (count === 5) {
    clearInterval(intervalId); // Hentikan interval setelah 5 kali eksekusi
    console.log("Interval dihentikan!");
  }
}, 1000);
