// Write your code here
const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "John",
  [password]: "12345",
  age: 25
};

console.log(user.username); // undefined
console.log(user.password); //undefined