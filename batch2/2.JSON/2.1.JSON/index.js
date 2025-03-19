let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

room.occupiedBy = meetup;

let json = JSON.stringify(meetup, ["title", "participants", "place", "name", "number"]);
console.log(json);
/*
  {
    "title":"Conference",
    "participants":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }


  ### Mengabaikan dan Mengubah Properti: `replacer`

Kita bisa menggunakan parameter kedua `replacer` pada `JSON.stringify` untuk mengatur properti mana yang akan disertakan dalam string JSON.
  */
