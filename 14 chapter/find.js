let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// let user = users.find(item => item.id == 1);
let user = users.find((item, index, array) => {
    return index == 2;
});

alert(user.name); // John