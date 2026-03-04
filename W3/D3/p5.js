// basics of objects
const person={
    name:"Naveen",
    age:22,
    isStudent:true
};
console.log("person",person);
console.log("name",person.name);
console.log("age",person["age"]);

// add a new property
person.city="mysore";
console.log("person",person);
//modify
person.age=31;
//delete
delete person.isStudent;
console.log("person",person);


// object constructor
const car = new Object();
car.make="BMW";
car.model="M3";
car.year="2023"
console.log("car",car);

