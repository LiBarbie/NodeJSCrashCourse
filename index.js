console.log("Hello World from NodeJS");
console.log("Trying something new");

const Person = require("./person.js");

const person1 = new Person("John Doe",30);
console.log(person1.greeting());

console.log(__dirname, __filename);