let room = {
  number: 23,
  toJSON() {
    return this.number;
  },
};

let meetup = {
  title: "Conference",
  room,
};

console.log(JSON.stringify(room)); // 23
console.log(JSON.stringify(meetup));
/*
### Kustomisasi `toJSON`

Seperti metode `toString` untuk konversi string, objek dapat menyediakan metode `toJSON` untuk konversi ke JSON. `JSON.stringify` akan memanggil metode ini jika tersedia.
  {
    "title":"Conference",
    "room": 23
  }
  */
