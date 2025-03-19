let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true,
  },
};

console.log(JSON.stringify(user, null, 2));
/* Indentasi 2 spasi:
### Formatting JSON: `space`

Parameter ketiga `space` pada `JSON.stringify` digunakan untuk menambahkan indentasi dan spasi, sehingga string JSON lebih mudah dibaca.
  {
    "name": "John",
    "age": 25,
    "roles": {
      "isAdmin": false,
      "isEditor": true
    }
  }
  */
