const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";

console.log(person1);
console.log(person2);

//Ambas variables están haciendo scope de person1, por lo que cualquier dato modificado tanto en una como en otra se aplicará a ambas variables.
