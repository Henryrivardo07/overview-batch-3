const obj = {
  name: "Henry",
  regularFunction: function () {
    console.log(this.name);
  },
  arrowFunction: () => {
    console.log(this.name);
  },
};

obj.regularFunction(); // Output: Henry
obj.arrowFunction(); // Output: undefined
